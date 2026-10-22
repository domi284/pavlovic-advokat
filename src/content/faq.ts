import { nehody } from "./nehody";
import { obchodne } from "./obchodne";
import { trestne } from "./trestne";
import type { AreaPage, Faq, Meta } from "./types";

function areaFaq(page: AreaPage): Faq[] {
  const section = page.sections.find((s) => s.type === "faq");
  return section && section.type === "faq" ? section.items : [];
}

export const faqPage = {
  meta: {
    title: "Časté otázky o advokátovi a konzultácii | JUDr. Pavlovič",
    description:
      "Odpovede na časté otázky o dopravných nehodách, trestnom a obchodnom práve a o tom, ako prebieha konzultácia s advokátom v Bratislave.",
    path: "/caste-otazky",
  } satisfies Meta,
  h1: "Časté otázky",
  groups: [
    {
      id: "konzultacia-a-spolupraca",
      label: "Konzultácia a spolupráca",
      items: [
        {
          q: "Ako si dohodnem konzultáciu?",
          a: "Zavolajte, alebo vyplňte formulár na stránke [Kontakt](/kontakt#konzultacia). Ozvem sa vám na kontakt, ktorý uvediete.",
        },
        {
          q: "Čo mám priniesť na konzultáciu?",
          a: "Všetky dokumenty, ktoré sa k veci vzťahujú: zmluvy, korešpondenciu, lekárske správy, rozhodnutia alebo predvolania. Ak niečo nemáte, neznamená to, že sa nedá začať. Zistíme, čo je potrebné doplniť.",
        },
        {
          q: "Je moja vec dôverná?",
          a: "Áno. Advokát je zo zákona viazaný povinnosťou mlčanlivosti.",
        },
        {
          q: "Venujete sa aj iným oblastiam práva?",
          a: "Sústreďujem sa na dopravné nehody, trestné a obchodné právo. Ak vaša vec patrí inam, poviem vám to na začiatku. (OVERIŤ)",
        },
      ] satisfies Faq[],
    },
    { id: "dopravne-nehody", label: "Dopravné nehody", items: areaFaq(nehody) },
    { id: "trestne-pravo", label: "Trestné právo", items: areaFaq(trestne) },
    { id: "obchodne-pravo", label: "Obchodné právo", items: areaFaq(obchodne) },
  ],
};
