import "server-only";

import { Resend } from "resend";
import { areaLabel, type InquiryValues } from "@/lib/inquiry-schema";
import { site } from "@/lib/site";

/**
 * E-maily z kontaktného formulára (Resend). Kľúče a adresy sú iba v env:
 * RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL, voliteľne CONTACT_SEND_CONFIRMATION=true.
 */

type Inquiry = InquiryValues & { page?: string };

const escapeHtml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

/** Zabráni vloženiu nových riadkov do predmetu e-mailu. */
const oneLine = (value: string) => value.replace(/[\r\n]+/g, " ").trim();

const formatDate = (date: Date) =>
  new Intl.DateTimeFormat("sk-SK", {
    timeZone: "Europe/Bratislava",
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);

function getClient() {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) throw new Error("Chýba RESEND_API_KEY, CONTACT_TO_EMAIL alebo CONTACT_FROM_EMAIL.");
  return { resend: new Resend(apiKey), to, from };
}

/** E-mail pre kanceláriu; Odpovedať ide priamo na e-mail klienta (ak ho uviedol). */
export async function sendOfficeEmail(inquiry: Inquiry, pageUrl: string) {
  const { resend, to, from } = getClient();
  const area = areaLabel(inquiry.area);
  const received = formatDate(new Date());

  const rows: [string, string][] = [
    ["Meno a priezvisko", inquiry.name],
    ["Telefón", inquiry.phone],
    ["E-mail", inquiry.email || "neuvedený"],
    ["Oblasť", area],
    ["Správa", inquiry.message || "bez správy"],
    ["Odoslané z", pageUrl],
    ["Prijaté", received],
  ];

  const html = `<!doctype html>
<html lang="sk"><body style="margin:0;padding:24px;background:#f6f3ee;font-family:Arial,Helvetica,sans-serif;color:#1c1d20">
  <h1 style="margin:0 0 16px;font-size:20px;font-weight:600">Nový dopyt z webu</h1>
  <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:640px;background:#ffffff;border:1px solid #e2ddd4">
    ${rows
      .map(
        ([label, value]) => `<tr>
      <th align="left" valign="top" style="padding:10px 14px;border-bottom:1px solid #e2ddd4;width:170px;font-size:13px;font-weight:600;color:#6b6760">${escapeHtml(label)}</th>
      <td valign="top" style="padding:10px 14px;border-bottom:1px solid #e2ddd4;font-size:15px;line-height:1.5;white-space:pre-wrap">${escapeHtml(value)}</td>
    </tr>`,
      )
      .join("")}
  </table>
  <p style="margin:16px 0 0;font-size:13px;color:#6b6760">${
    inquiry.email ? "Na tento e-mail môžete priamo odpovedať, odpoveď príde klientovi." : "Klient neuviedol e-mail, ozvite sa mu telefonicky."
  }</p>
</body></html>`;

  const text = [
    "Nový dopyt z webu",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    inquiry.email ? "Na tento e-mail môžete priamo odpovedať." : "Klient neuviedol e-mail, ozvite sa mu telefonicky.",
  ].join("\n");

  const { data, error } = await resend.emails.send({
    from,
    to: [to],
    ...(inquiry.email && { replyTo: inquiry.email }),
    subject: oneLine(`Nový dopyt z webu – ${area} – ${inquiry.name}`),
    html,
    text,
  });
  if (error) throw new Error(`Resend: ${error.message}`);
  return data?.id ?? null;
}

/**
 * Potvrdenie klientovi. Zapne sa iba s env CONTACT_SEND_CONFIRMATION=true
 * (testovacia doména Resend nevie posielať na cudzie adresy).
 */
export function confirmationEnabled() {
  return process.env.CONTACT_SEND_CONFIRMATION === "true";
}

export async function sendConfirmationEmail(inquiry: Inquiry) {
  if (!confirmationEnabled() || !inquiry.email) return null;
  const { resend, from } = getClient();

  const contacts = [
    site.company,
    `${site.address.street}, ${site.address.postalCode} ${site.address.city} – ${site.address.district}`,
    site.fields.phone && `Telefón: ${site.fields.phone}`,
    site.fields.email && `E-mail: ${site.fields.email}`,
    site.fields.hours && `Úradné hodiny: ${site.fields.hours.replace(/\n/g, ", ")}`,
  ].filter(Boolean) as string[];

  const paragraphs = [
    "Dobrý deň,",
    "ďakujeme, Vašu správu sme prijali. Ozveme sa Vám spravidla do 1 pracovného dňa.",
    "Upozorňujeme, že konzultácia je spoplatnená.",
    "S pozdravom,\nAdvokátska kancelária JUDr. Ladislav Pavlovič s. r. o.",
  ];

  const html = `<!doctype html>
<html lang="sk"><body style="margin:0;padding:24px;background:#f6f3ee;font-family:Arial,Helvetica,sans-serif;color:#1c1d20;font-size:15px;line-height:1.6">
  ${paragraphs.map((p) => `<p style="margin:0 0 14px">${escapeHtml(p).replace(/\n/g, "<br>")}</p>`).join("")}
  <hr style="border:0;border-top:1px solid #e2ddd4;margin:20px 0">
  <p style="margin:0;font-size:13px;color:#6b6760">${contacts.map(escapeHtml).join("<br>")}</p>
</body></html>`;

  const text = [...paragraphs, "—", contacts.join("\n")].join("\n\n");

  const { data, error } = await resend.emails.send({
    from,
    to: [inquiry.email],
    ...(site.fields.email && { replyTo: site.fields.email }),
    subject: "Ďakujeme za Vašu správu",
    html,
    text,
  });
  if (error) throw new Error(`Resend: ${error.message}`);
  return data?.id ?? null;
}
