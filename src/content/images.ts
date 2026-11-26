import type { ImageSlot } from "./types";

/** Obrázkové sloty v /public/images. `label` je iba interný popis námetu (na webe sa nezobrazuje). */
export const images = {
  /* Skutočné fotky od klienta (/public/images/foto), bez „editorial“ filtra */
  fotoHero: {
    file: "foto/01-hero-pavlovic.jpg",
    alt: "JUDr. Ladislav Pavlovič, LL.M. pri práci vo svojej kancelárii",
    label: "pri stole s perom",
    position: "center 35%",
    natural: true,
  },
  fotoPortret: {
    file: "foto/02-pavlovic-portret.jpg",
    alt: "Portrét JUDr. Ladislava Pavloviča, LL.M.",
    label: "portrét",
    position: "center 30%",
    natural: true,
  },
  fotoAkoPracujem: {
    file: "foto/03-ako-pracujem.jpg",
    alt: "JUDr. Ladislav Pavlovič, LL.M. pri štúdiu spisu v kancelárii",
    label: "štúdium spisu pri regáli",
    position: "55% 12%",
    natural: true,
  },
  fotoSluzbyHero: {
    file: "foto/04-sluzby-hero.jpg",
    alt: "JUDr. Ladislav Pavlovič, LL.M. počas konzultácie s klientom",
    label: "konzultácia s klientom",
    position: "center 45%",
    natural: true,
  },
  fotoOMneHero: {
    file: "foto/05-o-mne-hero.jpg",
    alt: "JUDr. Ladislav Pavlovič, LL.M. za pracovným stolom",
    label: "za pracovným stolom",
    position: "center 40%",
    natural: true,
  },
  fotoKancelaria1: {
    file: "foto/06-kancelaria-1.jpg",
    alt: "Priestory advokátskej kancelárie – recepcia a zasadačka",
    label: "recepcia a zasadačka",
    natural: true,
  },
  fotoKancelaria2: {
    file: "foto/07-kancelaria-2.jpg",
    alt: "Priestory advokátskej kancelárie – pracovisko",
    label: "pracovisko",
    natural: true,
  },
  fotoPrecoMy: {
    file: "foto/08-preco-my.jpg",
    alt: "Zbierka zákonov v knižnici kancelárie",
    label: "Zbierka zákonov",
    position: "center 45%",
    natural: true,
  },
  fotoKontaktBudova: {
    file: "foto/09-kontakt-budova.jpg",
    alt: "Budova na Ivanskej ceste 32B, šípka označuje vchod do kancelárie",
    label: "budova so šípkou ku vchodu",
    position: "63% center",
    natural: true,
  },

  heroUvod: {
    file: "hero-uvod.jpg",
    alt: "Detail pracovného stola s perom a dokumentmi",
    label: "stôl, pero, dokumenty",
  },
  sluzbyUvod: {
    file: "sluzby-uvod.jpg",
    alt: "Regál s knihami a spismi v teplom svetle",
    label: "regál s knihami",
  },
  precoMy: {
    file: "preco-my.jpg",
    alt: "Schodisko s prirodzeným svetlom a architektonickým detailom",
    label: "schodisko a svetlo",
  },
  kniznica: {
    file: "kniznica.jpg",
    alt: "Regál s knihami v teplom svetle",
    label: "regál s knihami",
  },
  kancelaria: {
    file: "kancelaria-detail.jpg",
    alt: "Detail interiéru kancelárie v dennom svetle",
    label: "interiér kancelárie",
  },
  kamen: {
    file: "textura-kamen.jpg",
    alt: "",
    label: "tmavý kameň",
  },

  /*
   * Služby (karta 3:2 / 4:3 + hero služby 3:2 / 4:5) – stock fotky Unsplash (Unsplash License: zadarmo aj
   * na komerčné použitie, bez povinného uvedenia autora). Súbory v /public/images/sluzby/<slug>.jpg,
   * stiahnuté ručne z https://images.unsplash.com/<ID>?w=2400&q=85&fm=jpg. `stock` = filter ako pri
   * skutočných fotkách (saturate 0.92, contrast 1.03), rozloženie ako pri ostatných obrázkoch.
   */
  obchodnePravo: {
    // Unsplash: photo-1603796846097-bee99e4a601f
    file: "sluzby/obchodne-pravo.jpg",
    alt: "Podpisovanie zmluvy",
    label: "podpis zmluvy",
    position: "55% center",
    stock: true,
  },
  obcianskePravo: {
    // Unsplash: photo-1643804926339-e94f0a655185
    file: "sluzby/obcianske-pravo.jpg",
    alt: "Kľúče na stole",
    label: "kľúče na stole",
    position: "45% center",
    stock: true,
  },
  dopravneNehody: {
    // Unsplash: photo-1597328290883-50c5787b7c7e
    file: "sluzby/dopravne-nehody.jpg",
    alt: "Poškodené auto po dopravnej nehode",
    label: "svetlomet poškodeného auta",
    position: "35% center",
    stock: true,
  },
  rodinnePravo: {
    // Unsplash: photo-1758227365187-016878604d94
    file: "sluzby/rodinne-pravo.jpg",
    alt: "Drevené figúrky rodiny s domčekom",
    label: "figúrky rodiny a domček",
    position: "center",
    stock: true,
  },
  trestnePravo: {
    // Unsplash: photo-1768839722927-df0ef3188f6d
    file: "sluzby/trestne-pravo.jpg",
    alt: "Socha spravodlivosti s váhami",
    label: "socha s váhami",
    position: "42% center",
    stock: true,
  },
  spravnePravo: {
    // Unsplash: photo-1619418602850-35ad20aa1700
    file: "sluzby/spravne-pravo.jpg",
    alt: "Pečiatka na úradnom dokumente",
    label: "pečiatka na dokumente",
    position: "62% center",
    stock: true,
  },
  dusevneVlastnictvo: {
    // Unsplash: photo-1572044162444-ad60f128bdea
    file: "sluzby/dusevne-vlastnictvo.jpg",
    alt: "Dizajnér pri práci so vzorkovníkom farieb",
    label: "dizajnér a vzorkovník",
    position: "center",
    stock: true,
  },
  patentovePravo: {
    // Unsplash: photo-1769147339214-076740872485
    file: "sluzby/patentove-pravo.jpg",
    alt: "Strojové súčiastky na technickom výkrese",
    label: "súčiastky na výkrese",
    position: "center",
    stock: true,
  },
  kybernetickePravo: {
    // Unsplash: photo-1774898989484-0b9becf69efb
    file: "sluzby/kyberneticke-pravo.jpg",
    alt: "Zámok na klávesnici počítača",
    label: "zámok na klávesnici",
    position: "68% center",
    stock: true,
  },
  pracovnePravo: {
    // Unsplash: photo-1758520144437-f068ecaf0d83
    file: "sluzby/pracovne-pravo.jpg",
    alt: "Pracovný pohovor v kancelárii",
    label: "pracovný pohovor",
    position: "66% 25%",
    stock: true,
  },
} satisfies Record<string, ImageSlot>;
