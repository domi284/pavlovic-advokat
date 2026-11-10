export const logo = {
  name: "JUDr. Ladislav Pavlovič, LL.M.",
  role: "advokát",
};

/**
 * Poradie služieb na celom webe (menu, karty, formulár, FAQ, pätička, sitemap, JSON-LD).
 * Meniť iba tu.
 */
export const servicesOrder = [
  "obchodne-pravo",
  "obcianske-pravo",
  "dopravne-nehody",
  "rodinne-pravo",
  "trestne-pravo",
  "spravne-pravo",
  "dusevne-vlastnictvo",
  "patentove-pravo",
  "kyberneticke-pravo",
  "pracovne-pravo",
] as const;

export type ServiceSlug = (typeof servicesOrder)[number];

export const nav = [
  { label: "Úvod", href: "/" },
  { label: "Služby", href: "/sluzby" },
  { label: "O mne", href: "/o-mne" },
  { label: "Náš tím", href: "/nas-tim" },
  { label: "Prečo my", href: "/preco-my" },
  { label: "Referencie", href: "/referencie" },
  { label: "Kontakt", href: "/kontakt" },
];

export const footerNav = [
  { label: "Služby", href: "/sluzby" },
  { label: "O mne", href: "/o-mne" },
  { label: "Náš tím", href: "/nas-tim" },
  { label: "Prečo my", href: "/preco-my" },
  { label: "Referencie", href: "/referencie" },
  { label: "Kontakt", href: "/kontakt" },
];

export const header = { call: "Zavolať" };

export const mobileBar = {
  call: "Zavolať",
  write: "Napísať",
  writeHref: "/kontakt#konzultacia",
};

export const ui = {
  skipLink: "Preskočiť na obsah",
  menu: "Menu",
  close: "Zavrieť",
  home: "Úvod",
  breadcrumb: "Navigácia",
};
