# PROMPT PRE CLAUDE CODE: Web JUDr. Ladislav Pavlovič, LL.M., verzia 3 (zmeny po stretnutí s klientom)

Si senior frontend developer. V tomto priečinku je hotový web advokáta (Next.js, Tailwind, motion), postavený podľa predchádzajúcich promptov. Obsah je v `src/content/` rozdelený podľa blokov dokumentu klienta, sekcie majú atribút `data-doc`. Klient po stretnutí schválil a upravil texty. Tvojou úlohou je zapracovať všetky zmeny z tohto dokumentu.

**Postup:**
1. Najprv si prejdi projekt: `src/content`, `src/lib/site.ts`, komponenty, routing služieb.
2. Pracuj po fázach z časti 9. Po každej fáze spusti `npm run dev` a skontroluj výsledok.

**Čo NEMENÍŠ:** dizajn, farby, písma, animácie ani komponenty, okrem tých, ktoré tento dokument výslovne mení alebo pridáva.

---

## 1. Najdôležitejšie pravidlá

1. **Texty v časti 8 sú záväzné a schválené klientom.** Prenes ich doslovne. Nič neprepisuj, neskracuj ani nevylepšuj. Ak je na webe text, ktorý v časti 8 nie je, odstráň ho. Výnimkou sú technické UI prvky (aria-labely, „Menu“, „Zavrieť“).
2. **Značky `(OVERIŤ)` už neexistujú.** Klient všetko potvrdil. Zmaž všetky `<ReviewMark>` z obsahu a nastav `showReviewMarks: false`.
3. **`[DOPLNIŤ: …]`** ostávajú ako viditeľné čipy iba tam, kde sú v časti 8. Ide o úradné hodiny, popis príchodu, ďalších členov tímu, fotky a texty právnych zásad.
4. **`{rokyPraxe}`** v textoch je premenná. Nahraď ju hodnotou z `site.ts` (viď časť 2), ktorá sa počíta automaticky.
5. **Veľké začiatočné písmeno ako znak úcty.** Všetky tvary zámen, ktorými oslovujeme čitateľa, píš veľkým začiatočným písmenom: Vy, Vás, Vám, Vami, Váš, Vaša, Vaše, Vášho, Vášmu, Vašej, Vašu, Vašom, Vaším, Vašim, Vašich, Vašimi, Vašou.
   - Texty v časti 8 sú už takto upravené.
   - Platí to aj pre texty, ktoré v časti 8 nie sú (aria-labely, alt texty, hlášky formulára, cookies, 404, asistentka). Prejdi celý projekt a oprav ich.
   - Kontrola: `grep -rniE "\b(vy|vás|vám|vami|váš|vaš[a-zý]*|vášho|vášmu)\b" src/` nesmie po úprave nájsť žiadny tvar s malým písmenom.
6. **Meno a titul klienta:** všade **„JUDr. Ladislav Pavlovič, LL.M.“** (s čiarkou pred LL.M.) a v 2. páde **„JUDr. Ladislava Pavloviča, LL.M.“**. Platí to aj pre logo (wordmark), OG obrázok, JSON-LD (`Attorney.name`), alt texty a meta popisy. Výnimky:
   - **Obchodné meno firmy sa NEMENÍ:** „Advokátska kancelária JUDr. Ladislav Pavlovič s. r. o.“ (presne podľa obchodného registra).
   - **SEO title** ostávajú v krátkom tvare „| JUDr. Pavlovič“ (limit 60 znakov), presne ako v časti 8.
7. Ostatné pravidlá z predchádzajúcich promptov platia ďalej: žiadne „zadarmo/bezplatne“, žiadne superlatívy, slovenské úvodzovky „ “ a utilita `typo()`.

---

## 2. Údaje kancelárie (overené v registroch) → `src/lib/site.ts`

Tieto údaje sú overené v zozname advokátov SAK a v obchodnom registri. Doplň ich do `site.ts` a zobraz všade, kde boli doteraz placeholdery:

| Pole | Hodnota |
|---|---|
| Meno advokáta | JUDr. Ladislav Pavlovič, LL.M. |
| Obchodné meno | Advokátska kancelária JUDr. Ladislav Pavlovič s. r. o. |
| Adresa | Ivanská cesta 32B, 821 04 Bratislava – Ružinov |
| Telefón (zobrazenie) | 0905 769 966 |
| Telefón (odkaz) | `tel:+421905769966` |
| E-mail | pavlovic@lpavlovic.eu (`mailto:`), použi ho aj ako e-mail pre uchádzačov v bloku 6.3 |
| IČO | 47238526 |
| Obchodný register | Obchodný register Mestského súdu Bratislava III, oddiel: Sro, vložka č. 81036/B |
| SAK | zápis v zozname advokátov č. 448 |
| V advokácii od | 1990 |
| Roky praxe | `rokyPraxe = new Date().getFullYear() - 1990` (v roku 2026 = 36). Číslo sa každý rok zvýši samo. |
| Vybavené veci | 3 500+ |
| Počet oblastí | 10 |
| Pôsobnosť | Bratislava a západné Slovensko |
| Úradné hodiny | [DOPLNIŤ: úradné hodiny] |
| Ako sa k nám dostanete | [DOPLNIŤ: zastávka MHD, parkovanie, vchod a poschodie] |

- Uprav aj JSON-LD (`LegalService` + `Attorney`): `telephone`, `email`, `areaServed` („Bratislava a západné Slovensko“), `knowsAbout` (10 oblastí v poradí z časti 3) a `identifier` (IČO).
- **Špecializovaný trestný súd** má sídlo v Pezinku a pracovisko v Banskej Bystrici. Kdekoľvek bolo na webe iba „Špecializovaný trestný súd v Banskej Bystrici“, použi znenie z časti 8.

---

## 3. Nové poradie služieb (všade na webe)

| # | Služba | Adresa (slug) | Poznámka |
|---|---|---|---|
| 01 | Obchodné právo | `/sluzby/obchodne-pravo` | |
| 02 | Občianske právo | `/sluzby/obcianske-pravo` | |
| 03 | Dopravné nehody | `/sluzby/dopravne-nehody` | |
| 04 | Rodinné právo | `/sluzby/rodinne-pravo` | |
| 05 | Trestné právo | `/sluzby/trestne-pravo` | štítok „Iba pre stálych klientov“ ostáva |
| 06 | Správne právo | `/sluzby/spravne-pravo` | |
| 07 | Právo duševného vlastníctva | `/sluzby/dusevne-vlastnictvo` | |
| 08 | Patentové právo | `/sluzby/patentove-pravo` | |
| 09 | Kybernetické právo | `/sluzby/kyberneticke-pravo` | |
| 10 | **Pracovné právo** | `/sluzby/pracovne-pravo` | **NOVÁ** |

**Poradie urči na jednom mieste** (napr. pole `servicesOrder` v `src/content/02-mapa-webu.ts`). Všetky miesta ho musia brať odtiaľ:
- rozbaľovacie menu Služby (desktop: 2 stĺpce po 5 položkách; mobil: akordeón),
- karty na úvode (3.2) a na stránke Služby (4.1), čísla kariet 01 až 10,
- výber oblasti vo formulári na Kontakte (10 služieb + „Iné“; Trestné právo s textom „(iba pre stálych klientov)“; pridaj slug `pracovne-pravo` pre predvoľbu `?oblast=`),
- skupiny na stránke Časté otázky (Konzultácia a spolupráca + 10 služieb),
- zoznam služieb v pätičke,
- `sitemap.ts` a JSON-LD.

**Rozloženie kariet služieb pri počte 10:** pri 3 stĺpcoch by v poslednom rade ostala jedna osamotená karta. Na desktope (≥1024 px) preto daj karty **do 2 stĺpcov ako horizontálne karty**: obrázok vľavo (~40 % šírky, pomer 4:3), text vpravo. Číslo, názov, popis a „Zistiť viac →“ ostávajú. Hover efekty ostávajú. Tablet: 2 stĺpce vertikálne, mobil: 1 stĺpec. Texty kariet sú teraz dlhšie, takže výška kariet v rade sa musí zarovnať.

---

## 4. Nová služba: Pracovné právo

- Pridaj obsahový súbor `src/content/04-sluzby/4-12-pracovne-pravo.ts` s textami z časti 8. Šablóna je rovnaká ako pri ostatných službách (bloky 1 až 8, `data-doc="4.12-1"` …).
- Pridaj ju do `generateStaticParams`, sitemap, menu, kariet, formulára, FAQ a pätičky (všetko cez `servicesOrder`).
- **Obrázok `sluzba-pracovne-pravo.jpg`** (3:2): stiahni z Unsplash. Námet: prázdna moderná kancelária alebo pracovisko, stoly a stoličky, prirodzené svetlo, **bez ľudí a bez log**. Kľúčové slová: `empty office desks`, `workplace interior empty`, `office chairs daylight`. Použi jednotnú úpravu fotiek ako pri ostatných.
- **AI asistentka:** pridaj 7. rýchlu voľbu (za voľbu „Firma, značka alebo dáta“):
  - Voľba: **Práca a zamestnanie**
  - Odpoveď: Pri výpovedi, nevyplatenej mzde alebo novej pracovnej zmluve často rozhodujú krátke lehoty. Uschovajte si všetky písomnosti a dátum ich doručenia. Na čo máte nárok, Vám posúdi advokát pri konzultácii.
  - Odkazy: Dohodnúť konzultáciu (`/kontakt?oblast=pracovne-pravo#konzultacia`) · Pracovné právo
- **Súvisiace služby:** pri Obchodnom práve vymeň druhý odkaz „Kybernetické právo“ za „Pracovné právo“. Pri Pracovnom práve sú súvisiace Obchodné právo a Občianske právo.

---

## 5. Hlavička a menu

Menu v tomto poradí: **Úvod · Služby · O mne · Náš tím · Prečo my · Referencie · Kontakt**, vpravo tlačidlo „Zavolať“.
- Logo (wordmark), 1. riadok: „JUDr. Ladislav Pavlovič, LL.M.“. Ak sa na šírku nezmestí, zmenši písmo wordmarku o 1 až 2 px. Na mobile pod 380 px nechaj len monogram a meno bez „ADVOKÁT“.
- Ak sa menu so 7 položkami nezmestí, prepni na mobilné menu skôr (napr. pod 1280 px).

---

## 6. Nová podstránka: Referencie `/referencie`

Texty sú v časti 8. Rozloženie: PageHero (H1 a úvodné texty, bez obrázka, dekoratívny veľký znak „ v bordovej s opacity 0,08 vpravo) → sekcia s bublinami → záverný CTA pás.

### Bubliny (komponent `TestimonialBubbles`)
- **Na šírku obrazovky sú vedľa seba 2 bubliny** (desktop a tablet, 2 stĺpce, medzera 32 px). Na mobile sú pod sebou.
- **Každá bublina obsahuje 3 referencie**, ktoré sa v nej striedajú, spolu teda 6 referencií. Dáta sú v `src/content/referencie.ts` ako pole 6 objektov: `{ text: '', autor: '', oblast: '' }`. Prvé tri patria do ľavej bubliny, ďalšie tri do pravej.
- **Automatické striedanie každých 8 sekúnd.** Aktuálna referencia odíde smerom doprava (`x: 0 → 100 %`, opacity → 0), nová príde zľava (`x: -100 % → 0`). Trvanie 0,7 s, easing `[0.22, 1, 0.36, 1]`. Po tretej sa pokračuje prvou.
- **Pod každou bublinou sú 3 bodky.** Aktívna bodka je plná bordová a širšia (24 × 8 px, radius 999), neaktívne sú 8 × 8 px s okrajom `--stone`. Klik na bodku zobrazí danú referenciu v tej bubline a od tej chvíle sa časovač resetuje na 8 s.
- Striedanie sa pozastaví pri hoveri myšou a pri fokuse klávesnicou. Pri `prefers-reduced-motion` je vypnuté (iba bodky).
- Na dotykových zariadeniach funguje aj swipe (doľava/doprava).
- **Vzhľad bubliny:** pozadie `--paper`, okraj 1 px `--line`, radius 24 px, padding 40 px, min. výška 280 px, jemný tieň. Vľavo dole malý „chvostík“ bubliny (rotovaný štvorec 20 px s rovnakým pozadím a okrajom). Vľavo hore veľký dekoratívny znak „ v Cormorant 96 px, `--bordeaux`, opacity 0,25. Text referencie Cormorant 22 px. Pod ním tenká linka a `autor` (Manrope 600, 14 px) · `oblast` (Manrope 13 px, `--stone`).
- **Bubliny sú zatiaľ prázdne:** všetkých 6 objektov má prázdne reťazce. Bublina sa zobrazí v plnej veľkosti s dekoratívnym znakom „, ale bez textu. Striedanie a bodky fungujú aj s prázdnymi položkami.
- Prístupnosť: každá bublina je `role="region"` s `aria-roledescription="carousel"` a `aria-label="Referencie 1"` / „Referencie 2“. Bodky sú `button` s `aria-label="Zobraziť referenciu 1"` atď. a s `aria-current` pri aktívnej.
- Doplň `/referencie` do sitemap, menu (desktop aj mobil) a pätičky.

---

## 7. Opravy, ktoré na webe chýbali

1. **Obrázky služieb sa nestiahli.** Na webe sú namiesto fotiek sivé bloky s popiskami (napr. „oblast-nehody.jpg: cesta za súmraku“) a niektoré karty majú nesprávny námet. Stiahni z Unsplash fotky pre všetkých 10 služieb (námety ostávajú podľa predchádzajúceho promptu, nový je `sluzba-pracovne-pravo.jpg`) a tiež `sluzby-uvod.jpg`, `preco-my.jpg`, `tim-kancelaria.jpg`. Každú fotku si otvor a skontroluj: bez tvárí, log, oblekov a váh. Zmenši ich na max. ~350 kB a autorov zapíš do `public/images/CREDITS.md`. Ak na to potrebuješ Unsplash API kľúč, zastav sa a vypýtaj si ho. Nikde na webe nesmie ostať viditeľný názov súboru ani popis slotu.
2. **Pätička – riadok Pôsobnosť** (chýbal): pod údaje kancelárie pridaj „Pôsobnosť: Bratislava a západné Slovensko. Podľa vecnej a miestnej príslušnosti súdov zastupujeme klientov na celom Slovensku.“
3. **Blok 3.4 na úvode – chýbajúce 3 fakty.** Pod text pridaj malú tabuľku (popis 12 px uppercase `--stone`, hodnota 16 px):
   - Vzdelanie: Právnická fakulta Univerzity Komenského v Bratislave (1990), JUDr., LL.M.
   - Prax: {rokyPraxe} rokov v advokácii
   - Slovenská advokátska komora: zápis č. 448
