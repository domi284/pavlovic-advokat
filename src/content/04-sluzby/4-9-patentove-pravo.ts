import { images } from "../images";
import type { ServiceDetail } from "../types";

export const s4_9_patentovePravo = {
  block: "4.9",
  slug: "patentove-pravo",
  name: "Patentové právo",
  image: images.obchodne,
  cardDescription:
    "Máte vynález alebo technické riešenie? Pomôžeme vám zistiť, ako ho chrániť patentom alebo úžitkovým vzorom, a pripravíme licenčné zmluvy.",
  hero: {
    title: "Advokát pre patentové právo v Bratislave a okolí",
    subtitle: "Vynález má hodnotu, ak je správne chránený. Pomôžeme vám zvoliť vhodnú ochranu, upraviť zmluvy a brániť vaše práva.",
  },
  intro: {
    title: "Ochrana technických riešení",
    text: "Patent a úžitkový vzor chránia technické riešenia, teda vynálezy. Na rozdiel od názvu alebo loga, ktoré chráni ochranná známka, ide tu o to, ako niečo funguje. Pomáhame vynálezcom, firmám a startupom posúdiť, či a ako je možné ich riešenie chrániť. Pripravujeme licenčné a ďalšie zmluvy a pri konaní pred úradom spolupracujeme s patentovými zástupcami. (OVERIŤ) Ak riešite značku alebo autorské dielo, pozrite si stránku [Právo duševného vlastníctva](/sluzby/dusevne-vlastnictvo).",
  },
  services: {
    title: "S čím vám pomôžeme",
    items: [
      { title: "Posúdenie vynálezu.", text: "Vysvetlíme vám, či riešenie môže spĺňať podmienky ochrany: novosť, vynálezcovskú činnosť a priemyselnú využiteľnosť." },
      { title: "Patentová prihláška.", text: "Príprava podkladov a sprevádzanie konaním o udelenie patentu. (OVERIŤ)" },
      { title: "Úžitkový vzor.", text: "Rýchlejšia a jednoduchšia forma ochrany technického riešenia." },
      { title: "Konanie pred Úradom priemyselného vlastníctva SR.", text: "Zastupovanie alebo koordinácia s patentovým zástupcom. (OVERIŤ)" },
      { title: "Licenčné zmluvy.", text: "Úprava podmienok, za ktorých môže váš vynález využívať niekto iný." },
      { title: "Spory o patenty.", text: "Postup pri porušení patentu alebo úžitkového vzoru. (OVERIŤ)" },
    ],
  },
  steps: [
    { title: "Opíšete nám riešenie.", text: "Stručne nám vysvetlíte, čo ste vytvorili a či ste to už niekde zverejnili. Všetko, čo nám poviete, chráni povinná mlčanlivosť advokáta." },
    { title: "Posúdime možnosti ochrany.", text: "Vysvetlíme vám rozdiel medzi patentom a úžitkovým vzorom a odporučíme vhodný postup vrátane ďalších krokov pred úradom." },
    { title: "Zabezpečíme ochranu a zmluvy.", text: "Pripravíme podklady a zmluvy a postaráme sa o konanie, v prípade potreby v spolupráci s patentovým zástupcom." },
  ],
  situations: {
    title: "Kedy sa nám ozvať",
    items: [
      "Vyvinuli ste nové technické riešenie.",
      "Chystáte sa vynález predstaviť verejnosti alebo investorom.",
      "Chcete vynález predať alebo licencovať.",
      "Niekto kopíruje vaše technické riešenie.",
    ],
  },
  faq: [
    { q: "Čo sa dá patentovať?", a: "Patentovať možno vynález, ktorý je nový, je výsledkom vynálezcovskej činnosti a je priemyselne využiteľný. Patentovať nemožno napríklad samotné objavy, vedecké teórie či obchodné plány." },
    { q: "Aký je rozdiel medzi patentom a úžitkovým vzorom?", a: "Úžitkový vzor má nižšie nároky na vynálezcovskú úroveň a zapisuje sa rýchlejšie, chráni však kratšie. Patent poskytuje silnejšiu a dlhšiu ochranu, konanie o ňom však trvá dlhšie." },
    { q: "Ako dlho trvá konanie?", a: "Konanie o udelenie patentu trvá spravidla niekoľko rokov, zápis úžitkového vzoru býva rýchlejší. Presný čas závisí od úradu a od zložitosti riešenia. (OVERIŤ)" },
    { q: "Môžem vynález zverejniť pred podaním prihlášky?", a: "Neodporúčame to. Zverejnenie pred podaním prihlášky môže narušiť novosť vynálezu, a tým aj možnosť jeho ochrany." },
  ],
  related: ["dusevne-vlastnictvo", "obchodne-pravo"],
  cta: {
    title: "Máte vynález, ktorý chcete chrániť?",
    text: "Povedzte nám o ňom. Navrhneme, ako postupovať ďalej.",
    ctas: [],
  },
  meta: {
    title: "Advokát patentové právo Bratislava | JUDr. Pavlovič",
    description: "Posúdenie vynálezu, patent a úžitkový vzor, licenčné zmluvy a spory. Pomôžeme vám chrániť technické riešenia. Dohodnite si konzultáciu.",
    path: "/sluzby/patentove-pravo",
  },
} satisfies ServiceDetail;
