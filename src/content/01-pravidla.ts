import type { Cta } from "./types";

export const CONSULT_HREF = "/kontakt#konzultacia";

export const callCta: Cta = {
  kind: "call",
  label: "Zavolať {{phone|DOPLNIŤ: telefón}}",
  variant: "secondary",
};

export const footer = {
  company: "Advokátska kancelária JUDr. Ladislav Pavlovič s. r. o.",
  lines: [
    "Ivanská cesta 32B, 821 04 Bratislava – Ružinov",
    "Telefón: {{phone|DOPLNIŤ}} · E-mail: {{email|DOPLNIŤ}}",
    "IČO: {{ico|DOPLNIŤ}} · Zapísaná v Obchodnom registri Mestského súdu Bratislava III, oddiel: Sro, vložka č. 81036/B",
    "Advokát zapísaný v zozname advokátov Slovenskej advokátskej komory pod č. {{sakNumber|DOPLNIŤ}}",
    "Pôsobnosť: Bratislava a západné Slovensko. Podľa vecnej a miestnej príslušnosti súdov zastupujeme klientov na celom Slovensku.",
  ],
  links: [
    { label: "Služby", href: "/sluzby" },
    { label: "O mne", href: "/o-mne" },
    { label: "Náš tím", href: "/nas-tim" },
    { label: "Prečo my", href: "/preco-my" },
    { label: "Referencie", href: "/referencie" },
    { label: "Kontakt", href: "/kontakt" },
    { label: "Časté otázky", href: "/caste-otazky" },
    { label: "Ochrana osobných údajov", href: "/ochrana-osobnych-udajov" },
    { label: "Cookies", href: "/cookies" },
  ],
  noticeLabel: "Upozornenie",
  notice:
    "Obsah tejto webovej stránky má informatívny charakter a nenahrádza individuálnu právnu konzultáciu. Jeho zverejnenie ani odoslanie správy cez formulár nezakladá vzťah advokát – klient. Pre posúdenie Vašej konkrétnej veci nás, prosím, kontaktujte.",
  copyright: (year: number) => `© ${year} Advokátska kancelária JUDr. Ladislav Pavlovič s. r. o.`,
};

export const cookieBar = {
  text: "Používame nevyhnutné cookies na fungovanie stránky. S Vaším súhlasom používame aj analytické cookies, ktoré nám pomáhajú stránku zlepšovať. Viac v [Zásadách cookies](/cookies).",
  accept: "Prijať všetky",
  necessary: "Iba nevyhnutné",
};

export const notFound = {
  title: "Stránka sa nenašla",
  text: "Adresa možno nie je správna alebo stránka už neexistuje.",
  ctas: [
    { kind: "link", label: "Späť na úvod", href: "/", variant: "primary" },
    { kind: "link", label: "Dohodnúť konzultáciu", href: CONSULT_HREF, variant: "secondary" },
  ] satisfies Cta[],
};
