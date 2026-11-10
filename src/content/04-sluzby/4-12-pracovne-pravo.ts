import { images } from "../images";
import type { ServiceDetail } from "../types";

export const s4_12_pracovnePravo = {
  block: "4.12",
  slug: "pracovne-pravo",
  name: "Pracovné právo",
  image: images.pracovnePravo,
  cardDescription:
    "Meníte zamestnanie alebo neviete, na čo máte od zamestnávateľa nárok, respektíve čo môže on požadovať od Vás? Pomôžeme Vám aj v prípade zmeny, skončenia alebo vzniku Vášho pracovného pomeru.",
  hero: {
    title: "Advokát pre pracovné právo v Bratislave a okolí",
    subtitle: "Pracovná zmluva, výpoveď, mzda či odstupné. Pomôžeme zamestnancom aj zamestnávateľom poznať svoje práva a povinnosti a postupovať správne.",
  },
  intro: {
    title: "Keď sa práca stane právnym problémom",
    text: "Pracovný pomer sprevádza človeka roky a jeho zmena alebo skončenie má priamy dopad na príjem aj istotu celej rodiny. Pomáhame zamestnancom, ktorí dostali výpoveď, nedostali mzdu alebo nevedia, na čo majú nárok. Zamestnávateľom pripravujeme pracovné zmluvy a interné predpisy a pomáhame im skončiť pracovný pomer v súlade so Zákonníkom práce. V pracovnoprávnych sporoch rozhodujú krátke lehoty, preto je dôležité ozvať sa včas.",
  },
  services: {
    title: "S čím Vám pomôžeme",
    items: [
      { title: "Pracovné zmluvy a dohody.", text: "Príprava a posúdenie pracovných zmlúv, ich zmien a dohôd o prácach vykonávaných mimo pracovného pomeru." },
      { title: "Skončenie pracovného pomeru.", text: "Výpoveď, dohoda, okamžité skončenie aj skončenie v skúšobnej dobe, z pohľadu zamestnanca aj zamestnávateľa." },
      { title: "Neplatné skončenie pracovného pomeru.", text: "Posúdenie výpovede alebo okamžitého skončenia a žaloba o určenie ich neplatnosti vrátane nároku na náhradu mzdy." },
      { title: "Mzda, odstupné a odchodné.", text: "Vymáhanie nevyplatenej mzdy, odstupného, odchodného a ďalších nárokov zo skončeného pracovného pomeru." },
      { title: "Konkurenčná doložka a mlčanlivosť.", text: "Posúdenie a príprava dojednaní, ktoré obmedzujú zamestnanca počas pracovného pomeru alebo po jeho skončení." },
      { title: "Šikana a nerovnaké zaobchádzanie.", text: "Postup pri šikanovaní, diskriminácii a inom porušovaní práv zamestnanca na pracovisku." },
      { title: "Pracovné úrazy a choroby z povolania.", text: "Uplatnenie náhrady škody voči zamestnávateľovi." },
      { title: "Právne služby pre zamestnávateľov.", text: "Pracovný poriadok a ďalšie interné predpisy, skončenie pracovného pomeru so zamestnancom a zastupovanie v pracovnoprávnych sporoch." },
    ],
  },
  steps: [
    { title: "Opíšete nám situáciu.", text: "Povedzte nám, čo sa stalo, a prineste pracovnú zmluvu, výpoveď, výplatné pásky alebo komunikáciu so zamestnávateľom. Dôležitý je najmä dátum doručenia písomností." },
    { title: "Posúdime Vaše nároky a lehoty.", text: "Vysvetlíme Vám, či bolo skončenie pracovného pomeru platné, na čo máte nárok a dokedy treba konať. Následne navrhneme ďalší postup." },
    { title: "Konáme za Vás.", text: "Rokujeme s druhou stranou a preferujeme mimosúdnu dohodu. Ak to nie je možné, podáme žalobu a zastupujeme Vás pred súdom." },
  ],
  situations: {
    title: "Kedy sa nám ozvať",
    items: [
      "Dostali ste výpoveď alebo okamžité skončenie pracovného pomeru.",
      "Zamestnávateľ Vám nevyplatil mzdu, odstupné alebo odchodné.",
      "Zamestnávateľ Vám navrhuje dohodu o skončení pracovného pomeru a neviete, či ju podpísať.",
      "Máte podpísať novú pracovnú zmluvu alebo konkurenčnú doložku.",
      "Na pracovisku čelíte šikane alebo nerovnakému zaobchádzaniu.",
      "Ste zamestnávateľ a potrebujete správne skončiť pracovný pomer so zamestnancom.",
    ],
  },
  faq: [
    { q: "Dokedy môžem napadnúť výpoveď?", a: "Neplatnosť skončenia pracovného pomeru možno uplatniť na súde najneskôr do dvoch mesiacov odo dňa, keď sa mal pracovný pomer skončiť. Po uplynutí tejto lehoty nárok zaniká, preto vec neodkladajte." },
    { q: "Čo mám urobiť, ak považujem výpoveď za neplatnú?", a: "Písomne oznámte zamestnávateľovi, že trváte na tom, aby Vás naďalej zamestnával. Od tohto oznámenia sa odvíja aj Váš prípadný nárok na náhradu mzdy. Následne je potrebné včas podať žalobu." },
    { q: "Môžem okamžite skončiť pracovný pomer, ak mi zamestnávateľ nevyplatil mzdu?", a: "Áno, zákon to umožňuje, ak Vám zamestnávateľ nevyplatil mzdu alebo náhradu mzdy ani do 15 dní po jej splatnosti. Pred takým krokom je vhodné poradiť sa, aby bol postup správny." },
    { q: "Mám nárok na odstupné?", a: "Nárok na odstupné vzniká najmä pri skončení pracovného pomeru výpoveďou alebo dohodou z organizačných alebo zdravotných dôvodov. Jeho výška závisí od toho, ako dlho pracovný pomer trval." },
    { q: "Musí byť pracovná zmluva písomná?", a: "Áno. Pracovná zmluva musí byť uzatvorená písomne a zamestnávateľ je povinný jedno jej vyhotovenie vydať zamestnancovi." },
  ],
  related: ["obchodne-pravo", "obcianske-pravo"],
  cta: {
    title: "Riešite problém v práci?",
    text: "Opíšte nám Vašu situáciu. Povieme Vám, na čo máte nárok a ako postupovať.",
    ctas: [],
  },
  meta: {
    title: "Advokát pracovné právo Bratislava | JUDr. Pavlovič",
    description: "Výpoveď, neplatné skončenie pracovného pomeru, mzda, odstupné a pracovné zmluvy. Pomôžeme zamestnancom aj zamestnávateľom.",
    path: "/sluzby/pracovne-pravo",
  },
} satisfies ServiceDetail;
