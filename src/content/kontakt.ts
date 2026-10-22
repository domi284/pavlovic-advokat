import { images } from "./images";
import type { Meta } from "./types";

export const kontakt = {
  meta: {
    title: "Kontakt | Advokát Bratislava Ružinov | JUDr. Pavlovič",
    description:
      "Kontakt na advokátsku kanceláriu JUDr. Ladislava Pavloviča, Ivanská cesta 32B, Bratislava Ružinov. Dohodnite si konzultáciu telefonicky alebo cez formulár.",
    path: "/kontakt",
  } satisfies Meta,
  h1: "Kontakt",
  subtitle: "Zavolajte alebo napíšte. Ozvem sa vám na kontakt, ktorý uvediete.",
  details: [
    { label: "Advokátska kancelária", value: "JUDr. Ladislav Pavlovič s. r. o." },
    { label: "Adresa", value: "Ivanská cesta 32B, 821 04 Bratislava – mestská časť Ružinov" },
    { label: "Telefón", value: "{{phone|DOPLNIŤ}}" },
    { label: "E-mail", value: "{{email|DOPLNIŤ}}" },
    { label: "Úradné hodiny", value: "{{hours|DOPLNIŤ}}" },
    {
      label: "Ako sa k nám dostanete",
      value: "{{directions|DOPLNIŤ: MHD zastávka, parkovanie, vchod/poschodie}}",
    },
  ],
  map: {
    title: "Mapa: Ivanská cesta 32B, 821 04 Bratislava",
    query: "Ivanská cesta 32B, 821 04 Bratislava",
  },
  image: images.kancelaria,
  form: {
    title: "Dohodnite si konzultáciu",
    intro: "Stačí vyplniť meno a telefón. Podrobnosti rozoberieme osobne.",
    fields: {
      name: "Meno a priezvisko",
      phone: "Telefón",
      email: "E-mail (nepovinné)",
      area: "S čím potrebujete pomôcť?",
      message: "Stručne opíšte situáciu (nepovinné)",
      messageHelp: "Neuvádzajte prosím citlivé podrobnosti. Rozoberieme ich osobne.",
      consent:
        "Súhlasím so spracovaním osobných údajov na účel vybavenia môjho dopytu. ([Zásady ochrany osobných údajov](/ochrana-osobnych-udajov))",
    },
    areas: [
      { value: "nehody", label: "Dopravná nehoda" },
      { value: "trestne", label: "Trestné právo" },
      { value: "obchodne", label: "Obchodné právo" },
      { value: "ine", label: "Iné" },
    ] as const,
    submit: "Odoslať dopyt",
    below: "Preferujete telefonát? Zavolajte na {{phone|DOPLNIŤ: telefón}}.",
    messages: {
      success: "Ďakujem, správu som prijal. Ozvem sa vám na uvedený kontakt.",
      error:
        "Správu sa nepodarilo odoslať. Skúste to prosím znova alebo zavolajte na {{phone|DOPLNIŤ: telefón}}.",
      required: "Toto pole je povinné.",
      phone: "Zadajte prosím platné telefónne číslo.",
      email: "Zadajte prosím platnú e-mailovú adresu.",
      consent: "Pre odoslanie je potrebný súhlas so spracovaním údajov.",
    },
  },
};
