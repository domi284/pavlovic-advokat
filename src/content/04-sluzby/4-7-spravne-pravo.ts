import { images } from "../images";
import type { ServiceDetail } from "../types";

export const s4_7_spravnePravo = {
  block: "4.7",
  slug: "spravne-pravo",
  name: "Správne právo",
  image: images.spravnePravo,
  cardDescription:
    "Dostali ste rozhodnutie úradu, pokutu alebo zamietnuté povolenie? Posúdime ho, pripravíme odvolanie a zastúpime Vás pred úradom aj pred správnym súdom. Správne právo Vás sprevádza v každej oblasti a to počas celého Vášho života.",
  hero: {
    title: "Advokát pre správne právo v Bratislave a okolí",
    subtitle: "Rozhodnutie úradu nemusí byť konečné. Pomôžeme Vám ho posúdiť, včas sa odvolať a chrániť Vaše práva pred úradmi aj pred súdom.",
  },
  intro: {
    title: "Pri rozhodnutí úradu rozhodujú lehoty",
    text: "Proti rozhodnutiu úradu sa spravidla dá brániť, no lehoty na odvolanie sú krátke. Ak ich zmeškáte, Vaše možnosti sa výrazne zúžia. Preto je dôležité ozvať sa čo najskôr po doručení rozhodnutia. Zastupujeme Vás pred obcami, okresnými úradmi, stavebnými úradmi a ďalšími orgánmi verejnej správy. Ak úrad nerozhodne správne ani po odvolaní, môžeme rozhodnutie napadnúť správnou žalobou na súde.",
  },
  services: {
    title: "S čím Vám pomôžeme",
    items: [
      { title: "Odvolanie proti rozhodnutiu.", text: "Posúdenie rozhodnutia a príprava odvolania alebo iného opravného prostriedku." },
      { title: "Povoľovanie stavieb.", text: "Zastupovanie stavebníkov aj susedov v konaní o povolení stavby." },
      { title: "Priestupky.", text: "Obrana v priestupkovom konaní, napríklad pri pokute za dopravný priestupok." },
      { title: "Správna žaloba.", text: "Preskúmanie rozhodnutia úradu správnym súdom." },
      { title: "Cudzinecké a daňové konania.", text: "Zastupovanie v konaniach o pobyte cudzincov a pri daňovej kontrole." },
    ],
  },
  steps: [
    { title: "Prinesiete nám rozhodnutie.", text: "Ozvite sa čo najskôr po doručení. Uveďte, kedy Vám rozhodnutie prišlo, a prineste ho na konzultáciu spolu s ďalšími písomnosťami, opíšte stav ktorý rozhodnutiu predchádzal." },
    { title: "Posúdime ho a overíme lehotu.", text: "Zistíme, či má rozhodnutie nedostatky, aké opravné prostriedky prichádzajú do úvahy a dokedy ich treba podať." },
    { title: "Podáme odvolanie alebo žalobu.", text: "Pripravíme odvolanie, komunikujeme s úradom a zastupujeme Vás v konaní. Ak je to potrebné, podáme správnu žalobu na súd." },
  ],
  situations: {
    title: "Kedy sa nám ozvať",
    items: [
      "Dostali ste rozhodnutie, s ktorým nesúhlasíte.",
      "Úrad Vám uložil pokutu.",
      "Stavebný úrad zamietol Vašu žiadosť alebo povolil stavbu, ktorá Vás obmedzuje.",
      "Úrad vo Vašej veci nekoná alebo konanie zbytočne predlžuje.",
      "Chystáte sa podať žiadosť a chcete ju mať v poriadku.",
    ],
  },
  faq: [
    { q: "Dostal som rozhodnutie úradu. Čo ďalej?", a: "Pozorne si prečítajte poučenie na konci rozhodnutia. Uvádza, či a dokedy sa môžete odvolať. Lehoty sú krátke, preto sa s nami poraďte čo najskôr po doručení." },
    { q: "Dá sa odvolať proti pokute?", a: "Proti rozhodnutiu o pokute sa spravidla dá podať odvolanie alebo iný opravný prostriedok. Či má zmysel, závisí od okolností a od dôkazov, ktoré máte k dispozícii." },
    { q: "Kedy podať správnu žalobu?", a: "Správnu žalobu môžete spravidla podať až po tom, čo ste využili odvolanie. Lehota na jej podanie je zákonom obmedzená, preto ju neodkladajte." },
  ],
  related: ["obcianske-pravo", "dopravne-nehody"],
  cta: {
    title: "Nesúhlasíte s rozhodnutím úradu?",
    text: "Ozvite sa čo najskôr. Posúdime ho a povieme Vám, aké máte možnosti.",
    ctas: [],
  },
  meta: {
    title: "Advokát správne právo Bratislava | JUDr. Pavlovič",
    description: "Odvolanie proti rozhodnutiu úradu, povoľovanie stavieb, priestupky a správna žaloba. Pomôžeme Vám v konaní pred úradmi.",
    path: "/sluzby/spravne-pravo",
  },
} satisfies ServiceDetail;
