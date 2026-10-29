import { images } from "../images";
import type { ServiceDetail } from "../types";

export const s4_11_trestnePravo = {
  block: "4.11",
  slug: "trestne-pravo",
  name: "Trestné právo",
  image: images.trestne,
  cardDescription:
    "Obhajobu a zastupovanie v trestnom konaní poskytujeme iba stálym klientom a po predchádzajúcej dohode. Dôvodom je vysoká pracovná vyťaženosť kancelárie.",
  hero: {
    title: "Advokát pre trestné právo v Bratislave a okolí",
    subtitle: "Trestné konanie je pre každého náročné. Pomôžeme vám zorientovať sa, chrániť vaše práva a postupovať premyslene. Diskrétne a bez poučovania.",
    ctaLabel: "Opísať vec",
    notice: "Trestné právo poskytujeme iba stálym klientom a po predchádzajúcej dohode. Dôvodom je vysoká pracovná vyťaženosť kancelárie. Ďakujeme za pochopenie.",
  },
  intro: {
    title: "Obhajoba a zastupovanie v trestnom konaní",
    text: "V trestnom konaní ide o dôležité veci: o povesť, rodinu, prácu a niekedy aj o slobodu. Našim stálym klientom poskytujeme obhajobu a zastupovanie v celom priebehu konania. Pri každom prípade začíname rovnako: pozorne vás vypočujeme, vysvetlíme vám, v akej fáze konania ste, a spolu určíme ďalší postup.",
  },
  checklist: {
    title: "Čo robiť, keď vás predvolá polícia alebo vás zadržia",
    items: [
      { title: "Zachovajte pokoj.", text: "Vyjadrenia v strese sa neskôr ťažko menia." },
      { title: "Zistite svoje postavenie.", text: "Pýtajte sa, či ste predvolaný ako svedok, podozrivý alebo obvinený. Od toho závisia vaše práva." },
      { title: "Máte právo na obhajcu.", text: "Poraďte sa s advokátom skôr, ako sa podrobne vyjadríte." },
      { title: "Obvinený má právo odoprieť výpoveď.", text: "Pri svedeckej výpovedi platia iné pravidlá." },
      { title: "Nepodpisujte protokol bez prečítania.", text: "Podpisujete len to, čomu rozumiete a s čím súhlasíte." },
    ],
  },
  services: {
    title: "S čím vám pomôžeme",
    items: [
      { title: "Obhajoba obvineného.", text: "V prípravnom konaní aj pred súdom, vrátane návrhov, sťažností a opravných prostriedkov." },
      { title: "Zastupovanie poškodeného.", text: "Uplatnenie nároku na náhradu škody v trestnom konaní a ochrana vašich práv ako poškodeného." },
      { title: "Pomoc rodine obvineného.", text: "Orientácia v situácii a zvolenie obhajcu v mene blízkej osoby." },
      { title: "Trestné oznámenia.", text: "Posúdenie veci a podanie trestného oznámenia. (OVERIŤ)" },
      { title: "Konania pred Špecializovaným trestným súdom.", text: "Obhajoba a zastupovanie v konaniach pred Špecializovaným trestným súdom v Banskej Bystrici. (OVERIŤ)" },
    ],
  },
  discretion: {
    title: "Diskrétnosť je samozrejmosť",
    text: "Advokát je zo zákona viazaný povinnosťou mlčanlivosti. To, čo nám poviete, zostáva medzi nami. Na konzultácii môžete otvorene povedať, ako sa veci skutočne majú.",
  },
  steps: [
    { title: "Ozvete sa nám.", text: "Stačí telefonát alebo krátka správa. Podrobnosti nemusíte písať, rozoberieme ich osobne." },
    { title: "Osobná konzultácia.", text: "Prejdeme situáciu a vysvetlíme vám, v akej fáze konania ste a aké máte možnosti." },
    { title: "Obhajoba alebo zastupovanie.", text: "Ak sa dohodneme na spolupráci, preberáme komunikáciu, lehoty a procesné kroky." },
  ],
  situations: {
    title: "Ak ste náš stály klient, ozvite sa nám, keď",
    items: [
      "Dostali ste predvolanie na políciu.",
      "Bolo vám vznesené obvinenie.",
      "Váš blízky bol zadržaný.",
      "Stali ste sa poškodeným trestným činom.",
    ],
  },
  faq: [
    { q: "Kedy si mám zvoliť obhajcu?", a: "Čo najskôr, ideálne skôr, ako sa vyjadríte alebo podpíšete protokol. Právo na obhajcu máte od začiatku trestného stíhania." },
    { q: "Musím na polícii vypovedať?", a: "Obvinený má právo odoprieť výpoveď. Svedok má povinnosť vypovedať, s určitými výnimkami, napríklad ak by výpoveďou spôsobil nebezpečenstvo trestného stíhania sebe alebo blízkej osobe. Preto je dôležité vedieť, v akom postavení ste." },
    { q: "Môže obhajcu zvoliť aj niekto z rodiny?", a: "Áno, obhajcu môžu v mene obvineného zvoliť aj niektoré blízke osoby." },
    { q: "Je moja komunikácia s advokátom dôverná?", a: "Áno, advokát je zo zákona viazaný povinnosťou mlčanlivosti." },
  ],
  related: ["dopravne-nehody", "spravne-pravo"],
  cta: {
    title: "Ste náš stály klient?",
    text: "Opíšte nám vec. Ozveme sa vám a dohodneme ďalší postup.",
    ctas: [],
  },
  meta: {
    title: "Advokát trestné právo Bratislava | JUDr. Pavlovič",
    description: "Obhajoba obvinených a zastupovanie poškodených v trestnom konaní. Poskytujeme iba stálym klientom a po predchádzajúcej dohode.",
    path: "/sluzby/trestne-pravo",
  },
} satisfies ServiceDetail;