4. **Blok 3.3 na úvode – chýbajúca úvodná veta** pod nadpisom: „Nemusíte vedieť, ako sa Vaša vec volá právnicky. Stačí, keď nám poviete, čo sa stalo.“

---

## 8. PRESNÉ TEXTY (záväzné, prenes doslovne)

Ako čítať túto časť:
- Stránky sú zoradené tak, ako idú na webe. Služby sú v novom poradí.
- Čísla blokov (napr. „Blok 4.3 · 2 Úvod“) zodpovedajú `data-doc` v kóde. Pri zmene poradia služieb **sa čísla blokov nemenia**, mení sa iba poradie zobrazenia.
- Pri každom riadku je typ prvku (Nadpis, Text, Bod, Otázka, Odpoveď, Tlačidlo / odkaz, Údaj, Číslo, Štítok).
- V bloku 3.2 sú texty kariet služieb. Zobrazujú sa v poradí z časti 3 a karta Pracovné právo berie text z poľa „Popis karty“ v jej sekcii.
- Riadky „(poznámka: …)“ nie sú text na web, iba vysvetlenie.

### Hlavička a menu — `na každej stránke`


**Blok 2 · Hlavička a menu**
- Tlačidlo / odkaz: JUDr. Ladislav Pavlovič, LL.M. · advokát (logo)
- Tlačidlo / odkaz: Úvod
- Tlačidlo / odkaz: Služby
- Tlačidlo / odkaz: O mne
- Tlačidlo / odkaz: Náš tím
- Tlačidlo / odkaz: Prečo my
- Tlačidlo / odkaz: Referencie
- Tlačidlo / odkaz: Kontakt
- Tlačidlo / odkaz: Zavolať

### Úvodná stránka — `/`

- **SEO title:** Advokát Bratislava a okolie | JUDr. Ladislav Pavlovič, LL.M.
- **Meta description:** Advokátska kancelária v Bratislave a okolí: dopravné nehody, zmluvy, rodinné, obchodné a ďalšie oblasti práva. Dohodnite si konzultáciu.

**Blok 3.1 · Hero (úvodná obrazovka)**
- Text: Advokát · Bratislava a okolie
- Hlavný nadpis: Riešime Vaše problémy so zákonom.
- Text: Pomôžeme Vám pochopiť Vašu situáciu, poznať možnosti a urobiť správny ďalší krok. Vecne, diskrétne a zrozumiteľne.
- Tlačidlo / odkaz: Dohodnúť konzultáciu
- Tlačidlo / odkaz: Zavolať 0905 769 966
- Text: Advokátska kancelária JUDr. Ladislav Pavlovič s. r. o. · Ružinov, Bratislava
- Text: Fotografia bude doplnená
- Bod: {rokyPraxe} rokov praxe
- Bod: Člen Slovenskej advokátskej komory
- Bod: Pôsobnosť: Bratislava a západné Slovensko

**Blok 3.2 · Čomu sa venujeme**
- Nadpis: Čomu sa venujeme
- Text: Pomáhame ľuďom aj firmám v 10 oblastiach práva. Vyberte si tú, ktorá sa týka Vašej situácie.
- Podnadpis: Dopravné nehody
- Text: Po nehode sa naraz rieši zdravie, auto aj poisťovňa. Pomôžeme Vám vyhodnotiť a prípadne následne uplatniť Vaše nároky voči zodpovedným subjektom.
- Tlačidlo / odkaz: Zistiť viac →
- Podnadpis: Obchodné právo
- Text: Zakladáte firmu, potrebujete zmluvu alebo Vám odberateľ nezaplatil? Pripravíme a posúdime zmluvy, pomôžeme so zmenami v spoločnosti aj s vymáhaním pohľadávok.
- Tlačidlo / odkaz: Zistiť viac →
- Podnadpis: Občianske právo
- Text: Kupujete byt, dom, riešite spor so susedom alebo dedičstvo, respektíve iné občianskoprávne nároky? Pripravíme a posúdime všetko vrátane zmlúv a zastúpime Vás v majetkových a iných občianskoprávnych sporoch a to aj vrátane nárokov pri náhrade škody.
- Tlačidlo / odkaz: Zistiť viac →
- Podnadpis: Rodinné právo
- Text: Rozvod, starostlivosť o deti či výživné, následná deľba spoločne nadobudnutého majetku patria k najcitlivejším životným situáciám. Pomôžeme Vám ich riešiť pokojne, diskrétne a s ohľadom na deti.
- Tlačidlo / odkaz: Zistiť viac →
- Podnadpis: Správne právo
- Text: Dostali ste rozhodnutie úradu, pokutu alebo zamietnuté povolenie? Posúdime ho, pripravíme odvolanie a zastúpime Vás pred úradom aj pred správnym súdom. Správne právo Vás sprevádza v každej oblasti a to počas celého Vášho života.
- Tlačidlo / odkaz: Zistiť viac →
- Podnadpis: Právo duševného vlastníctva
- Text: Chcete ochrániť názov firmy, logo alebo svoju tvorbu? Pomôžeme Vám s ochrannou známkou, licenčnými zmluvami a pri porušení práv Vášho duševného vlastníctva.
- Tlačidlo / odkaz: Zistiť viac →
- Podnadpis: Patentové právo
- Text: Máte vynález alebo technické riešenie? Pomôžeme Vám zistiť, ako ho chrániť patentom alebo úžitkovým vzorom, a pripravíme licenčné zmluvy.
- Tlačidlo / odkaz: Zistiť viac →
- Podnadpis: Kybernetické právo
- Text: Kybernetické právo upravuje bezpečnosť informačných systémov, ochranu dát a IT zmluvy. Pomôžeme Vašej firme splniť povinnosti a pripraviť sa na ochranu pred únikom dát.
- Tlačidlo / odkaz: Zistiť viac →
- Štítok: Iba pre stálych klientov
- Podnadpis: Trestné právo
- Text: Obhajobu a zastupovanie v trestnom konaní poskytujeme iba stálym klientom a po predchádzajúcej dohode. Dôvodom je vysoká pracovná vyťaženosť kancelárie.
- Tlačidlo / odkaz: Zistiť viac →
- Číslo: {rokyPraxe} · rokov praxe
- Číslo: 3 500+ · vybavených vecí
- Číslo: 10 · oblastí práva
- Číslo: Bratislava a západné Slovensko · pôsobnosť
- Text: Zastupujeme klientov v Bratislave a na celom západnom Slovensku, avšak podľa vecnej a miestnej príslušnosti súdov, klientov zastupujeme na celom Slovensku.
- Tlačidlo / odkaz: Všetky služby →

**Blok 3.3 · Ako to prebieha**
- Nadpis: Od prvého telefonátu k jasnému plánu
- Text: Nemusíte vedieť, ako sa Vaša vec volá právnicky. Stačí, keď nám poviete, čo sa stalo.
- Podnadpis: Ozvete sa nám.
- Text: Zavoláte alebo vyplníte krátky formulár. Stačí stručne opísať, aký máte problém, bez právnych pojmov. Ozveme sa Vám a dohodneme si najbližší možný termín.
- Podnadpis: Prvá konzultácia.
- Text: Prejdeme Vašu situáciu aj dokumenty, tieto zanalyzujeme a vyhodnotíme. Následne Vám vysvetlíme, aká je Vaša situácia a aké máte možnosti a čo Vás môže čakať. Konzultácia je spoplatnená, jej podmienky Vám oznámime vopred.
- Podnadpis: Postup a zastupovanie.
- Text: Ak sa dohodneme na spolupráci, podpíšeme plnomocenstvo a následne preberáme komunikáciu s protistranou, sledujeme lehoty, preberáme listiny. Vy sa môžete venovať svojmu životu a o každom dôležitom kroku od nás viete vopred, tento Vám vždy vysvetlíme.
- Tlačidlo / odkaz: Dohodnúť konzultáciu

**Blok 3.4 · O pánovi doktorovi**
- Text: Fotografia bude doplnená
- Nadpis: JUDr. Ladislav Pavlovič, LL.M.
- Text: Advokát · Bratislava
- Text: Advokácii sa venujem od roku 1990, t. j. {rokyPraxe} rokov a spolu s kolegami pomáhame ľuďom aj firmám v 10 oblastiach práva. Pri každej veci vychádzam z jednoduchého princípu: klient potrebuje vedieť, v akej situácii sa nachádza, čo ho môže čakať a čo je vhodné urobiť ďalej, aby boli odvrátené alebo minimalizované prípadné hrozby pre neho. Preto vysvetľujem zrozumiteľne, otvorene hovorím o možnostiach aj rizikách a nesľubujem nič, čo sa sľúbiť nedá.
- Údaj: Vzdelanie: Právnická fakulta Univerzity Komenského v Bratislave (1990), JUDr., LL.M.
- Údaj: Prax: {rokyPraxe} rokov v advokácii
- Údaj: Slovenská advokátska komora: zápis č. 448
- Tlačidlo / odkaz: Viac o mne →

**Blok 3.5 · Na čom si zakladáme**
- Nadpis: Ako pracujem
- Podnadpis: Zrozumiteľne.
- Text: Právnu situáciu Vám vysvetlím jazykom, ktorému rozumiete, bez zbytočného právnického žargónu.
- Podnadpis: Diskrétne.
- Text: Všetko, čo mi poviete, je chránené povinnou mlčanlivosťou advokáta, toto je základný princíp zachovania dôvery medzi klientom a advokátom.
- Podnadpis: Zodpovedne.
- Text: Dohodnuté termíny a lehoty sledujem sám, aby sa nič nepremeškalo.
- Podnadpis: Priamo.
- Text: Komunikujete vždy priamo s advokátom, ktorý Vašu vec rieši. Dlhodobo spolupracujem s preverenými kolegami a advokátmi.

**Blok 3.6 · Prečo my**
- Nadpis: Prečo my
- Text: Fakty namiesto sľubov.
- Podnadpis: Viac oblastí na jednom mieste.
- Text: 10 oblastí práva pod jednou strechou. Keď sa Vaša vec dotýka viacerých oblastí, nemusíte hľadať ďalšieho advokáta.
- Podnadpis: Overená prax.
- Text: {rokyPraxe} rokov v advokácii a za ten čas viac ako 3 500 vybavených vecí. Skúsenosti, ktoré sa dajú doložiť, nie len opísať.
- Podnadpis: Celé západné Slovensko.
- Text: Sídlime v Bratislave. Zastupujeme klientov v Bratislave a na celom západnom Slovensku, avšak podľa vecnej a miestnej príslušnosti súdov, klientov zastupujeme na celom Slovensku.
- Podnadpis: Jasný ďalší krok.
- Text: Z konzultácie odchádzate s vysvetlením bez právnického žargónu a s konkrétnym návrhom riešenia, čo urobiť ďalej.
- Tlačidlo / odkaz: Viac

**Blok 3.7 · Časté otázky**
- Nadpis: Časté otázky
- Otázka: Mám nárok na odškodnenie, ak som nehodu čiastočne zavinil aj ja?
- Odpoveď: Spoluzavinenie nárok automaticky nevylučuje, no môže ovplyvniť jeho výšku. Všetko závisí od okolností nehody, preto je vhodné posúdiť konkrétnu situáciu.
- Otázka: Ako dlho trvá rozvod?
- Odpoveď: Závisí najmä od toho, či sa manželia dohodnú a či majú maloleté deti. Ak súd rozhoduje aj o deťoch alebo je vec sporná, konanie trvá dlhšie. Presnejší odhad Vám dáme po posúdení Vašej situácie.
- Otázka: Potrebujem advokáta pri každej zmluve?
- Odpoveď: Nie vždy. Pri dlhodobých, hodnotnejších alebo rizikovejších zmluvách je však posúdenie pred podpisom vhodné, lebo opraviť chybu po podpise býva náročnejšie.
- Tlačidlo / odkaz: Všetky otázky a odpovede →

**Blok 3.8 · Záverná výzva**
- Nadpis: Neviete, ako ďalej? Začnime jedným rozhovorom.
- Text: Opíšte nám Váš problém. Povieme Vám, aké máte možnosti a čo je rozumné urobiť ako prvé, nastavíme správne postupnosť krokov.
- Tlačidlo / odkaz: Dohodnúť konzultáciu
- Tlačidlo / odkaz: Zavolať 0905 769 966

### Služby (prehľad) — `/sluzby`

- **SEO title:** Služby advokátskej kancelárie Bratislava | JUDr. Pavlovič
- **Meta description:** 10 oblastí práva, ktorým sa venujeme: od dopravných nehôd a zmlúv až po rodinné a kybernetické právo. Dohodnite si konzultáciu.

**Blok 4.1 · Prehľadová stránka Služby**
- Hlavný nadpis: Služby
- Text: Venujeme sa 10 oblastiam práva, s ktorými sa ľudia a firmy stretávajú najčastejšie. Pri každej veci začíname rovnako: vypočujeme si Vás, vysvetlíme Vám situáciu zrozumiteľne a navrhneme ďalší postup. Kancelária sídli v Bratislave a klientov zastupuje na celom západnom Slovensku.
- Tlačidlo / odkaz: Dohodnúť konzultáciu
- Tlačidlo / odkaz: Zavolať 0905 769 966
- _(poznámka: Nasleduje sekcia „Čomu sa venujeme“ s 10 kartami služieb a pásom čísel, rovnaká ako na úvodnej stránke (blok 3.2).)_
- Nadpis: Neviete, kam Vaša vec patrí?
- Text: Opíšte nám situáciu. Povieme Vám, ako k nej pristúpiť.
- Tlačidlo / odkaz: Dohodnúť konzultáciu
- Tlačidlo / odkaz: Zavolať 0905 769 966

