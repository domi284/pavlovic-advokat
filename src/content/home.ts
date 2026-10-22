import { CONSULT_HREF, callCta } from "./common";
import { images } from "./images";
import { nehody } from "./nehody";
import { obchodne } from "./obchodne";
import { trestne } from "./trestne";
import type { Cta, CtaBand, Faq, Item, Meta } from "./types";

function faqOf(page: typeof nehody | typeof trestne | typeof obchodne) {
  const section = page.sections.find((s) => s.type === "faq");
  if (!section || section.type !== "faq") throw new Error(`FAQ chýba: ${page.key}`);
  return section.items as Faq[];
}

/** Odpovede sa preberajú z podstránok (rovnaký objekt, nie kópia textu). */
const answerFrom = (page: Parameters<typeof faqOf>[0], index: number) => faqOf(page)[index].a;

export const about = {
  title: "JUDr. Ladislav Pavlovič",
  subtitle: "Advokát · Bratislava",
};

export const home = {
  meta: {
    title: "Advokát Bratislava Ružinov | JUDr. Ladislav Pavlovič",
    description:
      "Advokátska kancelária v Bratislave: dopravné nehody, trestné právo a obchodné právo. Dohodnite si konzultáciu s JUDr. Ladislavom Pavlovičom.",
    path: "/",
  } satisfies Meta,

  hero: {
    eyebrow: about.subtitle,
    h1: "Advokát v Bratislave pre dopravné nehody, trestné a obchodné právo",
    subtitle:
      "Vysvetlím vám, v akej ste situácii, aké máte možnosti a aký je ďalší krok. Vecne, diskrétne a zrozumiteľne.",
    ctas: [
      { kind: "link", label: "Dohodnúť konzultáciu", href: CONSULT_HREF, variant: "primary" },
      callCta,
    ] satisfies Cta[],
    office: "Advokátska kancelária JUDr. Ladislav Pavlovič s. r. o. · Ružinov, Bratislava",
    image: images.heroUvod,
    points: [
      "Dlhoročné skúsenosti v advokácii",
      "Priama komunikácia s advokátom",
      "Povinná mlčanlivosť zo zákona",
    ],
  },

  areas: {
    eyebrow: "S čím vám môžem pomôcť",
    title: "S čím vám môžem pomôcť",
    intro: "Vyberte situáciu, ktorá je vám najbližšia.",
    cards: [
      {
        title: "Mali ste dopravnú nehodu",
        text: "Pomôžem vám uplatniť nároky voči poisťovni a zodpovednej osobe, od zdravia až po škodu na vozidle.",
        link: { label: "Dopravné nehody →", href: "/dopravne-nehody" },
        image: images.nehody,
      },
      {
        title: "Čelíte trestnému konaniu",
        text: "Zastupujem obvinených aj poškodených, od prvého kontaktu s políciou až po súd. Diskrétne a bez poučovania.",
        link: { label: "Trestné právo →", href: "/trestne-pravo" },
        image: images.trestne,
      },
      {
        title: "Riešite zmluvu, spor alebo firmu",
        text: "Právne zázemie pre podnikateľov: zmluvy, spoločnosti, pohľadávky a obchodné spory.",
        link: { label: "Obchodné právo →", href: "/obchodne-pravo" },
        image: images.obchodne,
      },
    ],
  },

  process: {
    eyebrow: "Ako to prebieha",
    title: "Ako spolupráca prebieha",
    steps: [
      {
        title: "Ozvete sa mi.",
        text: "Zavoláte alebo napíšete a stručne opíšete, čo sa stalo. Nemusíte poznať právne pojmy.",
      },
      {
        title: "Prvá konzultácia.",
        text: "Prejdeme vašu situáciu, vysvetlím vám možnosti a navrhnem ďalší postup.",
      },
      {
        title: "Postup a zastupovanie.",
        text: "Ak sa dohodneme na spolupráci, postarám sa o komunikáciu, listiny a lehoty, aby ste sa mohli venovať svojmu životu.",
      },
    ] satisfies Item[],
    cta: { kind: "link", label: "Dohodnúť konzultáciu", href: CONSULT_HREF, variant: "primary" } satisfies Cta,
  },

  about: {
    eyebrow: "O advokátovi",
    title: about.title,
    subtitle: about.subtitle,
    text: "Advokácii sa venujem dlhodobo a mám za sebou dlhoročné skúsenosti v dopravných nehodách, trestnom a obchodnom práve. Pri každej veci vychádzam z toho, že klient chce predovšetkým jasnú odpoveď: kde stojí, čo ho čaká a čo je vhodné urobiť teraz.",
    link: { label: "Viac o mne →", href: "/o-mne" },
  },

  principles: {
    eyebrow: "Na čom si zakladám",
    title: "Ako pracujem",
    items: [
      {
        title: "Zrozumiteľne.",
        text: "Právnu situáciu vám vysvetlím jazykom, ktorému rozumiete, bez zbytočného žargónu.",
      },
      {
        title: "Diskrétne.",
        text: "Všetko, čo mi povierite, je chránené povinnou mlčanlivosťou advokáta.",
      },
      {
        title: "Zodpovedne.",
        text: "Dohodnuté termíny a lehoty sledujem sám, aby sa nič nepremeškalo.",
      },
      {
        title: "Priamo.",
        text: "Komunikujete s advokátom, ktorý vašu vec rieši.",
      },
    ] satisfies Item[],
    image: images.kniznica,
  },

  faq: {
    eyebrow: "Časté otázky",
    title: "Časté otázky",
    items: [
      {
        q: "Mám nárok na odškodnenie, ak som nehodu čiastočne zavinil aj ja?",
        a: answerFrom(nehody, 0),
      },
      { q: "Musím na polícii vypovedať?", a: answerFrom(trestne, 1) },
      { q: "Potrebujem advokáta pri každej zmluve?", a: answerFrom(obchodne, 1) },
    ] satisfies Faq[],
    link: { label: "Všetky otázky a odpovede →", href: "/caste-otazky" },
  },

  cta: {
    title: "Neviete, ako ďalej? Opíšte mi situáciu.",
    text: "Povedzte mi, čo riešite. Poviem vám, aké máte možnosti a aký je rozumný ďalší krok.",
    ctas: [
      { kind: "link", label: "Dohodnúť konzultáciu", href: CONSULT_HREF, variant: "primary" },
      callCta,
    ],
  } satisfies CtaBand,
};
