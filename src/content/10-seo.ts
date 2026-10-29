import type { Meta } from "./types";

export const pageSeo = {
  home: {
    title: "Advokát Bratislava a okolie | JUDr. Ladislav Pavlovič",
    description:
      "Advokátska kancelária v Bratislave a okolí: dopravné nehody, zmluvy, rodinné, obchodné a ďalšie oblasti práva. Dohodnite si konzultáciu.",
    path: "/",
  },
  services: {
    title: "Služby advokátskej kancelárie Bratislava | JUDr. Pavlovič",
    description:
      "Deväť oblastí práva, ktorým sa venujeme: od dopravných nehôd a zmlúv až po rodinné a kybernetické právo. Dohodnite si konzultáciu.",
    path: "/sluzby",
  },
  dopravneNehody: {
    title: "Advokát dopravné nehody Bratislava | JUDr. Pavlovič",
    description:
      "Pomoc po dopravnej nehode: odškodnenie za ujmu na zdraví, škoda na vozidle a komunikácia s poisťovňou. Dohodnite si konzultáciu.",
    path: "/sluzby/dopravne-nehody",
  },
  obchodnePravo: {
    title: "Advokát obchodné právo Bratislava | JUDr. Pavlovič",
    description:
      "Právne zázemie pre podnikateľov v Bratislave: zmluvy, spoločnosti, vymáhanie pohľadávok a obchodné spory. Dohodnite si konzultáciu.",
    path: "/sluzby/obchodne-pravo",
  },
  obcianskePravo: {
    title: "Advokát občianske právo Bratislava | JUDr. Pavlovič",
    description:
      "Zmluvy, nehnuteľnosti, susedské a majetkové spory, náhrada škody či dedičstvo. Pomôžeme vám v občianskoprávnych veciach.",
    path: "/sluzby/obcianske-pravo",
  },
  rodinnePravo: {
    title: "Advokát rodinné právo Bratislava | JUDr. Pavlovič",
    description:
      "Rozvod, starostlivosť o deti, výživné a vyporiadanie majetku manželov. Pokojne, diskrétne a s ohľadom na deti. Dohodnite si konzultáciu.",
    path: "/sluzby/rodinne-pravo",
  },
  spravnePravo: {
    title: "Advokát správne právo Bratislava | JUDr. Pavlovič",
    description:
      "Odvolanie proti rozhodnutiu úradu, povoľovanie stavieb, priestupky a správna žaloba. Pomôžeme vám v konaní pred úradmi.",
    path: "/sluzby/spravne-pravo",
  },
  dusevneVlastnictvo: {
    title: "Advokát duševné vlastníctvo Bratislava | JUDr. Pavlovič",
    description:
      "Ochranné známky, autorské právo a licenčné zmluvy. Pomôžeme vám chrániť názov, logo aj tvorivú prácu. Dohodnite si konzultáciu.",
    path: "/sluzby/dusevne-vlastnictvo",
  },
  patentovePravo: {
    title: "Advokát patentové právo Bratislava | JUDr. Pavlovič",
    description:
      "Posúdenie vynálezu, patent a úžitkový vzor, licenčné zmluvy a spory. Pomôžeme vám chrániť technické riešenia. Dohodnite si konzultáciu.",
    path: "/sluzby/patentove-pravo",
  },
  kybernetickePravo: {
    title: "Advokát kybernetické právo Slovensko | JUDr. Pavlovič",
    description:
      "Kybernetická bezpečnosť, ochrana osobných údajov, únik dát a IT zmluvy. Pomôžeme vašej firme splniť povinnosti.",
    path: "/sluzby/kyberneticke-pravo",
  },
  trestnePravo: {
    title: "Advokát trestné právo Bratislava | JUDr. Pavlovič",
    description:
      "Obhajoba obvinených a zastupovanie poškodených v trestnom konaní. Poskytujeme iba stálym klientom a po predchádzajúcej dohode.",
    path: "/sluzby/trestne-pravo",
  },
  about: {
    title: "JUDr. Ladislav Pavlovič | Advokát Bratislava",
    description:
      "JUDr. Ladislav Pavlovič, advokát v Bratislave. Zrozumiteľne, diskrétne a s dôrazom na lehoty. Dohodnite si konzultáciu.",
    path: "/o-mne",
  },
  team: {
    title: "Náš tím | Advokátska kancelária JUDr. Pavlovič",
    description:
      "Spoznajte ľudí v advokátskej kancelárii JUDr. Ladislava Pavloviča v Bratislave. Každú vec u nás vedie konkrétny advokát.",
    path: "/nas-tim",
  },
  whyUs: {
    title: "Prečo si vybrať našu kanceláriu | JUDr. Pavlovič",
    description:
      "Priamy kontakt s advokátom, deväť oblastí práva a pôsobnosť na celom západnom Slovensku. Pozrite si, čo u nás dostanete.",
    path: "/preco-my",
  },
  contact: {
    title: "Kontakt | Advokát Bratislava Ružinov | JUDr. Pavlovič",
    description:
      "Kontakt na advokátsku kanceláriu JUDr. Ladislava Pavloviča, Ivanská cesta 32B, Bratislava Ružinov. Dohodnite si konzultáciu.",
    path: "/kontakt",
  },
  faq: {
    title: "Časté otázky o advokátovi a konzultácii | JUDr. Pavlovič",
    description:
      "Odpovede na časté otázky o konzultácii s advokátom a o oblastiach práva, ktorým sa venujeme v Bratislave a okolí.",
    path: "/caste-otazky",
  },
  privacy: { title: "Ochrana osobných údajov | JUDr. Ladislav Pavlovič", path: "/ochrana-osobnych-udajov" },
  cookies: { title: "Zásady používania cookies | JUDr. Ladislav Pavlovič", path: "/cookies" },
} satisfies Record<string, Meta>;

export const serviceSeoBySlug = {
  "dopravne-nehody": pageSeo.dopravneNehody,
  "obchodne-pravo": pageSeo.obchodnePravo,
  "obcianske-pravo": pageSeo.obcianskePravo,
  "rodinne-pravo": pageSeo.rodinnePravo,
  "spravne-pravo": pageSeo.spravnePravo,
  "dusevne-vlastnictvo": pageSeo.dusevneVlastnictvo,
  "patentove-pravo": pageSeo.patentovePravo,
  "kyberneticke-pravo": pageSeo.kybernetickePravo,
  "trestne-pravo": pageSeo.trestnePravo,
} satisfies Record<string, Meta>;