### Obchodné právo — `/sluzby/obchodne-pravo`

- **SEO title:** Advokát obchodné právo Bratislava | JUDr. Pavlovič
- **Meta description:** Právne zázemie pre podnikateľov v Bratislave: zmluvy, spoločnosti, vymáhanie pohľadávok a obchodné spory. Dohodnite si konzultáciu.

**Blok 4.4 · 1 Hero**
- Hlavný nadpis: Advokát pre obchodné právo v Bratislave a okolí
- Text: Zmluvy, spoločnosti, pohľadávky a spory. Právne zázemie pre podnikateľov, ktorí potrebujú jasné a praktické riešenia.
- Tlačidlo / odkaz: Dohodnúť konzultáciu
- Tlačidlo / odkaz: Zavolať 0905 769 966

**Blok 4.4 · 2 Úvod**
- Nadpis: Právne zázemie pre Vaše podnikanie
- Text: Podnikanie prináša množstvo rozhodnutí, z ktorých takmer všetky majú právne dôsledky. Pomáhame živnostníkom, podnikateľom a spoločnostiam rozhodovať sa informovane: pri zakladaní firmy, pri uzatváraní zmlúv aj pri sporoch. Riziká Vám vysvetlíme prakticky, bez zbytočnej teórie. Cieľom je predchádzať problémom, a ak už nastanú, riešiť ich vecne a včas.

**Blok 4.4 · 3 S čím pomáhame**
- Nadpis: S čím sa na nás podnikatelia obracajú
- Podnadpis: Zakladáte alebo meníte firmu.
- Text: Založenie spoločnosti, zmeny v spoločnosti a v obchodnom registri.
- Podnadpis: Potrebujete zmluvu.
- Text: Príprava a posúdenie zmlúv: dodávateľské, o spolupráci, nájomné, obchodnozáväzkové a ďalšie obchodné zmluvy.
- Podnadpis: Odberateľ Vám nezaplatil.
- Text: Posúdenie pohľadávky, výzva na zaplatenie a vymáhanie, vrátane súdneho konania.
- Podnadpis: Máte spor s obchodným partnerom.
- Text: Hľadanie dohody alebo zastupovanie v konaní pred súdom.
- Podnadpis: Riešite vzťahy medzi spoločníkmi.
- Text: Spoločenská zmluva, prevod obchodného podielu a spory medzi spoločníkmi.
- Podnadpis: Potrebujete právne zázemie pravidelne.
- Text: Dlhodobá spolupráca s firmami za individuálne dohodnutých podmienok (mesačný paušál).

**Blok 4.4 · 4 Ako postupujeme**
- Nadpis: Ako postupujeme
- Podnadpis: Opíšete nám zámer alebo problém.
- Text: Napríklad, čo plánujete podpísať alebo čo sa stalo. Prineste zmluvy, faktúry a korešpondenciu, ktoré sa k veci vzťahujú, respektíve všetky na vec sa vzťahujúce doklady, tieto posúdime a vec nastavíme.
- Podnadpis: Posúdime a navrhneme postup.
- Text: Vysvetlíme Vám riziká, možnosti a odporúčaný ďalší krok. Pri spore najprv zvážime, či je reálna dohoda. Preferujeme zásadu mimosúdnych riešení: „Akákoľvek zlá mimosúdna dohoda je vždy lepšia ako autoritatívne rozhodnutie súdu.“
- Podnadpis: Postaráme sa o realizáciu.
- Text: Pripravíme alebo posúdime dokumenty, rokujeme s druhou stranou a ak je to potrebné, zastupujeme Vás pred súdom.

**Blok 4.4 · 5 Kedy sa ozvať**
- Nadpis: Kedy sa nám ozvať
- Bod: Chystáte sa podpísať zmluvu s vysokou hodnotou alebo na dlhé obdobie.
- Bod: Zakladáte spoločnosť s ďalším spoločníkom.
- Bod: Faktúra je po splatnosti a odberateľ nereaguje.
- Bod: Obchodný partner neplní, čo ste si dohodli.
- Bod: Meníte konateľa, spoločníkov alebo sídlo firmy.
- Tlačidlo / odkaz: Dohodnúť konzultáciu

**Blok 4.4 · 6 Časté otázky**
- Nadpis: Často kladené otázky
- Otázka: S čím môžem prísť pri zakladaní firmy?
- Odpoveď: S nápadom aj s hotovým zámerom. Spolu zvolíme vhodnú formu, upravíme vzťahy medzi spoločníkmi a pripravíme potrebné dokumenty.
- Otázka: Potrebujem advokáta pri každej zmluve?
- Odpoveď: Nie vždy. Pri dlhodobých, hodnotnejších alebo rizikovejších zmluvách je však posúdenie pred podpisom vhodné, lebo opraviť chybu po podpise býva náročnejšie. „Dobré zmluvy robia dobrých priateľov.“
- Otázka: Čo robiť, ak mi odberateľ nezaplatil?
- Odpoveď: Dôležité je zhromaždiť doklady a čo najskôr zvoliť postup, od výzvy na zaplatenie až po súd. Pohľadávky sa premlčujú, preto vec neodkladajte.
- Otázka: Zastupujete aj pred súdom?
- Odpoveď: Áno, zastupujeme klientov v obchodných sporoch aj pred súdom.
- Otázka: Je možná dlhodobá spolupráca pre firmu?
- Odpoveď: Podnikateľom, ktorí potrebujú právne zázemie pravidelne, ponúkame dlhodobú spoluprácu. Podmienky sa dohodnú individuálne.

**Blok 4.4 · 7 Súvisiace služby**
- Nadpis: Súvisiace služby
- Tlačidlo / odkaz: Právo duševného vlastníctva →
- Tlačidlo / odkaz: Pracovné právo →

**Blok 4.4 · 8 Záverná výzva**
- Nadpis: Majte právne veci vo firme pod kontrolou
- Text: Povedzte nám, čo plánujete alebo riešite. Povieme Vám, ako k tomu pristúpiť.
- Tlačidlo / odkaz: Dohodnúť konzultáciu
- Tlačidlo / odkaz: Zavolať 0905 769 966

### Občianske právo — `/sluzby/obcianske-pravo`

- **SEO title:** Advokát občianske právo Bratislava | JUDr. Pavlovič
- **Meta description:** Zmluvy, nehnuteľnosti, susedské a majetkové spory, náhrada škody či dedičstvo. Pomôžeme Vám v občianskoprávnych veciach.

**Blok 4.5 · 1 Hero**
- Hlavný nadpis: Advokát pre občianske právo v Bratislave a okolí
- Text: Zmluvy, nehnuteľnosti, spory a náhrada škody. Pomôžeme Vám vyriešiť situácie, s ktorými sa človek stretne v súkromnom živote.
- Tlačidlo / odkaz: Dohodnúť konzultáciu
- Tlačidlo / odkaz: Zavolať 0905 769 966

**Blok 4.5 · 2 Úvod**
- Nadpis: Čo patrí do občianskeho práva
- Text: Občianske právo upravuje vzťahy medzi ľuďmi v súkromnom živote: majetok, zmluvy, náhradu škody či dedenie. Nepatria sem rodinné veci, ako je rozvod, ani podnikanie, ktoré riešime v rámci rodinného a obchodného práva. Ľudia sa na nás najčastejšie obracajú, keď kupujú alebo predávajú nehnuteľnosť, keď im niekto spôsobil škodu alebo keď sa nevedia dohodnúť so susedom či spoluvlastníkom alebo sa sporia o vlastníctvo k hnuteľným alebo nehnuteľným veciam.

**Blok 4.5 · 3 S čím pomáhame**
- Nadpis: S čím Vám pomôžeme
- Podnadpis: Zmluvy.
- Text: Príprava a posúdenie kúpnych, darovacích, nájomných a všetkých ostatných zmlúv v oblasti občianskeho práva.
- Podnadpis: Nehnuteľnosti.
- Text: Prevody bytov, domov a pozemkov, návrh na vklad do katastra a vzťahy medzi spoluvlastníkmi, právo tretích osôb k nehnuteľnostiam, záložné zmluvy, vznik a zánik vecných bremien a iné.
- Podnadpis: Susedské a majetkové spory.
- Text: Spory o užívanie pozemkov a spoločných vecí či o vrátenie požičaných peňazí.
- Podnadpis: Náhrada škody.
- Text: Uplatnenie náhrady, keď Vám niekto spôsobil škodu na majetku alebo zdraví.
- Podnadpis: Ochrana osobnosti.
- Text: Postup pri zásahu do cti, dobrej povesti alebo súkromia, ochrana osobnostných práv pred akýmikoľvek zásahmi.
- Podnadpis: Dedičské konanie.
- Text: Zastupovanie dedičov a pomoc pri dohode o rozdelení dedičstva.
- Podnadpis: Exekúcie a ochrana spotrebiteľa.
- Text: Posúdenie exekúcie a ochrana Vašich práv ako spotrebiteľa.

**Blok 4.5 · 4 Ako postupujeme**
- Nadpis: Ako postupujeme
- Podnadpis: Opíšete nám situáciu.
- Text: Povedzte nám, čo sa stalo alebo čo plánujete. Ak máte zmluvu, list či rozhodnutie, prineste ich na konzultáciu a posúdenie.
- Podnadpis: Vysvetlíme Vám možnosti.
- Text: Posúdime Vašu situáciu, vysvetlíme riziká a navrhneme postup. Pri spore najprv zvážime, či sa dá vec vyriešiť dohodou.
- Podnadpis: Pripravíme dokumenty alebo Vás zastúpime.
- Text: Pripravíme zmluvu či podanie, rokujeme s druhou stranou a ak je to potrebné, zastupujeme Vás pred súdom.

**Blok 4.5 · 5 Kedy sa ozvať**
- Nadpis: Kedy sa nám ozvať
- Bod: Kupujete alebo predávate nehnuteľnosť.
- Bod: Niekto Vám dlží peniaze a nereaguje.
- Bod: So susedom sa neviete dohodnúť.
- Bod: Niekto Vám spôsobil škodu.
- Bod: Dostali ste žalobu alebo výzvu na zaplatenie.
- Bod: Riešite rozdelenie dedičstva.
- Bod: Žiadate o vydanie vecí, ktoré Vám patria.
- Bod: Uplatňujete si vlastnícke nároky k hnuteľným alebo nehnuteľným veciam.
- Tlačidlo / odkaz: Dohodnúť konzultáciu

**Blok 4.5 · 6 Časté otázky**
- Nadpis: Často kladené otázky
- Otázka: Čo musí obsahovať kúpna zmluva k nehnuteľnosti?
- Odpoveď: Okrem údajov o zmluvných stranách, cene a predmete prevodu musí presne zodpovedať údajom v katastri, ak ide o nehnuteľnosť. Ak ide o hnuteľnú vec, musí byť vec jasne zrozumiteľne a nezameniteľne opísaná. Chyba v zmluve môže viesť k tomu, že kataster vklad nepovolí alebo konanie preruší, respektíve pri hnuteľných veciach nedôjde k zmene vlastníctva veci pre nejasnosť opisu predmetu zmluvy. Preto je vhodné dať zmluvu posúdiť pred podpisom.
- Otázka: Ako riešiť spor so susedom?
- Odpoveď: Najprv sa oplatí skúsiť dohodu, ideálne písomnú. Ak nepomôže, prichádza do úvahy výzva od advokáta a napokon žaloba na súde. Vhodný postup závisí od toho, o čo v spore ide.
- Otázka: Ako postupovať pri dedičstve?
- Odpoveď: Dedičské konanie začína súd spravidla sám, keď sa dozvie o úmrtí, a vedie ho notár ako súdny komisár. Ak sa dedičia nevedia dohodnúť alebo je majetok zložitejšie štruktúrovaný, pomôžeme Vám chrániť Vaše záujmy.
- Otázka: Dokedy môžem žiadať vrátenie dlhu?
- Odpoveď: Nároky sa premlčujú a lehota závisí od druhu nároku. Ak dlžník neplatí, s riešením zbytočne neotálajte.

**Blok 4.5 · 7 Súvisiace služby**
- Nadpis: Súvisiace služby
- Tlačidlo / odkaz: Rodinné právo →
- Tlačidlo / odkaz: Obchodné právo →

**Blok 4.5 · 8 Záverná výzva**
- Nadpis: Riešite zmluvu alebo spor?
- Text: Opíšte nám situáciu. Povieme Vám, aké máte možnosti.
- Tlačidlo / odkaz: Dohodnúť konzultáciu
- Tlačidlo / odkaz: Zavolať 0905 769 966

### Dopravné nehody — `/sluzby/dopravne-nehody`

- **SEO title:** Advokát dopravné nehody Bratislava | JUDr. Pavlovič
- **Meta description:** Pomoc po dopravnej nehode: odškodnenie za ujmu na zdraví, škoda na vozidle a komunikácia s poisťovňou. Dohodnite si konzultáciu.

**Blok 4.3 · 1 Hero**
- Hlavný nadpis: Advokát pre dopravné nehody v Bratislave a okolí
- Text: Po nehode sa naraz rieši zdravie, auto, poisťovňa aj doklady. Pomôžeme Vám zorientovať sa a uplatniť Vaše nároky.
- Tlačidlo / odkaz: Dohodnúť konzultáciu
- Tlačidlo / odkaz: Zavolať 0905 769 966

**Blok 4.3 · 2 Úvod**
- Nadpis: Keď sa po nehode nechcete s poisťovňou dohadovať sami
- Text: Dopravná nehoda zasiahne zdravie, peniaze aj čas. Mnohí ľudia nevedia, na aké odškodnenie majú nárok, alebo prijmú prvú ponuku poisťovne, respektíve škodcu, bez toho, aby ju niekto posúdil. Iní riešia spor o to, kto nehodu zavinil. Pomáhame poškodeným vodičom, spolujazdcom, chodcom, cyklistom aj pozostalým. Posúdime Vašu situáciu, vysvetlíme Vám, čo môžete žiadať, a postaráme sa o komunikáciu so všetkými dotknutými stranami vrátane poisťovní, polície, znalcov, vinníkov dopravných nehôd.

