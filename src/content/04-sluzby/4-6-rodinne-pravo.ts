import { images } from "../images";
import type { ServiceDetail } from "../types";

export const s4_6_rodinnePravo = {
  block: "4.6",
  slug: "rodinne-pravo",
  name: "Rodinné právo",
  image: images.kniznica,
  cardDescription:
    "Rozvod, starostlivosť o deti či výživné patria k najcitlivejším životným situáciám. Pomôžeme vám ich riešiť pokojne, diskrétne a s ohľadom na deti.",
  hero: {
    title: "Advokát pre rodinné právo v Bratislave a okolí",
    subtitle: "Rozvod, deti, výživné a majetok. Pomôžeme vám prejsť náročným obdobím pokojne, s jasným plánom a s ohľadom na to, čo je dobré pre vaše deti.",
  },
  intro: {
    title: "Keď sa mení rodina",
    text: "Rozpad vzťahu zasiahne celú rodinu. Okrem emócií treba vyriešiť aj praktické otázky: kde budú žiť deti, aké bude výživné a ako sa rozdelí spoločný majetok. Postupujeme pokojne a vecne. Ak je to možné, hľadáme dohodu, pretože býva rýchlejšia a pre deti šetrnejšia ako dlhý spor pred súdom. Všetko, čo nám poviete, zostáva chránené povinnou mlčanlivosťou advokáta.",
  },
  services: {
    title: "S čím vám pomôžeme",
    items: [
      { title: "Rozvod manželstva.", text: "Príprava návrhu, zastupovanie v konaní a pomoc pri dohode o podmienkach." },
      { title: "Starostlivosť o deti a styk.", text: "Úprava toho, komu súd deti zverí, a ako bude upravený kontakt s druhým rodičom." },
      { title: "Výživné.", text: "Určenie, zvýšenie alebo zníženie výživného pre dieťa, prípadne aj medzi manželmi." },
      { title: "Vyporiadanie spoločného majetku.", text: "Rozdelenie bezpodielového spoluvlastníctva manželov dohodou alebo na súde." },
      { title: "Určenie a zapretie otcovstva.", text: "Zastupovanie v konaní o určení alebo zapretí otcovstva. (OVERIŤ)" },
      { title: "Osvojenie.", text: "Pomoc a sprevádzanie počas konania o osvojení. (OVERIŤ)" },
    ],
  },
  steps: [
    { title: "Pokojný rozhovor.", text: "Na konzultácii si vypočujeme vašu situáciu bez súdenia. Zistíme, čo je pre vás a pre deti najdôležitejšie." },
    { title: "Jasný plán.", text: "Vysvetlíme vám, ako konanie prebieha, čo bude súd posudzovať a aké máte možnosti. Spolu zvážime, či je reálna dohoda s druhou stranou." },
    { title: "Dohoda alebo zastupovanie.", text: "Pripravíme návrhy a dohody, komunikujeme s druhou stranou a zastupujeme vás pred súdom. Vždy s ohľadom na záujem detí." },
  ],
  situations: {
    title: "Kedy sa nám ozvať",
    items: [
      "Zvažujete rozvod a neviete, kde začať.",
      "S druhým rodičom sa neviete dohodnúť na starostlivosti o deti.",
      "Druhý rodič neplatí výživné.",
      "Zmenili sa pomery a výživné už nezodpovedá realite.",
      "Riešite rozdelenie majetku po rozvode.",
    ],
  },
  faq: [
    { q: "Ako dlho trvá rozvod?", a: "Závisí najmä od toho, či sa manželia dohodnú a či majú maloleté deti. Ak súd rozhoduje aj o deťoch alebo je vec sporná, konanie trvá dlhšie. Presnejší odhad vám dáme po posúdení vašej situácie." },
    { q: "Ako sa určuje výživné?", a: "Súd prihliada na odôvodnené potreby dieťaťa a na schopnosti, možnosti a majetkové pomery rodičov. Výživné sa dá neskôr zmeniť, ak sa podstatne zmenia pomery." },
    { q: "Kedy je možná striedavá starostlivosť?", a: "Súd môže zveriť dieťa do striedavej starostlivosti, ak sú obaja rodičia spôsobilí sa oň starať a ak je to v záujme dieťaťa. Rozhodujúci je vždy záujem dieťaťa, nie želanie rodičov." },
    { q: "Musíme ísť na súd, aj keď sa dohodneme?", a: "O rozvode a o úprave pomerov k maloletým deťom vždy rozhoduje súd. Dohoda rodičov však konanie výrazne zjednoduší a urýchli." },
  ],
  related: ["obcianske-pravo", "spravne-pravo"],
  cta: {
    title: "Urobme prvý krok spolu",
    text: "Opíšte nám svoju situáciu. Pokojne a dôverne.",
    ctas: [],
  },
  meta: {
    title: "Advokát rodinné právo Bratislava | JUDr. Pavlovič",
    description: "Rozvod, starostlivosť o deti, výživné a vyporiadanie majetku manželov. Pokojne, diskrétne a s ohľadom na deti. Dohodnite si konzultáciu.",
    path: "/sluzby/rodinne-pravo",
  },
} satisfies ServiceDetail;
