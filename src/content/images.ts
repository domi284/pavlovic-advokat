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
  timKancelaria: {
    file: "tim-kancelaria.jpg",
    alt: "Prázdna kancelária s pracovným stolom a prirodzeným svetlom",
    label: "prázdna kancelária",
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

  /* Služby (karta + hero služby, 3:2) */
  obchodnePravo: {
    file: "sluzba-obchodne-pravo.jpg",
    alt: "Moderná kancelárska budova zo skla a betónu",
    label: "moderná kancelárska architektúra",
  },
  obcianskePravo: {
    file: "sluzba-obcianske-pravo.jpg",
    alt: "Kľúče od domu položené na stole",
    label: "kľúče na stole, pokojný domov",
  },
  dopravneNehody: {
    file: "sluzba-dopravne-nehody.jpg",
    alt: "Cesta za súmraku so svetelnými stopami áut",
    label: "cesta za súmraku",
  },
  rodinnePravo: {
    file: "sluzba-rodinne-pravo.jpg",
    alt: "Pokojná izba s mäkkým svetlom z okna",
    label: "svetlo v izbe",
  },
  trestnePravo: {
    file: "sluzba-trestne-pravo.jpg",
    alt: "Kamenné stĺpy budovy v ostrých tieňoch",
    label: "kamenné stĺpy, tiene",
  },
  spravnePravo: {
    file: "sluzba-spravne-pravo.jpg",
    alt: "Fasáda úradnej budovy",
    label: "budova úradu",
  },
  dusevneVlastnictvo: {
    file: "sluzba-dusevne-vlastnictvo.jpg",
    alt: "Skice návrhov na pracovnom stole",
    label: "skice návrhu na stole",
  },
  patentovePravo: {
    file: "sluzba-patentove-pravo.jpg",
    alt: "Detail technického výkresu",
    label: "technický výkres",
  },
  kybernetickePravo: {
    file: "sluzba-kyberneticke-pravo.jpg",
    alt: "Serverovňa v tlmenom svetle",
    label: "serverovňa",
  },
  pracovnePravo: {
    file: "sluzba-pracovne-pravo.jpg",
    alt: "Prázdne moderné pracovisko so stolmi a stoličkami v dennom svetle",
    label: "prázdne pracovisko",
  },
} satisfies Record<string, ImageSlot>;