**Blok 4.3 · Čo robiť hneď po nehode**
- Nadpis: Čo robiť hneď po dopravnej nehode
- Bod: Zdravie a bezpečnosť na prvom mieste. Pri zranení volajte záchranku (155 alebo 112) a zabezpečte miesto nehody.
- Bod: Privolajte políciu (158). Pri zranení alebo väčšej škode je to nevyhnutné.
- Bod: Zdokumentujte situáciu aj sami, nespoľahnite sa len na políciu. Odfoťte vozidlá, ich polohu, poškodenie a okolie. Zapíšte si údaje druhého vodiča a kontakty svedkov.
- Bod: Nepodpisujte to, čomu nerozumiete. Pred podpisom vyhlásenia o vine alebo dohody sa poraďte.
- Bod: Dajte sa vyšetriť. Aj pri „drobnom“ zranení, následky sa môžu prejaviť neskôr.
- Bod: Uschovajte všetky doklady. Lekárske správy, faktúry, potvrdenia o práceneschopnosti, komunikáciu s poisťovňou.
- Text: Máte otázky k Vašej situácii?
- Tlačidlo / odkaz: Dohodnúť konzultáciu →

**Blok 4.3 · 3 S čím pomáhame**
- Nadpis: S čím Vám pomôžeme
- Podnadpis: Odškodnenie za ujmu na zdraví.
- Text: Bolestné, sťaženie spoločenského uplatnenia, náklady na liečenie a strata na zárobku.
- Podnadpis: Škoda na vozidle a majetku.
- Text: Uplatnenie nároku a posúdenie vyčíslenia škody.
- Podnadpis: Komunikácia s poisťovňou.
- Text: Uplatnenie nároku, posúdenie vyjadrení a ponúk poisťovne a postup, keď poisťovňa plnenie odmietne alebo skráti.
- Podnadpis: Spor o zavinenie.
- Text: Keď poisťovňa, polícia alebo druhá strana spochybňuje priebeh nehody.
- Podnadpis: Pomoc pozostalým.
- Text: Nároky blízkych osôb po smrteľnej nehode.
- Podnadpis: Neznámy alebo nepoistený vinník.
- Text: Uplatnenie nároku z garančného fondu, ktorý spravuje Slovenská kancelária poisťovateľov.

**Blok 4.3 · 4 Ako postupujeme**
- Nadpis: Ako postupujeme
- Podnadpis: Opíšete nám, čo sa stalo.
- Text: Zavoláte alebo napíšete. Stačí stručne: kedy a kde sa nehoda stala, kto bol zranený a čo Vám zatiaľ oznámila poisťovňa, akú škodu predpokladáte, či ste ju spôsobili Vy, či Vám bola spôsobená, či ste si vedomí zavinenia.
- Podnadpis: Posúdime nárok a doklady.
- Text: Pri konzultácii prejdeme lekárske správy, záznam o nehode a komunikáciu s poisťovňou. Vysvetlíme Vám, na čo máte nárok a aké lehoty platia. V prípade spornosti posúdenia zabezpečíme znalecký posudok v potrebnom odbore.
- Podnadpis: Uplatníme nárok.
- Text: Pripravíme a uplatníme nárok, posúdime ponuku poisťovne, respektíve vinníka nehody, a rokujeme o primeranom plnení, preferujeme mimosúdne riešenie. Ak je to potrebné, zastupujeme Vás aj pred súdom.

**Blok 4.3 · 5 Kedy sa ozvať**
- Nadpis: Kedy sa nám ozvať
- Bod: Neviem, či mám nárok na odškodnenie.
- Bod: Poisťovňa mi ponúkla plnenie a neviem, či je primerané.
- Bod: Poisťovňa tvrdí, že nehodu som zavinil/a ja.
- Bod: Nehodu spôsobil vodič, ktorého sa nepodarilo zistiť.
- Bod: Môj blízky sa pri nehode zranil alebo zomrel.
- Bod: Poisťovňa mi plnenie odmietla alebo skrátila.
- Tlačidlo / odkaz: Dohodnúť konzultáciu

**Blok 4.3 · 6 Časté otázky**
- Nadpis: Často kladené otázky
- Otázka: Mám nárok na odškodnenie, ak som nehodu čiastočne zavinil aj ja?
- Odpoveď: Spoluzavinenie nárok automaticky nevylučuje, no môže ovplyvniť jeho výšku. Všetko závisí od okolností nehody, preto je vhodné posúdiť konkrétnu situáciu.
- Otázka: Môžem sa obrátiť priamo na poisťovňu druhého vodiča?
- Odpoveď: Áno, poškodený môže svoj nárok spravidla uplatniť priamo voči poisťovni, u ktorej je zodpovedný vodič poistený v rámci povinného zmluvného poistenia.
- Otázka: Poisťovňa mi ponúkla odškodné. Mám ho prijať?
- Odpoveď: Odporúčame ponuku pred prijatím posúdiť, najmä pri zraneniach, pri ktorých sa všetky následky ešte nemusia prejaviť. Po podpise dohody sa k nej už ťažko vracia a ťažko sa otvára.
- Otázka: Dokedy musím nárok uplatniť?
- Odpoveď: Nároky sa premlčujú a lehoty sa môžu líšiť podľa druhu nároku. Preto s riešením neodkladajte.
- Otázka: Čo ak vinník ušiel alebo nemá poistenie?
- Odpoveď: Aj v takom prípade môžu existovať spôsoby, ako nárok uplatniť. Záleží na konkrétnych okolnostiach nehody.

**Blok 4.3 · 7 Súvisiace služby**
- Nadpis: Súvisiace služby
- Tlačidlo / odkaz: Trestné právo →
- Tlačidlo / odkaz: Občianske právo →

**Blok 4.3 · 8 Záverná výzva**
- Nadpis: Po nehode nemusíte všetko riešiť sami
- Text: Opíšte nám, čo sa stalo. Povieme Vám, aké máte možnosti.
- Tlačidlo / odkaz: Dohodnúť konzultáciu
- Tlačidlo / odkaz: Zavolať 0905 769 966

### Rodinné právo — `/sluzby/rodinne-pravo`

- **SEO title:** Advokát rodinné právo Bratislava | JUDr. Pavlovič
- **Meta description:** Rozvod, starostlivosť o deti, výživné a vyporiadanie majetku manželov. Pokojne, diskrétne a s ohľadom na deti. Dohodnite si konzultáciu.

**Blok 4.6 · 1 Hero**
- Hlavný nadpis: Advokát pre rodinné právo v Bratislave a okolí
- Text: Rozvod, deti, výživné a majetok. Pomôžeme Vám prejsť náročným obdobím života pokojne, s jasným plánom a s ohľadom na to, čo je dobré pre Vaše deti.
- Tlačidlo / odkaz: Dohodnúť konzultáciu
- Tlačidlo / odkaz: Zavolať 0905 769 966

**Blok 4.6 · 2 Úvod**
- Nadpis: Keď sa mení rodina
- Text: Rozpad vzťahu zasiahne celú rodinu. Okrem emócií treba vyriešiť aj praktické otázky: kde budú žiť deti, aké bude výživné a ako sa rozdelí spoločný majetok. Postupujeme pokojne a vecne. Ak je to možné, hľadáme dohodu, pretože býva rýchlejšia a pre deti šetrnejšia ako dlhý spor pred súdom. Všetko, čo nám poviete, zostáva chránené povinnou mlčanlivosťou advokáta.

**Blok 4.6 · 3 S čím pomáhame**
- Nadpis: S čím Vám pomôžeme
- Podnadpis: Rozvod manželstva.
- Text: Príprava návrhu, zastupovanie v konaní a pomoc pri dohode o podmienkach.
- Podnadpis: Starostlivosť o deti a styk.
- Text: Úprava toho, komu súd deti zverí, a ako bude upravený kontakt s druhým rodičom.
- Podnadpis: Výživné.
- Text: Určenie, zvýšenie alebo zníženie výživného pre dieťa, prípadne aj medzi manželmi.
- Podnadpis: Vyporiadanie spoločného majetku.
- Text: Rozdelenie bezpodielového spoluvlastníctva manželov dohodou alebo na súde.
- Podnadpis: Určenie a zapretie otcovstva.
- Text: Zastupovanie v konaní o určení alebo zapretí otcovstva.
- Podnadpis: Osvojenie.
- Text: Pomoc a sprevádzanie počas konania o osvojení.

**Blok 4.6 · 4 Ako postupujeme**
- Nadpis: Ako postupujeme
- Podnadpis: Pokojný rozhovor.
- Text: Na konzultácii si vypočujeme Vašu situáciu bez súdenia. Zistíme, čo je pre Vás a pre deti najdôležitejšie.
- Podnadpis: Jasný plán.
- Text: Vysvetlíme Vám, ako konanie prebieha, čo bude súd posudzovať a aké máte možnosti. Spolu zvážime, či je reálna dohoda s druhou stranou.
- Podnadpis: Dohoda alebo zastupovanie.
- Text: Pripravíme návrhy a dohody, komunikujeme s druhou stranou a zastupujeme Vás pred súdom. Vždy s ohľadom na záujem detí.

**Blok 4.6 · 5 Kedy sa ozvať**
- Nadpis: Kedy sa nám ozvať
- Bod: Zvažujete rozvod a neviete, kde začať.
- Bod: S druhým rodičom sa neviete dohodnúť na starostlivosti o deti.
- Bod: Druhý rodič neplatí výživné.
- Bod: Zmenili sa pomery a výživné už nezodpovedá realite.
- Bod: Riešite rozdelenie majetku po rozvode.
- Tlačidlo / odkaz: Dohodnúť konzultáciu

**Blok 4.6 · 6 Časté otázky**
- Nadpis: Často kladené otázky
- Otázka: Ako dlho trvá rozvod?
- Odpoveď: Závisí najmä od toho, či sa manželia dohodnú a či majú maloleté deti. Ak súd rozhoduje aj o deťoch alebo je vec sporná, konanie trvá dlhšie. Presnejší odhad Vám dáme po posúdení Vašej situácie.
- Otázka: Ako sa určuje výživné?
- Odpoveď: Súd prihliada na odôvodnené potreby dieťaťa a na schopnosti, možnosti a majetkové pomery rodičov. Výživné sa dá neskôr zmeniť, ak sa podstatne zmenia pomery.
- Otázka: Kedy je možná striedavá starostlivosť?
- Odpoveď: Súd môže zveriť dieťa do striedavej starostlivosti, ak sú obaja rodičia spôsobilí sa oň starať a ak je to v záujme dieťaťa. Rozhodujúci je vždy najlepší záujem dieťaťa, nie želanie rodičov.
- Otázka: Musíme ísť na súd, aj keď sa dohodneme?
- Odpoveď: O rozvode a o úprave pomerov k maloletým deťom vždy rozhoduje súd. Dohoda rodičov však konanie výrazne zjednoduší a urýchli.

**Blok 4.6 · 7 Súvisiace služby**
- Nadpis: Súvisiace služby
- Tlačidlo / odkaz: Občianske právo →
- Tlačidlo / odkaz: Správne právo →

**Blok 4.6 · 8 Záverná výzva**
- Nadpis: Urobme prvý krok spolu
- Text: Opíšte nám svoju situáciu. Pokojne a dôverne.
- Tlačidlo / odkaz: Dohodnúť konzultáciu
- Tlačidlo / odkaz: Zavolať 0905 769 966

### Trestné právo — `/sluzby/trestne-pravo`

- **SEO title:** Advokát trestné právo Bratislava | JUDr. Pavlovič
- **Meta description:** Obhajoba obvinených a zastupovanie poškodených v trestnom konaní. Poskytujeme iba stálym klientom a po predchádzajúcej dohode.

**Blok 4.11 · 1 Hero**
- Hlavný nadpis: Advokát pre trestné právo v Bratislave a okolí
- Text: Trestné konanie je pre každého náročné. Pomôžeme Vám zorientovať sa, chrániť Vaše práva a postupovať premyslene. Diskrétne a bez poučovania.
- Tlačidlo / odkaz: Opísať vec
- Tlačidlo / odkaz: Zavolať 0905 769 966

**Blok 4.11 · Upozornenie**
- Text: Právnu pomoc – obhajobu v trestnom práve poskytujeme iba stálym klientom a po predchádzajúcej dohode. Dôvodom je vysoká pracovná vyťaženosť kancelárie. Ďakujeme za pochopenie.

**Blok 4.11 · 2 Úvod**
- Nadpis: Obhajoba a zastupovanie v trestnom konaní
- Text: V trestnom konaní ide o dôležité veci: o povesť, rodinu, prácu a niekedy aj o slobodu. Našim stálym klientom poskytujeme obhajobu a zastupovanie v celom priebehu trestného konania. Pri každom prípade začíname rovnako: pozorne Vás vypočujeme, vysvetlíme Vám, v akej fáze konania ste, a spolu určíme ďalší postup.

**Blok 4.11 · Čo robiť pri predvolaní**
- Nadpis: Čo robiť, keď Vás predvolá polícia alebo Vás zadržia
- Bod: Zachovajte pokoj. Vyjadrenia v strese sa neskôr ťažko menia.
- Bod: Zistite svoje postavenie. Pýtajte sa, v akom postavení ste v rámci trestného konania predvolaný: či ako svedok, podozrivý, alebo či ste v inom procesnom postavení. Od toho závisí spôsob uplatnenia Vašich práv.
- Bod: Máte právo na obhajcu. Poraďte sa s advokátom skôr, ako sa podrobne vyjadríte.
- Bod: Obvinený má právo odoprieť výpoveď, rovnako tak brániť sa spôsobom aký uzná za vhodné, môže dokonca klamať. Pri svedeckej výpovedi platia iné pravidlá, klamstvo sa netoleruje, naopak je trestným činom.
- Bod: Nepodpisujte protokol bez prečítania. Podpisujete len to, čomu rozumiete a s čím súhlasíte.
- Tlačidlo / odkaz: Opísať vec →

