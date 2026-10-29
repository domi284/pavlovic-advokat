import { images } from "../images";
import type { ServiceDetail } from "../types";

export const s4_4_obchodnePravo = {
  block: "4.4",
  slug: "obchodne-pravo",
  name: "Obchodné právo",
  image: images.obchodne,
  cardDescription:
    "Zakladáte firmu, potrebujete zmluvu alebo vám odberateľ nezaplatil? Pripravíme a posúdime zmluvy, pomôžeme so zmenami v spoločnosti aj s vymáhaním pohľadávok.",
  hero: {
    title: "Advokát pre obchodné právo v Bratislave a okolí",
    subtitle: "Zmluvy, spoločnosti, pohľadávky a spory. Právne zázemie pre podnikateľov, ktorí potrebujú jasné a praktické riešenia.",
  },
  intro: {
    title: "Právne zázemie pre vaše podnikanie",
    text: "Podnikanie prináša množstvo rozhodnutí, z ktorých mnohé majú právne dôsledky. Pomáhame živnostníkom, podnikateľom a spoločnostiam rozhodovať sa informovane: pri zakladaní firmy, pri uzatváraní zmlúv aj pri sporoch. Riziká vám vysvetlíme prakticky, bez zbytočnej teórie. Cieľom je predchádzať problémom, a ak už nastanú, riešiť ich vecne a včas.",
  },
  services: {
    title: "S čím sa na nás podnikatelia obracajú",
    items: [
      { title: "Zakladáte alebo meníte firmu.", text: "Založenie spoločnosti, zmeny v spoločnosti a v obchodnom registri." },
      { title: "Potrebujete zmluvu.", text: "Príprava a posúdenie zmlúv: dodávateľské, o spolupráci, nájomné a ďalšie obchodné zmluvy." },
      { title: "Odberateľ vám nezaplatil.", text: "Posúdenie pohľadávky, výzva na zaplatenie a vymáhanie, vrátane súdneho konania." },
      { title: "Máte spor s obchodným partnerom.", text: "Hľadanie dohody alebo zastupovanie v konaní pred súdom." },
      { title: "Riešite vzťahy medzi spoločníkmi.", text: "Spoločenská zmluva, prevod obchodného podielu a spory medzi spoločníkmi." },
      { title: "Potrebujete právne zázemie pravidelne.", text: "Dlhodobá spolupráca s firmami za individuálne dohodnutých podmienok. (OVERIŤ)" },
    ],
  },
  steps: [
    { title: "Opíšete nám zámer alebo problém.", text: "Napríklad, čo plánujete podpísať alebo čo sa stalo. Prineste zmluvy, faktúry a korešpondenciu, ktoré sa k veci vzťahujú." },
    { title: "Posúdime a navrhneme postup.", text: "Vysvetlíme vám riziká, možnosti a odporúčaný ďalší krok. Pri spore najprv zvážime, či je reálna dohoda." },
    { title: "Postaráme sa o realizáciu.", text: "Pripravíme alebo posúdime dokumenty, rokujeme s druhou stranou a ak je to potrebné, zastupujeme vás pred súdom." },
  ],
  situations: {
    title: "Kedy sa nám ozvať",
    items: [
      "Chystáte sa podpísať zmluvu s vysokou hodnotou alebo na dlhé obdobie.",
      "Zakladáte spoločnosť s ďalším spoločníkom.",
      "Faktúra je po splatnosti a odberateľ nereaguje.",
      "Obchodný partner neplní, čo ste si dohodli.",
      "Meníte konateľa, spoločníkov alebo sídlo firmy.",
    ],
  },
  faq: [
    { q: "S čím môžem prísť pri zakladaní firmy?", a: "S nápadom aj s hotovým zámerom. Spolu zvolíme vhodnú formu, upravíme vzťahy medzi spoločníkmi a pripravíme potrebné dokumenty." },
    { q: "Potrebujem advokáta pri každej zmluve?", a: "Nie vždy. Pri dlhodobých, hodnotnejších alebo rizikovejších zmluvách je však posúdenie pred podpisom vhodné, lebo opraviť chybu po podpise býva náročnejšie." },
    { q: "Čo robiť, ak mi odberateľ nezaplatil?", a: "Dôležité je zhromaždiť doklady a čo najskôr zvoliť postup, od výzvy na zaplatenie až po súd. Pohľadávky sa premlčujú, preto neodkladajte." },
    { q: "Zastupujete aj pred súdom?", a: "Áno, zastupujeme klientov v obchodných sporoch aj pred súdom. (OVERIŤ)" },
    { q: "Je možná dlhodobá spolupráca pre firmu?", a: "Podnikateľom, ktorí potrebujú právne zázemie pravidelne, ponúkame dlhodobú spoluprácu. Podmienky sa dohodnú individuálne. (OVERIŤ)" },
  ],
  related: ["dusevne-vlastnictvo", "kyberneticke-pravo"],
  cta: {
    title: "Majte právne veci vo firme pod kontrolou",
    text: "Povedzte nám, čo plánujete alebo riešite. Povieme vám, ako k tomu pristúpiť.",
    ctas: [],
  },
  meta: {
    title: "Advokát obchodné právo Bratislava | JUDr. Pavlovič",
    description: "Právne zázemie pre podnikateľov v Bratislave: zmluvy, spoločnosti, vymáhanie pohľadávok a obchodné spory. Dohodnite si konzultáciu.",
    path: "/sluzby/obchodne-pravo",
  },
} satisfies ServiceDetail;
