/**
 * Jediné miesto pre kontaktné a identifikačné údaje kancelárie.
 * Údaje sú overené v zozname advokátov SAK a v obchodnom registri.
 * Hodnota `null` = údaj ešte chýba a na webe sa zobrazí ako čip <Placeholder>.
 */

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

/** Rok začiatku pôsobenia v advokácii. */
export const PRACTICE_SINCE = 1990;

/** Roky praxe: počíta sa automaticky (v roku 2026 = 36). V textoch ako `{rokyPraxe}`. */
export const rokyPraxe = new Date().getFullYear() - PRACTICE_SINCE;

/** Úradné hodiny pre schema.org (openingHoursSpecification), zodpovedajú `site.fields.hours`. */
export const openingHours = [
  {
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:30",
    closes: "17:00",
  },
];

export const site = {
  url: siteUrl,
  locale: "sk_SK",

  /** Čipy „overiť“: klient všetky texty potvrdil. */
  showReviewMarks: false,

  name: "JUDr. Ladislav Pavlovič, LL.M.",
  /** 2. pád */
  nameGenitive: "JUDr. Ladislava Pavloviča, LL.M.",
  /** Obchodné meno presne podľa obchodného registra (bez LL.M.). */
  company: "Advokátska kancelária JUDr. Ladislav Pavlovič s. r. o.",

  address: {
    street: "Ivanská cesta 32B",
    postalCode: "821 04",
    city: "Bratislava",
    district: "Ružinov",
    country: "SK",
  },

  areaServed: "Bratislava a západné Slovensko",
  since: PRACTICE_SINCE,

  fields: {
    phone: "0905 769 966" as string | null,
    email: "pavlovic@lpavlovic.eu" as string | null,
    /** e-mail pre uchádzačov o prácu */
    careersEmail: "pavlovic@lpavlovic.eu" as string | null,
    /**
     * Úradné hodiny: jediné miesto pre celý web (kontakt, pätička, asistentka).
     * V textoch ako `{{hours|…}}`, nový riadok (\n) sa zobrazí ako zalomenie.
     */
    hours: "Pondelok – piatok: 8:30 – 17:00\nV prípade potreby flexibilne po dohode." as string | null,
    /** Úradné hodiny pre pätičku (za „Úradné hodiny: “), rovnaké hodiny v kratšom tvare. */
    hoursFooter: "pondelok – piatok 8:30 – 17:00\nV prípade potreby flexibilne po dohode." as string | null,
    ico: "47238526" as string | null,
    register: "Obchodný register Mestského súdu Bratislava III, oddiel: Sro, vložka č. 81036/B" as string | null,
    /** číslo zápisu v zozname advokátov SAK */
    sakNumber: "448" as string | null,
    education: "Právnická fakulta Univerzity Komenského v Bratislave (1990), JUDr., LL.M." as string | null,
    yearsOfPractice: String(rokyPraxe) as string | null,
    casesHandled: "3 500+" as string | null,
    areasCount: "10" as string | null,
    languages: "slovenský, ruský, anglický, nemecký" as string | null,
    /** cesta k portrétu v /public, napr. "/images/portret.jpg" */
    portrait: null as string | null,
  },
};

export type SiteField = keyof typeof site.fields;

/** „0905 769 966“ → „tel:+421905769966“ */
export function telHref(phone: string | null) {
  if (!phone) return null;
  const digits = phone.replace(/[^\d+]/g, "");
  return `tel:${digits.startsWith("0") ? `+421${digits.slice(1)}` : digits}`;
}

export function mailHref(email: string | null) {
  return email ? `mailto:${email}` : null;
}

export const fullAddress = `${site.address.street}, ${site.address.postalCode} ${site.address.city}`;
