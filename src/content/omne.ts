import { CONSULT_HREF, callCta } from "./common";
import { about } from "./home";
import { images } from "./images";
import type { CtaBand, Meta } from "./types";

export const omne = {
  meta: {
    title: "JUDr. Ladislav Pavlovič | Advokát Bratislava",
    description:
      "JUDr. Ladislav Pavlovič, advokát v Bratislave. Dlhoročné skúsenosti v dopravných nehodách, trestnom a obchodnom práve. Dohodnite si konzultáciu.",
    path: "/o-mne",
  } satisfies Meta,
  h1: about.title,
  subtitle: about.subtitle,
  /** Verzia A, vecná (Verzia B sa nepoužíva) */
  paragraphs: [
    "Volám sa Ladislav Pavlovič a advokácii sa venujem dlhodobo. Mám dlhoročné skúsenosti v troch oblastiach, v ktorých sa na mňa klienti najčastejšie obracajú: dopravné nehody, trestné právo a obchodné právo.",
    "Pri každej veci vychádzam z jednoduchého princípu: klient potrebuje vedieť, kde stojí, čo ho čaká a čo je vhodné urobiť ako ďalšie. Preto vám situáciu vysvetlím zrozumiteľne, otvorene poviem, aké sú možnosti a riziká, a nebudem vám sľubovať nič, čo sa sľúbiť nedá.",
    "Svoju prácu považujem za zodpovednosť voči ľuďom, ktorí sa na mňa obracajú v dôležitých chvíľach. Preto sledujem lehoty, komunikujem priamo a chránim to, čo mi povierite, v rámci povinnej mlčanlivosti advokáta.",
  ],
  facts: [
    { label: "Oblasti", value: "dopravné nehody · trestné právo · obchodné právo" },
    { label: "Skúsenosti", value: "dlhoročné skúsenosti v advokácii" },
    { label: "Vzdelanie", value: "{{education|DOPLNIŤ: škola, rok ukončenia, titul JUDr.}}" },
    {
      label: "Profesijné oprávnenie",
      value: "advokát zapísaný v Slovenskej advokátskej komore, č. {{sakNumber|DOPLNIŤ}}",
    },
    { label: "Jazyky", value: "{{languages|DOPLNIŤ}}" },
    { label: "Kancelária", value: "Ivanská cesta 32B, 821 04 Bratislava, Ružinov" },
  ],
  image: images.kniznica,
  cta: {
    title: "Spoznajme sa pri konzultácii",
    ctas: [
      { kind: "link", label: "Dohodnúť konzultáciu", href: CONSULT_HREF, variant: "primary" },
      callCta,
    ],
  } satisfies CtaBand,
};
