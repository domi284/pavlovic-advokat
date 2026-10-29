import { services } from "./services";

export const logo = {
  name: "JUDr. Ladislav Pavlovič",
  role: "advokát",
};

export const serviceNav = services.map((service) => ({
  label: service.name,
  href: service.href,
  ...(service.badge && { badge: service.badge }),
}));

export const nav = [
  { label: "Úvod", href: "/" },
  { label: "Služby", href: "/sluzby" },
  { label: "O mne", href: "/o-mne" },
  { label: "Náš tím", href: "/nas-tim" },
  { label: "Prečo my", href: "/preco-my" },
  { label: "Kontakt", href: "/kontakt" },
];

export const footerNav = [
  { label: "Služby", href: "/sluzby" },
  { label: "O mne", href: "/o-mne" },
  { label: "Náš tím", href: "/nas-tim" },
  { label: "Prečo my", href: "/preco-my" },
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
