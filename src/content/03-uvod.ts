import { CONSULT_HREF, callCta } from "./01-pravidla";
import { images } from "./images";
import { serviceDetailBySlug, serviceDetails } from "./04-sluzby";
import type { Cta, CtaBand, Faq, Item, Meta } from "./types";

export const about = {
  title: "JUDr. Ladislav Pavlovič",
  subtitle: "Advokát · Bratislava",
};

const cardImages = {
  "dopravne-nehody": images.nehody,
  "obchodne-pravo": images.obchodne,
  "obcianske-pravo": images.heroUvod,
  "rodinne-pravo": images.kniznica,
  "spravne-pravo": images.kancelaria,
  "dusevne-vlastnictvo": images.kniznica,
  "patentove-pravo": images.obchodne,
  "kyberneticke-pravo": images.trestne,
  "trestne-pravo": images.trestne,
};

export const home = {
  meta: {
    title: "Advokát Bratislava a okolie | JUDr. Ladislav Pavlovič",
    description:
      "Advokátska kancelária v Bratislave a okolí: dopravné nehody, zmluvy, rodinné, obchodné a ďalšie oblasti práva. Dohodnite si konzultáciu.",
    path: "/",
  } satisfies Meta,

  hero: {
    eyebrow: "Advokát · Bratislava a okolie",
    h1: "Advokát v Bratislave a okolí pre ľudí aj firmy",
    subtitle:
      "Pomôžeme vám pochopiť vašu situáciu, poznať možnosti a urobiť správny ďalší krok. Vecne, diskrétne a zrozumiteľne.",
    ctas: [
      { kind: "link", label: "Dohodnúť konzultáciu", href: CONSULT_HREF, variant: "primary" },
      callCta,
    ] satisfies Cta[],
    office: "Advokátska kancelária JUDr. Ladislav Pavlovič s. r. o. · Ružinov, Bratislava",
    image: images.heroUvod,
    points: [
      "{{yearsOfPractice|DOPLNIŤ: počet}} rokov praxe",
      "Člen Slovenskej advokátskej komory",
      "Pôsobnosť: celé západné Slovensko",
    ],
  },

  areas: {
    eyebrow: undefined,
    title: "Čomu sa venujeme",
    intro: "Pomáhame ľuďom aj firmám v deviatich oblastiach práva. Vyberte si tú, ktorá sa týka vašej situácie.",
    cards: serviceDetails.map((service) => ({
      title: service.name,
      text: service.cardDescription,
      link: { label: "Zistiť viac →", href: `/sluzby/${service.slug}` },
      image: cardImages[service.slug as keyof typeof cardImages],
      badge: service.slug === "trestne-pravo" ? "Iba pre stálych klientov" : undefined,
    })),
    numbers: [
      { value: "{{yearsOfPractice|DOPLNIŤ}}", label: "rokov praxe" },
      { value: "{{casesHandled|DOPLNIŤ}}", label: "vybavených vecí" },
      { value: "9", label: "oblastí práva" },
      { value: "Západné Slovensko", label: "pôsobnosť" },
    ],
    jurisdiction:
      "Zastupujeme klientov na celom západnom Slovensku a pred Špecializovaným trestným súdom v Banskej Bystrici.",
    allServices: { label: "Všetky služby →", href: "/sluzby" },
  },

  process: {
    eyebrow: undefined,
    title: "Od prvého telefonátu k jasnému plánu",
    intro: "Nemusíte vedieť, ako sa vaša vec volá právnicky. Stačí, keď nám poviete, čo sa stalo.",
    steps: [
      {
        title: "Ozvete sa nám.",
        text: "Zavoláte alebo vyplníte krátky formulár. Stačí stručne opísať, čo riešite, bez právnych pojmov a zbytočných detailov. Ozveme sa vám a dohodneme termín.",
      },
      {
        title: "Prvá konzultácia.",
        text: "Prejdeme vašu situáciu aj dokumenty. Vysvetlíme vám, kde stojíte, aké máte možnosti a čo vás čaká. Konzultácia je spoplatnená, jej podmienky vám oznámime vopred. (OVERIŤ)",
      },
      {
        title: "Postup a zastupovanie.",
        text: "Ak sa dohodneme na spolupráci, preberáme komunikáciu, listiny a lehoty. Vy sa môžete venovať svojmu životu a o každom dôležitom kroku od nás viete.",
      },
    ] satisfies Item[],
    cta: { kind: "link", label: "Dohodnúť konzultáciu", href: CONSULT_HREF, variant: "primary" } satisfies Cta,
  },

  about: {
    eyebrow: undefined,
    title: about.title,
    subtitle: about.subtitle,
    text: "Advokácii sa venujem {{yearsOfPractice|DOPLNIŤ: počet}} rokov a spolu s kolegami pomáhame ľuďom aj firmám v deviatich oblastiach práva. Pri každej veci vychádzam z jednoduchého princípu: klient potrebuje vedieť, kde stojí, čo ho čaká a čo je vhodné urobiť ďalej. Preto vysvetľujem zrozumiteľne, otvorene hovorím o možnostiach aj rizikách a nesľubujem nič, čo sa sľúbiť nedá.",
    facts: [
      { label: "Vzdelanie", value: "{{education|DOPLNIŤ: škola, rok, titul}}" },
      { label: "Prax", value: "{{yearsOfPractice|DOPLNIŤ: počet}} rokov v advokácii" },
      { label: "Slovenská advokátska komora", value: "Zápis č. {{sakNumber|DOPLNIŤ}}" },
    ],
    link: { label: "Viac o mne →", href: "/o-mne" },
  },

  principles: {
    eyebrow: undefined,
    title: "Ako pracujem",
    items: [
      { title: "Zrozumiteľne.", text: "Právnu situáciu vám vysvetlím jazykom, ktorému rozumiete, bez zbytočného žargónu." },
      { title: "Diskrétne.", text: "Všetko, čo mi povierite, je chránené povinnou mlčanlivosťou advokáta." },
      { title: "Zodpovedne.", text: "Dohodnuté termíny a lehoty sledujem sám, aby sa nič nepremeškalo." },
      { title: "Priamo.", text: "Komunikujete s advokátom, ktorý vašu vec rieši." },
    ] satisfies Item[],
    image: images.kniznica,
  },

  whyUs: {
    title: "Prečo my",
    intro: "Fakty namiesto sľubov.",
    items: [
      { title: "Viac oblastí na jednom mieste.", text: "Deväť oblastí práva pod jednou strechou. Keď sa vaša vec dotýka viacerých oblastí, nemusíte hľadať ďalšieho advokáta." },
      { title: "Overená prax.", text: "{{yearsOfPractice|DOPLNIŤ: počet}} rokov v advokácii a {{casesHandled|DOPLNIŤ: počet}} vybavených vecí. Skúsenosti, ktoré sa dajú doložiť, nie len opísať." },
      { title: "Celé západné Slovensko.", text: "Sídlime v Bratislave a klientov zastupujeme na celom západnom Slovensku aj pred Špecializovaným trestným súdom v Banskej Bystrici." },
      { title: "Jasný ďalší krok.", text: "Z konzultácie odchádzate s vysvetlením bez žargónu a s konkrétnym návrhom, čo urobiť ďalej." },
    ],
    link: { label: "Viac", href: "/preco-my" },
  },

  faq: {
    eyebrow: undefined,
    title: "Časté otázky",
    items: [
      serviceDetailBySlug["dopravne-nehody"].faq[0],
      serviceDetailBySlug["rodinne-pravo"].faq[0],
      serviceDetailBySlug["obchodne-pravo"].faq[1],
    ] satisfies Faq[],
    link: { label: "Všetky otázky a odpovede →", href: "/caste-otazky" },
  },

  cta: {
    title: "Neviete, ako ďalej? Začnime jedným rozhovorom.",
    text: "Opíšte nám, čo riešite. Povieme vám, aké máte možnosti a čo je rozumné urobiť ako prvé.",
    ctas: [
      { kind: "link", label: "Dohodnúť konzultáciu", href: CONSULT_HREF, variant: "primary" },
      callCta,
    ],
  } satisfies CtaBand,
};