**Blok 4.11 · 3 S čím pomáhame**
- Nadpis: S čím Vám pomôžeme
- Podnadpis: Obhajoba obvineného.
- Text: V prípravnom konaní aj pred súdom, vrátane návrhov, sťažností a opravných prostriedkov, vyhodnotenie dôkaznej situácie, právnej kvalifikácie a nastavenia spôsobu obhajoby.
- Podnadpis: Zastupovanie poškodeného.
- Text: Uplatnenie nároku na náhradu škody v trestnom konaní a ochrana Vašich práv ako poškodeného.
- Podnadpis: Pomoc rodine obvineného.
- Text: Orientácia v situácii a zvolenie obhajcu v mene blízkej osoby.
- Podnadpis: Trestné oznámenia.
- Text: Posúdenie veci a podanie trestného oznámenia.
- Podnadpis: Konania pred Špecializovaným trestným súdom.
- Text: Obhajoba a zastupovanie v konaniach pred Špecializovaným trestným súdom v Pezinku aj na jeho pracovisku v Banskej Bystrici.

**Blok 4.11 · Diskrétnosť**
- Nadpis: Diskrétnosť je samozrejmosť
- Text: Advokát je zo zákona viazaný povinnosťou mlčanlivosti. To, čo nám poviete, zostáva medzi nami. Na konzultácii môžete otvorene povedať, ako sa veci skutočne majú.

**Blok 4.11 · 4 Ako postupujeme**
- Nadpis: Ako postupujeme
- Podnadpis: Ozvete sa nám.
- Text: Stačí telefonát alebo krátka správa. Podrobnosti nemusíte písať, rozoberieme ich osobne.
- Podnadpis: Osobná konzultácia.
- Text: Prejdeme situáciu a vysvetlíme Vám, v akej fáze konania ste a aké máte možnosti.
- Podnadpis: Obhajoba alebo zastupovanie.
- Text: Ak sa dohodneme na spolupráci, preberáme komunikáciu, lehoty a procesné kroky.

**Blok 4.11 · 5 Kedy sa ozvať**
- Nadpis: Ak ste náš stály klient, ozvite sa nám, keď
- Bod: Dostali ste predvolanie na políciu.
- Bod: Bolo Vám vznesené obvinenie.
- Bod: Váš blízky bol zadržaný.
- Bod: Stali ste sa poškodeným trestným činom.
- Tlačidlo / odkaz: Opísať vec

**Blok 4.11 · 6 Časté otázky**
- Nadpis: Často kladené otázky
- Otázka: Kedy si mám zvoliť obhajcu?
- Odpoveď: Čo najskôr, ideálne skôr, ako sa vyjadríte alebo podpíšete akýkoľvek protokol alebo zápisnicu. Právo na obhajcu máte od začiatku trestného stíhania.
- Otázka: Musím na polícii vypovedať?
- Odpoveď: Obvinený má právo odoprieť výpoveď. Svedok má povinnosť vypovedať, s určitými výnimkami, napríklad ak by výpoveďou spôsobil nebezpečenstvo trestného stíhania sebe alebo blízkej osobe. Preto je dôležité vedieť, v akom procesnom postavení ste.
- Otázka: Môže obhajcu zvoliť aj niekto z rodiny?
- Odpoveď: Áno, obhajcu môžu v mene obvineného zvoliť aj niektoré blízke osoby.
- Otázka: Je moja komunikácia s advokátom dôverná?
- Odpoveď: Áno, advokát je zo zákona viazaný povinnosťou mlčanlivosti.

**Blok 4.11 · 7 Súvisiace služby**
- Nadpis: Súvisiace služby
- Tlačidlo / odkaz: Dopravné nehody →
- Tlačidlo / odkaz: Správne právo →

**Blok 4.11 · 8 Záverná výzva**
- Nadpis: Ste náš stály klient?
- Text: Opíšte nám vec. Ozveme sa Vám a dohodneme ďalší postup.
- Tlačidlo / odkaz: Opísať vec
- Tlačidlo / odkaz: Zavolať 0905 769 966

### Správne právo — `/sluzby/spravne-pravo`

- **SEO title:** Advokát správne právo Bratislava | JUDr. Pavlovič
- **Meta description:** Odvolanie proti rozhodnutiu úradu, povoľovanie stavieb, priestupky a správna žaloba. Pomôžeme Vám v konaní pred úradmi.

**Blok 4.7 · 1 Hero**
- Hlavný nadpis: Advokát pre správne právo v Bratislave a okolí
- Text: Rozhodnutie úradu nemusí byť konečné. Pomôžeme Vám ho posúdiť, včas sa odvolať a chrániť Vaše práva pred úradmi aj pred súdom.
- Tlačidlo / odkaz: Dohodnúť konzultáciu
- Tlačidlo / odkaz: Zavolať 0905 769 966

**Blok 4.7 · 2 Úvod**
- Nadpis: Pri rozhodnutí úradu rozhodujú lehoty
- Text: Proti rozhodnutiu úradu sa spravidla dá brániť, no lehoty na odvolanie sú krátke. Ak ich zmeškáte, Vaše možnosti sa výrazne zúžia. Preto je dôležité ozvať sa čo najskôr po doručení rozhodnutia. Zastupujeme Vás pred obcami, okresnými úradmi, stavebnými úradmi a ďalšími orgánmi verejnej správy. Ak úrad nerozhodne správne ani po odvolaní, môžeme rozhodnutie napadnúť správnou žalobou na súde.

**Blok 4.7 · 3 S čím pomáhame**
- Nadpis: S čím Vám pomôžeme
- Podnadpis: Odvolanie proti rozhodnutiu.
- Text: Posúdenie rozhodnutia a príprava odvolania alebo iného opravného prostriedku.
- Podnadpis: Povoľovanie stavieb.
- Text: Zastupovanie stavebníkov aj susedov v konaní o povolení stavby.
- Podnadpis: Priestupky.
- Text: Obrana v priestupkovom konaní, napríklad pri pokute za dopravný priestupok.
- Podnadpis: Správna žaloba.
- Text: Preskúmanie rozhodnutia úradu správnym súdom.
- Podnadpis: Cudzinecké a daňové konania.
- Text: Zastupovanie v konaniach o pobyte cudzincov a pri daňovej kontrole.

**Blok 4.7 · 4 Ako postupujeme**
- Nadpis: Ako postupujeme
- Podnadpis: Prinesiete nám rozhodnutie.
- Text: Ozvite sa čo najskôr po doručení. Uveďte, kedy Vám rozhodnutie prišlo, a prineste ho na konzultáciu spolu s ďalšími písomnosťami, opíšte stav ktorý rozhodnutiu predchádzal.
- Podnadpis: Posúdime ho a overíme lehotu.
- Text: Zistíme, či má rozhodnutie nedostatky, aké opravné prostriedky prichádzajú do úvahy a dokedy ich treba podať.
- Podnadpis: Podáme odvolanie alebo žalobu.
- Text: Pripravíme odvolanie, komunikujeme s úradom a zastupujeme Vás v konaní. Ak je to potrebné, podáme správnu žalobu na súd.

**Blok 4.7 · 5 Kedy sa ozvať**
- Nadpis: Kedy sa nám ozvať
- Bod: Dostali ste rozhodnutie, s ktorým nesúhlasíte.
- Bod: Úrad Vám uložil pokutu.
- Bod: Stavebný úrad zamietol Vašu žiadosť alebo povolil stavbu, ktorá Vás obmedzuje.
- Bod: Úrad vo Vašej veci nekoná alebo konanie zbytočne predlžuje.
- Bod: Chystáte sa podať žiadosť a chcete ju mať v poriadku.
- Tlačidlo / odkaz: Dohodnúť konzultáciu

**Blok 4.7 · 6 Časté otázky**
- Nadpis: Často kladené otázky
- Otázka: Dostal som rozhodnutie úradu. Čo ďalej?
- Odpoveď: Pozorne si prečítajte poučenie na konci rozhodnutia. Uvádza, či a dokedy sa môžete odvolať. Lehoty sú krátke, preto sa s nami poraďte čo najskôr po doručení.
- Otázka: Dá sa odvolať proti pokute?
- Odpoveď: Proti rozhodnutiu o pokute sa spravidla dá podať odvolanie alebo iný opravný prostriedok. Či má zmysel, závisí od okolností a od dôkazov, ktoré máte k dispozícii.
- Otázka: Kedy podať správnu žalobu?
- Odpoveď: Správnu žalobu môžete spravidla podať až po tom, čo ste využili odvolanie. Lehota na jej podanie je zákonom obmedzená, preto ju neodkladajte.

**Blok 4.7 · 7 Súvisiace služby**
- Nadpis: Súvisiace služby
- Tlačidlo / odkaz: Občianske právo →
- Tlačidlo / odkaz: Dopravné nehody →

**Blok 4.7 · 8 Záverná výzva**
- Nadpis: Nesúhlasíte s rozhodnutím úradu?
- Text: Ozvite sa čo najskôr. Posúdime ho a povieme Vám, aké máte možnosti.
- Tlačidlo / odkaz: Dohodnúť konzultáciu
- Tlačidlo / odkaz: Zavolať 0905 769 966

### Právo duševného vlastníctva — `/sluzby/dusevne-vlastnictvo`

- **SEO title:** Advokát duševné vlastníctvo Bratislava | JUDr. Pavlovič
- **Meta description:** Ochranné známky, autorské právo a licenčné zmluvy. Pomôžeme Vám chrániť názov, logo aj tvorivú prácu. Dohodnite si konzultáciu.

**Blok 4.8 · 1 Hero**
- Hlavný nadpis: Advokát pre duševné vlastníctvo v Bratislave a okolí
- Text: Názov, logo, dizajn aj autorské dielo majú hodnotu. Pomôžeme Vám ich chrániť, správne licencovať a brániť, keď ich niekto použije bez súhlasu.
- Tlačidlo / odkaz: Dohodnúť konzultáciu
- Tlačidlo / odkaz: Zavolať 0905 769 966

**Blok 4.8 · 2 Úvod**
- Nadpis: Chráňte to, čo ste vytvorili
- Text: Duševné vlastníctvo sú výsledky tvorivej práce: názvy, logá, dizajny, texty, fotografie či softvér. Pomáhame podnikateľom, tvorcom a startupom, ktorí chcú mať istotu, že ich značku alebo dielo nemôže voľne použiť niekto iný. Vysvetlíme Vám, čo je chránené automaticky, čo treba zaregistrovať a ako na to. Ak ide o vynález alebo technické riešenie, pozrite si stránku Patentové právo.

**Blok 4.8 · 3 S čím pomáhame**
- Nadpis: S čím Vám pomôžeme
- Podnadpis: Ochranné známky.
- Text: Ochranná známka je zapísané označenie, napríklad názov alebo logo, ktoré odlišuje Vaše výrobky či služby od iných. Pomôžeme Vám s prihláškou aj s preverením podobných známok.
- Podnadpis: Autorské právo.
- Text: Autorské právo chráni dielo, ako je text, fotografia alebo softvér. Vzniká automaticky vytvorením diela, bez registrácie.
- Podnadpis: Licenčné zmluvy.
- Text: Licencia je povolenie použiť dielo alebo známku za dohodnutých podmienok. Pripravíme ju alebo posúdime.
- Podnadpis: Prevod ochrannej známky.
- Text: Zmluvy o prevode alebo licencovaní známky, napríklad pri predaji firmy.
- Podnadpis: Dizajny.
- Text: Ochrana vzhľadu výrobku zápisom dizajnu.
- Podnadpis: Porušenie práv.
- Text: Postup, keď niekto bez súhlasu používa Vašu značku alebo dielo.

**Blok 4.8 · 4 Ako postupujeme**
- Nadpis: Ako postupujeme
- Podnadpis: Opíšete nám, čo chcete chrániť.
- Text: Povedzte nám, o aký názov, logo alebo dielo ide a ako ho používate. Prineste aj zmluvy, ktoré ste k nemu uzavreli.
- Podnadpis: Navrhneme spôsob ochrany.
- Text: Vysvetlíme Vám, či je Vaše dielo chránené automaticky alebo treba podať prihlášku, a odporučíme vhodný rozsah ochrany.
- Podnadpis: Postaráme sa o realizáciu.
- Text: Pripravíme prihlášku, licenčnú zmluvu alebo výzvu pri porušení práv a sprevádzame Vás celým konaním.

**Blok 4.8 · 5 Kedy sa ozvať**
- Nadpis: Kedy sa nám ozvať
- Bod: Zakladáte značku a chcete si chrániť jej názov.
- Bod: Niekto používa podobný názov alebo logo ako Vy.
- Bod: Chcete niekomu povoliť používať Vašu tvorbu.
- Bod: Dali ste si vytvoriť logo, web alebo softvér a chcete mať jasné, kto ich smie používať.
- Bod: Dostali ste výzvu, že porušujete cudzie práva.
- Tlačidlo / odkaz: Dohodnúť konzultáciu

**Blok 4.8 · 6 Časté otázky**
- Nadpis: Často kladené otázky
- Otázka: Ako si ochrániť názov firmy?
- Odpoveď: Zápis obchodného mena chráni najmä názov firmy ako podnikateľa. Ak chcete chrániť názov ako značku Vašich výrobkov alebo služieb, je vhodné zapísať ochrannú známku.
- Otázka: Čo je ochranná známka?
- Odpoveď: Je to zapísané označenie, napríklad slovo, logo alebo ich kombinácia, ktoré odlišuje Vaše výrobky alebo služby od iných. Zapisuje ju Úrad priemyselného vlastníctva SR, prípadne úrad Európskej únie pre celú Úniu.
- Otázka: Kto vlastní autorské práva k dielu?
- Odpoveď: Autorom je vždy človek, ktorý dielo vytvoril. Pri dielach vytvorených v zamestnaní alebo na objednávku je dôležité, kto ich smie a ako používať. To upravuje zákon a zmluva.

**Blok 4.8 · 7 Súvisiace služby**
- Nadpis: Súvisiace služby
- Tlačidlo / odkaz: Patentové právo →
- Tlačidlo / odkaz: Obchodné právo →

