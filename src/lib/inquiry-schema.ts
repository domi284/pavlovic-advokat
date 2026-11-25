import { z } from "zod";
import { servicesOrder } from "@/content/02-mapa-webu";
import { kontakt } from "@/content/kontakt";

/**
 * Jedna zod schéma pre formulár #konzultacia: používa ju klient (react-hook-form)
 * aj server (POST /api/kontakt), aby validácia bola na oboch stranách rovnaká.
 */

const m = kontakt.form.messages;

export const AREAS = [...servicesOrder, "ine"] as const;
export type Area = (typeof AREAS)[number];

/** Polia, ktoré vypĺňa návštevník. */
export const inquirySchema = z.object({
  name: z.string().trim().min(1, m.required).max(120, m.tooLong),
  phone: z
    .string()
    .trim()
    .min(1, m.required)
    .max(40, m.phone)
    .refine((v) => /^\+?[\d\s/().-]+$/.test(v) && v.replace(/\D/g, "").length >= 9, m.phone),
  email: z
    .string()
    .trim()
    .max(200, m.email)
    .refine((v) => v === "" || z.string().email().safeParse(v).success, m.email),
  area: z.enum(AREAS).optional(),
  message: z.string().trim().max(5000, m.tooLong),
});

export type InquiryValues = z.infer<typeof inquirySchema>;

/** Honeypot: skryté pole, ktoré človek nevidí; roboty ho vyplnia. */
export const HONEYPOT_FIELD = "firma_web";

/** Telo požiadavky na server: polia formulára + ochrana pred spamom. */
export const inquiryRequestSchema = inquirySchema.extend({
  [HONEYPOT_FIELD]: z.string().optional(),
  /** koľko ms ubehlo od načítania formulára po odoslanie (meria prehliadač, nezávisí od jeho hodín) */
  elapsedMs: z.number().nonnegative(),
  turnstileToken: z.string().max(4096).optional(),
  /** stránka, z ktorej dopyt prišiel (cesta + query) */
  page: z.string().max(500).optional(),
});

export type InquiryRequest = z.infer<typeof inquiryRequestSchema>;

/** Odpoveď servera. */
export type InquiryResponse =
  | { ok: true }
  | {
      ok: false;
      code: "validation" | "turnstile" | "rate_limit" | "server";
      message: string;
      fieldErrors?: Partial<Record<keyof InquiryValues, string>>;
    };

export const areaLabel = (area?: Area) =>
  kontakt.form.areas.find((item) => item.value === area)?.label ?? "Neuvedená";
