import type { LegalDocument } from "./types";

/**
 * Stránka /ochrana-osobnych-udajov (blok 9.2). NÁVRH podľa toho, čo web reálne robí;
 * čaká na schválenie kanceláriou (štítok riadi `site.showLegalDraftBadge`).
 * Kontaktné údaje sa čítajú zo site.ts cez {{pole|…}}.
 */
export const s9_2_ochranaOsobnychUdajov = {
  h1: "Ochrana osobných údajov",
  intro:
    "Na tejto stránke Vám vysvetľujeme, ako spracúvame Vaše osobné údaje, keď navštívite náš web alebo nás kontaktujete cez formulár, e-mailom či telefonicky.",
  sections: [
    {
      id: "prevadzkovatel",
      title: "Prevádzkovateľ",
      blocks: [
        {
          type: "p",
          text: "Prevádzkovateľom Vašich osobných údajov je Advokátska kancelária JUDr. Ladislav Pavlovič s. r. o., Ivanská cesta 32B, 821 04 Bratislava – Ružinov, IČO: {{ico|DOPLNIŤ: IČO}}, zapísaná v Obchodnom registri Mestského súdu Bratislava III, oddiel: Sro, vložka č. 81036/B.",
        },
        { type: "p", text: "Kontakt: e-mail {{email|DOPLNIŤ: e-mail}}, telefón {{phone|DOPLNIŤ: telefón}}." },
      ],
    },
    {
      id: "udaje",
      title: "Aké údaje spracúvame",
      blocks: [
        {
          type: "list",
          items: [
            "Kontaktný formulár: meno a priezvisko, telefónne číslo, e-mail (nepovinný), oblasť práva, ktorú vyberiete, a text správy, ak ho napíšete.",
            "E-mail a telefón: údaje, ktoré nám sami uvediete, keď nám napíšete alebo zavoláte.",
            "Technické údaje pri odoslaní formulára: IP adresa a technické údaje o prehliadači, ktoré slúžia na ochranu pred spamom a zneužitím (Cloudflare Turnstile a obmedzenie počtu odoslaní).",
            "Návšteva webu: anonymná štatistika návštevnosti bez cookies (Vercel Web Analytics) a bežné technické záznamy servera.",
          ],
        },
        {
          type: "p",
          text: "Prosíme Vás, aby ste vo formulári neuvádzali citlivé podrobnosti, napríklad o zdravotnom stave alebo o trestnej veci. Rozoberieme ich osobne.",
        },
      ],
    },
    {
      id: "ucel",
      title: "Účel a právny základ",
      blocks: [
        {
          type: "list",
          items: [
            "Vybavenie Vášho dopytu a dohodnutie konzultácie: kroky pred uzavretím zmluvy na Vašu žiadosť (čl. 6 ods. 1 písm. b) GDPR).",
            "Ochrana webu a formulára pred spamom a zneužitím, bezpečnosť a anonymná štatistika návštevnosti: oprávnený záujem prevádzkovateľa (čl. 6 ods. 1 písm. f) GDPR).",
            "Zobrazenie mapy Google Maps: Váš súhlas (čl. 6 ods. 1 písm. a) GDPR), ktorý môžete kedykoľvek odvolať v [nastaveniach cookies](/cookies#nastavenia).",
            "Ak vznikne zastúpenie: plnenie zmluvy o poskytovaní právnych služieb a plnenie zákonných povinností advokáta, najmä podľa zákona č. 586/2003 Z. z. o advokácii.",
          ],
        },
      ],
    },
    {
      id: "doba",
      title: "Doba uchovávania",
      blocks: [
        {
          type: "list",
          items: [
            "Dopyty, z ktorých nevznikne zastúpenie: najviac 12 mesiacov od posledného kontaktu, potom ich vymažeme.",
            "Ak vznikne zastúpenie: počas trvania zastúpenia a potom po dobu, ktorú určujú predpisy o advokácii a o archivácii.",
            "Údaje na ochranu formulára: iba počas overenia; záznam na obmedzenie počtu odoslaní najviac 10 minút. Technické záznamy servera uchováva poskytovateľ hostingu krátkodobo podľa svojich pravidiel.",
            "Vaša voľba cookies: 12 mesiacov v úložisku Vášho prehliadača.",
          ],
        },
      ],
    },
    {
      id: "prijemcovia",
      title: "Príjemcovia a sprostredkovatelia",
      blocks: [
        {
          type: "p",
          text: "Vaše údaje nepredávame ani neposkytujeme na marketing. Na prevádzku webu využívame týchto sprostredkovateľov:",
        },
        {
          type: "table",
          head: ["Sprostredkovateľ", "Účel", "Krajina"],
          rows: [
            ["Vercel Inc.", "hosting webu, anonymná štatistika návštevnosti", "USA"],
            ["Resend", "doručenie e-mailov z kontaktného formulára", "USA"],
            ["Cloudflare, Inc.", "ochrana formulára pred spamom (Turnstile)", "USA"],
            ["Google Ireland Limited, Google LLC", "mapa na stránke Kontakt, iba s Vaším súhlasom", "Írsko, USA"],
          ],
        },
        {
          type: "p",
          text: "Pri prenose údajov do USA sa spoliehame na rámec EU–US Data Privacy Framework, ak je ním príjemca certifikovaný, inak na štandardné zmluvné doložky schválené Európskou komisiou.",
        },
        { type: "p", text: "Údaje môžeme poskytnúť aj orgánom verejnej moci, ak nám to ukladá zákon." },
      ],
    },
    {
      id: "mlcanlivost",
      title: "Povinnosť mlčanlivosti advokáta",
      blocks: [
        {
          type: "p",
          text: "Advokát je podľa zákona o advokácii povinný zachovávať mlčanlivosť o všetkých skutočnostiach, o ktorých sa dozvie v súvislosti s poskytovaním právnych služieb. Táto povinnosť platí aj pre informácie, ktoré nám poskytnete pri prvom kontakte, a trvá aj po skončení zastúpenia.",
        },
      ],
    },
    {
      id: "prava",
      title: "Vaše práva",
      blocks: [
        { type: "p", text: "V súvislosti so spracúvaním Vašich osobných údajov máte právo:" },
        {
          type: "list",
          items: [
            "na prístup k svojim údajom,",
            "na opravu nesprávnych údajov,",
            "na výmaz údajov,",
            "na obmedzenie spracúvania,",
            "namietať proti spracúvaniu na základe oprávneného záujmu,",
            "na prenosnosť údajov,",
            "kedykoľvek odvolať súhlas; odvolanie nemá vplyv na zákonnosť spracúvania pred ním.",
          ],
        },
        {
          type: "p",
          text: "Svoje práva si môžete uplatniť e-mailom na {{email|DOPLNIŤ: e-mail}} alebo písomne na adrese kancelárie. Odpovieme Vám bez zbytočného odkladu, najneskôr do jedného mesiaca.",
        },
      ],
    },
    {
      id: "staznost",
      title: "Sťažnosť",
      blocks: [
        {
          type: "p",
          text: "Ak sa domnievate, že Vaše údaje spracúvame v rozpore s predpismi, môžete podať návrh na začatie konania na Úrad na ochranu osobných údajov Slovenskej republiky, Hraničná 12, 820 07 Bratislava.",
        },
      ],
    },
    {
      id: "ucinnost",
      title: "Účinnosť",
      blocks: [{ type: "p", text: "Tieto informácie sú účinné od [DOPLNIŤ: dátum účinnosti]." }],
    },
  ],
} satisfies LegalDocument;