**Blok 4.8 · 8 Záverná výzva**
- Nadpis: Chcete chrániť svoju značku alebo tvorbu?
- Text: Opíšte nám, o čo ide. Navrhneme vhodný spôsob ochrany.
- Tlačidlo / odkaz: Dohodnúť konzultáciu
- Tlačidlo / odkaz: Zavolať 0905 769 966

### Patentové právo — `/sluzby/patentove-pravo`

- **SEO title:** Advokát patentové právo Bratislava | JUDr. Pavlovič
- **Meta description:** Posúdenie vynálezu, patent a úžitkový vzor, licenčné zmluvy a spory. Pomôžeme Vám chrániť technické riešenia. Dohodnite si konzultáciu.

**Blok 4.9 · 1 Hero**
- Hlavný nadpis: Advokát pre patentové právo v Bratislave a okolí
- Text: Vynález má hodnotu, ak je správne chránený. Pomôžeme Vám zvoliť vhodnú ochranu, upraviť zmluvy a brániť Vaše práva.
- Tlačidlo / odkaz: Dohodnúť konzultáciu
- Tlačidlo / odkaz: Zavolať 0905 769 966

**Blok 4.9 · 2 Úvod**
- Nadpis: Ochrana technických riešení
- Text: Patent a úžitkový vzor chránia technické riešenia, teda vynálezy. Na rozdiel od názvu alebo loga, ktoré chráni ochranná známka, ide tu o to, ako niečo funguje. Pomáhame vynálezcom, firmám a startupom posúdiť, či a ako je možné ich riešenie chrániť. Pripravujeme licenčné a ďalšie zmluvy a pri konaní pred úradom spolupracujeme s patentovými zástupcami. Ak riešite značku alebo autorské dielo, pozrite si stránku Právo duševného vlastníctva.

**Blok 4.9 · 3 S čím pomáhame**
- Nadpis: S čím Vám pomôžeme
- Podnadpis: Posúdenie vynálezu.
- Text: Vysvetlíme Vám, či riešenie môže spĺňať podmienky ochrany: novosť, vynálezcovskú činnosť a priemyselnú využiteľnosť.
- Podnadpis: Patentová prihláška.
- Text: Príprava podkladov a sprevádzanie konaním o udelenie patentu. Pri patentoch technického charakteru spolupracujeme s odborníkmi z danej oblasti.
- Podnadpis: Úžitkový vzor.
- Text: Rýchlejšia a jednoduchšia forma ochrany technického riešenia.
- Podnadpis: Konanie pred Úradom priemyselného vlastníctva SR.
- Text: Zastupovanie alebo koordinácia s patentovým zástupcom.
- Podnadpis: Licenčné zmluvy.
- Text: Úprava podmienok, za ktorých môže Váš vynález využívať niekto iný.
- Podnadpis: Spory o patenty.
- Text: Postup pri porušení patentu alebo úžitkového vzoru.

**Blok 4.9 · 4 Ako postupujeme**
- Nadpis: Ako postupujeme
- Podnadpis: Opíšete nám riešenie.
- Text: Stručne nám vysvetlíte, čo ste vytvorili a či ste to už niekde zverejnili. Všetko, čo nám poviete, chráni povinná mlčanlivosť advokáta.
- Podnadpis: Posúdime možnosti ochrany.
- Text: Vysvetlíme Vám rozdiel medzi patentom a úžitkovým vzorom a odporučíme vhodný postup vrátane ďalších krokov pred úradom.
- Podnadpis: Zabezpečíme ochranu a zmluvy.
- Text: Pripravíme podklady a zmluvy a postaráme sa o konanie, v prípade potreby v spolupráci s patentovým zástupcom.

**Blok 4.9 · 5 Kedy sa ozvať**
- Nadpis: Kedy sa nám ozvať
- Bod: Vyvinuli ste nové technické riešenie.
- Bod: Chystáte sa vynález predstaviť verejnosti alebo investorom.
- Bod: Chcete vynález predať alebo licencovať.
- Bod: Niekto kopíruje Vaše technické riešenie.
- Tlačidlo / odkaz: Dohodnúť konzultáciu

**Blok 4.9 · 6 Časté otázky**
- Nadpis: Často kladené otázky
- Otázka: Čo sa dá patentovať?
- Odpoveď: Patentovať možno vynález, ktorý je nový, je výsledkom vynálezcovskej činnosti a je priemyselne využiteľný. Patentovať nemožno napríklad samotné objavy, vedecké teórie či obchodné plány.
- Otázka: Aký je rozdiel medzi patentom a úžitkovým vzorom?
- Odpoveď: Úžitkový vzor má nižšie nároky na vynálezcovskú úroveň a zapisuje sa rýchlejšie, chráni však kratšie. Patent poskytuje silnejšiu a dlhšiu ochranu, konanie o ňom však trvá dlhšie.
- Otázka: Ako dlho trvá konanie?
- Odpoveď: Konanie o udelenie patentu trvá spravidla niekoľko rokov, zápis úžitkového vzoru býva rýchlejší. Presný čas závisí od úradu a od zložitosti riešenia.
- Otázka: Môžem vynález zverejniť pred podaním prihlášky?
- Odpoveď: Neodporúčame to. Zverejnenie pred podaním prihlášky môže narušiť novosť vynálezu, a tým aj možnosť jeho ochrany.

**Blok 4.9 · 7 Súvisiace služby**
- Nadpis: Súvisiace služby
- Tlačidlo / odkaz: Právo duševného vlastníctva →
- Tlačidlo / odkaz: Obchodné právo →

**Blok 4.9 · 8 Záverná výzva**
- Nadpis: Máte vynález, ktorý chcete chrániť?
- Text: Povedzte nám o ňom. Navrhneme, ako postupovať ďalej.
- Tlačidlo / odkaz: Dohodnúť konzultáciu
- Tlačidlo / odkaz: Zavolať 0905 769 966

### Kybernetické právo — `/sluzby/kyberneticke-pravo`

- **SEO title:** Advokát kybernetické právo Slovensko | JUDr. Pavlovič
- **Meta description:** Kybernetická bezpečnosť, ochrana osobných údajov, únik dát a IT zmluvy. Pomôžeme Vašej firme splniť povinnosti.

**Blok 4.10 · 1 Hero**
- Hlavný nadpis: Advokát pre kybernetické právo na Slovensku
- Text: Kybernetická bezpečnosť, osobné údaje a IT zmluvy. Pomôžeme Vašej firme pochopiť povinnosti, nastaviť pravidlá a správne reagovať, keď nastane incident.
- Tlačidlo / odkaz: Dohodnúť konzultáciu
- Tlačidlo / odkaz: Zavolať 0905 769 966

**Blok 4.10 · 2 Úvod**
- Nadpis: Čo je kybernetické právo
- Text: Kybernetické právo sú pravidlá pre bezpečnosť informačných systémov, ochranu dát a podnikanie v digitálnom prostredí. Týka sa čoraz viac firiem, nielen IT spoločností. Nové európske pravidlá rozšírili okruh firiem, ktoré musia plniť povinnosti v oblasti kybernetickej bezpečnosti. Pomôžeme Vám zistiť, či sa Vás týkajú, nastaviť interné pravidlá a pripraviť zmluvy s dodávateľmi. Ak nastane únik dát, poradíme Vám, čo a komu treba nahlásiť.

**Blok 4.10 · 3 S čím pomáhame**
- Nadpis: S čím Vám pomôžeme
- Podnadpis: Povinnosti v kybernetickej bezpečnosti.
- Text: Posúdenie, či sa na Vašu firmu vzťahujú, a pomoc s ich splnením.
- Podnadpis: Ochrana osobných údajov (GDPR).
- Text: Nastavenie dokumentácie, zmlúv a postupov pri spracúvaní osobných údajov.
- Podnadpis: Únik dát a bezpečnostné incidenty.
- Text: Postup pri incidente vrátane hlásenia úradom a komunikácie s dotknutými osobami.
- Podnadpis: IT zmluvy a licencie.
- Text: Zmluvy o vývoji softvéru, softvérové licencie a softvér poskytovaný ako služba.
- Podnadpis: Online podnikanie a e-shopy.
- Text: Obchodné podmienky, informačné povinnosti a ochrana spotrebiteľa.

**Blok 4.10 · 4 Ako postupujeme**
- Nadpis: Ako postupujeme
- Podnadpis: Opíšete nám svoju firmu a systémy.
- Text: Povedzte nám, čomu sa venujete, aké údaje spracúvate a s akými dodávateľmi IT spolupracujete. Technické detaily nie sú potrebné.
- Podnadpis: Posúdime Vaše povinnosti.
- Text: Zistíme, ktoré pravidlá sa na Vás vzťahujú, čo už máte v poriadku a čo treba doplniť.
- Podnadpis: Nastavíme pravidlá a zmluvy.
- Text: Pripravíme dokumentáciu, zmluvy a postupy pre prípad incidentu, aby ste vedeli, čo robiť, keď niečo nastane.

**Blok 4.10 · 5 Kedy sa ozvať**
- Nadpis: Kedy sa nám ozvať
- Bod: Neviete, či sa na Vás vzťahujú nové povinnosti v kybernetickej bezpečnosti.
- Bod: Došlo k úniku dát alebo ku kybernetickému útoku.
- Bod: Spúšťate e-shop alebo online službu.
- Bod: Uzatvárate zmluvu o vývoji softvéru alebo o cloudovej službe.
- Bod: U Vás začal kontrolu úrad.
- Tlačidlo / odkaz: Dohodnúť konzultáciu

**Blok 4.10 · 6 Časté otázky**
- Nadpis: Často kladené otázky
- Otázka: Musí moja firma plniť povinnosti kybernetickej bezpečnosti?
- Odpoveď: Závisí od odvetvia, v ktorom podnikáte, a od veľkosti firmy. Nové pravidlá sa týkajú oveľa viac firiem ako predtým, preto sa oplatí to preveriť.
- Otázka: Čo robiť pri úniku osobných údajov?
- Odpoveď: Zdokumentujte, čo sa stalo, a obmedzte ďalšie šírenie. Porušenie ochrany osobných údajov treba spravidla ohlásiť Úradu na ochranu osobných údajov SR bez zbytočného odkladu, ak je to možné, do 72 hodín od zistenia.
- Otázka: Aké zmluvy potrebuje e-shop?
- Odpoveď: Najmä obchodné podmienky, informácie o ochrane osobných údajov a reklamačný poriadok. Dôležité sú aj zmluvy s dodávateľmi, napríklad s poskytovateľom platobnej brány či s dopravcom. Predaj cez e-shop ako predaj na diaľku má navyše svoju samostatnú právnu úpravu.

**Blok 4.10 · 7 Súvisiace služby**
- Nadpis: Súvisiace služby
- Tlačidlo / odkaz: Obchodné právo →
- Tlačidlo / odkaz: Právo duševného vlastníctva →

**Blok 4.10 · 8 Záverná výzva**
- Nadpis: Chcete mať firmu pripravenú na incident?
- Text: Opíšte nám, ako fungujete. Povieme Vám, čo je potrebné doplniť.
- Tlačidlo / odkaz: Dohodnúť konzultáciu
- Tlačidlo / odkaz: Zavolať 0905 769 966

### Pracovné právo — `/sluzby/pracovne-pravo` (NOVÁ SLUŽBA, blok 4.12)

- **SEO title:** Advokát pracovné právo Bratislava | JUDr. Pavlovič
- **Meta description:** Výpoveď, neplatné skončenie pracovného pomeru, mzda, odstupné a pracovné zmluvy. Pomôžeme zamestnancom aj zamestnávateľom.
- **Popis karty (úvod + Služby):** Meníte zamestnanie alebo neviete, na čo máte od zamestnávateľa nárok, respektíve čo môže on požadovať od Vás? Pomôžeme Vám aj v prípade zmeny, skončenia alebo vzniku Vášho pracovného pomeru.
- **Obrázok:** `sluzba-pracovne-pravo.jpg`

**Blok 4.12 · 1 Hero**
- Hlavný nadpis: Advokát pre pracovné právo v Bratislave a okolí
- Text: Pracovná zmluva, výpoveď, mzda či odstupné. Pomôžeme zamestnancom aj zamestnávateľom poznať svoje práva a povinnosti a postupovať správne.
- Tlačidlo / odkaz: Dohodnúť konzultáciu
- Tlačidlo / odkaz: Zavolať 0905 769 966

**Blok 4.12 · 2 Úvod**
- Nadpis: Keď sa práca stane právnym problémom
- Text: Pracovný pomer sprevádza človeka roky a jeho zmena alebo skončenie má priamy dopad na príjem aj istotu celej rodiny. Pomáhame zamestnancom, ktorí dostali výpoveď, nedostali mzdu alebo nevedia, na čo majú nárok. Zamestnávateľom pripravujeme pracovné zmluvy a interné predpisy a pomáhame im skončiť pracovný pomer v súlade so Zákonníkom práce. V pracovnoprávnych sporoch rozhodujú krátke lehoty, preto je dôležité ozvať sa včas.

**Blok 4.12 · 3 S čím pomáhame**
- Nadpis: S čím Vám pomôžeme
- Podnadpis: Pracovné zmluvy a dohody.
- Text: Príprava a posúdenie pracovných zmlúv, ich zmien a dohôd o prácach vykonávaných mimo pracovného pomeru.
- Podnadpis: Skončenie pracovného pomeru.
- Text: Výpoveď, dohoda, okamžité skončenie aj skončenie v skúšobnej dobe, z pohľadu zamestnanca aj zamestnávateľa.
- Podnadpis: Neplatné skončenie pracovného pomeru.
- Text: Posúdenie výpovede alebo okamžitého skončenia a žaloba o určenie ich neplatnosti vrátane nároku na náhradu mzdy.
- Podnadpis: Mzda, odstupné a odchodné.
- Text: Vymáhanie nevyplatenej mzdy, odstupného, odchodného a ďalších nárokov zo skončeného pracovného pomeru.
- Podnadpis: Konkurenčná doložka a mlčanlivosť.
- Text: Posúdenie a príprava dojednaní, ktoré obmedzujú zamestnanca počas pracovného pomeru alebo po jeho skončení.
- Podnadpis: Šikana a nerovnaké zaobchádzanie.
- Text: Postup pri šikanovaní, diskriminácii a inom porušovaní práv zamestnanca na pracovisku.
- Podnadpis: Pracovné úrazy a choroby z povolania.
- Text: Uplatnenie náhrady škody voči zamestnávateľovi.
- Podnadpis: Právne služby pre zamestnávateľov.
- Text: Pracovný poriadok a ďalšie interné predpisy, skončenie pracovného pomeru so zamestnancom a zastupovanie v pracovnoprávnych sporoch.

