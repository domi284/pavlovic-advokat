import { CONSULT_HREF, callCta } from "./01-pravidla";
import { images } from "./images";
import type { CtaBand, Meta } from "./types";

export const s5_1_oMne = {
  meta: {
    title: "JUDr. Ladislav Pavlovič | Advokát Bratislava",
    description:
      "JUDr. Ladislav Pavlovič, advokát v Bratislave. Zrozumiteľne, diskrétne a s dôrazom na lehoty. Dohodnite si konzultáciu.",
    path: "/o-mne",
  } satisfies Meta,
  h1: "JUDr. Ladislav Pavlovič",
  subtitle: "Advokát · Bratislava",
  paragraphs: [
    "Volám sa Ladislav Pavlovič a advokácii sa venujem {{yearsOfPractice|DOPLNIŤ: počet}} rokov. Spolu s kolegami pomáhame ľuďom a firmám v deviatich oblastiach práva, od dopravných nehôd a obchodného práva až po rodinné, správne či kybernetické právo.",
    "Pri každej veci vychádzam z jednoduchého princípu: klient potrebuje vedieť, kde stojí, čo ho čaká a čo je vhodné urobiť ako ďalšie. Preto vám situáciu vysvetlím zrozumiteľne, otvorene poviem, aké sú možnosti a riziká, a nebudem vám sľubovať nič, čo sa sľúbiť nedá.",
    "Svoju prácu považujem za zodpovednosť voči ľuďom, ktorí sa na mňa obracajú v dôležitých chvíľach. Preto sledujem lehoty, komunikujem priamo a o každom dôležitom kroku vás informujem. To, čo mi povierite, chránim v rámci povinnej mlčanlivosti advokáta.",
  ],
  facts: [
    { label: "Prax", value: "{{yearsOfPractice|DOPLNIŤ: počet}} rokov v advokácii" },
    { label: "Vybavené veci", value: "{{casesHandled|DOPLNIŤ: počet}}" },
    { label: "Vzdelanie", value: "{{education|DOPLNIŤ: škola, rok ukončenia, titul JUDr.}}" },
    { label: "Slovenská advokátska komora", value: "zápis č. {{sakNumber|DOPLNIŤ}}" },
    { label: "Oblasti zamerania", value: "9 oblastí práva · [Služby](/sluzby)" },
    { label: "Jazyky", value: "{{languages|DOPLNIŤ}}" },
    { label: "Pôsobnosť", value: "celé západné Slovensko, Špecializovaný trestný súd v Banskej Bystrici" },
    { label: "Kancelária", value: "Ivanská cesta 32B, 821 04 Bratislava, Ružinov" },
  ],
  timelineTitle: "Profesijná dráha",
  timeline: [
    "[DOPLNIŤ: rok] · [DOPLNIŤ: míľnik, napr. ukončenie štúdia]",
    "[DOPLNIŤ: rok] · [DOPLNIŤ: míľnik, napr. zápis do zoznamu advokátov]",
    "[DOPLNIŤ: rok] · [DOPLNIŤ: míľnik, napr. založenie kancelárie]",
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
