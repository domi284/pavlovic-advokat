import { home } from "./03-uvod";
import { serviceDetails } from "./04-sluzby";
import { s4_1_prehlad } from "./04-sluzby/4-1-prehlad";
import { s5_1_oMne } from "./05-o-mne";
import { s6_nasTim } from "./06-nas-tim";
import { s7_precoMy } from "./07-preco-my";
import { s8_kontakt } from "./08-kontakt";
import type { Meta } from "./types";

/** SEO title a meta popisy presne z časti 8 (zdroj je v content súbore každej stránky). */
export const pageSeo = {
  home: home.meta,
  services: s4_1_prehlad.meta,
  about: s5_1_oMne.meta,
  team: s6_nasTim.meta,
  whyUs: s7_precoMy.meta,
  references: {
    title: "Referencie | Advokátska kancelária JUDr. Pavlovič",
    description:
      "Hodnotenia klientov advokátskej kancelárie JUDr. Ladislava Pavloviča, LL.M. v Bratislave, zverejnené s ich súhlasom.",
    path: "/referencie",
  },
  contact: s8_kontakt.meta,
  faq: {
    title: "Časté otázky o advokátovi a konzultácii | JUDr. Pavlovič",
    description:
      "Odpovede na časté otázky o konzultácii s advokátom a o oblastiach práva, ktorým sa venujeme v Bratislave a okolí.",
    path: "/caste-otazky",
  },
  privacy: { title: "Ochrana osobných údajov | JUDr. Pavlovič", path: "/ochrana-osobnych-udajov" },
  cookies: { title: "Zásady používania cookies | JUDr. Pavlovič", path: "/cookies" },
} satisfies Record<string, Meta>;

export const serviceSeoBySlug = Object.fromEntries(
  serviceDetails.map((service) => [service.slug, service.meta]),
) as Record<string, Meta>;