**Blok 4.12 · 4 Ako postupujeme**
- Nadpis: Ako postupujeme
- Podnadpis: Opíšete nám situáciu.
- Text: Povedzte nám, čo sa stalo, a prineste pracovnú zmluvu, výpoveď, výplatné pásky alebo komunikáciu so zamestnávateľom. Dôležitý je najmä dátum doručenia písomností.
- Podnadpis: Posúdime Vaše nároky a lehoty.
- Text: Vysvetlíme Vám, či bolo skončenie pracovného pomeru platné, na čo máte nárok a dokedy treba konať. Následne navrhneme ďalší postup.
- Podnadpis: Konáme za Vás.
- Text: Rokujeme s druhou stranou a preferujeme mimosúdnu dohodu. Ak to nie je možné, podáme žalobu a zastupujeme Vás pred súdom.

**Blok 4.12 · 5 Kedy sa ozvať**
- Nadpis: Kedy sa nám ozvať
- Bod: Dostali ste výpoveď alebo okamžité skončenie pracovného pomeru.
- Bod: Zamestnávateľ Vám nevyplatil mzdu, odstupné alebo odchodné.
- Bod: Zamestnávateľ Vám navrhuje dohodu o skončení pracovného pomeru a neviete, či ju podpísať.
- Bod: Máte podpísať novú pracovnú zmluvu alebo konkurenčnú doložku.
- Bod: Na pracovisku čelíte šikane alebo nerovnakému zaobchádzaniu.
- Bod: Ste zamestnávateľ a potrebujete správne skončiť pracovný pomer so zamestnancom.
- Tlačidlo / odkaz: Dohodnúť konzultáciu

**Blok 4.12 · 6 Časté otázky**
- Nadpis: Často kladené otázky
- Otázka: Dokedy môžem napadnúť výpoveď?
- Odpoveď: Neplatnosť skončenia pracovného pomeru možno uplatniť na súde najneskôr do dvoch mesiacov odo dňa, keď sa mal pracovný pomer skončiť. Po uplynutí tejto lehoty nárok zaniká, preto vec neodkladajte.
- Otázka: Čo mám urobiť, ak považujem výpoveď za neplatnú?
- Odpoveď: Písomne oznámte zamestnávateľovi, že trváte na tom, aby Vás naďalej zamestnával. Od tohto oznámenia sa odvíja aj Váš prípadný nárok na náhradu mzdy. Následne je potrebné včas podať žalobu.
- Otázka: Môžem okamžite skončiť pracovný pomer, ak mi zamestnávateľ nevyplatil mzdu?
- Odpoveď: Áno, zákon to umožňuje, ak Vám zamestnávateľ nevyplatil mzdu alebo náhradu mzdy ani do 15 dní po jej splatnosti. Pred takým krokom je vhodné poradiť sa, aby bol postup správny.
- Otázka: Mám nárok na odstupné?
- Odpoveď: Nárok na odstupné vzniká najmä pri skončení pracovného pomeru výpoveďou alebo dohodou z organizačných alebo zdravotných dôvodov. Jeho výška závisí od toho, ako dlho pracovný pomer trval.
- Otázka: Musí byť pracovná zmluva písomná?
- Odpoveď: Áno. Pracovná zmluva musí byť uzatvorená písomne a zamestnávateľ je povinný jedno jej vyhotovenie vydať zamestnancovi.

**Blok 4.12 · 7 Súvisiace služby**
- Nadpis: Súvisiace služby
- Tlačidlo / odkaz: Obchodné právo →
- Tlačidlo / odkaz: Občianske právo →

**Blok 4.12 · 8 Záverná výzva**
- Nadpis: Riešite problém v práci?
- Text: Opíšte nám Vašu situáciu. Povieme Vám, na čo máte nárok a ako postupovať.
- Tlačidlo / odkaz: Dohodnúť konzultáciu
- Tlačidlo / odkaz: Zavolať 0905 769 966

### O mne — `/o-mne`

- **SEO title:** JUDr. Ladislav Pavlovič, LL.M. | Advokát Bratislava
- **Meta description:** JUDr. Ladislav Pavlovič, LL.M., advokát v Bratislave. Zrozumiteľne, diskrétne a s dôrazom na lehoty. Dohodnite si konzultáciu.

**Blok 5.1 · Hero a príbeh**
- Hlavný nadpis: JUDr. Ladislav Pavlovič, LL.M.
- Text: Advokát · Bratislava
- Text: Fotografia bude doplnená
- Text: Volám sa Ladislav Pavlovič a advokácii sa venujem {rokyPraxe} rokov. Spolu s kolegami pomáhame ľuďom a firmám v 10 oblastiach práva, od dopravných nehôd a obchodného práva až po rodinné, správne či kybernetické právo.
- Text: Pri každej veci vychádzam z jednoduchého princípu: klient potrebuje vedieť, v akej situácii sa nachádza, čo ho môže čakať a čo je vhodné urobiť ako ďalšie. Preto Vám situáciu vysvetlím zrozumiteľne, otvorene poviem, aké sú možnosti a riziká, a nebudem Vám sľubovať nič, čo sa sľúbiť nedá.
- Text: Svoju prácu považujem za zodpovednosť voči ľuďom, ktorí sa na mňa obracajú v dôležitých chvíľach. Preto sledujem lehoty, komunikujem priamo a o každom dôležitom kroku Vás informujem. To, čo mi poviete, chránim v rámci povinnej mlčanlivosti advokáta.

**Blok 5.2 · Karta faktov**
- Údaj: Prax: {rokyPraxe} rokov v advokácii
- Údaj: Vybavené veci: 3 500+
- Údaj: Vzdelanie: Právnická fakulta Univerzity Komenského v Bratislave (1990), JUDr., LL.M.
- Údaj: Slovenská advokátska komora: zápis č. 448
- Údaj: Oblasti zamerania: 10 oblastí práva · Služby
- Údaj: Jazyky v rámci kancelárie: slovenský, ruský, anglický, nemecký
- Údaj: Pôsobnosť: Bratislava a západné Slovensko, Špecializovaný trestný súd (Pezinok, pracovisko Banská Bystrica)
- Údaj: Kancelária: Ivanská cesta 32B, 821 04 Bratislava, Ružinov

**Blok 5.3 · Profesijná dráha a záverná výzva**
- Nadpis: Profesijná dráha
- Bod: 1990 · Začiatok pôsobenia v advokácii, najskôr ako advokátsky koncipient.
- Bod: 1995 · Úspešne absolvovaná advokátska skúška a zápis do zoznamu advokátov Slovenskej advokátskej komory.
- Bod: 1995 · Založenie samostatnej advokátskej kancelárie.
- Nadpis: Spoznajme sa pri konzultácii
- Tlačidlo / odkaz: Dohodnúť konzultáciu
- Tlačidlo / odkaz: Zavolať 0905 769 966

### Náš tím — `/nas-tim`

- **SEO title:** Náš tím | Advokátska kancelária JUDr. Pavlovič
- **Meta description:** Spoznajte ľudí v advokátskej kancelárii JUDr. Ladislava Pavloviča, LL.M. v Bratislave. Každú vec u nás vedie konkrétny advokát.

**Blok 6.1 · Úvod tímu**
- Hlavný nadpis: Náš tím
- Text: Každú vec u nás vedie konkrétny advokát. Od prvej konzultácie viete, kto sa Vašej veci venuje a s kým komunikujete.

**Blok 6.2 · Člen 1**
- Text: Fotografia bude doplnená
- Text: Advokát
- Nadpis: JUDr. Ladislav Pavlovič, LL.M.
- Text: Vedie kanceláriu a osobne zodpovedá za veci klientov. Dbá na to, aby každý klient vedel, kde stojí a čo je ďalší krok.
- Údaj: Funkcia: Advokát
- Údaj: Vzdelanie: Právnická fakulta Univerzity Komenského v Bratislave (1990), JUDr., LL.M.
- Údaj: Zameranie: [DOPLNIŤ: 2 až 3 hlavné oblasti]
- Údaj: Zápis v SAK: č. 448

**Blok 6.2 · Člen 2**
- Text: Fotografia bude doplnená
- Text: [DOPLNIŤ: advokát / advokátsky koncipient]
- Nadpis: [DOPLNIŤ: meno a titul]
- Text: [DOPLNIŤ: 1 až 2 vety o tom, čomu sa venuje a s čím klientom pomáha]
- Údaj: Funkcia: [DOPLNIŤ]
- Údaj: Vzdelanie: [DOPLNIŤ]
- Údaj: Zameranie: [DOPLNIŤ: 2 až 3 oblasti]

**Blok 6.2 · Člen 3**
- Text: Fotografia bude doplnená
- Text: [DOPLNIŤ: advokát / advokátsky koncipient]
- Nadpis: [DOPLNIŤ: meno a titul]
- Text: [DOPLNIŤ: 1 až 2 vety o tom, čomu sa venuje a s čím klientom pomáha]
- Údaj: Funkcia: [DOPLNIŤ]
- Údaj: Vzdelanie: [DOPLNIŤ]
- Údaj: Zameranie: [DOPLNIŤ: 2 až 3 oblasti]

**Blok 6.3 · Pridajte sa k nám a záverná výzva**
- Nadpis: Pridajte sa k nám
- Text: Hľadáme advokátov a advokátskych koncipientov, ktorí chcú pracovať na rôznorodých veciach a komunikovať priamo s klientmi. Ak máte záujem, pošlite nám životopis a niekoľko viet o tom, čomu sa chcete venovať. Ozveme sa Vám.
- Tlačidlo / odkaz: Poslať životopis
- Text: pavlovic@lpavlovic.eu
- Nadpis: Potrebujete poradiť?
- Text: Opíšte nám situáciu. Povieme Vám, kto z nás sa Vašej veci bude venovať.
- Tlačidlo / odkaz: Dohodnúť konzultáciu
- Tlačidlo / odkaz: Zavolať 0905 769 966

### Prečo my — `/preco-my`

- **SEO title:** Prečo si vybrať našu kanceláriu | JUDr. Pavlovič
- **Meta description:** Priamy kontakt s advokátom, 10 oblastí práva a pôsobnosť na celom západnom Slovensku. Pozrite si, čo u nás dostanete.

**Blok 7.1 · Prečo my**
- Hlavný nadpis: Prečo my
- Text: Namiesto sľubov Vám radšej povieme, čo u nás vecne dostanete.
- Nadpis: Viac oblastí na jednom mieste
- Text: Od zmlúv a nehnuteľností cez rodinné a pracovné veci až po kybernetické právo. Keď sa Vaša situácia dotýka viacerých oblastí, nemusíte hľadať ďalšieho advokáta.
- Štítok: Dôkaz: 10 oblastí práva
- Nadpis: Priamy kontakt s advokátom
- Text: Vašu vec vedie konkrétny advokát a komunikujete priamo s ním. Viete, kto za Vaším prípadom stojí a na koho sa obrátiť.
- Štítok: Dôkaz: Spôsob práce kancelárie
- Nadpis: Overená prax
- Text: {rokyPraxe} rokov v advokácii a viac ako 3 500 vybavených vecí. Skúsenosti, ktoré sa dajú doložiť, nie len opísať.
- Štítok: Dôkaz: {rokyPraxe} rokov praxe
- Nadpis: Pôsobnosť na celom západnom Slovensku
- Text: Kancelária sídli v Bratislave a klientov zastupuje v Bratislave a na celom západnom Slovensku, podľa príslušnosti súdov aj na celom Slovensku vrátane Špecializovaného trestného súdu v Pezinku a jeho pracoviska v Banskej Bystrici.
- Štítok: Dôkaz: Bratislava a západné Slovensko
- Nadpis: Diskrétnosť zo zákona
- Text: Všetko, čo nám poviete, chráni povinná mlčanlivosť advokáta. Je to zákonná povinnosť, nie iba náš záväzok.
- Štítok: Dôkaz: Zákon o advokácii
- Nadpis: Jasný ďalší krok
- Text: Po konzultácii odchádzate s vysvetlením situácie bez zbytočného žargónu a s konkrétnym návrhom, čo urobiť ďalej.
- Štítok: Dôkaz: Prvá konzultácia
- Nadpis: Presvedčte sa sami pri konzultácii
- Text: Opíšte nám, čo riešite. Povieme Vám, ako Vám vieme pomôcť.
- Tlačidlo / odkaz: Dohodnúť konzultáciu
- Tlačidlo / odkaz: Zavolať 0905 769 966

### Referencie — `/referencie` (NOVÁ PODSTRÁNKA, blok R)

- **SEO title:** Referencie | Advokátska kancelária JUDr. Pavlovič
- **Meta description:** Hodnotenia klientov advokátskej kancelárie JUDr. Ladislava Pavloviča, LL.M. v Bratislave, zverejnené s ich súhlasom.

**Blok R.1 · Úvod**
- Hlavný nadpis: Referencie
- Text: Dôvera klientov je pre nás meradlom našej práce. Za {rokyPraxe} rokov praxe sme pomohli vyriešiť viac ako 3 500 vecí, od zmlúv a sporov až po náročné životné situácie.
- Text: Na tejto stránke uverejňujeme hodnotenia klientov, ktorí nám na to dali súhlas. V súlade s povinnou mlčanlivosťou advokáta neuvádzame podrobnosti ich vecí.

**Blok R.2 · Bubliny s referenciami** (zatiaľ prázdne, viď časť 6)

**Blok R.3 · Záverná výzva**
- Nadpis: Potrebujete poradiť?
- Text: Opíšte nám Vašu situáciu. Povieme Vám, aké máte možnosti.
- Tlačidlo / odkaz: Dohodnúť konzultáciu
- Tlačidlo / odkaz: Zavolať 0905 769 966

### Kontakt — `/kontakt`

