import { images } from "../images";
import type { ServiceDetail } from "../types";

export const s4_10_kybernetickePravo = {
  block: "4.10",
  slug: "kyberneticke-pravo",
  name: "Kybernetické právo",
  image: images.trestne,
  cardDescription:
    "Kybernetické právo upravuje bezpečnosť informačných systémov, ochranu dát a IT zmluvy. Pomôžeme vašej firme splniť povinnosti a pripraviť sa na únik dát.",
  hero: {
    title: "Advokát pre kybernetické právo na Slovensku",
    subtitle: "Kybernetická bezpečnosť, osobné údaje a IT zmluvy. Pomôžeme vašej firme pochopiť povinnosti, nastaviť pravidlá a správne reagovať, keď nastane incident.",
  },
  intro: {
    title: "Čo je kybernetické právo",
    text: "Kybernetické právo sú pravidlá pre bezpečnosť informačných systémov, ochranu dát a podnikanie v digitálnom prostredí. Týka sa čoraz viac firiem, nielen IT spoločností. Nové európske pravidlá rozšírili okruh firiem, ktoré musia plniť povinnosti v oblasti kybernetickej bezpečnosti. Pomôžeme vám zistiť, či sa vás týkajú, nastaviť interné pravidlá a pripraviť zmluvy s dodávateľmi. Ak nastane únik dát, poradíme vám, čo a komu treba nahlásiť.",
  },
  services: {
    title: "S čím vám pomôžeme",
    items: [
      { title: "Povinnosti v kybernetickej bezpečnosti.", text: "Posúdenie, či sa na vašu firmu vzťahujú, a pomoc s ich splnením." },
      { title: "Ochrana osobných údajov (GDPR).", text: "Nastavenie dokumentácie, zmlúv a postupov pri spracúvaní osobných údajov." },
      { title: "Únik dát a bezpečnostné incidenty.", text: "Postup pri incidente vrátane hlásenia úradom a komunikácie s dotknutými osobami." },
      { title: "IT zmluvy a licencie.", text: "Zmluvy o vývoji softvéru, softvérové licencie a softvér poskytovaný ako služba." },
      { title: "Online podnikanie a e-shopy.", text: "Obchodné podmienky, informačné povinnosti a ochrana spotrebiteľa. (OVERIŤ)" },
    ],
  },
  steps: [
    { title: "Opíšete nám svoju firmu a systémy.", text: "Povedzte nám, čomu sa venujete, aké údaje spracúvate a s akými dodávateľmi IT spolupracujete. Technické detaily nie sú potrebné." },
    { title: "Posúdime vaše povinnosti.", text: "Zistíme, ktoré pravidlá sa na vás vzťahujú, čo už máte v poriadku a čo treba doplniť." },
    { title: "Nastavíme pravidlá a zmluvy.", text: "Pripravíme dokumentáciu, zmluvy a postupy pre prípad incidentu, aby ste vedeli, čo robiť, keď niečo nastane." },
  ],
  situations: {
    title: "Kedy sa nám ozvať",
    items: [
      "Neviete, či sa na vás vzťahujú nové povinnosti v kybernetickej bezpečnosti.",
      "Došlo k úniku dát alebo ku kybernetickému útoku.",
      "Spúšťate e-shop alebo online službu.",
      "Uzatvárate zmluvu o vývoji softvéru alebo o cloudovej službe.",
      "U vás začal kontrolu úrad.",
    ],
  },
  faq: [
    { q: "Musí moja firma plniť povinnosti kybernetickej bezpečnosti?", a: "Závisí od odvetvia, v ktorom podnikáte, a od veľkosti firmy. Nové pravidlá sa týkajú oveľa viac firiem ako predtým, preto sa oplatí to preveriť." },
    { q: "Čo robiť pri úniku osobných údajov?", a: "Zdokumentujte, čo sa stalo, a obmedzte ďalšie šírenie. Porušenie ochrany osobných údajov treba spravidla ohlásiť Úradu na ochranu osobných údajov SR bez zbytočného odkladu, ak je to možné, do 72 hodín od zistenia." },
    { q: "Aké zmluvy potrebuje e-shop?", a: "Najmä obchodné podmienky, informácie o ochrane osobných údajov a reklamačný poriadok. Dôležité sú aj zmluvy s dodávateľmi, napríklad s poskytovateľom platobnej brány či s dopravcom." },
  ],
  related: ["obchodne-pravo", "dusevne-vlastnictvo"],
  cta: {
    title: "Chcete mať firmu pripravenú na incident?",
    text: "Opíšte nám, ako fungujete. Povieme vám, čo je potrebné doplniť.",
    ctas: [],
  },
  meta: {
    title: "Advokát kybernetické právo Slovensko | JUDr. Pavlovič",
    description: "Kybernetická bezpečnosť, ochrana osobných údajov, únik dát a IT zmluvy. Pomôžeme vašej firme splniť povinnosti.",
    path: "/sluzby/kyberneticke-pravo",
  },
} satisfies ServiceDetail;
