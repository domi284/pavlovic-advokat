import { CONSULT_HREF, callCta } from "./01-pravidla";
import { pageSeo } from "./10-seo";
import type { CtaBand } from "./types";

import type { StaticImageData } from "next/image";
import logoSlovenskaKonsolidacna from "../../public/images/referencie/01-slovenska-konsolidacna.png";
import logoEsaLogistika from "../../public/images/referencie/02-esa-logistika.png";
import logoKvapkaNadeje from "../../public/images/referencie/03-kvapka-nadeje.png";
import logoBluewave from "../../public/images/referencie/04-bluewave-development.png";
import logoRemprint from "../../public/images/referencie/05-remprint.png";
import logoCkMore from "../../public/images/referencie/06-ck-more.png";
import logoPelikan from "../../public/images/referencie/07-pelikan.png";
import logoChemos from "../../public/images/referencie/08-chemos-slovakia.svg";
import logoSecurityTech from "../../public/images/referencie/09-security-tech-servis-v2.png";

export type Referencia = {
  name: string;
  logo: StaticImageData;
  /**
   * Optické vyrovnanie veľkosti loga (predvolené 1). Násobí základnú výšku loga v boxe;
   * logo nikdy nepresiahne box (výšku ani šírku), takže > 1 pomôže len úzkym/štvorcovým logám.
   */
  scale?: number;
};

/**
 * Referencie = logá firiem a organizácií (recenzie zrušené na želanie klienta, iba logá).
 * Poradie je záväzné; na /referencie ľavá bublina strieda 1, 3, 5, 7, 9 a pravá 2, 4, 6, 8.
 */
export const referencie: Referencia[] = [
  { name: "Slovenská konsolidačná, a. s.", logo: logoSlovenskaKonsolidacna, scale: 1 },
  { name: "ESA logistika, s. r. o.", logo: logoEsaLogistika, scale: 1 },
  { name: "Nadácia Kvapka nádeje", logo: logoKvapkaNadeje, scale: 1.1 },
  { name: "Bluewave Development s. r. o.", logo: logoBluewave, scale: 1.3 },
  { name: "Remprint s. r. o.", logo: logoRemprint, scale: 0.95 },
  { name: "Cestovná kancelária MORE s. r. o.", logo: logoCkMore, scale: 1 },
  { name: "Pelikan s. r. o.", logo: logoPelikan, scale: 1 },
  { name: "Chemos Slovakia s. r. o.", logo: logoChemos, scale: 0.9 },
  { name: "Security Tech-Servis s. r. o.", logo: logoSecurityTech, scale: 1.05 },
];

/** Text nad logami na úvode (blok 3.1-referencie). */
export const referencieHome = {
  text: "Okrem množstva ďalších subjektov sme naše právne služby poskytli aj týmto spoločnostiam a organizáciám:",
  link: { href: "/referencie", label: "Referencie →" },
};

export const referenciePage = {
  meta: pageSeo.references,
  h1: "Referencie",
  intro: [
    "Za {rokyPraxe} rokov praxe sme vybavili viac ako 3 500 vecí pre občanov, firmy aj neziskové organizácie. Okrem množstva ďalších subjektov sme naše právne služby poskytli aj spoločnostiam a organizáciám uvedeným nižšie.",
    "Mená ostatných klientov nezverejňujeme. Mlčanlivosť je pre nás samozrejmosťou.",
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
