/**
 * Jediné miesto pre kontaktné a identifikačné údaje kancelárie.
 * Hodnota `null` = údaj ešte chýba a na webe sa zobrazí ako čip <Placeholder>.
 * Po doplnení hodnoty sa údaj automaticky prepíše na všetkých miestach webu.
 */

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const site = {
  url: siteUrl,
  locale: "sk_SK",

  /** Čipy „overiť“ pri textoch, ktoré musí potvrdiť advokát. Pred spustením prepnúť na `false`. */
  showReviewMarks: true,

  name: "JUDr. Ladislav Pavlovič",
  company: "Advokátska kancelária JUDr. Ladislav Pavlovič s. r. o.",

  address: {
    street: "Ivanská cesta 32B",
    postalCode: "821 04",
    city: "Bratislava",
    district: "Ružinov",
    country: "SK",
  },

  /** Údaje na doplnenie (null = zobrazí sa placeholder). */
  fields: {
    /** napr. "+421 900 000 000" */
    phone: null as string | null,
    /** napr. "kancelaria@domena.sk" */
    email: null as string | null,
    /** úradné hodiny ako text, napr. "Po – Pi: 8.00 – 16.00" */
    hours: null as string | null,
    /** hodiny pre schema.org, napr. ["Mo-Fr 08:00-16:00"] */
    hoursSchema: null as string[] | null,
    /** MHD zastávka, parkovanie, vchod/poschodie */
    directions: null as string | null,
    ico: null as string | null,
    /** napr. "Mestský súd Bratislava III, oddiel Sro, vložka č. …" */
    register: null as string | null,
    /** číslo zápisu v zozname advokátov SAK */
    sakNumber: null as string | null,
    /** škola, rok ukončenia, titul JUDr. */
    education: null as string | null,
    languages: null as string | null,
    /** cesta k portrétu v /public, napr. "/images/portret.jpg" */
    portrait: null as string | null,
  },
};

export type SiteField = keyof typeof site.fields;

export function telHref(phone: string | null) {
  return phone ? `tel:${phone.replace(/[^\d+]/g, "")}` : null;
}

export function mailHref(email: string | null) {
  return email ? `mailto:${email}` : null;
}

export const fullAddress = `${site.address.street}, ${site.address.postalCode} ${site.address.city}`;
