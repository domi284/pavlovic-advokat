export const s9_1_asistentka = {
  trigger: "Máte otázku?",
  title: "Virtuálna asistentka",
  subtitle: "Všeobecné informácie, nenahrádza právnu radu",
  welcome:
    "Dobrý deň, som virtuálna asistentka kancelárie a pomôžem vám so všeobecnými otázkami, právnu radu advokáta však nenahrádzam.",
  prompt: "S čím vám môžem pomôcť?",
  footer:
    "Odpovede majú informatívny charakter a nezakladajú vzťah advokát – klient. Neuvádzajte citlivé údaje. Viac v [Zásadách ochrany osobných údajov](/ochrana-osobnych-udajov).",
  back: "Späť na možnosti",
  otherQuestion: "Máte inú otázku? Napíšte nám cez formulár.",
  options: [
    {
      id: "nehoda",
      label: "Mal/a som dopravnú nehodu",
      answer:
        "Po nehode je najdôležitejšie zdravie a bezpečnosť. Zdokumentujte miesto nehody, uschovajte lekárske správy a pred podpisom akejkoľvek dohody s poisťovňou sa poraďte. Či máte nárok na odškodnenie a v akej výške, posúdi advokát pri konzultácii.",
      links: [
        { label: "Dohodnúť konzultáciu", href: "/kontakt?oblast=dopravne-nehody#konzultacia" },
        { label: "Dopravné nehody", href: "/sluzby/dopravne-nehody" },
      ],
    },
    {
      id: "zmluva",
      label: "Potrebujem zmluvu",
      answer:
        "Pripravujeme a posudzujeme zmluvy pre ľudí aj firmy, napríklad kúpne, nájomné či obchodné. Pred podpisom dôležitej zmluvy je vhodné dať ju posúdiť, pretože opraviť chybu po podpise býva náročnejšie.",
      links: [
        { label: "Dohodnúť konzultáciu", href: "/kontakt#konzultacia" },
        { label: "Občianske právo", href: "/sluzby/obcianske-pravo" },
        { label: "Obchodné právo", href: "/sluzby/obchodne-pravo" },
      ],
    },
    {
      id: "rozvod",
      label: "Rozvod alebo deti",
      answer:
        "Rozvod a úprava starostlivosti o deti sú citlivé veci. Súd vždy prihliada najmä na záujem dieťaťa a dohoda rodičov konanie výrazne zjednoduší. Konkrétny postup vám vysvetlí advokát pri dôvernej konzultácii.",
      links: [
        { label: "Dohodnúť konzultáciu", href: "/kontakt?oblast=rodinne-pravo#konzultacia" },
        { label: "Rodinné právo", href: "/sluzby/rodinne-pravo" },
      ],
    },
    {
      id: "urad",
      label: "Dostal/a som rozhodnutie úradu",
      answer:
        "Pozrite si poučenie na konci rozhodnutia. Uvádza, či a dokedy sa môžete odvolať. Lehoty sú krátke, preto sa nám ozvite čo najskôr po doručení.",
      links: [
        { label: "Dohodnúť konzultáciu", href: "/kontakt?oblast=spravne-pravo#konzultacia" },
        { label: "Správne právo", href: "/sluzby/spravne-pravo" },
      ],
    },
    {
      id: "firma",
      label: "Firma, značka alebo dáta",
      answer:
        "Pomáhame firmám so zakladaním a zmenami spoločností, s ochrannými známkami, s ochranou vynálezov aj s ochranou osobných údajov a kybernetickou bezpečnosťou. Vyberte si oblasť, ktorá vás zaujíma.",
      links: [
        { label: "Obchodné právo", href: "/sluzby/obchodne-pravo" },
        { label: "Právo duševného vlastníctva", href: "/sluzby/dusevne-vlastnictvo" },
        { label: "Patentové právo", href: "/sluzby/patentove-pravo" },
        { label: "Kybernetické právo", href: "/sluzby/kyberneticke-pravo" },
      ],
    },
    {
      id: "konzultacia",
      label: "Ako prebieha a koľko stojí konzultácia?",
      answer:
        "Ozvete sa nám telefonicky alebo cez formulár a dohodneme termín. Na konzultácii prejdeme vašu situáciu, vysvetlíme vám možnosti a navrhneme ďalší postup. Konzultácia je spoplatnená, jej cenu a podmienky vám oznámime vopred. (OVERIŤ)",
      links: [
        { label: "Dohodnúť konzultáciu", href: "/kontakt#konzultacia" },
        { label: "Zavolať", href: "tel:" },
      ],
    },
  ],
};

export const s9_2_footer = {
  privacy: {
    h1: "Ochrana osobných údajov",
    pending: "DOPLNIŤ: text zásad pripraví advokátska kancelária",
    sections: ["Prevádzkovateľ", "Účel a právny základ spracúvania", "Doba uchovávania", "Vaše práva", "Kontakt"],
  },
  cookies: {
    h1: "Zásady používania cookies",
    pending: "DOPLNIŤ: text zásad pripraví advokátska kancelária",
    sections: ["Čo sú cookies", "Aké cookies používame", "Ako zmeniť súhlas"],
  },
};
