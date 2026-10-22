/**
 * Texty právnych stránok zatiaľ nemáme. Stránky obsahujú iba štruktúru nadpisov
 * a placeholdery, text dodá advokátska kancelária.
 */
const pending = "DOPLNIŤ: text zásad pripraví advokátska kancelária";

export const privacy = {
  meta: {
    title: "Ochrana osobných údajov | JUDr. Ladislav Pavlovič",
    path: "/ochrana-osobnych-udajov",
  },
  h1: "Ochrana osobných údajov",
  pending,
  sections: [
    "Prevádzkovateľ",
    "Účel a právny základ spracúvania",
    "Doba uchovávania",
    "Vaše práva",
    "Kontakt",
  ],
  sectionPlaceholder: "DOPLNIŤ",
};

export const cookiesPolicy = {
  meta: {
    title: "Zásady používania cookies | JUDr. Ladislav Pavlovič",
    path: "/cookies",
  },
  h1: "Zásady používania cookies",
  pending,
  sections: ["Čo sú cookies", "Aké cookies používame", "Ako zmeniť súhlas"],
  sectionPlaceholder: "DOPLNIŤ",
};
