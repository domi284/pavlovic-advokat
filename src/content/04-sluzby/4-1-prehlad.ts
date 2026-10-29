import { CONSULT_HREF, callCta } from "../01-pravidla";
import type { CtaBand, Meta } from "../types";

export const s4_1_prehlad = {
  meta: {
    title: "Služby advokátskej kancelárie Bratislava | JUDr. Pavlovič",
    description:
      "Deväť oblastí práva, ktorým sa venujeme: od dopravných nehôd a zmlúv až po rodinné a kybernetické právo. Dohodnite si konzultáciu.",
    path: "/sluzby",
  } satisfies Meta,
  title: "Služby",
  intro:
    "Venujeme sa deviatim oblastiam práva, s ktorými sa ľudia a firmy stretávajú najčastejšie. Pri každej veci začíname rovnako: vypočujeme si vás, vysvetlíme vám situáciu zrozumiteľne a navrhneme ďalší postup. Kancelária sídli v Bratislave a klientov zastupuje na celom západnom Slovensku.",
  cta: {
    title: "Neviete, kam vaša vec patrí?",
    text: "Opíšte nám situáciu. Povieme vám, ako k nej pristúpiť.",
    ctas: [
      { kind: "link", label: "Dohodnúť konzultáciu", href: CONSULT_HREF, variant: "primary" },
      callCta,
    ],
  } satisfies CtaBand,
};
