import { serviceDetails } from "./04-sluzby";
import { images } from "./images";
import type { Meta } from "./types";

export const s8_kontakt = {
  meta: {
    title: "Kontakt | Advokát Bratislava Ružinov | JUDr. Pavlovič",
    description:
      "Kontakt na advokátsku kanceláriu JUDr. Ladislava Pavloviča, LL.M., Ivanská cesta 32B, Bratislava Ružinov. Dohodnite si konzultáciu.",
    path: "/kontakt",
  } satisfies Meta,
  h1: "Kontakt",
  subtitle: "Zavolajte alebo napíšte. Ozveme sa Vám na kontakt, ktorý uvediete, a podrobnosti rozoberieme osobne.",
  details: [
    { label: "Advokátska kancelária", value: "JUDr. Ladislav Pavlovič s. r. o." },
    { label: "Adresa", value: "Ivanská cesta 32B, 821 04 Bratislava – mestská časť Ružinov" },
    { label: "Telefón", value: "{{phone|DOPLNIŤ: telefón}}" },
    { label: "E-mail", value: "{{email|DOPLNIŤ: e-mail}}" },
    { label: "Úradné hodiny", value: "{{hours|DOPLNIŤ: úradné hodiny}}" },
    { label: "Ako sa k nám dostanete", value: "{{directions|DOPLNIŤ: zastávka MHD, parkovanie, vchod a poschodie}}" },
  ],
  map: {
    title: "Mapa: Ivanská cesta 32B, 821 04 Bratislava",
    query: "Ivanská cesta 32B, 821 04 Bratislava",
  },
  image: images.kancelaria,
  form: {
    title: "Dohodnite si konzultáciu",
    intro: "Stačí vyplniť meno a telefón. Podrobnosti rozoberieme osobne.",
    feeNotice: "Konzultácia je spoplatnená. Jej podmienky Vám oznámime vopred, pri dohadovaní termínu.",
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
    /** Oblasti v poradí `servicesOrder` + „Iné“. */
    areas: [
      ...serviceDetails.map((service) => ({
        value: service.slug,
        label: service.slug === "trestne-pravo" ? `${service.name} (iba pre stálych klientov)` : service.name,
      })),
      { value: "ine", label: "Iné" },
    ],
    submit: "Odoslať dopyt",
    below: "Preferujete telefonát? Zavolajte na {{phone|DOPLNIŤ: telefón}}.",
    messages: {
      success: "Ďakujeme, správu sme prijali. Ozveme sa Vám na uvedený kontakt.",
      error:
        "Správu sa nepodarilo odoslať. Skúste to prosím znova alebo zavolajte na {{phone|DOPLNIŤ: telefón}}.",
      required: "Toto pole je povinné.",
      phone: "Zadajte prosím platné telefónne číslo.",
      email: "Zadajte prosím platnú e-mailovú adresu.",
      consent: "Pre odoslanie je potrebný súhlas so spracovaním údajov.",
    },
  },
};
