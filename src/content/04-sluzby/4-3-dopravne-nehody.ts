import { images } from "../images";
import type { ServiceDetail } from "../types";

export const s4_3_dopravneNehody = {
  block: "4.3",
  slug: "dopravne-nehody",
  name: "Dopravné nehody",
  image: images.nehody,
  cardDescription:
    "Po nehode sa naraz rieši zdravie, auto aj poisťovňa. Pomôžeme vám uplatniť nároky voči poisťovni a zodpovednej osobe a posúdime, či je ponuka poisťovne primeraná.",
  hero: {
    title: "Advokát pre dopravné nehody v Bratislave a okolí",
    subtitle:
      "Po nehode sa naraz rieši zdravie, auto, poisťovňa aj doklady. Pomôžeme vám zorientovať sa a uplatniť vaše nároky.",
  },
  intro: {
    title: "Keď sa po nehode nechcete s poisťovňou dohadovať sami",
    text:
      "Dopravná nehoda zasiahne zdravie, peniaze aj čas. Mnohí ľudia nevedia, na aké odškodnenie majú nárok, alebo prijmú prvú ponuku poisťovne bez toho, aby ju niekto posúdil. Iní riešia spor o to, kto nehodu zavinil. Pomáhame poškodeným vodičom, spolujazdcom, chodcom, cyklistom aj pozostalým. Posúdime vašu situáciu, vysvetlíme vám, čo môžete žiadať, a postaráme sa o komunikáciu s poisťovňou.",
  },
  checklist: {
    title: "Čo robiť hneď po dopravnej nehode",
    items: [
      { title: "Zdravie a bezpečnosť na prvom mieste.", text: "Pri zranení volajte záchranku (155 alebo 112) a zabezpečte miesto nehody." },
      { title: "Privolajte políciu (158).", text: "Pri zranení alebo väčšej škode je to nevyhnutné." },
      { title: "Zdokumentujte situáciu.", text: "Odfoťte vozidlá, ich polohu, poškodenie a okolie. Zapíšte si údaje druhého vodiča a kontakty svedkov." },
      { title: "Nepodpisujte to, čomu nerozumiete.", text: "Pred podpisom vyhlásenia o vine alebo dohody sa poraďte." },
      { title: "Dajte sa vyšetriť.", text: "Aj pri „drobnom“ zranení, následky sa môžu prejaviť neskôr." },
      { title: "Uschovajte všetky doklady.", text: "Lekárske správy, faktúry, potvrdenia o práceneschopnosti, komunikáciu s poisťovňou." },
    ],
    linkLead: "Máte otázky k vašej situácii?",
  },
  services: {
    title: "S čím vám pomôžeme",
    items: [
      { title: "Odškodnenie za ujmu na zdraví.", text: "Bolestné, sťaženie spoločenského uplatnenia, náklady na liečenie a strata na zárobku." },
      { title: "Škoda na vozidle a majetku.", text: "Uplatnenie nároku a posúdenie vyčíslenia škody." },
      { title: "Komunikácia s poisťovňou.", text: "Podanie nároku, posúdenie vyjadrení a ponúk poisťovne a postup, keď poisťovňa plnenie odmietne alebo skráti." },
      { title: "Spor o zavinenie.", text: "Keď poisťovňa alebo druhá strana spochybňuje priebeh nehody." },
      { title: "Pomoc pozostalým.", text: "Nároky blízkych osôb po smrteľnej nehode." },
      { title: "Neznámy alebo nepoistený vinník.", text: "Uplatnenie nároku z garančného fondu, ktorý spravuje Slovenská kancelária poisťovateľov. (OVERIŤ)" },
    ],
  },
  steps: [
    { title: "Opíšete nám, čo sa stalo.", text: "Zavoláte alebo napíšete. Stačí stručne: kedy a kde sa nehoda stala, kto bol zranený a čo vám zatiaľ oznámila poisťovňa." },
    { title: "Posúdime nárok a doklady.", text: "Pri konzultácii prejdeme lekárske správy, záznam o nehode a komunikáciu s poisťovňou. Vysvetlíme vám, na čo máte nárok a aké lehoty platia." },
    { title: "Uplatníme nárok.", text: "Pripravíme a podáme nárok, posúdime ponuku poisťovne a rokujeme o primeranom plnení. Ak je to potrebné, zastupujeme vás aj pred súdom." },
  ],
  situations: {
    title: "Kedy sa nám ozvať",
    items: [
      "Neviem, či mám nárok na odškodnenie.",
      "Poisťovňa mi ponúkla plnenie a neviem, či je primerané.",
      "Poisťovňa tvrdí, že nehodu som zavinil/a ja.",
      "Nehodu spôsobil vodič, ktorého sa nepodarilo zistiť.",
      "Môj blízky sa pri nehode zranil alebo zomrel.",
      "Poisťovňa mi plnenie odmietla alebo skrátila.",
    ],
  },
  faq: [
    { q: "Mám nárok na odškodnenie, ak som nehodu čiastočne zavinil aj ja?", a: "Spoluzavinenie nárok automaticky nevylučuje, no môže ovplyvniť jeho výšku. Všetko závisí od okolností nehody, preto je vhodné posúdiť konkrétnu situáciu." },
    { q: "Môžem sa obrátiť priamo na poisťovňu druhého vodiča?", a: "Áno, poškodený môže svoj nárok spravidla uplatniť priamo voči poisťovni, u ktorej je zodpovedný vodič poistený v rámci povinného zmluvného poistenia." },
    { q: "Poisťovňa mi ponúkla odškodné. Mám ho prijať?", a: "Odporúčame ponuku pred prijatím posúdiť, najmä pri zraneniach, pri ktorých sa všetky následky ešte nemusia prejaviť. Po podpise dohody sa na ňu už ťažko vracia." },
    { q: "Dokedy musím nárok uplatniť?", a: "Nároky sa premlčujú a lehoty sa môžu líšiť podľa druhu nároku. Preto s riešením neodkladajte." },
    { q: "Čo ak vinník ušiel alebo nemá poistenie?", a: "Aj v takom prípade môžu existovať spôsoby, ako nárok uplatniť. Záleží na konkrétnych okolnostiach nehody." },
  ],
  related: ["trestne-pravo", "obcianske-pravo"],
  cta: {
    title: "Po nehode nemusíte všetko riešiť sami",
    text: "Opíšte nám, čo sa stalo. Povieme vám, aké máte možnosti.",
    ctas: [],
  },
  meta: {
    title: "Advokát dopravné nehody Bratislava | JUDr. Pavlovič",
    description: "Pomoc po dopravnej nehode: odškodnenie za ujmu na zdraví, škoda na vozidle a komunikácia s poisťovňou. Dohodnite si konzultáciu.",
    path: "/sluzby/dopravne-nehody",
  },
} satisfies ServiceDetail;
