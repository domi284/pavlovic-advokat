import { serviceDetails } from "./04-sluzby";
import { pageSeo } from "./10-seo";

/** Názvy skupín na stránke Časté otázky (ak sa líšia od názvu služby). */
const groupLabels: Record<string, string> = {
  "dusevne-vlastnictvo": "Duševné vlastníctvo",
};

export const faqPage = {
  meta: pageSeo.faq,
  h1: "Časté otázky",
  groups: [
    {
      id: "konzultacia-a-spolupraca",
      label: "Konzultácia a spolupráca",
      href: undefined,
      items: [
        {
          q: "Ako si dohodnem konzultáciu?",
          a: "Zavolajte nám alebo vyplňte formulár na stránke [Kontakt](/kontakt#konzultacia). Ozveme sa Vám na kontakt, ktorý uvediete, a dohodneme termín.",
        },
        {
          q: "Je konzultácia spoplatnená?",
          a: "Áno, konzultácia s advokátom je spoplatnená. Jej podmienky Vám oznámime vopred, pri dohadovaní termínu.",
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
          a: "Venujeme sa 10 oblastiam práva, ktoré nájdete v sekcii [Služby](/sluzby). Ak Vaša vec patrí inam, povieme Vám to hneď na začiatku.",
        },
      ],
    },
    // skupiny služieb v poradí `servicesOrder`
    ...serviceDetails.map((service) => ({
      id: service.slug,
      label: groupLabels[service.slug] ?? service.name,
      href: `/sluzby/${service.slug}`,
      items: service.faq,
    })),
  ],
};
