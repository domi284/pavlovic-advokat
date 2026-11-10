import { CONSULT_HREF, callCta } from "./01-pravidla";
import { images } from "./images";
import { serviceDetails } from "./04-sluzby";
import { CRIMINAL_BADGE } from "./services";
import type { Cta, CtaBand, Faq, Item, Meta } from "./types";

export const about = {
  title: "JUDr. Ladislav Pavlovič, LL.M.",
  subtitle: "Advokát · Bratislava",
};

export const home = {
  meta: {
    title: "Advokát Bratislava a okolie | JUDr. Ladislav Pavlovič, LL.M.",
    description:
      "Advokátska kancelária v Bratislave a okolí: dopravné nehody, zmluvy, rodinné, obchodné a ďalšie oblasti práva. Dohodnite si konzultáciu.",
    path: "/",
  } satisfies Meta,

  hero: {
    eyebrow: "Advokát · Bratislava a okolie",
    h1: "Riešime Vaše problémy so zákonom.",
    subtitle:
      "Pomôžeme Vám pochopiť Vašu situáciu, poznať možnosti a urobiť správny ďalší krok. Vecne, diskrétne a zrozumiteľne.",
    ctas: [
      { kind: "link", label: "Dohodnúť konzultáciu", href: CONSULT_HREF, variant: "primary" },
      callCta,
    ] satisfies Cta[],
    office: "Advokátska kancelária JUDr. Ladislav Pavlovič s. r. o. · Ružinov, Bratislava",
    image: images.heroUvod,
    points: [
      "{rokyPraxe} rokov praxe",
      "Člen Slovenskej advokátskej komory",
      "Pôsobnosť: Bratislava a západné Slovensko",
    ],
  },

  areas: {
    eyebrow: undefined,
    title: "Čomu sa venujeme",
    intro: "Pomáhame ľuďom aj firmám v 10 oblastiach práva. Vyberte si tú, ktorá sa týka Vašej situácie.",
    /** Karty v poradí `servicesOrder`, text z `cardDescription` každej služby. */
    cards: serviceDetails.map((service) => ({
      title: service.name,
      text: service.cardDescription,
      link: { label: "Zistiť viac →", href: `/sluzby/${service.slug}` },
      image: service.image,
      badge: service.slug === "trestne-pravo" ? CRIMINAL_BADGE : undefined,
    })),
    numbers: [
      { value: "{rokyPraxe}", label: "rokov praxe" },
      { value: "3 500+", label: "vybavených vecí" },
      { value: "10", label: "oblastí práva" },
      { value: "Bratislava a západné Slovensko", label: "pôsobnosť" },
    ],
    jurisdiction:
      "Zastupujeme klientov v Bratislave a na celom západnom Slovensku, avšak podľa vecnej a miestnej príslušnosti súdov, klientov zastupujeme na celom Slovensku.",
    allServices: { label: "Všetky služby →", href: "/sluzby" },
  },

  process: {
    eyebrow: undefined,
    title: "Od prvého telefonátu k jasnému plánu",
    intro: "Nemusíte vedieť, ako sa Vaša vec volá právnicky. Stačí, keď nám poviete, čo sa stalo.",
    steps: [
      {
        title: "Ozvete sa nám.",
        text: "Zavoláte alebo vyplníte krátky formulár. Stačí stručne opísať, aký máte problém, bez právnych pojmov. Ozveme sa Vám a dohodneme si najbližší možný termín.",
      },
      {
        title: "Prvá konzultácia.",
        text: "Prejdeme Vašu situáciu aj dokumenty, tieto zanalyzujeme a vyhodnotíme. Následne Vám vysvetlíme, aká je Vaša situácia a aké máte možnosti a čo Vás môže čakať. Konzultácia je spoplatnená, jej podmienky Vám oznámime vopred.",
      },
      {
        title: "Postup a zastupovanie.",
        text: "Ak sa dohodneme na spolupráci, podpíšeme plnomocenstvo a následne preberáme komunikáciu s protistranou, sledujeme lehoty, preberáme listiny. Vy sa môžete venovať svojmu životu a o každom dôležitom kroku od nás viete vopred, tento Vám vždy vysvetlíme.",
      },
    ] satisfies Item[],
    cta: { kind: "link", label: "Dohodnúť konzultáciu", href: CONSULT_HREF, variant: "primary" } satisfies Cta,
  },

  about: {
    eyebrow: undefined,
    title: about.title,
    subtitle: about.subtitle,
    text: "Advokácii sa venujem od roku 1990, t. j. {rokyPraxe} rokov a spolu s kolegami pomáhame ľuďom aj firmám v 10 oblastiach práva. Pri každej veci vychádzam z jednoduchého princípu: klient potrebuje vedieť, v akej situácii sa nachádza, čo ho môže čakať a čo je vhodné urobiť ďalej, aby boli odvrátené alebo minimalizované prípadné hrozby pre neho. Preto vysvetľujem zrozumiteľne, otvorene hovorím o možnostiach aj rizikách a nesľubujem nič, čo sa sľúbiť nedá.",
    facts: [
      { label: "Vzdelanie", value: "Právnická fakulta Univerzity Komenského v Bratislave (1990), JUDr., LL.M." },
      { label: "Prax", value: "{rokyPraxe} rokov v advokácii" },
      { label: "Slovenská advokátska komora", value: "zápis č. 448" },
    ],
    link: { label: "Viac o mne →", href: "/o-mne" },
  },

  principles: {
    eyebrow: undefined,
    title: "Ako pracujem",
    items: [
      { title: "Zrozumiteľne.", text: "Právnu situáciu Vám vysvetlím jazykom, ktorému rozumiete, bez zbytočného právnického žargónu." },
      { title: "Diskrétne.", text: "Všetko, čo mi poviete, je chránené povinnou mlčanlivosťou advokáta, toto je základný princíp zachovania dôvery medzi klientom a advokátom." },
      { title: "Zodpovedne.", text: "Dohodnuté termíny a lehoty sledujem sám, aby sa nič nepremeškalo." },
      { title: "Priamo.", text: "Komunikujete vždy priamo s advokátom, ktorý Vašu vec rieši. Dlhodobo spolupracujem s preverenými kolegami a advokátmi." },
    ] satisfies Item[],
    image: images.kniznica,
  },

  whyUs: {
    title: "Prečo my",
    intro: "Fakty namiesto sľubov.",
    items: [
      { title: "Viac oblastí na jednom mieste.", text: "10 oblastí práva pod jednou strechou. Keď sa Vaša vec dotýka viacerých oblastí, nemusíte hľadať ďalšieho advokáta." },
      { title: "Overená prax.", text: "{rokyPraxe} rokov v advokácii a za ten čas viac ako 3 500 vybavených vecí. Skúsenosti, ktoré sa dajú doložiť, nie len opísať." },
      { title: "Celé západné Slovensko.", text: "Sídlime v Bratislave. Zastupujeme klientov v Bratislave a na celom západnom Slovensku, avšak podľa vecnej a miestnej príslušnosti súdov, klientov zastupujeme na celom Slovensku." },
      { title: "Jasný ďalší krok.", text: "Z konzultácie odchádzate s vysvetlením bez právnického žargónu a s konkrétnym návrhom riešenia, čo urobiť ďalej." },
    ],
    link: { label: "Viac", href: "/preco-my" },
  },

  faq: {
    eyebrow: undefined,
    title: "Časté otázky",
    items: [
      {
        q: "Mám nárok na odškodnenie, ak som nehodu čiastočne zavinil aj ja?",
        a: "Spoluzavinenie nárok automaticky nevylučuje, no môže ovplyvniť jeho výšku. Všetko závisí od okolností nehody, preto je vhodné posúdiť konkrétnu situáciu.",
      },
      {
        q: "Ako dlho trvá rozvod?",
        a: "Závisí najmä od toho, či sa manželia dohodnú a či majú maloleté deti. Ak súd rozhoduje aj o deťoch alebo je vec sporná, konanie trvá dlhšie. Presnejší odhad Vám dáme po posúdení Vašej situácie.",
      },
      {
        q: "Potrebujem advokáta pri každej zmluve?",
        a: "Nie vždy. Pri dlhodobých, hodnotnejších alebo rizikovejších zmluvách je však posúdenie pred podpisom vhodné, lebo opraviť chybu po podpise býva náročnejšie.",
      },
    ] satisfies Faq[],
    link: { label: "Všetky otázky a odpovede →", href: "/caste-otazky" },
  },

  cta: {
    title: "Neviete, ako ďalej? Začnime jedným rozhovorom.",
    text: "Opíšte nám Váš problém. Povieme Vám, aké máte možnosti a čo je rozumné urobiť ako prvé, nastavíme správne postupnosť krokov.",
    ctas: [
      { kind: "link", label: "Dohodnúť konzultáciu", href: CONSULT_HREF, variant: "primary" },
      callCta,
    ],
  } satisfies CtaBand,
};
