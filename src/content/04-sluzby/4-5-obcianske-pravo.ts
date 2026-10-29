import { images } from "../images";
import type { ServiceDetail } from "../types";

export const s4_5_obcianskePravo = {
  block: "4.5",
  slug: "obcianske-pravo",
  name: "Občianske právo",
  image: images.heroUvod,
  cardDescription:
    "Kupujete byt, riešite spor so susedom alebo dedičstvo? Pripravíme a posúdime zmluvy a zastúpime vás v majetkových sporoch aj pri náhrade škody.",
  hero: {
    title: "Advokát pre občianske právo v Bratislave a okolí",
    subtitle: "Zmluvy, nehnuteľnosti, spory a náhrada škody. Pomôžeme vám vyriešiť situácie, s ktorými sa človek stretne v súkromnom živote.",
  },
  intro: {
    title: "Čo patrí do občianskeho práva",
    text: "Občianske právo upravuje vzťahy medzi ľuďmi v súkromnom živote: majetok, zmluvy, náhradu škody či dedenie. Nepatria sem rodinné veci, ako je rozvod, ani podnikanie, ktoré riešime v rámci rodinného a obchodného práva. Ľudia sa na nás najčastejšie obracajú, keď kupujú alebo predávajú nehnuteľnosť, keď im niekto spôsobil škodu alebo keď sa nevedia dohodnúť so susedom či spoluvlastníkom.",
  },
  services: {
    title: "S čím vám pomôžeme",
    items: [
      { title: "Zmluvy.", text: "Príprava a posúdenie kúpnych, darovacích, nájomných a ďalších zmlúv." },
      { title: "Nehnuteľnosti.", text: "Prevody bytov, domov a pozemkov, návrh na vklad do katastra a vzťahy medzi spoluvlastníkmi." },
      { title: "Susedské a majetkové spory.", text: "Spory o užívanie pozemkov a spoločných vecí či o vrátenie požičaných peňazí." },
      { title: "Náhrada škody.", text: "Uplatnenie náhrady, keď vám niekto spôsobil škodu na majetku alebo zdraví." },
      { title: "Ochrana osobnosti.", text: "Postup pri zásahu do cti, dobrej povesti alebo súkromia." },
      { title: "Dedičské konanie.", text: "Zastupovanie dedičov a pomoc pri dohode o rozdelení dedičstva. (OVERIŤ)" },
      { title: "Exekúcie a ochrana spotrebiteľa.", text: "Posúdenie exekúcie a ochrana vašich práv ako spotrebiteľa. (OVERIŤ)" },
    ],
  },
  steps: [
    { title: "Opíšete nám situáciu.", text: "Povedzte nám, čo sa stalo alebo čo plánujete. Ak máte zmluvu, list či rozhodnutie, prineste ich na konzultáciu." },
    { title: "Vysvetlíme vám možnosti.", text: "Posúdime vaše postavenie, vysvetlíme riziká a navrhneme postup. Pri spore najprv zvážime, či sa dá vec vyriešiť dohodou." },
    { title: "Pripravíme dokumenty alebo vás zastúpime.", text: "Pripravíme zmluvu či podanie, rokujeme s druhou stranou a ak je to potrebné, zastupujeme vás pred súdom." },
  ],
  situations: {
    title: "Kedy sa nám ozvať",
    items: [
      "Kupujete alebo predávate nehnuteľnosť.",
      "Niekto vám dlží peniaze a nereaguje.",
      "So susedom sa neviete dohodnúť.",
      "Niekto vám spôsobil škodu.",
      "Dostali ste žalobu alebo výzvu na zaplatenie.",
      "Riešite rozdelenie dedičstva.",
    ],
  },
  faq: [
    { q: "Čo musí obsahovať kúpna zmluva k nehnuteľnosti?", a: "Okrem údajov o zmluvných stranách, cene a predmete prevodu musí presne zodpovedať údajom v katastri. Chyba v zmluve môže viesť k tomu, že kataster vklad nepovolí alebo konanie preruší. Preto je vhodné dať zmluvu posúdiť pred podpisom." },
    { q: "Ako riešiť spor so susedom?", a: "Najprv sa oplatí skúsiť dohodu, ideálne písomnú. Ak nepomôže, prichádza do úvahy výzva od advokáta a napokon žaloba na súde. Vhodný postup závisí od toho, o čo v spore ide." },
    { q: "Ako postupovať pri dedičstve?", a: "Dedičské konanie začína súd spravidla sám, keď sa dozvie o úmrtí, a vedie ho notár ako súdny komisár. Ak sa dedičia nevedia dohodnúť alebo je majetok zložitejší, pomôžeme vám chrániť vaše záujmy." },
    { q: "Dokedy môžem žiadať vrátenie dlhu?", a: "Nároky sa premlčujú a lehota závisí od druhu nároku. Ak dlžník neplatí, s riešením zbytočne neodkladajte." },
  ],
  related: ["rodinne-pravo", "obchodne-pravo"],
  cta: {
    title: "Riešite zmluvu alebo spor?",
    text: "Opíšte nám situáciu. Povieme vám, aké máte možnosti.",
    ctas: [],
  },
  meta: {
    title: "Advokát občianske právo Bratislava | JUDr. Pavlovič",
    description: "Zmluvy, nehnuteľnosti, susedské a majetkové spory, náhrada škody či dedičstvo. Pomôžeme vám v občianskoprávnych veciach.",
    path: "/sluzby/obcianske-pravo",
  },
} satisfies ServiceDetail;
