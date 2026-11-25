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
    "Úradné hodiny: {{hoursFooter|DOPLNIŤ}}",
    "IČO: {{ico|DOPLNIŤ}} · Zapísaná v Obchodnom registri Mestského súdu Bratislava III, oddiel: Sro, vložka č. 81036/B",
    "Advokát zapísaný v zozname advokátov Slovenskej advokátskej komory pod č. {{sakNumber|DOPLNIŤ}}",
    "Pôsobnosť: Bratislava a západné Slovensko. Podľa vecnej a miestnej príslušnosti súdov zastupujeme klientov na celom Slovensku.",
  ],
  links: [
    { label: "Služby", href: "/sluzby" },
    { label: "O mne", href: "/o-mne" },
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
  text: "Používame iba nevyhnutné cookies. Mapu od Google Maps načítame až s Vaším súhlasom.",
  more: { label: "Viac o cookies", href: "/cookies" },
  accept: "Prijať všetko",
  reject: "Odmietnuť",
  settings: "Nastavenia",
  settingsTitle: "Nastavenia cookies",
  save: "Uložiť výber",
  close: "Zavrieť nastavenia",
  alwaysOn: "Vždy zapnuté",
  /** Kategórie súhlasu; kľúče zodpovedajú `ConsentCategory` v src/lib/consent.ts. */
  categories: [
    {
      key: "necessary",
      title: "Nevyhnutné",
      text: "Potrebné na fungovanie stránky: uloženie Vašej voľby cookies a ochrana kontaktného formulára pred spamom (Cloudflare Turnstile). Nedajú sa vypnúť.",
    },
    {
      key: "maps",
      title: "Externý obsah – mapy",
      text: "Mapa Google Maps na stránke Kontakt. Pri jej zobrazení môže Google ukladať vlastné cookies.",
    },
  ],
  /** Odkaz v pätičke, ktorý znovu otvorí nastavenia. */
  footerLink: "Nastavenia cookies",
};

/** Mapa na stránke Kontakt, kým nie je súhlas s externým obsahom. */
export const mapConsent = {
  text: "Mapu od Google Maps zobrazíme až s Vaším súhlasom.",
  show: "Zobraziť mapu",
  open: "Otvoriť v Mapách",
};

export const notFound = {
  title: "Stránka sa nenašla",
  text: "Adresa možno nie je správna alebo stránka už neexistuje.",
  ctas: [
    { kind: "link", label: "Späť na úvod", href: "/", variant: "primary" },
    { kind: "link", label: "Dohodnúť konzultáciu", href: CONSULT_HREF, variant: "secondary" },
  ] satisfies Cta[],
};
