import { CONSULT_HREF, callCta } from "./01-pravidla";
import { images } from "./images";
import type { CtaBand, Meta } from "./types";

export const s5_1_oMne = {
  meta: {
    title: "JUDr. Ladislav Pavlovič, LL.M. | Advokát Bratislava",
    description:
      "JUDr. Ladislav Pavlovič, LL.M., advokát v Bratislave. Zrozumiteľne, diskrétne a s dôrazom na lehoty. Dohodnite si konzultáciu.",
    path: "/o-mne",
  } satisfies Meta,
  h1: "JUDr. Ladislav Pavlovič, LL.M.",
  subtitle: "Advokát · Bratislava",
  paragraphs: [
    "Volám sa Ladislav Pavlovič a advokácii sa venujem {rokyPraxe} rokov. Spolu s kolegami pomáhame ľuďom a firmám v 10 oblastiach práva, od dopravných nehôd a obchodného práva až po rodinné, správne či kybernetické právo.",
    "Pri každej veci vychádzam z jednoduchého princípu: klient potrebuje vedieť, v akej situácii sa nachádza, čo ho môže čakať a čo je vhodné urobiť ako ďalšie. Preto Vám situáciu vysvetlím zrozumiteľne, otvorene poviem, aké sú možnosti a riziká, a nebudem Vám sľubovať nič, čo sa sľúbiť nedá.",
    "Svoju prácu považujem za zodpovednosť voči ľuďom, ktorí sa na mňa obracajú v dôležitých chvíľach. Preto sledujem lehoty, komunikujem priamo a o každom dôležitom kroku Vás informujem. To, čo mi poviete, chránim v rámci povinnej mlčanlivosti advokáta.",
  ],
  facts: [
    { label: "Prax", value: "{rokyPraxe} rokov v advokácii" },
    { label: "Vybavené veci", value: "3 500+" },
    { label: "Vzdelanie", value: "Právnická fakulta Univerzity Komenského v Bratislave (1990), JUDr., LL.M." },
    { label: "Slovenská advokátska komora", value: "zápis č. 448" },
    { label: "Oblasti zamerania", value: "10 oblastí práva · [Služby](/sluzby)" },
    { label: "Jazyky v rámci kancelárie", value: "slovenský, ruský, anglický, nemecký" },
    { label: "Pôsobnosť", value: "Bratislava a západné Slovensko, Špecializovaný trestný súd (Pezinok, pracovisko Banská Bystrica)" },
    { label: "Kancelária", value: "Ivanská cesta 32B, 821 04 Bratislava, Ružinov" },
  ],
  timelineTitle: "Profesijná dráha",
  timeline: [
    "1990 · Začiatok pôsobenia v advokácii, najskôr ako advokátsky koncipient.",
    "1995 · Úspešne absolvovaná advokátska skúška a zápis do zoznamu advokátov Slovenskej advokátskej komory.",
    "1995 · Založenie samostatnej advokátskej kancelárie.",
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
