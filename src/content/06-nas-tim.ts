import { CONSULT_HREF, callCta } from "./01-pravidla";
import type { CtaBand, Meta } from "./types";

export const s6_nasTim = {
  meta: {
    title: "Náš tím | Advokátska kancelária JUDr. Pavlovič",
    description:
      "Spoznajte ľudí v advokátskej kancelárii JUDr. Ladislava Pavloviča, LL.M. v Bratislave. Každú vec u nás vedie konkrétny advokát.",
    path: "/nas-tim",
  } satisfies Meta,
  h1: "Náš tím",
  intro: "Každú vec u nás vedie konkrétny advokát. Od prvej konzultácie viete, kto sa Vašej veci venuje a s kým komunikujete.",
  members: [
    {
      name: "JUDr. Ladislav Pavlovič, LL.M.",
      role: "Advokát",
      description: "Vedie kanceláriu a osobne zodpovedá za veci klientov. Dbá na to, aby každý klient vedel, kde stojí a čo je ďalší krok.",
      stats: [
        ["Funkcia", "Advokát"],
        ["Vzdelanie", "Právnická fakulta Univerzity Komenského v Bratislave (1990), JUDr., LL.M."],
        ["Zameranie", "[DOPLNIŤ: 2 až 3 hlavné oblasti]"],
        ["Zápis v SAK", "č. 448"],
      ],
      featured: true,
    },
    ...[2, 3].map((number) => ({
      name: `[DOPLNIŤ: meno a titul]`,
      role: "[DOPLNIŤ: advokát / advokátsky koncipient]",
      description: "[DOPLNIŤ: 1 až 2 vety o tom, čomu sa venuje a s čím klientom pomáha]",
      stats: [
        ["Funkcia", "[DOPLNIŤ]"],
        ["Vzdelanie", "[DOPLNIŤ]"],
        ["Zameranie", "[DOPLNIŤ: 2 až 3 oblasti]"],
      ],
      featured: false,
      key: `team-member-${number}`,
    })),
  ] as { name: string; role: string; description: string; stats: [string, string][]; featured: boolean; key?: string }[],
  joinTitle: "Pridajte sa k nám",
  joinText:
    "Hľadáme advokátov a advokátskych koncipientov, ktorí chcú pracovať na rôznorodých veciach a komunikovať priamo s klientmi. Ak máte záujem, pošlite nám životopis a niekoľko viet o tom, čomu sa chcete venovať. Ozveme sa Vám.",
  joinCta: "Poslať životopis",
  careersPlaceholder: "DOPLNIŤ: e-mail pre uchádzačov",
  closing: {
    title: "Potrebujete poradiť?",
    text: "Opíšte nám situáciu. Povieme Vám, kto z nás sa Vašej veci bude venovať.",
    ctas: [
      { kind: "link", label: "Dohodnúť konzultáciu", href: CONSULT_HREF, variant: "primary" },
      callCta,
    ],
  } satisfies CtaBand,
};
