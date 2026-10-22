import { callCta } from "./common";
import { images } from "./images";
import type { AreaPage } from "./types";

const consult = "/kontakt?oblast=nehody#konzultacia";

export const nehody = {
  key: "nehody",
  meta: {
    title: "Advokát dopravné nehody Bratislava | JUDr. Pavlovič",
    description:
      "Pomoc po dopravnej nehode v Bratislave: odškodnenie za ujmu na zdraví, škoda na vozidle, komunikácia s poisťovňou. Dohodnite si konzultáciu.",
    path: "/dopravne-nehody",
  },
  name: "Dopravné nehody",
  image: images.nehody,
  hero: {
    h1: "Advokát pre dopravné nehody v Bratislave",
    subtitle:
      "Po nehode sa naraz rieši zdravie, auto, poisťovňa aj doklady. Pomôžem vám zorientovať sa a uplatniť vaše nároky.",
    ctas: [
      { kind: "link", label: "Dohodnúť konzultáciu k nehode", href: consult, variant: "primary" },
      callCta,
    ],
  },
  sections: [
    {
      type: "checklist",
      eyebrow: "Čo robiť hneď po nehode",
      title: "Čo robiť hneď po dopravnej nehode",
      items: [
        {
          title: "Zdravie a bezpečnosť na prvom mieste.",
          text: "Pri zranení volajte záchranku (155 alebo 112) a zabezpečte miesto nehody.",
        },
        {
          title: "Privolajte políciu (158).",
          text: "Pri zranení alebo väčšej škode je to nevyhnutné.",
        },
        {
          title: "Zdokumentujte situáciu.",
          text: "Odfoťte vozidlá, ich polohu, poškodenie a okolie. Zapíšte si údaje druhého vodiča a kontakty svedkov.",
        },
        {
          title: "Nepodpisujte to, čomu nerozumiete.",
          text: "Pred podpisom vyhlásenia o vine alebo dohody sa poraďte.",
        },
        {
          title: "Dajte sa vyšetriť.",
          text: "Aj pri „drobnom“ zranení, následky sa môžu prejaviť neskôr.",
        },
        {
          title: "Uschovajte všetky doklady.",
          text: "Lekárske správy, faktúry, potvrdenia o práceneschopnosti, komunikáciu s poisťovňou.",
        },
      ],
      link: {
        lead: "Máte otázky k vašej situácii?",
        label: "Dohodnúť konzultáciu →",
        href: consult,
      },
    },
    {
      type: "services",
      eyebrow: "S čím vám pomôžem",
      title: "S čím vám pomôžem",
      items: [
        {
          title: "Odškodnenie za ujmu na zdraví.",
          text: "Bolestné, sťaženie spoločenského uplatnenia, náklady na liečenie a strata na zárobku.",
        },
        {
          title: "Škoda na vozidle a majetku.",
          text: "Uplatnenie nároku a posúdenie vyčíslenia škody.",
        },
        {
          title: "Komunikácia s poisťovňou.",
          text: "Podanie nároku, posúdenie vyjadrení a ponúk poisťovne, odvolanie voči rozhodnutiu.",
        },
        {
          title: "Spor o zavinenie.",
          text: "Keď poisťovňa alebo druhá strana spochybňuje priebeh nehody.",
        },
        {
          title: "Pomoc pozostalým.",
          text: "Nároky blízkych osôb po smrteľnej nehode.",
        },
        {
          title: "Trestné konanie po nehode.",
          text: "Zastupovanie poškodeného, ale aj vodiča, voči ktorému sa vedie trestné konanie. Viac na stránke [Trestné právo](/trestne-pravo).",
        },
      ],
    },
    {
      type: "situations",
      eyebrow: "Kedy ma osloviť",
      title: "Kedy sa mi oplatí ozvať",
      items: [
        "Neviem, či mám nárok na odškodnenie.",
        "Poisťovňa mi ponúkla plnenie a neviem, či je primerané.",
        "Poisťovňa tvrdí, že nehodu som zavinil/a ja.",
        "Nehodu spôsobil vodič, ktorého sa nepodarilo zistiť.",
        "Môj blízky sa pri nehode zranil alebo zomrel.",
        "Poisťovňa mi plnenie odmietla alebo skrátila.",
      ],
      cta: { kind: "link", label: "Opísať mi situáciu", href: consult, variant: "primary" },
    },
    {
      type: "process",
      eyebrow: "Ako to prebieha",
      title: "Ako to prebieha",
      steps: [
        {
          title: "Opíšete mi, čo sa stalo.",
          text: "Zavoláte alebo napíšete. Stačí stručne.",
        },
        {
          title: "Posúdim vašu situáciu.",
          text: "Vysvetlím vám možnosti, lehoty a ďalší postup.",
        },
        {
          title: "Postupujem podľa dohody.",
          text: "Komunikácia s poisťovňou, zhromaždenie dokladov a, ak je to potrebné, konanie na súde.",
        },
      ],
    },
    {
      type: "faq",
      eyebrow: "Často kladené otázky",
      title: "Často kladené otázky",
      items: [
        {
          q: "Mám nárok na odškodnenie, ak som nehodu čiastočne zavinil aj ja?",
          a: "Spoluzavinenie nárok automaticky nevylučuje, no môže ovplyvniť jeho výšku. Všetko závisí od okolností nehody, preto je vhodné posúdiť konkrétnu situáciu.",
        },
        {
          q: "Môžem sa obrátiť priamo na poisťovňu druhého vodiča?",
          a: "Áno, poškodený môže svoj nárok spravidla uplatniť priamo voči poisťovni, u ktorej je zodpovedný vodič poistený v rámci povinného zmluvného poistenia.",
        },
        {
          q: "Poisťovňa mi ponúkla odškodné. Mám ho prijať?",
          a: "Odporúčam ponuku pred prijatím posúdiť, najmä pri zraneniach, pri ktorých sa všetky následky nemusia ešte prejaviť. Po podpise dohody sa na ňu už ťažko vracia.",
        },
        {
          q: "Aké škody môžem uplatniť?",
          a: "Podľa okolností ide o škodu na vozidle a majetku, náklady na liečenie, bolestné, sťaženie spoločenského uplatnenia, stratu na zárobku. Pri smrteľnej nehode vznikajú nároky aj blízkym osobám.",
        },
        {
          q: "Dokedy musím nárok uplatniť?",
          a: "Nároky sa premlčujú a lehoty sa môžu líšiť podľa druhu nároku. Preto s riešením neodkladajte.",
        },
        {
          q: "Čo ak vinník ušiel alebo nemá poistenie?",
          a: "Aj v takom prípade môžu existovať spôsoby, ako nárok uplatniť. Záleží na konkrétnych okolnostiach nehody.",
        },
      ],
    },
  ],
  cta: {
    title: "Po nehode nemusíte všetko riešiť sami",
    text: "Opíšte mi, čo sa stalo. Poviem vám, aké máte možnosti.",
    ctas: [
      { kind: "link", label: "Dohodnúť konzultáciu k nehode", href: consult, variant: "primary" },
      callCta,
    ],
  },
} satisfies AreaPage;
