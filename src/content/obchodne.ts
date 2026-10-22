import { callCta } from "./common";
import { images } from "./images";
import type { AreaPage } from "./types";

const consult = "/kontakt?oblast=obchodne#konzultacia";

export const obchodne = {
  key: "obchodne",
  meta: {
    title: "Advokát obchodné právo Bratislava | JUDr. Pavlovič",
    description:
      "Právne zázemie pre podnikateľov v Bratislave: zmluvy, spoločnosti, vymáhanie pohľadávok a obchodné spory. Dohodnite si konzultáciu.",
    path: "/obchodne-pravo",
  },
  name: "Obchodné právo",
  image: images.obchodne,
  hero: {
    h1: "Advokát pre obchodné právo a podnikateľov v Bratislave",
    subtitle:
      "Zmluvy, spoločnosti, pohľadávky a spory. Právne zázemie pre podnikateľov, ktorí potrebujú jasné a praktické riešenia.",
    ctas: [
      { kind: "link", label: "Dohodnúť konzultáciu pre firmu", href: consult, variant: "primary" },
      callCta,
    ],
  },
  sections: [
    {
      type: "intro",
      title: "Právne zázemie pre vaše podnikanie",
      text: "Podnikanie prináša množstvo rozhodnutí, z ktorých mnohé majú právne dôsledky. Pomáham podnikateľom a spoločnostiam rozhodovať sa informovane: pri zakladaní, uzatváraní zmlúv aj pri sporoch. Cieľom je predchádzať problémom, a ak už nastanú, riešiť ich vecne a včas.",
    },
    {
      type: "services",
      eyebrow: "Čo riešite",
      title: "S čím sa na mňa podnikatelia obracajú",
      // Poznámka v K: presný zoznam služieb potvrdí advokát, preto čip „overiť“ pri nadpise
      reviewMark: true,
      items: [
        {
          // jediná povolená oprava textu (A2): „Zakladám“ → „Zakladáte“
          title: "Zakladáte alebo meníte firmu.",
          text: "Založenie spoločnosti, zmeny v spoločnosti a v obchodnom registri, vzťahy medzi spoločníkmi.",
        },
        {
          title: "Potrebujem zmluvu.",
          text: "Príprava a posúdenie zmlúv: dodávateľské, o spolupráci, nájomné a ďalšie obchodné zmluvy.",
        },
        {
          title: "Odberateľ mi nezaplatil.",
          text: "Posúdenie pohľadávky, výzva na plnenie a vymáhanie, vrátane súdneho konania.",
        },
        {
          title: "Mám spor s obchodným partnerom.",
          text: "Hľadanie dohody alebo zastupovanie v konaní pred súdom.",
        },
        {
          title: "Potrebujem poradiť pri rozhodnutí.",
          text: "Právne posúdenie zámeru ešte skôr, ako ho podpíšete alebo spustíte.",
        },
      ],
    },
    {
      type: "process",
      eyebrow: "Ako to prebieha",
      title: "Ako to prebieha",
      steps: [
        {
          title: "Opíšete mi zámer alebo problém.",
          text: "Napríklad, čo plánujete podpísať alebo čo sa stalo.",
        },
        {
          title: "Posúdim a navrhnem postup.",
          text: "Vysvetlím riziká, možnosti a odporúčaný ďalší krok.",
        },
        {
          title: "Postarám sa o realizáciu.",
          text: "Pripravím alebo posúdim dokumenty, rokujem alebo zastupujem pred súdom.",
        },
      ],
    },
    {
      type: "faq",
      eyebrow: "Často kladené otázky",
      title: "Často kladené otázky",
      items: [
        {
          q: "S čím môžem prísť pri zakladaní firmy?",
          a: "S nápadom aj s hotovým zámerom. Spolu zvolíme vhodnú formu, upravíme vzťahy medzi spoločníkmi a pripravíme potrebné dokumenty.",
        },
        {
          q: "Potrebujem právnika pri každej zmluve?",
          a: "Nie vždy. Pri dlhodobých, hodnotnejších alebo rizikovejších zmluvách je však posúdenie pred podpisom vhodné, lebo opraviť chybu po podpise býva náročnejšie.",
        },
        {
          q: "Čo robiť, ak mi odberateľ nezaplatil?",
          a: "Dôležité je zhromaždiť doklady a čo najskôr zvoliť postup, od výzvy na plnenie až po súd. Pohľadávky sa premlčujú, preto neodkladajte.",
        },
        {
          q: "Zastupujete aj pred súdom?",
          a: "Áno, zastupujem klientov v obchodných sporoch aj pred súdom. (OVERIŤ)",
        },
        {
          q: "Je možná dlhodobá spolupráca pre firmu?",
          a: "Podnikateľom, ktorí potrebujú právne zázemie pravidelne, je možná dlhodobá spolupráca. Podmienky sa dohodnú individuálne. (OVERIŤ)",
        },
      ],
    },
  ],
  cta: {
    title: "Majte právne veci vo firme pod kontrolou",
    text: "Povedzte mi, čo plánujete alebo riešite. Poviem vám, ako k tomu pristúpiť.",
    ctas: [
      { kind: "link", label: "Dohodnúť konzultáciu pre firmu", href: consult, variant: "primary" },
      callCta,
    ],
  },
} satisfies AreaPage;