- **SEO title:** Kontakt | Advokát Bratislava Ružinov | JUDr. Pavlovič
- **Meta description:** Kontakt na advokátsku kanceláriu JUDr. Ladislava Pavloviča, LL.M., Ivanská cesta 32B, Bratislava Ružinov. Dohodnite si konzultáciu.

**Blok 8.1 · Úvod stránky**
- Hlavný nadpis: Kontakt
- Text: Zavolajte alebo napíšte. Ozveme sa Vám na kontakt, ktorý uvediete, a podrobnosti rozoberieme osobne.

**Blok 8.3 · Údaje kancelárie**
- Údaj: Advokátska kancelária: JUDr. Ladislav Pavlovič s. r. o.
- Údaj: Adresa: Ivanská cesta 32B, 821 04 Bratislava – mestská časť Ružinov
- Údaj: Telefón: 0905 769 966
- Údaj: E-mail: pavlovic@lpavlovic.eu
- Údaj: Úradné hodiny: [DOPLNIŤ: úradné hodiny]
- Údaj: Ako sa k nám dostanete: [DOPLNIŤ: zastávka MHD, parkovanie, vchod a poschodie]

**Blok 8.2 · Formulár**
- Nadpis: Dohodnite si konzultáciu
- Text: Stačí vyplniť meno a telefón. Podrobnosti rozoberieme osobne.
- Text: Konzultácia je spoplatnená. Jej podmienky Vám oznámime vopred, pri dohadovaní termínu.
- Pole formulára: Meno a priezvisko *
- Pole formulára: Telefón *
- Pole formulára: E-mail (nepovinné)
- Pole formulára: S čím potrebujete pomôcť?
- Bod: Dopravné nehody
- Bod: Obchodné právo
- Bod: Občianske právo
- Bod: Rodinné právo
- Bod: Správne právo
- Bod: Právo duševného vlastníctva
- Bod: Patentové právo
- Bod: Kybernetické právo
- Bod: Trestné právo (iba pre stálych klientov)
- Bod: Iné
- Pole formulára: Stručne opíšte situáciu (nepovinné)
- Text: Neuvádzajte prosím citlivé podrobnosti. Rozoberieme ich osobne.
- Pole formulára: Súhlasím so spracovaním osobných údajov na účel vybavenia môjho dopytu. (Zásady ochrany osobných údajov)
- Tlačidlo / odkaz: Odoslať dopyt
- Text: Preferujete telefonát? Zavolajte na 0905 769 966.
- _(poznámka: Hlásenia formulára (úspech, chyba, neplatné pole) sa zobrazujú až po odoslaní, preto nie sú v tomto prehľade.)_

### Časté otázky — `/caste-otazky`

- **SEO title:** Časté otázky o advokátovi a konzultácii | JUDr. Pavlovič
- **Meta description:** Odpovede na časté otázky o konzultácii s advokátom a o oblastiach práva, ktorým sa venujeme v Bratislave a okolí.

**Blok 8.4 · Časté otázky**
- Hlavný nadpis: Časté otázky
- Nadpis: Konzultácia a spolupráca
- Otázka: Ako si dohodnem konzultáciu?
- Odpoveď: Zavolajte nám alebo vyplňte formulár na stránke Kontakt. Ozveme sa Vám na kontakt, ktorý uvediete, a dohodneme termín.
- Otázka: Je konzultácia spoplatnená?
- Odpoveď: Áno, konzultácia s advokátom je spoplatnená. Jej podmienky Vám oznámime vopred, pri dohadovaní termínu.
- Otázka: Čo mám priniesť na konzultáciu?
- Odpoveď: Všetky dokumenty, ktoré sa k veci vzťahujú: zmluvy, korešpondenciu, lekárske správy, rozhodnutia alebo predvolania. Ak niečo nemáte, neznamená to, že sa nedá začať. Zistíme, čo je potrebné doplniť.
- Otázka: Je moja vec dôverná?
- Odpoveď: Áno. Advokát je zo zákona viazaný povinnosťou mlčanlivosti.
- Otázka: Venujete sa aj iným oblastiam práva?
- Odpoveď: Venujeme sa 10 oblastiam práva, ktoré nájdete v sekcii Služby. Ak Vaša vec patrí inam, povieme Vám to hneď na začiatku.
- _(poznámka: Ďalej nasledujú skupiny v poradí: Obchodné právo, Občianske právo, Dopravné nehody, Rodinné právo, Trestné právo, Správne právo, Duševné vlastníctvo, Patentové právo, Kybernetické právo, Pracovné právo. Ich otázky a odpovede sú zhodné s blokom „Často kladené otázky“ na stránke každej služby (blok 6 pri každej službe). Pod každou skupinou je odkaz „Viac o službe →“.)_

### Virtuálna asistentka — `na každej stránke, tlačidlo vpravo dole`


**Blok 9.1 · AI asistentka**
- Tlačidlo / odkaz: Máte otázku?
- Text: Virtuálna asistentka
- Text: Všeobecné informácie, nenahrádza právnu radu
- Text: Dobrý deň, som virtuálna asistentka kancelárie a pomôžem Vám so všeobecnými otázkami, právnu radu advokáta však nenahrádzam.
- Text: S čím Vám môžem pomôcť?
- Otázka: Mal/a som dopravnú nehodu
- Odpoveď: Po nehode je najdôležitejšie zdravie a bezpečnosť. Zdokumentujte miesto nehody, uschovajte lekárske správy a pred podpisom akejkoľvek dohody s poisťovňou sa poraďte. Či máte nárok na odškodnenie a v akej výške, posúdi advokát pri konzultácii.
- Tlačidlo / odkaz: Dohodnúť konzultáciu · Dopravné nehody
- Otázka: Potrebujem zmluvu
- Odpoveď: Pripravujeme a posudzujeme zmluvy pre ľudí aj firmy, napríklad kúpne, nájomné či obchodné. Pred podpisom dôležitej zmluvy je vhodné dať ju posúdiť, pretože opraviť chybu po podpise býva náročnejšie.
- Tlačidlo / odkaz: Dohodnúť konzultáciu · Občianske právo · Obchodné právo
- Otázka: Rozvod alebo deti
- Odpoveď: Rozvod a úprava starostlivosti o deti sú citlivé veci. Súd vždy prihliada najmä na záujem dieťaťa a dohoda rodičov konanie výrazne zjednoduší. Konkrétny postup Vám vysvetlí advokát pri dôvernej konzultácii.
- Tlačidlo / odkaz: Dohodnúť konzultáciu · Rodinné právo
- Otázka: Dostal/a som rozhodnutie úradu
- Odpoveď: Pozrite si poučenie na konci rozhodnutia. Uvádza, či a dokedy sa môžete odvolať. Lehoty sú krátke, preto sa nám ozvite čo najskôr po doručení.
- Tlačidlo / odkaz: Dohodnúť konzultáciu · Správne právo
- Otázka: Firma, značka alebo dáta
- Odpoveď: Pomáhame firmám so zakladaním a zmenami spoločností, s ochrannými známkami, s ochranou vynálezov aj s ochranou osobných údajov a kybernetickou bezpečnosťou. Vyberte si oblasť, ktorá Vás zaujíma.
- Tlačidlo / odkaz: Obchodné právo · Právo duševného vlastníctva · Patentové právo · Kybernetické právo
- Otázka: Práca a zamestnanie
- Odpoveď: Pri výpovedi, nevyplatenej mzde alebo novej pracovnej zmluve často rozhodujú krátke lehoty. Uschovajte si všetky písomnosti a dátum ich doručenia. Na čo máte nárok, Vám posúdi advokát pri konzultácii.
- Tlačidlo / odkaz: Dohodnúť konzultáciu · Pracovné právo
- Otázka: Ako prebieha a koľko stojí konzultácia?
- Odpoveď: Ozvete sa nám telefonicky alebo cez formulár a dohodneme termín. Na konzultácii prejdeme Vašu situáciu, vysvetlíme Vám možnosti a navrhneme ďalší postup. Konzultácia je spoplatnená, jej cenu a podmienky Vám oznámime vopred.
- Tlačidlo / odkaz: Dohodnúť konzultáciu · Zavolať
- Tlačidlo / odkaz: Späť na možnosti
- Text: Máte inú otázku? Napíšte nám cez formulár.
- Text: Odpovede majú informatívny charakter a nezakladajú vzťah advokát – klient. Neuvádzajte citlivé údaje. Viac v Zásadách ochrany osobných údajov.

### Pätička, cookies a právne stránky — `na každej stránke`


**Blok 9.2 · Pätička**
- Tlačidlo / odkaz: Služby · O mne · Náš tím · Prečo my · Referencie · Kontakt
- Text: Advokátska kancelária JUDr. Ladislav Pavlovič s. r. o.
- Text: Ivanská cesta 32B, 821 04 Bratislava – Ružinov
- Text: Telefón: 0905 769 966 · E-mail: pavlovic@lpavlovic.eu
- Text: IČO: 47238526 · Zapísaná v Obchodnom registri Mestského súdu Bratislava III, oddiel: Sro, vložka č. 81036/B
- Text: Advokát zapísaný v zozname advokátov Slovenskej advokátskej komory pod č. 448
- Text: Pôsobnosť: Bratislava a západné Slovensko. Podľa vecnej a miestnej príslušnosti súdov zastupujeme klientov na celom Slovensku.
- Tlačidlo / odkaz: Služby · O mne · Náš tím · Prečo my · Referencie · Kontakt · Časté otázky · Ochrana osobných údajov · Cookies
- Tlačidlo / odkaz: Obchodné právo · Občianske právo · Dopravné nehody · Rodinné právo · Trestné právo · Iba pre stálych klientov · Správne právo · Právo duševného vlastníctva · Patentové právo · Kybernetické právo · Pracovné právo
- Text: Upozornenie
- Text: Obsah tejto webovej stránky má informatívny charakter a nenahrádza individuálnu právnu konzultáciu. Jeho zverejnenie ani odoslanie správy cez formulár nezakladá vzťah advokát – klient. Pre posúdenie Vašej konkrétnej veci nás, prosím, kontaktujte.
- Text: © 2026 Advokátska kancelária JUDr. Ladislav Pavlovič s. r. o.

**Blok 9.2 · Cookies lišta**
- Text: Používame nevyhnutné cookies na fungovanie stránky. S Vaším súhlasom používame aj analytické cookies, ktoré nám pomáhajú stránku zlepšovať. Viac v Zásadách cookies.
- Tlačidlo / odkaz: Prijať všetky
- Tlačidlo / odkaz: Iba nevyhnutné

**Blok 9.2 · Ochrana osobných údajov (/ochrana-osobnych-udajov)**
- Hlavný nadpis: Ochrana osobných údajov
- Text: [DOPLNIŤ: text zásad pripraví advokátska kancelária]
- Nadpis: Prevádzkovateľ
- Nadpis: Účel a právny základ spracúvania
- Nadpis: Doba uchovávania
- Nadpis: Vaše práva
- Nadpis: Kontakt
- _(poznámka: Pod každým nadpisom je zatiaľ placeholder [DOPLNIŤ: text zásad pripraví advokátska kancelária].)_

**Blok 9.2 · Cookies (/cookies)**
- Hlavný nadpis: Zásady používania cookies
- Text: [DOPLNIŤ: text zásad pripraví advokátska kancelária]
- Nadpis: Čo sú cookies
- Nadpis: Aké cookies používame
- Nadpis: Ako zmeniť súhlas
- _(poznámka: Pod každým nadpisom je zatiaľ placeholder [DOPLNIŤ: text zásad pripraví advokátska kancelária].)_

---

## 9. Postup po fázach

1. `site.ts`: overené údaje, výpočet `rokyPraxe`, `showReviewMarks: false`, odstránenie všetkých značiek OVERIŤ.
2. Prepis všetkých textov podľa časti 8 (všetky content súbory), meno s LL.M., veľké Vy/Vás/Vám.
3. Poradie služieb (`servicesOrder`) a nová služba Pracovné právo vrátane obsahu, obrázka, asistentky a formulára.
4. Horizontálne karty služieb (2 stĺpce na desktope).
5. Menu so 7 položkami a nová podstránka Referencie s bublinami.
6. Opravy z časti 7 (obrázky, pätička, 3.4, 3.3).
7. SEO, JSON-LD, sitemap. Kontrolný zoznam z časti 10.

## 10. Kontrolný zoznam (na konci prejdi a oprav, čo nesedí)

- [ ] Každý text na webe sa zhoduje s časťou 8. Nič nechýba a nič nie je navyše.
- [ ] Na webe nie je žiadny čip „overiť“.
- [ ] `grep` z bodu 1.5 nenájde žiadne Vy/Vás/Vám/Váš… s malým písmenom.
- [ ] Meno je všade „JUDr. Ladislav Pavlovič, LL.M.“, obchodné meno firmy ostalo bez LL.M.
- [ ] Na webe nie je nikde „9 oblastí“, „deväť“ ani „deviatich“. Všade je 10.
- [ ] Na webe nie je nikde „Špecializovaný trestný súd v Banskej Bystrici“ bez Pezinka.
- [ ] Telefón je všade 0905 769 966 a odkazy `tel:` fungujú.
- [ ] Poradie služieb je rovnaké v menu, na kartách (úvod aj Služby), vo formulári, v FAQ aj v pätičke.
- [ ] `/sluzby/pracovne-pravo` funguje a má obrázok. Asistentka má 7 volieb.
- [ ] `/referencie` je v menu a bubliny sa striedajú každých 8 s smerom doprava. Bodky fungujú, hover pozastaví striedanie, na mobile sú bubliny pod sebou.
- [ ] Žiadny obrázok nie je sivý blok s názvom súboru.
- [ ] Mobil (375 px), tablet (768 px) a desktop (1440 px) vyzerajú čisto, menu so 7 položkami sa nikde neláme.
- [ ] `npm run build` prejde bez chýb a warningov.

Na konci aktualizuj `TEXTY-MAPA.md` (pridaj bloky 4.12 a R) a napíš mi krátky súhrn: čo je hotové, ktoré obrázky si stiahol a čo ostalo ako `[DOPLNIŤ]`.
