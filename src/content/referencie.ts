import { CONSULT_HREF, callCta } from "./01-pravidla";
import { pageSeo } from "./10-seo";
import type { CtaBand } from "./types";

export type Referencia = { text: string; autor: string; oblast: string };

/**
 * Referencie klientov (zverejnené s ich súhlasom). Prvé tri patria do ľavej bubliny,
 * ďalšie tri do pravej. Zatiaľ prázdne: bubliny sa zobrazia bez textu.
 */
export const referencie: Referencia[] = [
  { text: "", autor: "", oblast: "" },
  { text: "", autor: "", oblast: "" },
  { text: "", autor: "", oblast: "" },
  { text: "", autor: "", oblast: "" },
  { text: "", autor: "", oblast: "" },
  { text: "", autor: "", oblast: "" },
];

export const referenciePage = {
  meta: pageSeo.references,
  h1: "Referencie",
  intro: [
    "Dôvera klientov je pre nás meradlom našej práce. Za {rokyPraxe} rokov praxe sme pomohli vyriešiť viac ako 3 500 vecí, od zmlúv a sporov až po náročné životné situácie.",
    "Na tejto stránke uverejňujeme hodnotenia klientov, ktorí nám na to dali súhlas. V súlade s povinnou mlčanlivosťou advokáta neuvádzame podrobnosti ich vecí.",
  ],
  cta: {
    title: "Potrebujete poradiť?",
    text: "Opíšte nám Vašu situáciu. Povieme Vám, aké máte možnosti.",
    ctas: [
      { kind: "link", label: "Dohodnúť konzultáciu", href: CONSULT_HREF, variant: "primary" },
      callCta,
    ],
  } satisfies CtaBand,
};
