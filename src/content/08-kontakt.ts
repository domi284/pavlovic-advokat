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
  ],
  /** Blok „Ako sa k nám dostanete“ (data-doc="8-ako-sa-k-nam-dostanete"), zobrazuje sa pri fotke budovy. */
  directions: {
    title: "Ako sa k nám dostanete",
    points: [
      { icon: "parking" as const, text: "Pre klientov 4 vlastné parkovacie miesta." },
      {
        icon: "accessibility" as const,
        text: "Právne služby poskytujeme vo vlastných nových priestoroch, prístupných bezbariérovo priamo na prízemí, tzv. vchod z ulice.",
      },
    ],
    route:
      "Sme strategicky umiestnení tak, že sme priamo dostupní z diaľničného privádzača Bratislava – Žilina aj Bratislava – Viedeň – Budapešť. Na hociktoré miesto v Bratislave je dostupnosť aj v plnej premávke max. do 25 minút vďaka priamej prístupnosti k mestským obchvatom.",
  },
  map: {
    title: "Mapa: Ivanská cesta 32B, 821 04 Bratislava",
    query: "Ivanská cesta 32B, 821 04 Bratislava",
  },
  image: images.fotoKontaktBudova,
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
    submitting: "Odosiela sa…",
    /** Pod tlačidlom; bez povinného checkboxu (právny základ: kroky pred uzavretím zmluvy). */
    privacyNote:
      "Odoslaním formulára beriete na vedomie [informácie o spracúvaní osobných údajov](/ochrana-osobnych-udajov).",
    below: "Preferujete telefonát? Zavolajte na {{phone|DOPLNIŤ: telefón}}.",
    messages: {
      success: "Ďakujeme, Vašu správu sme prijali. Ozveme sa Vám spravidla do 1 pracovného dňa.",
      error:
        "Správu sa nepodarilo odoslať. Skúste to prosím znova alebo nás kontaktujte priamo: zavolajte na {{phone|DOPLNIŤ: telefón}} alebo napíšte na {{email|DOPLNIŤ: e-mail}}.",
      turnstileFailed: "Overenie sa nepodarilo, skúste to prosím znova.",
      turnstilePending: "Počkajte prosím, kým sa dokončí overenie nad tlačidlom, a odošlite formulár znova.",
      rateLimited:
        "Z Vášho pripojenia sme za krátky čas prijali priveľa správ. Skúste to prosím o niekoľko minút alebo nám zavolajte na {{phone|DOPLNIŤ: telefón}}.",
      tooLong: "Text je príliš dlhý.",
      required: "Toto pole je povinné.",
      phone: "Zadajte prosím platné telefónne číslo.",
      email: "Zadajte prosím platnú e-mailovú adresu.",
    },
  },
};
