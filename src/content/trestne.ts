import { callCta } from "./common";
import { images } from "./images";
import type { AreaPage } from "./types";

const consult = "/kontakt?oblast=trestne#konzultacia";

export const trestne = {
  key: "trestne",
  meta: {
    title: "Advokát trestné právo Bratislava | JUDr. Pavlovič",
    description:
      "Obhajoba obvinených a zastupovanie poškodených v trestnom konaní v Bratislave. Diskrétne, vecne a zrozumiteľne. Dohodnite si konzultáciu.",
    path: "/trestne-pravo",
  },
  name: "Trestné právo",
  image: images.trestne,
  hero: {
    h1: "Advokát pre trestné právo v Bratislave",
    subtitle:
      "Trestné konanie je pre každého náročné. Pomôžem vám zorientovať sa, chrániť vaše práva a postupovať premyslene. Diskrétne a bez poučovania.",
    ctas: [
      { kind: "link", label: "Dohodnúť diskrétnu konzultáciu", href: consult, variant: "primary" },
      callCta,
    ],
  },
  sections: [
    {
      type: "checklist",
      eyebrow: "Čo robiť pri predvolaní alebo zadržaní",
      title: "Čo robiť, keď vás predvolá polícia alebo vás zadržia",
      items: [
        {
          title: "Zachovajte pokoj.",
          text: "Vyjadrenia v strese sa neskôr ťažko menia.",
        },
        {
          title: "Zistite svoje postavenie.",
          text: "Pýtajte sa, či ste volaný ako svedok, podozrivý alebo obvinený. Od toho závisia vaše práva.",
        },
        {
          title: "Máte právo na obhajcu.",
          text: "Poraďte sa s advokátom skôr, ako sa podrobne vyjadríte.",
        },
        {
          title: "Obvinený má právo odoprieť výpoveď.",
          text: "Pri svedeckej výpovedi platia iné pravidlá.",
        },
        {
          title: "Nepodpisujte protokol bez prečítania.",
          text: "Podpisujete len to, čomu rozumiete a s čím súhlasíte.",
        },
      ],
      link: {
        lead: "Potrebujete sa poradiť?",
        label: "Dohodnúť konzultáciu →",
        href: consult,
      },
    },
    {
      type: "intro",
      title: "Obhajoba a zastupovanie v trestnom konaní",
      text: "V trestnom konaní ide o dôležité veci: o povesť, rodinu, prácu a niekedy aj o slobodu. Vediem obhajobu obvinených a zastupujem poškodených v celom priebehu konania. Pri každom prípade začínam rovnako: pozorne vás vypočujem, vysvetlím vám, v akej fáze konania ste, a spolu určíme ďalší postup.",
    },
    {
      type: "services",
      eyebrow: "S čím vám pomôžem",
      title: "S čím vám pomôžem",
      items: [
        {
          title: "Obhajoba obvineného.",
          text: "V prípravnom konaní aj pred súdom, vrátane vypracovania návrhov, sťažností a opravných prostriedkov.",
        },
        {
          title: "Zastupovanie poškodeného.",
          text: "Uplatnenie nároku na náhradu škody v trestnom konaní a ochrana vašich práv ako poškodeného.",
        },
        {
          title: "Pomoc rodine obvineného.",
          text: "Orientácia v situácii, komunikácia s orgánmi činnými v trestnom konaní, výber obhajcu v mene blízkej osoby.",
        },
        {
          title: "Trestné oznámenia.",
          text: "Posúdenie veci a podanie trestného oznámenia.",
        },
        {
          title: "Väzba a procesné rozhodnutia.",
          text: "Zastupovanie pri návrhoch na vzatie do väzby a pri sťažnostiach voči rozhodnutiam.",
        },
        {
          title: "Žiadosti po odsúdení.",
          text: "Napríklad podmienečné prepustenie, zahladenie odsúdenia či obnova konania (OVERIŤ).",
        },
      ],
    },
    {
      type: "discretion",
      title: "Diskrétnosť je samozrejmosť",
      text: "Advokát je zo zákona viazaný povinnosťou mlčanlivosti. To, čo mi poviete, zostáva medzi nami. Na prvej konzultácii môžete otvorene povedať, ako sa veci skutočne majú.",
    },
    {
      type: "process",
      eyebrow: "Ako to prebieha",
      title: "Ako to prebieha",
      steps: [
        {
          title: "Ozvete sa mi.",
          text: "Stačí telefonát alebo krátka správa. Podrobnosti nemusíte písať, rozoberieme ich osobne.",
        },
        {
          title: "Osobná konzultácia.",
          text: "Prejdeme situáciu, vysvetlím vám, v akej fáze konania ste, a aké máte možnosti.",
        },
        {
          title: "Obhajoba alebo zastupovanie.",
          text: "Ak sa dohodneme na spolupráci, preberám komunikáciu, lehoty a procesné kroky.",
        },
      ],
    },
    {
      type: "faq",
      eyebrow: "Často kladené otázky",
      title: "Často kladené otázky",
      items: [
        {
          q: "Kedy si mám zvoliť obhajcu?",
          a: "Čo najskôr, ideálne skôr, ako sa vyjadríte alebo podpíšete protokol. Právo na obhajcu máte od začiatku trestného stíhania.",
        },
        {
          q: "Musím na polícii vypovedať?",
          a: "Obvinený má právo odoprieť výpoveď. Svedok má povinnosť vypovedať, s určitými výnimkami, napríklad ak by výpoveďou vystavil seba alebo blízku osobu trestnému stíhaniu. Preto je dôležité vedieť, v akom postavení ste.",
        },
        {
          q: "Môže obhajcu zvoliť aj niekto z rodiny?",
          a: "Áno, obhajcu môžu v mene obvineného zvoliť aj niektoré blízke osoby.",
        },
        {
          q: "Aký je rozdiel medzi prípravným a súdnym konaním?",
          a: "Prípravné konanie vedie polícia pod dohľadom prokurátora a zisťuje, či došlo k trestnému činu a kto sa ho dopustil. Súdne konanie nasleduje po podaní obžaloby, kedy o veci rozhoduje súd.",
        },
        {
          q: "Zastupujete aj poškodených?",
          a: "Áno, zastupujem aj poškodených, vrátane uplatnenia nároku na náhradu škody v trestnom konaní. (OVERIŤ)",
        },
        {
          q: "Je moja komunikácia s advokátom dôverná?",
          a: "Áno, advokát je zo zákona viazaný povinnosťou mlčanlivosti.",
        },
      ],
    },
  ],
  cta: {
    title: "Nemusíte na to byť sami",
    text: "Ozvite sa mi. Povieme si, v akej situácii ste a čo je rozumné urobiť ako prvé.",
    ctas: [
      { kind: "link", label: "Dohodnúť diskrétnu konzultáciu", href: consult, variant: "primary" },
      callCta,
    ],
  },
} satisfies AreaPage;
