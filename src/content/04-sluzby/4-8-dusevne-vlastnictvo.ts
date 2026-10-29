import { images } from "../images";
import type { ServiceDetail } from "../types";

export const s4_8_dusevneVlastnictvo = {
  block: "4.8",
  slug: "dusevne-vlastnictvo",
  name: "Právo duševného vlastníctva",
  image: images.kniznica,
  cardDescription:
    "Chcete ochrániť názov firmy, logo alebo svoju tvorbu? Pomôžeme vám s ochrannou známkou, licenčnými zmluvami a pri porušení vašich práv.",
  hero: {
    title: "Advokát pre duševné vlastníctvo v Bratislave a okolí",
    subtitle: "Názov, logo, dizajn aj autorské dielo majú hodnotu. Pomôžeme vám ich chrániť, správne licencovať a brániť, keď ich niekto použije bez súhlasu.",
  },
  intro: {
    title: "Chráňte to, čo ste vytvorili",
    text: "Duševné vlastníctvo sú výsledky tvorivej práce: názvy, logá, dizajny, texty, fotografie či softvér. Pomáhame podnikateľom, tvorcom a startupom, ktorí chcú mať istotu, že ich značku alebo dielo nemôže voľne použiť niekto iný. Vysvetlíme vám, čo je chránené automaticky, čo treba zaregistrovať a ako na to. Ak ide o vynález alebo technické riešenie, pozrite si stránku [Patentové právo](/sluzby/patentove-pravo).",
  },
  services: {
    title: "S čím vám pomôžeme",
    items: [
      { title: "Ochranné známky.", text: "Ochranná známka je zapísané označenie, napríklad názov alebo logo, ktoré odlišuje vaše výrobky či služby od iných. Pomôžeme vám s prihláškou aj s preverením podobných známok." },
      { title: "Autorské právo.", text: "Autorské právo chráni dielo, ako je text, fotografia alebo softvér. Vzniká automaticky vytvorením diela, bez registrácie." },
      { title: "Licenčné zmluvy.", text: "Licencia je povolenie použiť dielo alebo známku za dohodnutých podmienok. Pripravíme ju alebo posúdime." },
      { title: "Prevod ochrannej známky.", text: "Zmluvy o prevode alebo licencovaní známky, napríklad pri predaji firmy." },
      { title: "Dizajny.", text: "Ochrana vzhľadu výrobku zápisom dizajnu. (OVERIŤ)" },
      { title: "Porušenie práv.", text: "Postup, keď niekto bez súhlasu používa vašu značku alebo dielo." },
    ],
  },
  steps: [
    { title: "Opíšete nám, čo chcete chrániť.", text: "Povedzte nám, o aký názov, logo alebo dielo ide a ako ho používate. Prineste aj zmluvy, ktoré ste k nemu uzavreli." },
    { title: "Navrhneme spôsob ochrany.", text: "Vysvetlíme vám, či je vaše dielo chránené automaticky alebo treba podať prihlášku, a odporučíme vhodný rozsah ochrany." },
    { title: "Postaráme sa o realizáciu.", text: "Pripravíme prihlášku, licenčnú zmluvu alebo výzvu pri porušení práv a sprevádzame vás celým konaním." },
  ],
  situations: {
    title: "Kedy sa nám ozvať",
    items: [
      "Zakladáte značku a chcete si chrániť jej názov.",
      "Niekto používa podobný názov alebo logo ako vy.",
      "Chcete niekomu povoliť používať vašu tvorbu.",
      "Dali ste si vytvoriť logo, web alebo softvér a chcete mať jasné, kto ich smie používať.",
      "Dostali ste výzvu, že porušujete cudzie práva.",
    ],
  },
  faq: [
    { q: "Ako si ochrániť názov firmy?", a: "Zápis obchodného mena chráni najmä názov firmy ako podnikateľa. Ak chcete chrániť názov ako značku vašich výrobkov alebo služieb, je vhodné zapísať ochrannú známku." },
    { q: "Čo je ochranná známka?", a: "Je to zapísané označenie, napríklad slovo, logo alebo ich kombinácia, ktoré odlišuje vaše výrobky alebo služby od iných. Zapisuje ju Úrad priemyselného vlastníctva SR, prípadne úrad Európskej únie pre celú Úniu." },
    { q: "Kto vlastní autorské práva k dielu?", a: "Autorom je vždy človek, ktorý dielo vytvoril. Pri dielach vytvorených v zamestnaní alebo na objednávku je dôležité, kto ich smie a ako používať. To upravuje zákon a zmluva." },
  ],
  related: ["patentove-pravo", "obchodne-pravo"],
  cta: {
    title: "Chcete chrániť svoju značku alebo tvorbu?",
    text: "Opíšte nám, o čo ide. Navrhneme vhodný spôsob ochrany.",
    ctas: [],
  },
  meta: {
    title: "Advokát duševné vlastníctvo Bratislava | JUDr. Pavlovič",
    description: "Ochranné známky, autorské právo a licenčné zmluvy. Pomôžeme vám chrániť názov, logo aj tvorivú prácu. Dohodnite si konzultáciu.",
    path: "/sluzby/dusevne-vlastnictvo",
  },
} satisfies ServiceDetail;
