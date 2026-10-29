import { CONSULT_HREF, callCta } from "./01-pravidla";
import type { CtaBand, Meta } from "./types";

export const s7_precoMy = {
  meta: {
    title: "Prečo si vybrať našu kanceláriu | JUDr. Pavlovič",
    description:
      "Priamy kontakt s advokátom, deväť oblastí práva a pôsobnosť na celom západnom Slovensku. Pozrite si, čo u nás dostanete.",
    path: "/preco-my",
  } satisfies Meta,
  h1: "Prečo my",
  intro: "Namiesto sľubov vám radšej povieme, čo u nás vecne dostanete.",
  reasons: [
    { number: "01", title: "Viac oblastí na jednom mieste", text: "Od zmlúv a nehnuteľností cez rodinné veci až po kybernetické právo. Keď sa vaša situácia dotýka viacerých oblastí, nemusíte hľadať ďalšieho advokáta.", proof: "9 oblastí práva" },
    { number: "02", title: "Priamy kontakt s advokátom", text: "Vašu vec vedie konkrétny advokát a komunikujete priamo s ním. Viete, kto za vaším prípadom stojí a na koho sa obrátiť.", proof: "Spôsob práce kancelárie" },
    { number: "03", title: "Overená prax", text: "{{yearsOfPractice|DOPLNIŤ: počet}} rokov v advokácii a {{casesHandled|DOPLNIŤ: počet}} vybavených vecí. Skúsenosti, ktoré sa dajú doložiť, nie len opísať.", proof: "{{yearsOfPractice|DOPLNIŤ: počet}} rokov praxe" },
    { number: "04", title: "Pôsobnosť na celom západnom Slovensku", text: "Kancelária sídli v Bratislave a klientov zastupuje na celom západnom Slovensku aj pred Špecializovaným trestným súdom v Banskej Bystrici.", proof: "Západné Slovensko" },
    { number: "05", title: "Diskrétnosť zo zákona", text: "Všetko, čo nám poviete, chráni povinná mlčanlivosť advokáta. Je to zákonná povinnosť, nie iba náš záväzok.", proof: "Zákon o advokácii" },
    { number: "06", title: "Jasný ďalší krok", text: "Po konzultácii odchádzate s vysvetlením situácie bez zbytočného žargónu a s konkrétnym návrhom, čo urobiť ďalej.", proof: "Prvá konzultácia" },
  ],
  cta: {
    title: "Presvedčte sa sami pri konzultácii",
    text: "Opíšte nám, čo riešite. Povieme vám, ako vám vieme pomôcť.",
    ctas: [
      { kind: "link", label: "Dohodnúť konzultáciu", href: CONSULT_HREF, variant: "primary" },
      callCta,
    ],
  } satisfies CtaBand,
};
