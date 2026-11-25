import { NextResponse, type NextRequest } from "next/server";
import { kontakt } from "@/content/kontakt";
import { sendConfirmationEmail, sendOfficeEmail } from "@/lib/inquiry-mail";
import {
  HONEYPOT_FIELD,
  inquiryRequestSchema,
  type InquiryResponse,
  type InquiryValues,
} from "@/lib/inquiry-schema";
import { site } from "@/lib/site";
import { TURNSTILE_TEST_SECRET_KEY, TURNSTILE_VERIFY_URL } from "@/lib/turnstile";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const m = kontakt.form.messages;
const isDev = process.env.NODE_ENV === "development";

/** Formulár odoslaný skôr ako 3 s po načítaní = robot. */
const MIN_ELAPSED_MS = 3000;

/* ---------- jednoduchý rate limit v pamäti (na jednu inštanciu servera) ---------- */
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_LIMIT) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  // upratanie starých záznamov, aby mapa nerástla donekonečna
  if (hits.size > 5000) {
    for (const [key, times] of hits) if (times.every((t) => now - t >= RATE_WINDOW_MS)) hits.delete(key);
  }
  return false;
}

function clientIp(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || request.headers.get("x-real-ip") || "unknown";
}

function requestHost(request: NextRequest) {
  return (request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? "").split(":")[0].toLowerCase();
}

const json = (body: InquiryResponse, status = 200) => NextResponse.json(body, { status });

/** Názvy chýbajúcich env premenných (hodnoty sa nikdy nevypisujú). */
function missingEnv() {
  const required = ["RESEND_API_KEY", "CONTACT_TO_EMAIL", "CONTACT_FROM_EMAIL"];
  if (!isDev) required.push("TURNSTILE_SECRET_KEY");
  return required.filter((key) => !process.env[key]);
}

/* ---------- Cloudflare Turnstile ---------- */
async function verifyTurnstile(token: string, ip: string, host: string) {
  const secret = isDev ? TURNSTILE_TEST_SECRET_KEY : process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.error("[kontakt] Chýba TURNSTILE_SECRET_KEY.");
    return false;
  }
  const body = new URLSearchParams({ secret, response: token });
  if (ip !== "unknown") body.set("remoteip", ip);

  try {
    const res = await fetch(TURNSTILE_VERIFY_URL, { method: "POST", body, cache: "no-store" });
    const data = (await res.json()) as { success?: boolean; hostname?: string; "error-codes"?: string[] };
    if (!data.success) {
      console.warn("[kontakt] Turnstile zlyhal:", data["error-codes"]);
      return false;
    }
    // testovacie kľúče vracajú hostname „example.com“, preto sa hostname kontroluje iba v produkcii
    if (!isDev) {
      const allowed = new Set([host, new URL(site.url).hostname.toLowerCase()].filter(Boolean));
      if (!data.hostname || !allowed.has(data.hostname.toLowerCase())) {
        console.warn("[kontakt] Turnstile: nesprávny hostname", data.hostname);
        return false;
      }
    }
    return true;
  } catch (error) {
    console.error("[kontakt] Turnstile: chyba spojenia", error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  const ip = clientIp(request);

  if (rateLimited(ip)) {
    return json({ ok: false, code: "rate_limit", message: m.rateLimited }, 429);
  }

  let raw: Record<string, unknown>;
  try {
    raw = (await request.json()) as Record<string, unknown>;
    if (!raw || typeof raw !== "object") throw new Error("invalid");
  } catch {
    return json({ ok: false, code: "validation", message: m.error }, 400);
  }

  // honeypot alebo príliš rýchle odoslanie: tváriť sa ako úspech, ale nič neodoslať
  const honeypot = raw[HONEYPOT_FIELD];
  const elapsed = typeof raw.elapsedMs === "number" ? raw.elapsedMs : 0;
  if ((typeof honeypot === "string" && honeypot.trim() !== "") || elapsed < MIN_ELAPSED_MS) {
    console.info("[kontakt] Zachytený robot (honeypot alebo čas), nič sa neodoslalo.");
    return json({ ok: true });
  }

  const parsed = inquiryRequestSchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: Partial<Record<keyof InquiryValues, string>> = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0] as keyof InquiryValues;
      if (field && !fieldErrors[field]) fieldErrors[field] = issue.message;
    }
    return json({ ok: false, code: "validation", message: m.error, fieldErrors }, 400);
  }

  const { turnstileToken, page, elapsedMs: _elapsed, [HONEYPOT_FIELD]: _hp, ...values } = parsed.data;
  void _elapsed;
  void _hp;

  // env sa čítajú až tu (pri požiadavke), nikdy pri builde; chýbajúci kľúč = 500, nie pád
  const missing = missingEnv();
  if (missing.length) {
    console.error("[kontakt] Chýbajú premenné prostredia:", missing.join(", "));
    return json({ ok: false, code: "server", message: m.error }, 500);
  }

  const host = requestHost(request);
  if (!turnstileToken || !(await verifyTurnstile(turnstileToken, ip, host))) {
    return json({ ok: false, code: "turnstile", message: m.turnstileFailed }, 403);
  }

  const origin = new URL(request.url).origin;
  const safePage = page && page.startsWith("/") ? page : "/kontakt";
  const inquiry = { ...values, email: values.email || "", page: safePage };

  try {
    await sendOfficeEmail(inquiry, `${origin}${safePage}`);
  } catch (error) {
    console.error("[kontakt] E-mail pre kanceláriu sa nepodarilo odoslať:", error);
    return json({ ok: false, code: "server", message: m.error }, 500);
  }

  try {
    await sendConfirmationEmail(inquiry);
  } catch (error) {
    // potvrdenie je doplnok: jeho chyba nesmie zrušiť úspešne prijatý dopyt
    console.error("[kontakt] Potvrdenie klientovi sa nepodarilo odoslať:", error);
  }

  return json({ ok: true });
}
