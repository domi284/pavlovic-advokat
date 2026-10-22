import type { ImageSlot } from "./types";

export const images = {
  heroUvod: {
    file: "hero-uvod.jpg",
    alt: "Detail pracovného stola s perom a dokumentmi",
    label: "hero-uvod.jpg: stôl, pero, dokumenty",
  },
  nehody: {
    file: "oblast-nehody.jpg",
    alt: "Mestská cesta za súmraku so svetelnými stopami áut",
    label: "oblast-nehody.jpg: cesta za súmraku",
  },
  trestne: {
    file: "oblast-trestne.jpg",
    alt: "Kamenné stĺpy a schodisko inštitúcie v ostrých tieňoch",
    label: "oblast-trestne.jpg: kamenné stĺpy, schodisko",
  },
  obchodne: {
    file: "oblast-obchodne.jpg",
    alt: "Moderná kancelárska architektúra zo skla a betónu",
    label: "oblast-obchodne.jpg: moderná architektúra",
  },
  kniznica: {
    file: "kniznica.jpg",
    alt: "Regál s knihami v teplom svetle",
    label: "kniznica.jpg: regál s knihami",
  },
  kancelaria: {
    file: "kancelaria-detail.jpg",
    alt: "Detail interiéru kancelárie v dennom svetle",
    label: "kancelaria-detail.jpg: interiér kancelárie",
  },
  kamen: {
    file: "textura-kamen.jpg",
    alt: "",
    label: "textura-kamen.jpg: tmavý kameň",
  },
} satisfies Record<string, ImageSlot>;
