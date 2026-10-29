import { serviceDetails } from "./04-sluzby";
import { pageSeo } from "./10-seo";

const serviceLabels: Record<string, string> = {
  "dopravne-nehody": "Dopravné nehody",
  "obchodne-pravo": "Obchodné právo",
  "obcianske-pravo": "Občianske právo",
  "rodinne-pravo": "Rodinné právo",
  "spravne-pravo": "Správne právo",
  "dusevne-vlastnictvo": "Duševné vlastníctvo",
  "patentove-pravo": "Patentové právo",
  "kyberneticke-pravo": "Kybernetické právo",
  "trestne-pravo": "Trestné právo",
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
          a: "Zavolajte nám alebo vyplňte formulár na stránke [Kontakt](/kontakt#konzultacia). Ozveme sa vám na kontakt, ktorý uvediete, a dohodneme termín.",
        },
        {
          q: "Je konzultácia spoplatnená?",
          a: "Áno, konzultácia s advokátom je spoplatnená. Jej podmienky vám oznámime vopred, pri dohadovaní termínu. (OVERIŤ)",
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
          a: "Venujeme sa deviatim oblastiam práva, ktoré nájdete v sekcii [Služby](/sluzby). Ak vaša vec patrí inam, povieme vám to hneď na začiatku. (OVERIŤ)",
        },
      ],
    },
    ...serviceDetails.map((service) => ({
      id: service.slug,
      label: serviceLabels[service.slug],
      href: `/sluzby/${service.slug}`,
      items: service.faq,
    })),
  ],
};
