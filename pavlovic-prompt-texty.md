# PROMPT PRE CLAUDE CODE: Prepis všetkých textov webu podľa dokumentu „Štruktúra textov webu“

Si senior frontend developer. V tomto priečinku je hotový web advokáta JUDr. Ladislava Pavloviča (Next.js, Tailwind, motion). Tvojou úlohou je **prepísať všetky texty na webe** podľa tohto dokumentu a **rozdeliť obsah presne podľa častí a čísel dokumentu klienta** (časti 1 až 11, bloky 3.1, 3.2, 4.3…).

**Čo NEMENÍŠ:** dizajn, farby, písma, logo, animácie, komponenty, rozloženie sekcií, obrázky ani správanie formulára. Meníš iba texty a to, ako sú v kóde rozdelené. Ak niektorý blok z tohto dokumentu na stránke chýba, doplň ho pomocou existujúcich komponentov v rovnakom štýle. Ak je na stránke sekcia alebo text, ktorý tu nie je, odstráň ho.

---

## 0. Ako to technicky urobiť

1. **Najprv si prejdi celý projekt:** `src/content`, `src/app`, komponenty, `src/lib/site.ts`. Vyhľadaj všetky texty, aj tie natvrdo v komponentoch.
2. **Obsah rozdeľ podľa dokumentu.** Súbory v `src/content/` pomenuj a usporiadaj podľa častí dokumentu:
   ```
   src/content/
     01-pravidla.ts          (spoločné CTA texty, upozornenia)
     02-mapa-webu.ts         (menu, poradie služieb, pôsobnosť)
     03-uvod.ts              (bloky 3.1 až 3.8)
     04-sluzby/
       4-1-prehlad.ts
       4-3-dopravne-nehody.ts
       4-4-obchodne-pravo.ts
       4-5-obcianske-pravo.ts
       4-6-rodinne-pravo.ts
       4-7-spravne-pravo.ts
       4-8-dusevne-vlastnictvo.ts
       4-9-patentove-pravo.ts
       4-10-kyberneticke-pravo.ts
       4-11-trestne-pravo.ts
     05-o-mne.ts             (5.1 až 5.3)
     06-nas-tim.ts           (6.1 až 6.3)
     07-preco-my.ts          (7.1)
     08-kontakt.ts           (8.1 až 8.3)
     09-asistentka-paticka.ts (9.1, 9.2 + cookies, 404, právne stránky)
     10-seo.ts               (title a meta všetkých stránok)
   ```
   Každý blok exportuj pod názvom s číslom z dokumentu, napr. `s3_1_hero`, `s3_2_comuSaVenujeme`, `s4_3_dopravneNehody`. Ak už súbory existujú pod inými názvami, premenuj ich a uprav importy. Ten istý text používaný na viacerých miestach (popis služby na úvode aj v Službách, FAQ na úvode aj na podstránke) drž iba raz a importuj ho.
3. **Označ sekcie v kóde.** Každá vykreslená sekcia dostane komentár `{/* Dokument 3.1 · Hero */}` a atribút `data-doc="3.1"`. Klient a vývojár tak vždy nájdu, ktorý blok dokumentu je na webe kde.
4. **Údaje kancelárie** (telefón, e-mail, hodiny, IČO, SAK, roky praxe, počet vecí…) ostávajú na jednom mieste v `src/lib/site.ts`.
5. **Na konci vytvor súbor `TEXTY-MAPA.md`** v koreni projektu s tabuľkou: číslo bloku v dokumente → stránka (URL) → súbor v `src/content` → stav (hotové / placeholder / overiť). Slúži na kontrolu s klientom.

---

## ČASŤ 1 · Základné pravidlá pre všetky texty

Tieto pravidlá platia pre celý web. Dodrž ich aj pri každom technickom texte (aria-labely, alt texty).

**Texty sú záväzné.** Všetky texty ber doslovne z tohto dokumentu. Nič neprepisuj, neskracuj ani nevylepšuj a nepridávaj vlastné vety. Vlastné texty smieš pridať len tieto: čísla sekcií („01“), alt texty obrázkov, aria-labely a technické UI prvky („Menu“, „Zavrieť“, „Späť“).

**Tón a štýl**
- Vykanie. Pokojný, vecný a ľudský tón.
- Hlas: úvodná stránka, služby, tím a Prečo my v množnom čísle („pomôžeme“). O mne v prvej osobe jednotného čísla („pomôžem“). V rámci jedného bloku sa hlas nemieša.
- Bez zbytočného žargónu, krátke vety.

**Čo sa na webe nesmie objaviť**
- Superlatívy („najlepší“, „špičkový“), porovnávanie s inými kanceláriami, sľuby výsledku.
- Ceny a čokoľvek, čo naznačuje bezplatnú konzultáciu: „zadarmo“, „zdarma“, „bezplatne“, „nezáväzne“, „bez poplatku“. **Konzultácia je spoplatnená.**
- Strašenie a dramatizácia.
- Tvrdenia, ktoré sa nedajú doložiť (čísla, úspešnosť).
- Stock fotky ľudí v oblekoch, váhy spravodlivosti, kladivká, putá.

**Tlačidlá (CTA)**
- Hlavné tlačidlo: **Dohodnúť konzultáciu** (rovnaké znenie na celom webe).
- Doplňujúce: **Zavolať** (telefón), **Napísať** (formulár).
- Výnimka, Trestné právo: **Opísať vec**.
- Jedna stránka má jednu hlavnú výzvu. Tlačidlo je v úvode aj na konci každej stránky.

**Značky v texte**
- `[DOPLNIŤ: …]` sa zobrazí ako viditeľný čip (komponent `<Placeholder>`).
- `(OVERIŤ)` sa ako text nezobrazuje. Namiesto neho sa vykreslí malý čip „overiť“ (komponent `<ReviewMark>`, riadený `showReviewMarks` v `site.ts`).
- Fotky JUDr. Pavloviča a členov tímu: placeholder s textom **Fotografia bude doplnená**.

**Spoločné upozornenie** (použije sa v pätičke, 9.2):
Obsah tejto webovej stránky má informatívny charakter a nenahrádza individuálnu právnu konzultáciu. Jeho zverejnenie ani odoslanie správy cez formulár nezakladá vzťah advokát – klient. Pre posúdenie vašej konkrétnej veci nás, prosím, kontaktujte.

---

## ČASŤ 2 · Mapa webu

**Menu (v tomto poradí):** Úvod · Služby · O mne · Náš tím · Prečo my · Kontakt
**Tlačidlo v hlavičke:** Zavolať
**Mobilná lišta:** Zavolať · Napísať

**Služby pod jednou položkou menu (rozbaľovacie menu), poradie a adresy:**

| # | Názov | Adresa | Poznámka v menu |
|---|---|---|---|
| 1 | Dopravné nehody | `/sluzby/dopravne-nehody` | |
| 2 | Obchodné právo | `/sluzby/obchodne-pravo` | |
| 3 | Občianske právo | `/sluzby/obcianske-pravo` | |
| 4 | Rodinné právo | `/sluzby/rodinne-pravo` | |
| 5 | Správne právo | `/sluzby/spravne-pravo` | |
| 6 | Právo duševného vlastníctva | `/sluzby/dusevne-vlastnictvo` | |
| 7 | Patentové právo | `/sluzby/patentove-pravo` | |
| 8 | Kybernetické právo | `/sluzby/kyberneticke-pravo` | |
| 9 | Trestné právo | `/sluzby/trestne-pravo` | Iba pre stálych klientov |

**Odkaz v rozbaľovacom menu:** Všetky služby →

**Pôsobnosť (spoločný text):** Celé západné Slovensko a Špecializovaný trestný súd v Banskej Bystrici.

---

## ČASŤ 3 · Úvodná stránka `/`

Bloky idú zhora nadol v tomto poradí: 3.1 → 3.2 → 3.3 → 3.4 → 3.5 → 3.6 → 3.7 → 3.8.

### 3.1 Hero (úvodná obrazovka)
- **Eyebrow:** Advokát · Bratislava a okolie
- **H1:** Advokát v Bratislave a okolí pre ľudí aj firmy
- **Podnadpis:** Pomôžeme vám pochopiť vašu situáciu, poznať možnosti a urobiť správny ďalší krok. Vecne, diskrétne a zrozumiteľne.
- **Tlačidlá:** Dohodnúť konzultáciu · Zavolať [DOPLNIŤ: telefón]
- **Riadok pod tlačidlami:** Advokátska kancelária JUDr. Ladislav Pavlovič s. r. o. · Ružinov, Bratislava
- **Riadok dôvery (3 fakty):**
  - [DOPLNIŤ: počet] rokov praxe
  - Člen Slovenskej advokátskej komory
  - Pôsobnosť: celé západné Slovensko
- **Fotografia:** placeholder „Fotografia bude doplnená“

### 3.2 Čomu sa venujeme
- **H2:** Čomu sa venujeme
- **Úvodná veta:** Pomáhame ľuďom aj firmám v deviatich oblastiach práva. Vyberte si tú, ktorá sa týka vašej situácie.
- **Karty služieb:** 9 kariet v poradí z časti 2. Každá karta má obrázok, názov (veľkým písmom), popis (text „Popis karty“ z príslušnej služby v časti 4) a odkaz „Zistiť viac →“. Celá karta vedie na detail služby. Karta Trestného práva má štítok „Iba pre stálych klientov“.
- **Pás čísel:**
  - [DOPLNIŤ] · rokov praxe
  - [DOPLNIŤ] · vybavených vecí
  - 9 · oblastí práva
  - Západné Slovensko · pôsobnosť
- **Veta o pôsobnosti:** Zastupujeme klientov na celom západnom Slovensku a pred Špecializovaným trestným súdom v Banskej Bystrici.
- **Odkaz:** Všetky služby →

### 3.3 Ako to prebieha
- **H2:** Od prvého telefonátu k jasnému plánu
- **Úvod:** Nemusíte vedieť, ako sa vaša vec volá právnicky. Stačí, keď nám poviete, čo sa stalo.
1. **Ozvete sa nám.** Zavoláte alebo vyplníte krátky formulár. Stačí stručne opísať, čo riešite, bez právnych pojmov a zbytočných detailov. Ozveme sa vám a dohodneme termín.
2. **Prvá konzultácia.** Prejdeme vašu situáciu aj dokumenty. Vysvetlíme vám, kde stojíte, aké máte možnosti a čo vás čaká. Konzultácia je spoplatnená, jej podmienky vám oznámime vopred. (OVERIŤ)
3. **Postup a zastupovanie.** Ak sa dohodneme na spolupráci, preberáme komunikáciu, listiny a lehoty. Vy sa môžete venovať svojmu životu a o každom dôležitom kroku od nás viete.
- **Tlačidlo:** Dohodnúť konzultáciu

### 3.4 O pánovi doktorovi
- **Fotografia:** placeholder „Fotografia bude doplnená“
- **H2:** JUDr. Ladislav Pavlovič
- **Funkcia:** Advokát · Bratislava
- **Text (prvá osoba):** Advokácii sa venujem [DOPLNIŤ: počet] rokov a spolu s kolegami pomáhame ľuďom aj firmám v deviatich oblastiach práva. Pri každej veci vychádzam z jednoduchého princípu: klient potrebuje vedieť, kde stojí, čo ho čaká a čo je vhodné urobiť ďalej. Preto vysvetľujem zrozumiteľne, otvorene hovorím o možnostiach aj rizikách a nesľubujem nič, čo sa sľúbiť nedá.
- **Fakty:**
  - Vzdelanie: [DOPLNIŤ: škola, rok, titul]
  - Prax: [DOPLNIŤ: počet] rokov v advokácii
  - Slovenská advokátska komora: zápis č. [DOPLNIŤ]
- **Odkaz:** Viac o mne →

### 3.5 Na čom si zakladáme
(Texty tohto bloku sa nemenia, ostávajú v prvej osobe.)
- **H2:** Ako pracujem
- **Zrozumiteľne.** Právnu situáciu vám vysvetlím jazykom, ktorému rozumiete, bez zbytočného žargónu.
- **Diskrétne.** Všetko, čo mi povierite, je chránené povinnou mlčanlivosťou advokáta.
- **Zodpovedne.** Dohodnuté termíny a lehoty sledujem sám, aby sa nič nepremeškalo.
- **Priamo.** Komunikujete s advokátom, ktorý vašu vec rieši.

### 3.6 Prečo my (skrátená verzia)
- **H2:** Prečo my
- **Úvod:** Fakty namiesto sľubov.
1. **Viac oblastí na jednom mieste.** Deväť oblastí práva pod jednou strechou. Keď sa vaša vec dotýka viacerých oblastí, nemusíte hľadať ďalšieho advokáta.
2. **Overená prax.** [DOPLNIŤ: počet] rokov v advokácii a [DOPLNIŤ: počet] vybavených vecí. Skúsenosti, ktoré sa dajú doložiť.
3. **Celé západné Slovensko.** Sídlime v Bratislave a klientov zastupujeme na celom západnom Slovensku aj pred Špecializovaným trestným súdom v Banskej Bystrici.
4. **Jasný ďalší krok.** Z konzultácie odchádzate s vysvetlením bez žargónu a s konkrétnym návrhom, čo urobiť ďalej.
- **Tlačidlo:** Viac (vedie na `/preco-my`)

### 3.7 Časté otázky
- **H2:** Časté otázky
- Otázky a odpovede sa importujú z obsahu služieb (jeden zdroj):
  1. Mám nárok na odškodnenie, ak som nehodu čiastočne zavinil aj ja? (zo 4.3)
  2. Ako dlho trvá rozvod? (zo 4.6)
  3. Potrebujem advokáta pri každej zmluve? (zo 4.4)
- **Odkaz:** Všetky otázky a odpovede → (na `/caste-otazky`)

### 3.8 Záverná výzva
- **H2:** Neviete, ako ďalej? Začnime jedným rozhovorom.
- **Text:** Opíšte nám, čo riešite. Povieme vám, aké máte možnosti a čo je rozumné urobiť ako prvé.
- **Tlačidlá:** Dohodnúť konzultáciu · Zavolať [DOPLNIŤ: telefón]

---

## ČASŤ 4 · Služby

### 4.1 Prehľadová stránka Služby `/sluzby`
- **H1:** Služby
- **Úvodný text:** Venujeme sa deviatim oblastiam práva, s ktorými sa ľudia a firmy stretávajú najčastejšie. Pri každej veci začíname rovnako: vypočujeme si vás, vysvetlíme vám situáciu zrozumiteľne a navrhneme ďalší postup. Kancelária sídli v Bratislave a klientov zastupuje na celom západnom Slovensku.
- **9 kariet služieb:** obrázok, názov, popis („Popis karty“ zo 4.3 až 4.11), odkaz „Zistiť viac →“.
- **Záverná výzva:**
  - H2: Neviete, kam vaša vec patrí?
  - Text: Opíšte nám situáciu. Povieme vám, ako k nej pristúpiť.
  - Tlačidlá: Dohodnúť konzultáciu · Zavolať [DOPLNIŤ: telefón]

### 4.2 Spoločná kostra detailu každej služby
Všetkých 9 detailov má rovnaké poradie blokov. Bloky sú očíslované a tieto čísla použi aj v kóde (`data-doc="4.3-1"`, `data-doc="4.3-2"`…):

| # | Blok | Nadpis bloku na webe |
|---|---|---|
| 1 | Hero | H1 podľa služby |
| 2 | Úvod | H2 podľa služby |
| 3 | S čím pomáhame | S čím vám pomôžeme (ak nie je pri službe uvedené inak) |
| 4 | Ako postupujeme | Ako postupujeme |
| 5 | Kedy sa ozvať | Kedy sa nám ozvať (ak nie je pri službe uvedené inak) |
| 6 | Časté otázky | Často kladené otázky |
| 7 | Súvisiace služby | Súvisiace služby |
| 8 | Záverná výzva | H2 podľa služby |
| 9 | SEO | title a meta popis (v `10-seo.ts`) |

Špeciálne bloky sa vkladajú iba tam, kde sú pri službe uvedené (napr. „Čo robiť hneď po nehode“ pri 4.3 hneď za blok 2).

Tlačidlá na službách: **Dohodnúť konzultáciu** (vedie na `/kontakt?oblast=<slug>#konzultacia`) a **Zavolať**. Výnimka 4.11: **Opísať vec**.

---

### 4.3 Dopravné nehody `/sluzby/dopravne-nehody`
**Popis karty:** Po nehode sa naraz rieši zdravie, auto aj poisťovňa. Pomôžeme vám uplatniť nároky voči poisťovni a zodpovednej osobe a posúdime, či je ponuka poisťovne primeraná.

**1 · Hero**
- H1: Advokát pre dopravné nehody v Bratislave a okolí
- Podnadpis: Po nehode sa naraz rieši zdravie, auto, poisťovňa aj doklady. Pomôžeme vám zorientovať sa a uplatniť vaše nároky.
- Tlačidlá: Dohodnúť konzultáciu · Zavolať [DOPLNIŤ: telefón]

**2 · Úvod**
- H2: Keď sa po nehode nechcete s poisťovňou dohadovať sami
- Text: Dopravná nehoda zasiahne zdravie, peniaze aj čas. Mnohí ľudia nevedia, na aké odškodnenie majú nárok, alebo prijmú prvú ponuku poisťovne bez toho, aby ju niekto posúdil. Iní riešia spor o to, kto nehodu zavinil. Pomáhame poškodeným vodičom, spolujazdcom, chodcom, cyklistom aj pozostalým. Posúdime vašu situáciu, vysvetlíme vám, čo môžete žiadať, a postaráme sa o komunikáciu s poisťovňou.

**Špeciálny blok · Čo robiť hneď po dopravnej nehode** (hneď za blokom 2)
- H2: Čo robiť hneď po dopravnej nehode
1. **Zdravie a bezpečnosť na prvom mieste.** Pri zranení volajte záchranku (155 alebo 112) a zabezpečte miesto nehody.
2. **Privolajte políciu (158).** Pri zranení alebo väčšej škode je to nevyhnutné.
3. **Zdokumentujte situáciu.** Odfoťte vozidlá, ich polohu, poškodenie a okolie. Zapíšte si údaje druhého vodiča a kontakty svedkov.
4. **Nepodpisujte to, čomu nerozumiete.** Pred podpisom vyhlásenia o vine alebo dohody sa poraďte.
5. **Dajte sa vyšetriť.** Aj pri „drobnom“ zranení, následky sa môžu prejaviť neskôr.
6. **Uschovajte všetky doklady.** Lekárske správy, faktúry, potvrdenia o práceneschopnosti, komunikáciu s poisťovňou.
- Odkaz: Máte otázky k vašej situácii? Dohodnúť konzultáciu →

**3 · S čím vám pomôžeme**
- **Odškodnenie za ujmu na zdraví.** Bolestné, sťaženie spoločenského uplatnenia, náklady na liečenie a strata na zárobku.
- **Škoda na vozidle a majetku.** Uplatnenie nároku a posúdenie vyčíslenia škody.
- **Komunikácia s poisťovňou.** Podanie nároku, posúdenie vyjadrení a ponúk poisťovne a postup, keď poisťovňa plnenie odmietne alebo skráti.
- **Spor o zavinenie.** Keď poisťovňa alebo druhá strana spochybňuje priebeh nehody.
- **Pomoc pozostalým.** Nároky blízkych osôb po smrteľnej nehode.
- **Neznámy alebo nepoistený vinník.** Uplatnenie nároku z garančného fondu, ktorý spravuje Slovenská kancelária poisťovateľov. (OVERIŤ)

**4 · Ako postupujeme**
1. **Opíšete nám, čo sa stalo.** Zavoláte alebo napíšete. Stačí stručne: kedy a kde sa nehoda stala, kto bol zranený a čo vám zatiaľ oznámila poisťovňa.
2. **Posúdime nárok a doklady.** Pri konzultácii prejdeme lekárske správy, záznam o nehode a komunikáciu s poisťovňou. Vysvetlíme vám, na čo máte nárok a aké lehoty platia.
3. **Uplatníme nárok.** Pripravíme a podáme nárok, posúdime ponuku poisťovne a rokujeme o primeranom plnení. Ak je to potrebné, zastupujeme vás aj pred súdom.

**5 · Kedy sa nám ozvať**
- Neviem, či mám nárok na odškodnenie.
- Poisťovňa mi ponúkla plnenie a neviem, či je primerané.
- Poisťovňa tvrdí, že nehodu som zavinil/a ja.
- Nehodu spôsobil vodič, ktorého sa nepodarilo zistiť.
- Môj blízky sa pri nehode zranil alebo zomrel.
- Poisťovňa mi plnenie odmietla alebo skrátila.
- Tlačidlo: Dohodnúť konzultáciu

**6 · Často kladené otázky**
- **Mám nárok na odškodnenie, ak som nehodu čiastočne zavinil aj ja?** Spoluzavinenie nárok automaticky nevylučuje, no môže ovplyvniť jeho výšku. Všetko závisí od okolností nehody, preto je vhodné posúdiť konkrétnu situáciu.
- **Môžem sa obrátiť priamo na poisťovňu druhého vodiča?** Áno, poškodený môže svoj nárok spravidla uplatniť priamo voči poisťovni, u ktorej je zodpovedný vodič poistený v rámci povinného zmluvného poistenia.
- **Poisťovňa mi ponúkla odškodné. Mám ho prijať?** Odporúčame ponuku pred prijatím posúdiť, najmä pri zraneniach, pri ktorých sa všetky následky ešte nemusia prejaviť. Po podpise dohody sa na ňu už ťažko vracia.
- **Dokedy musím nárok uplatniť?** Nároky sa premlčujú a lehoty sa môžu líšiť podľa druhu nároku. Preto s riešením neodkladajte.
- **Čo ak vinník ušiel alebo nemá poistenie?** Aj v takom prípade môžu existovať spôsoby, ako nárok uplatniť. Záleží na konkrétnych okolnostiach nehody.

**7 · Súvisiace služby:** Trestné právo · Občianske právo

**8 · Záverná výzva**
- H2: Po nehode nemusíte všetko riešiť sami
- Text: Opíšte nám, čo sa stalo. Povieme vám, aké máte možnosti.
- Tlačidlá: Dohodnúť konzultáciu · Zavolať [DOPLNIŤ: telefón]

**9 · SEO**
- Title: Advokát dopravné nehody Bratislava | JUDr. Pavlovič
- Meta popis: Pomoc po dopravnej nehode: odškodnenie za ujmu na zdraví, škoda na vozidle a komunikácia s poisťovňou. Dohodnite si konzultáciu.

---

### 4.4 Obchodné právo `/sluzby/obchodne-pravo`
**Popis karty:** Zakladáte firmu, potrebujete zmluvu alebo vám odberateľ nezaplatil? Pripravíme a posúdime zmluvy, pomôžeme so zmenami v spoločnosti aj s vymáhaním pohľadávok.

**1 · Hero**
- H1: Advokát pre obchodné právo v Bratislave a okolí
- Podnadpis: Zmluvy, spoločnosti, pohľadávky a spory. Právne zázemie pre podnikateľov, ktorí potrebujú jasné a praktické riešenia.
- Tlačidlá: Dohodnúť konzultáciu · Zavolať [DOPLNIŤ: telefón]

**2 · Úvod**
- H2: Právne zázemie pre vaše podnikanie
- Text: Podnikanie prináša množstvo rozhodnutí, z ktorých mnohé majú právne dôsledky. Pomáhame živnostníkom, podnikateľom a spoločnostiam rozhodovať sa informovane: pri zakladaní firmy, pri uzatváraní zmlúv aj pri sporoch. Riziká vám vysvetlíme prakticky, bez zbytočnej teórie. Cieľom je predchádzať problémom, a ak už nastanú, riešiť ich vecne a včas.

**3 · S čím sa na nás podnikatelia obracajú** (nadpis bloku pri tejto službe)
- **Zakladáte alebo meníte firmu.** Založenie spoločnosti, zmeny v spoločnosti a v obchodnom registri.
- **Potrebujete zmluvu.** Príprava a posúdenie zmlúv: dodávateľské, o spolupráci, nájomné a ďalšie obchodné zmluvy.
- **Odberateľ vám nezaplatil.** Posúdenie pohľadávky, výzva na zaplatenie a vymáhanie, vrátane súdneho konania.
- **Máte spor s obchodným partnerom.** Hľadanie dohody alebo zastupovanie v konaní pred súdom.
- **Riešite vzťahy medzi spoločníkmi.** Spoločenská zmluva, prevod obchodného podielu a spory medzi spoločníkmi.
- **Potrebujete právne zázemie pravidelne.** Dlhodobá spolupráca s firmami za individuálne dohodnutých podmienok. (OVERIŤ)

**4 · Ako postupujeme**
1. **Opíšete nám zámer alebo problém.** Napríklad, čo plánujete podpísať alebo čo sa stalo. Prineste zmluvy, faktúry a korešpondenciu, ktoré sa k veci vzťahujú.
2. **Posúdime a navrhneme postup.** Vysvetlíme vám riziká, možnosti a odporúčaný ďalší krok. Pri spore najprv zvážime, či je reálna dohoda.
3. **Postaráme sa o realizáciu.** Pripravíme alebo posúdime dokumenty, rokujeme s druhou stranou a ak je to potrebné, zastupujeme vás pred súdom.

**5 · Kedy sa nám ozvať**
- Chystáte sa podpísať zmluvu s vysokou hodnotou alebo na dlhé obdobie.
- Zakladáte spoločnosť s ďalším spoločníkom.
- Faktúra je po splatnosti a odberateľ nereaguje.
- Obchodný partner neplní, čo ste si dohodli.
- Meníte konateľa, spoločníkov alebo sídlo firmy.
- Tlačidlo: Dohodnúť konzultáciu

**6 · Často kladené otázky**
- **S čím môžem prísť pri zakladaní firmy?** S nápadom aj s hotovým zámerom. Spolu zvolíme vhodnú formu, upravíme vzťahy medzi spoločníkmi a pripravíme potrebné dokumenty.
- **Potrebujem advokáta pri každej zmluve?** Nie vždy. Pri dlhodobých, hodnotnejších alebo rizikovejších zmluvách je však posúdenie pred podpisom vhodné, lebo opraviť chybu po podpise býva náročnejšie.
- **Čo robiť, ak mi odberateľ nezaplatil?** Dôležité je zhromaždiť doklady a čo najskôr zvoliť postup, od výzvy na zaplatenie až po súd. Pohľadávky sa premlčujú, preto neodkladajte.
- **Zastupujete aj pred súdom?** Áno, zastupujeme klientov v obchodných sporoch aj pred súdom. (OVERIŤ)
- **Je možná dlhodobá spolupráca pre firmu?** Podnikateľom, ktorí potrebujú právne zázemie pravidelne, ponúkame dlhodobú spoluprácu. Podmienky sa dohodnú individuálne. (OVERIŤ)

**7 · Súvisiace služby:** Právo duševného vlastníctva · Kybernetické právo

**8 · Záverná výzva**
- H2: Majte právne veci vo firme pod kontrolou
- Text: Povedzte nám, čo plánujete alebo riešite. Povieme vám, ako k tomu pristúpiť.
- Tlačidlá: Dohodnúť konzultáciu · Zavolať [DOPLNIŤ: telefón]

**9 · SEO**
- Title: Advokát obchodné právo Bratislava | JUDr. Pavlovič
- Meta popis: Právne zázemie pre podnikateľov v Bratislave: zmluvy, spoločnosti, vymáhanie pohľadávok a obchodné spory. Dohodnite si konzultáciu.

---

### 4.5 Občianske právo `/sluzby/obcianske-pravo`
**Popis karty:** Kupujete byt, riešite spor so susedom alebo dedičstvo? Pripravíme a posúdime zmluvy a zastúpime vás v majetkových sporoch aj pri náhrade škody.

**1 · Hero**
- H1: Advokát pre občianske právo v Bratislave a okolí
- Podnadpis: Zmluvy, nehnuteľnosti, spory a náhrada škody. Pomôžeme vám vyriešiť situácie, s ktorými sa človek stretne v súkromnom živote.
- Tlačidlá: Dohodnúť konzultáciu · Zavolať [DOPLNIŤ: telefón]

**2 · Úvod**
- H2: Čo patrí do občianskeho práva
- Text: Občianske právo upravuje vzťahy medzi ľuďmi v súkromnom živote: majetok, zmluvy, náhradu škody či dedenie. Nepatria sem rodinné veci, ako je rozvod, ani podnikanie, ktoré riešime v rámci rodinného a obchodného práva. Ľudia sa na nás najčastejšie obracajú, keď kupujú alebo predávajú nehnuteľnosť, keď im niekto spôsobil škodu alebo keď sa nevedia dohodnúť so susedom či spoluvlastníkom.

**3 · S čím vám pomôžeme**
- **Zmluvy.** Príprava a posúdenie kúpnych, darovacích, nájomných a ďalších zmlúv.
- **Nehnuteľnosti.** Prevody bytov, domov a pozemkov, návrh na vklad do katastra a vzťahy medzi spoluvlastníkmi.
- **Susedské a majetkové spory.** Spory o užívanie pozemkov a spoločných vecí či o vrátenie požičaných peňazí.
- **Náhrada škody.** Uplatnenie náhrady, keď vám niekto spôsobil škodu na majetku alebo zdraví.
- **Ochrana osobnosti.** Postup pri zásahu do cti, dobrej povesti alebo súkromia.
- **Dedičské konanie.** Zastupovanie dedičov a pomoc pri dohode o rozdelení dedičstva. (OVERIŤ)
- **Exekúcie a ochrana spotrebiteľa.** Posúdenie exekúcie a ochrana vašich práv ako spotrebiteľa. (OVERIŤ)

**4 · Ako postupujeme**
1. **Opíšete nám situáciu.** Povedzte nám, čo sa stalo alebo čo plánujete. Ak máte zmluvu, list či rozhodnutie, prineste ich na konzultáciu.
2. **Vysvetlíme vám možnosti.** Posúdime vaše postavenie, vysvetlíme riziká a navrhneme postup. Pri spore najprv zvážime, či sa dá vec vyriešiť dohodou.
3. **Pripravíme dokumenty alebo vás zastúpime.** Pripravíme zmluvu či podanie, rokujeme s druhou stranou a ak je to potrebné, zastupujeme vás pred súdom.

**5 · Kedy sa nám ozvať**
- Kupujete alebo predávate nehnuteľnosť.
- Niekto vám dlží peniaze a nereaguje.
- So susedom sa neviete dohodnúť.
- Niekto vám spôsobil škodu.
- Dostali ste žalobu alebo výzvu na zaplatenie.
- Riešite rozdelenie dedičstva.
- Tlačidlo: Dohodnúť konzultáciu

**6 · Často kladené otázky**
- **Čo musí obsahovať kúpna zmluva k nehnuteľnosti?** Okrem údajov o zmluvných stranách, cene a predmete prevodu musí presne zodpovedať údajom v katastri. Chyba v zmluve môže viesť k tomu, že kataster vklad nepovolí alebo konanie preruší. Preto je vhodné dať zmluvu posúdiť pred podpisom.
- **Ako riešiť spor so susedom?** Najprv sa oplatí skúsiť dohodu, ideálne písomnú. Ak nepomôže, prichádza do úvahy výzva od advokáta a napokon žaloba na súde. Vhodný postup závisí od toho, o čo v spore ide.
- **Ako postupovať pri dedičstve?** Dedičské konanie začína súd spravidla sám, keď sa dozvie o úmrtí, a vedie ho notár ako súdny komisár. Ak sa dedičia nevedia dohodnúť alebo je majetok zložitejší, pomôžeme vám chrániť vaše záujmy.
- **Dokedy môžem žiadať vrátenie dlhu?** Nároky sa premlčujú a lehota závisí od druhu nároku. Ak dlžník neplatí, s riešením zbytočne neodkladajte.

**7 · Súvisiace služby:** Rodinné právo · Obchodné právo

**8 · Záverná výzva**
- H2: Riešite zmluvu alebo spor?
- Text: Opíšte nám situáciu. Povieme vám, aké máte možnosti.
- Tlačidlá: Dohodnúť konzultáciu · Zavolať [DOPLNIŤ: telefón]

**9 · SEO**
- Title: Advokát občianske právo Bratislava | JUDr. Pavlovič
- Meta popis: Zmluvy, nehnuteľnosti, susedské a majetkové spory, náhrada škody či dedičstvo. Pomôžeme vám v občianskoprávnych veciach.

---

### 4.6 Rodinné právo `/sluzby/rodinne-pravo`
**Popis karty:** Rozvod, starostlivosť o deti či výživné patria k najcitlivejším životným situáciám. Pomôžeme vám ich riešiť pokojne, diskrétne a s ohľadom na deti.

**1 · Hero**
- H1: Advokát pre rodinné právo v Bratislave a okolí
- Podnadpis: Rozvod, deti, výživné a majetok. Pomôžeme vám prejsť náročným obdobím pokojne, s jasným plánom a s ohľadom na to, čo je dobré pre vaše deti.
- Tlačidlá: Dohodnúť konzultáciu · Zavolať [DOPLNIŤ: telefón]

**2 · Úvod**
- H2: Keď sa mení rodina
- Text: Rozpad vzťahu zasiahne celú rodinu. Okrem emócií treba vyriešiť aj praktické otázky: kde budú žiť deti, aké bude výživné a ako sa rozdelí spoločný majetok. Postupujeme pokojne a vecne. Ak je to možné, hľadáme dohodu, pretože býva rýchlejšia a pre deti šetrnejšia ako dlhý spor pred súdom. Všetko, čo nám poviete, zostáva chránené povinnou mlčanlivosťou advokáta.

**3 · S čím vám pomôžeme**
- **Rozvod manželstva.** Príprava návrhu, zastupovanie v konaní a pomoc pri dohode o podmienkach.
- **Starostlivosť o deti a styk.** Úprava toho, komu súd deti zverí, a ako bude upravený kontakt s druhým rodičom.
- **Výživné.** Určenie, zvýšenie alebo zníženie výživného pre dieťa, prípadne aj medzi manželmi.
- **Vyporiadanie spoločného majetku.** Rozdelenie bezpodielového spoluvlastníctva manželov dohodou alebo na súde.
- **Určenie a zapretie otcovstva.** Zastupovanie v konaní o určení alebo zapretí otcovstva. (OVERIŤ)
- **Osvojenie.** Pomoc a sprevádzanie počas konania o osvojení. (OVERIŤ)

**4 · Ako postupujeme**
1. **Pokojný rozhovor.** Na konzultácii si vypočujeme vašu situáciu bez súdenia. Zistíme, čo je pre vás a pre deti najdôležitejšie.
2. **Jasný plán.** Vysvetlíme vám, ako konanie prebieha, čo bude súd posudzovať a aké máte možnosti. Spolu zvážime, či je reálna dohoda s druhou stranou.
3. **Dohoda alebo zastupovanie.** Pripravíme návrhy a dohody, komunikujeme s druhou stranou a zastupujeme vás pred súdom. Vždy s ohľadom na záujem detí.

**5 · Kedy sa nám ozvať**
- Zvažujete rozvod a neviete, kde začať.
- S druhým rodičom sa neviete dohodnúť na starostlivosti o deti.
- Druhý rodič neplatí výživné.
- Zmenili sa pomery a výživné už nezodpovedá realite.
- Riešite rozdelenie majetku po rozvode.
- Tlačidlo: Dohodnúť konzultáciu

**6 · Často kladené otázky**
- **Ako dlho trvá rozvod?** Závisí najmä od toho, či sa manželia dohodnú a či majú maloleté deti. Ak súd rozhoduje aj o deťoch alebo je vec sporná, konanie trvá dlhšie. Presnejší odhad vám dáme po posúdení vašej situácie.
- **Ako sa určuje výživné?** Súd prihliada na odôvodnené potreby dieťaťa a na schopnosti, možnosti a majetkové pomery rodičov. Výživné sa dá neskôr zmeniť, ak sa podstatne zmenia pomery.
- **Kedy je možná striedavá starostlivosť?** Súd môže zveriť dieťa do striedavej starostlivosti, ak sú obaja rodičia spôsobilí sa oň starať a ak je to v záujme dieťaťa. Rozhodujúci je vždy záujem dieťaťa, nie želanie rodičov.
- **Musíme ísť na súd, aj keď sa dohodneme?** O rozvode a o úprave pomerov k maloletým deťom vždy rozhoduje súd. Dohoda rodičov však konanie výrazne zjednoduší a urýchli.

**7 · Súvisiace služby:** Občianske právo · Správne právo

**8 · Záverná výzva**
- H2: Urobme prvý krok spolu
- Text: Opíšte nám svoju situáciu. Pokojne a dôverne.
- Tlačidlá: Dohodnúť konzultáciu · Zavolať [DOPLNIŤ: telefón]

**9 · SEO**
- Title: Advokát rodinné právo Bratislava | JUDr. Pavlovič
- Meta popis: Rozvod, starostlivosť o deti, výživné a vyporiadanie majetku manželov. Pokojne, diskrétne a s ohľadom na deti. Dohodnite si konzultáciu.

---

### 4.7 Správne právo `/sluzby/spravne-pravo`
**Popis karty:** Dostali ste rozhodnutie úradu, pokutu alebo zamietnuté povolenie? Posúdime ho, pripravíme odvolanie a zastúpime vás pred úradom aj pred správnym súdom.

**1 · Hero**
- H1: Advokát pre správne právo v Bratislave a okolí
- Podnadpis: Rozhodnutie úradu nemusí byť konečné. Pomôžeme vám ho posúdiť, včas sa odvolať a chrániť vaše práva pred úradmi aj pred súdom.
- Tlačidlá: Dohodnúť konzultáciu · Zavolať [DOPLNIŤ: telefón]

**2 · Úvod**
- H2: Pri rozhodnutí úradu rozhodujú lehoty
- Text: Proti rozhodnutiu úradu sa spravidla dá brániť, no lehoty na odvolanie sú krátke. Ak ich zmeškáte, vaše možnosti sa výrazne zúžia. Preto je dôležité ozvať sa čo najskôr po doručení rozhodnutia. Zastupujeme vás pred obcami, okresnými úradmi, stavebnými úradmi a ďalšími orgánmi verejnej správy. Ak úrad nerozhodne správne ani po odvolaní, môžeme rozhodnutie napadnúť správnou žalobou na súde.

**3 · S čím vám pomôžeme**
- **Odvolanie proti rozhodnutiu.** Posúdenie rozhodnutia a príprava odvolania alebo iného opravného prostriedku.
- **Povoľovanie stavieb.** Zastupovanie stavebníkov aj susedov v konaní o povolení stavby.
- **Priestupky.** Obrana v priestupkovom konaní, napríklad pri pokute za dopravný priestupok.
- **Správna žaloba.** Preskúmanie rozhodnutia úradu správnym súdom.
- **Cudzinecké a daňové konania.** Zastupovanie v konaniach o pobyte cudzincov a pri daňovej kontrole. (OVERIŤ)

**4 · Ako postupujeme**
1. **Prinesiete nám rozhodnutie.** Ozvite sa čo najskôr po doručení. Uveďte, kedy vám rozhodnutie prišlo, a prineste ho na konzultáciu spolu s ďalšími písomnosťami.
2. **Posúdime ho a overíme lehotu.** Zistíme, či má rozhodnutie nedostatky, aké opravné prostriedky prichádzajú do úvahy a dokedy ich treba podať.
3. **Podáme odvolanie alebo žalobu.** Pripravíme odvolanie, komunikujeme s úradom a zastupujeme vás v konaní. Ak je to potrebné, podáme správnu žalobu na súd.

**5 · Kedy sa nám ozvať**
- Dostali ste rozhodnutie, s ktorým nesúhlasíte.
- Úrad vám uložil pokutu.
- Stavebný úrad zamietol vašu žiadosť alebo povolil stavbu, ktorá vás obmedzuje.
- Úrad vo vašej veci nekoná alebo konanie zbytočne predlžuje.
- Chystáte sa podať žiadosť a chcete ju mať v poriadku.
- Tlačidlo: Dohodnúť konzultáciu

**6 · Často kladené otázky**
- **Dostal som rozhodnutie úradu. Čo ďalej?** Pozorne si prečítajte poučenie na konci rozhodnutia. Uvádza, či a dokedy sa môžete odvolať. Lehoty sú krátke, preto sa s nami poraďte čo najskôr po doručení.
- **Dá sa odvolať proti pokute?** Proti rozhodnutiu o pokute sa spravidla dá podať odvolanie alebo iný opravný prostriedok. Či má zmysel, závisí od okolností a od dôkazov, ktoré máte k dispozícii.
- **Kedy podať správnu žalobu?** Správnu žalobu môžete spravidla podať až po tom, čo ste využili odvolanie. Lehota na jej podanie je zákonom obmedzená, preto ju neodkladajte.

**7 · Súvisiace služby:** Občianske právo · Dopravné nehody

**8 · Záverná výzva**
- H2: Nesúhlasíte s rozhodnutím úradu?
- Text: Ozvite sa čo najskôr. Posúdime ho a povieme vám, aké máte možnosti.
- Tlačidlá: Dohodnúť konzultáciu · Zavolať [DOPLNIŤ: telefón]

**9 · SEO**
- Title: Advokát správne právo Bratislava | JUDr. Pavlovič
- Meta popis: Odvolanie proti rozhodnutiu úradu, povoľovanie stavieb, priestupky a správna žaloba. Pomôžeme vám v konaní pred úradmi.

---

### 4.8 Právo duševného vlastníctva `/sluzby/dusevne-vlastnictvo`
**Popis karty:** Chcete ochrániť názov firmy, logo alebo svoju tvorbu? Pomôžeme vám s ochrannou známkou, licenčnými zmluvami a pri porušení vašich práv.

**1 · Hero**
- H1: Advokát pre duševné vlastníctvo v Bratislave a okolí
- Podnadpis: Názov, logo, dizajn aj autorské dielo majú hodnotu. Pomôžeme vám ich chrániť, správne licencovať a brániť, keď ich niekto použije bez súhlasu.
- Tlačidlá: Dohodnúť konzultáciu · Zavolať [DOPLNIŤ: telefón]

**2 · Úvod**
- H2: Chráňte to, čo ste vytvorili
- Text: Duševné vlastníctvo sú výsledky tvorivej práce: názvy, logá, dizajny, texty, fotografie či softvér. Pomáhame podnikateľom, tvorcom a startupom, ktorí chcú mať istotu, že ich značku alebo dielo nemôže voľne použiť niekto iný. Vysvetlíme vám, čo je chránené automaticky, čo treba zaregistrovať a ako na to. Ak ide o vynález alebo technické riešenie, pozrite si stránku Patentové právo. (slová „Patentové právo“ sú odkaz na `/sluzby/patentove-pravo`)

**3 · S čím vám pomôžeme**
- **Ochranné známky.** Ochranná známka je zapísané označenie, napríklad názov alebo logo, ktoré odlišuje vaše výrobky či služby od iných. Pomôžeme vám s prihláškou aj s preverením podobných známok.
- **Autorské právo.** Autorské právo chráni dielo, ako je text, fotografia alebo softvér. Vzniká automaticky vytvorením diela, bez registrácie.
- **Licenčné zmluvy.** Licencia je povolenie použiť dielo alebo známku za dohodnutých podmienok. Pripravíme ju alebo posúdime.
- **Prevod ochrannej známky.** Zmluvy o prevode alebo licencovaní známky, napríklad pri predaji firmy.
- **Dizajny.** Ochrana vzhľadu výrobku zápisom dizajnu. (OVERIŤ)
- **Porušenie práv.** Postup, keď niekto bez súhlasu používa vašu značku alebo dielo.

**4 · Ako postupujeme**
1. **Opíšete nám, čo chcete chrániť.** Povedzte nám, o aký názov, logo alebo dielo ide a ako ho používate. Prineste aj zmluvy, ktoré ste k nemu uzavreli.
2. **Navrhneme spôsob ochrany.** Vysvetlíme vám, či je vaše dielo chránené automaticky alebo treba podať prihlášku, a odporučíme vhodný rozsah ochrany.
3. **Postaráme sa o realizáciu.** Pripravíme prihlášku, licenčnú zmluvu alebo výzvu pri porušení práv a sprevádzame vás celým konaním.

**5 · Kedy sa nám ozvať**
- Zakladáte značku a chcete si chrániť jej názov.
- Niekto používa podobný názov alebo logo ako vy.
- Chcete niekomu povoliť používať vašu tvorbu.
- Dali ste si vytvoriť logo, web alebo softvér a chcete mať jasné, kto ich smie používať.
- Dostali ste výzvu, že porušujete cudzie práva.
- Tlačidlo: Dohodnúť konzultáciu

**6 · Často kladené otázky**
- **Ako si ochrániť názov firmy?** Zápis obchodného mena chráni najmä názov firmy ako podnikateľa. Ak chcete chrániť názov ako značku vašich výrobkov alebo služieb, je vhodné zapísať ochrannú známku.
- **Čo je ochranná známka?** Je to zapísané označenie, napríklad slovo, logo alebo ich kombinácia, ktoré odlišuje vaše výrobky alebo služby od iných. Zapisuje ju Úrad priemyselného vlastníctva SR, prípadne úrad Európskej únie pre celú Úniu.
- **Kto vlastní autorské práva k dielu?** Autorom je vždy človek, ktorý dielo vytvoril. Pri dielach vytvorených v zamestnaní alebo na objednávku je dôležité, kto ich smie a ako používať. To upravuje zákon a zmluva.

**7 · Súvisiace služby:** Patentové právo · Obchodné právo

**8 · Záverná výzva**
- H2: Chcete chrániť svoju značku alebo tvorbu?
- Text: Opíšte nám, o čo ide. Navrhneme vhodný spôsob ochrany.
- Tlačidlá: Dohodnúť konzultáciu · Zavolať [DOPLNIŤ: telefón]

**9 · SEO**
- Title: Advokát duševné vlastníctvo Bratislava | JUDr. Pavlovič
- Meta popis: Ochranné známky, autorské právo a licenčné zmluvy. Pomôžeme vám chrániť názov, logo aj tvorivú prácu. Dohodnite si konzultáciu.

---

### 4.9 Patentové právo `/sluzby/patentove-pravo`
**Popis karty:** Máte vynález alebo technické riešenie? Pomôžeme vám zistiť, ako ho chrániť patentom alebo úžitkovým vzorom, a pripravíme licenčné zmluvy.

**1 · Hero**
- H1: Advokát pre patentové právo v Bratislave a okolí
- Podnadpis: Vynález má hodnotu, ak je správne chránený. Pomôžeme vám zvoliť vhodnú ochranu, upraviť zmluvy a brániť vaše práva.
- Tlačidlá: Dohodnúť konzultáciu · Zavolať [DOPLNIŤ: telefón]

**2 · Úvod**
- H2: Ochrana technických riešení
- Text: Patent a úžitkový vzor chránia technické riešenia, teda vynálezy. Na rozdiel od názvu alebo loga, ktoré chráni ochranná známka, ide tu o to, ako niečo funguje. Pomáhame vynálezcom, firmám a startupom posúdiť, či a ako je možné ich riešenie chrániť. Pripravujeme licenčné a ďalšie zmluvy a pri konaní pred úradom spolupracujeme s patentovými zástupcami. (OVERIŤ) Ak riešite značku alebo autorské dielo, pozrite si stránku Právo duševného vlastníctva. (slová „Právo duševného vlastníctva“ sú odkaz na `/sluzby/dusevne-vlastnictvo`)

**3 · S čím vám pomôžeme**
- **Posúdenie vynálezu.** Vysvetlíme vám, či riešenie môže spĺňať podmienky ochrany: novosť, vynálezcovskú činnosť a priemyselnú využiteľnosť.
- **Patentová prihláška.** Príprava podkladov a sprevádzanie konaním o udelenie patentu. (OVERIŤ)
- **Úžitkový vzor.** Rýchlejšia a jednoduchšia forma ochrany technického riešenia.
- **Konanie pred Úradom priemyselného vlastníctva SR.** Zastupovanie alebo koordinácia s patentovým zástupcom. (OVERIŤ)
- **Licenčné zmluvy.** Úprava podmienok, za ktorých môže váš vynález využívať niekto iný.
- **Spory o patenty.** Postup pri porušení patentu alebo úžitkového vzoru. (OVERIŤ)

**4 · Ako postupujeme**
1. **Opíšete nám riešenie.** Stručne nám vysvetlíte, čo ste vytvorili a či ste to už niekde zverejnili. Všetko, čo nám poviete, chráni povinná mlčanlivosť advokáta.
2. **Posúdime možnosti ochrany.** Vysvetlíme vám rozdiel medzi patentom a úžitkovým vzorom a odporučíme vhodný postup vrátane ďalších krokov pred úradom.
3. **Zabezpečíme ochranu a zmluvy.** Pripravíme podklady a zmluvy a postaráme sa o konanie, v prípade potreby v spolupráci s patentovým zástupcom.

**5 · Kedy sa nám ozvať**
- Vyvinuli ste nové technické riešenie.
- Chystáte sa vynález predstaviť verejnosti alebo investorom.
- Chcete vynález predať alebo licencovať.
- Niekto kopíruje vaše technické riešenie.
- Tlačidlo: Dohodnúť konzultáciu

**6 · Často kladené otázky**
- **Čo sa dá patentovať?** Patentovať možno vynález, ktorý je nový, je výsledkom vynálezcovskej činnosti a je priemyselne využiteľný. Patentovať nemožno napríklad samotné objavy, vedecké teórie či obchodné plány.
- **Aký je rozdiel medzi patentom a úžitkovým vzorom?** Úžitkový vzor má nižšie nároky na vynálezcovskú úroveň a zapisuje sa rýchlejšie, chráni však kratšie. Patent poskytuje silnejšiu a dlhšiu ochranu, konanie o ňom však trvá dlhšie.
- **Ako dlho trvá konanie?** Konanie o udelenie patentu trvá spravidla niekoľko rokov, zápis úžitkového vzoru býva rýchlejší. Presný čas závisí od úradu a od zložitosti riešenia. (OVERIŤ)
- **Môžem vynález zverejniť pred podaním prihlášky?** Neodporúčame to. Zverejnenie pred podaním prihlášky môže narušiť novosť vynálezu, a tým aj možnosť jeho ochrany.

**7 · Súvisiace služby:** Právo duševného vlastníctva · Obchodné právo

**8 · Záverná výzva**
- H2: Máte vynález, ktorý chcete chrániť?
- Text: Povedzte nám o ňom. Navrhneme, ako postupovať ďalej.
- Tlačidlá: Dohodnúť konzultáciu · Zavolať [DOPLNIŤ: telefón]

**9 · SEO**
- Title: Advokát patentové právo Bratislava | JUDr. Pavlovič
- Meta popis: Posúdenie vynálezu, patent a úžitkový vzor, licenčné zmluvy a spory. Pomôžeme vám chrániť technické riešenia. Dohodnite si konzultáciu.

---

### 4.10 Kybernetické právo `/sluzby/kyberneticke-pravo`
**Popis karty:** Kybernetické právo upravuje bezpečnosť informačných systémov, ochranu dát a IT zmluvy. Pomôžeme vašej firme splniť povinnosti a pripraviť sa na únik dát.

**1 · Hero**
- H1: Advokát pre kybernetické právo na Slovensku
- Podnadpis: Kybernetická bezpečnosť, osobné údaje a IT zmluvy. Pomôžeme vašej firme pochopiť povinnosti, nastaviť pravidlá a správne reagovať, keď nastane incident.
- Tlačidlá: Dohodnúť konzultáciu · Zavolať [DOPLNIŤ: telefón]

**2 · Úvod**
- H2: Čo je kybernetické právo
- Text: Kybernetické právo sú pravidlá pre bezpečnosť informačných systémov, ochranu dát a podnikanie v digitálnom prostredí. Týka sa čoraz viac firiem, nielen IT spoločností. Nové európske pravidlá rozšírili okruh firiem, ktoré musia plniť povinnosti v oblasti kybernetickej bezpečnosti. Pomôžeme vám zistiť, či sa vás týkajú, nastaviť interné pravidlá a pripraviť zmluvy s dodávateľmi. Ak nastane únik dát, poradíme vám, čo a komu treba nahlásiť.

**3 · S čím vám pomôžeme**
- **Povinnosti v kybernetickej bezpečnosti.** Posúdenie, či sa na vašu firmu vzťahujú, a pomoc s ich splnením.
- **Ochrana osobných údajov (GDPR).** Nastavenie dokumentácie, zmlúv a postupov pri spracúvaní osobných údajov.
- **Únik dát a bezpečnostné incidenty.** Postup pri incidente vrátane hlásenia úradom a komunikácie s dotknutými osobami.
- **IT zmluvy a licencie.** Zmluvy o vývoji softvéru, softvérové licencie a softvér poskytovaný ako služba.
- **Online podnikanie a e-shopy.** Obchodné podmienky, informačné povinnosti a ochrana spotrebiteľa. (OVERIŤ)

**4 · Ako postupujeme**
1. **Opíšete nám svoju firmu a systémy.** Povedzte nám, čomu sa venujete, aké údaje spracúvate a s akými dodávateľmi IT spolupracujete. Technické detaily nie sú potrebné.
2. **Posúdime vaše povinnosti.** Zistíme, ktoré pravidlá sa na vás vzťahujú, čo už máte v poriadku a čo treba doplniť.
3. **Nastavíme pravidlá a zmluvy.** Pripravíme dokumentáciu, zmluvy a postupy pre prípad incidentu, aby ste vedeli, čo robiť, keď niečo nastane.

**5 · Kedy sa nám ozvať**
- Neviete, či sa na vás vzťahujú nové povinnosti v kybernetickej bezpečnosti.
- Došlo k úniku dát alebo ku kybernetickému útoku.
- Spúšťate e-shop alebo online službu.
- Uzatvárate zmluvu o vývoji softvéru alebo o cloudovej službe.
- U vás začal kontrolu úrad.
- Tlačidlo: Dohodnúť konzultáciu

**6 · Často kladené otázky**
- **Musí moja firma plniť povinnosti kybernetickej bezpečnosti?** Závisí od odvetvia, v ktorom podnikáte, a od veľkosti firmy. Nové pravidlá sa týkajú oveľa viac firiem ako predtým, preto sa oplatí to preveriť.
- **Čo robiť pri úniku osobných údajov?** Zdokumentujte, čo sa stalo, a obmedzte ďalšie šírenie. Porušenie ochrany osobných údajov treba spravidla ohlásiť Úradu na ochranu osobných údajov SR bez zbytočného odkladu, ak je to možné, do 72 hodín od zistenia.
- **Aké zmluvy potrebuje e-shop?** Najmä obchodné podmienky, informácie o ochrane osobných údajov a reklamačný poriadok. Dôležité sú aj zmluvy s dodávateľmi, napríklad s poskytovateľom platobnej brány či s dopravcom.

**7 · Súvisiace služby:** Obchodné právo · Právo duševného vlastníctva

**8 · Záverná výzva**
- H2: Chcete mať firmu pripravenú na incident?
- Text: Opíšte nám, ako fungujete. Povieme vám, čo je potrebné doplniť.
- Tlačidlá: Dohodnúť konzultáciu · Zavolať [DOPLNIŤ: telefón]

**9 · SEO**
- Title: Advokát kybernetické právo Slovensko | JUDr. Pavlovič
- Meta popis: Kybernetická bezpečnosť, ochrana osobných údajov, únik dát a IT zmluvy. Pomôžeme vašej firme splniť povinnosti.

---

### 4.11 Trestné právo `/sluzby/trestne-pravo`
**Popis karty:** Obhajobu a zastupovanie v trestnom konaní poskytujeme iba stálym klientom a po predchádzajúcej dohode. Dôvodom je vysoká pracovná vyťaženosť kancelárie.
**Štítok na karte:** Iba pre stálych klientov

**1 · Hero**
- H1: Advokát pre trestné právo v Bratislave a okolí
- Podnadpis: Trestné konanie je pre každého náročné. Pomôžeme vám zorientovať sa, chrániť vaše práva a postupovať premyslene. Diskrétne a bez poučovania.
- Tlačidlá: Opísať vec · Zavolať [DOPLNIŤ: telefón]
- **Upozornenie** (zvýraznený blok hneď pod hero, výrazne viditeľný): Trestné právo poskytujeme iba stálym klientom a po predchádzajúcej dohode. Dôvodom je vysoká pracovná vyťaženosť kancelárie. Ďakujeme za pochopenie.

**2 · Úvod**
- H2: Obhajoba a zastupovanie v trestnom konaní
- Text: V trestnom konaní ide o dôležité veci: o povesť, rodinu, prácu a niekedy aj o slobodu. Našim stálym klientom poskytujeme obhajobu a zastupovanie v celom priebehu konania. Pri každom prípade začíname rovnako: pozorne vás vypočujeme, vysvetlíme vám, v akej fáze konania ste, a spolu určíme ďalší postup.

**Špeciálny blok · Čo robiť pri predvolaní alebo zadržaní** (hneď za blokom 2)
- H2: Čo robiť, keď vás predvolá polícia alebo vás zadržia
1. **Zachovajte pokoj.** Vyjadrenia v strese sa neskôr ťažko menia.
2. **Zistite svoje postavenie.** Pýtajte sa, či ste predvolaný ako svedok, podozrivý alebo obvinený. Od toho závisia vaše práva.
3. **Máte právo na obhajcu.** Poraďte sa s advokátom skôr, ako sa podrobne vyjadríte.
4. **Obvinený má právo odoprieť výpoveď.** Pri svedeckej výpovedi platia iné pravidlá.
5. **Nepodpisujte protokol bez prečítania.** Podpisujete len to, čomu rozumiete a s čím súhlasíte.

**3 · S čím vám pomôžeme**
- **Obhajoba obvineného.** V prípravnom konaní aj pred súdom, vrátane návrhov, sťažností a opravných prostriedkov.
- **Zastupovanie poškodeného.** Uplatnenie nároku na náhradu škody v trestnom konaní a ochrana vašich práv ako poškodeného.
- **Pomoc rodine obvineného.** Orientácia v situácii a zvolenie obhajcu v mene blízkej osoby.
- **Trestné oznámenia.** Posúdenie veci a podanie trestného oznámenia. (OVERIŤ)
- **Konania pred Špecializovaným trestným súdom.** Obhajoba a zastupovanie v konaniach pred Špecializovaným trestným súdom v Banskej Bystrici. (OVERIŤ)

**Špeciálny blok · Diskrétnosť** (tmavá sekcia, za blokom 3)
- H2: Diskrétnosť je samozrejmosť
- Text: Advokát je zo zákona viazaný povinnosťou mlčanlivosti. To, čo nám poviete, zostáva medzi nami. Na konzultácii môžete otvorene povedať, ako sa veci skutočne majú.

**4 · Ako postupujeme**
1. **Ozvete sa nám.** Stačí telefonát alebo krátka správa. Podrobnosti nemusíte písať, rozoberieme ich osobne.
2. **Osobná konzultácia.** Prejdeme situáciu a vysvetlíme vám, v akej fáze konania ste a aké máte možnosti.
3. **Obhajoba alebo zastupovanie.** Ak sa dohodneme na spolupráci, preberáme komunikáciu, lehoty a procesné kroky.

**5 · Kedy sa nám ozvať**
- Nadpis bloku pri tejto službe: Ak ste náš stály klient, ozvite sa nám, keď
- Dostali ste predvolanie na políciu.
- Bolo vám vznesené obvinenie.
- Váš blízky bol zadržaný.
- Stali ste sa poškodeným trestným činom.
- Tlačidlo: Opísať vec

**6 · Často kladené otázky**
- **Kedy si mám zvoliť obhajcu?** Čo najskôr, ideálne skôr, ako sa vyjadríte alebo podpíšete protokol. Právo na obhajcu máte od začiatku trestného stíhania.
- **Musím na polícii vypovedať?** Obvinený má právo odoprieť výpoveď. Svedok má povinnosť vypovedať, s určitými výnimkami, napríklad ak by výpoveďou spôsobil nebezpečenstvo trestného stíhania sebe alebo blízkej osobe. Preto je dôležité vedieť, v akom postavení ste.
- **Môže obhajcu zvoliť aj niekto z rodiny?** Áno, obhajcu môžu v mene obvineného zvoliť aj niektoré blízke osoby.
- **Je moja komunikácia s advokátom dôverná?** Áno, advokát je zo zákona viazaný povinnosťou mlčanlivosti.

**7 · Súvisiace služby:** Dopravné nehody · Správne právo

**8 · Záverná výzva**
- H2: Ste náš stály klient?
- Text: Opíšte nám vec. Ozveme sa vám a dohodneme ďalší postup.
- Tlačidlá: Opísať vec · Zavolať [DOPLNIŤ: telefón]

**9 · SEO**
- Title: Advokát trestné právo Bratislava | JUDr. Pavlovič
- Meta popis: Obhajoba obvinených a zastupovanie poškodených v trestnom konaní. Poskytujeme iba stálym klientom a po predchádzajúcej dohode.

---

## ČASŤ 5 · O mne `/o-mne`

Hlas: prvá osoba jednotného čísla.

### 5.1 Hero a príbeh
- **Fotografia:** placeholder „Fotografia bude doplnená“
- **H1:** JUDr. Ladislav Pavlovič
- **Funkcia:** Advokát · Bratislava

**Odsek 1 (kto som a čomu sa venujem):**
Volám sa Ladislav Pavlovič a advokácii sa venujem [DOPLNIŤ: počet] rokov. Spolu s kolegami pomáhame ľuďom a firmám v deviatich oblastiach práva, od dopravných nehôd a obchodného práva až po rodinné, správne či kybernetické právo.

**Odsek 2 (ako pracujem):**
Pri každej veci vychádzam z jednoduchého princípu: klient potrebuje vedieť, kde stojí, čo ho čaká a čo je vhodné urobiť ako ďalšie. Preto vám situáciu vysvetlím zrozumiteľne, otvorene poviem, aké sú možnosti a riziká, a nebudem vám sľubovať nič, čo sa sľúbiť nedá.

**Odsek 3 (k čomu sa zaväzujem):**
Svoju prácu považujem za zodpovednosť voči ľuďom, ktorí sa na mňa obracajú v dôležitých chvíľach. Preto sledujem lehoty, komunikujem priamo a o každom dôležitom kroku vás informujem. To, čo mi povierite, chránim v rámci povinnej mlčanlivosti advokáta.

### 5.2 Karta faktov
- **Prax:** [DOPLNIŤ: počet] rokov v advokácii
- **Vybavené veci:** [DOPLNIŤ: počet]
- **Vzdelanie:** [DOPLNIŤ: škola, rok ukončenia, titul JUDr.]
- **Slovenská advokátska komora:** zápis č. [DOPLNIŤ]
- **Oblasti zamerania:** 9 oblastí práva (slovo „Služby“ ako odkaz na `/sluzby`)
- **Jazyky:** [DOPLNIŤ]
- **Pôsobnosť:** celé západné Slovensko, Špecializovaný trestný súd v Banskej Bystrici
- **Kancelária:** Ivanská cesta 32B, 821 04 Bratislava, Ružinov

### 5.3 Profesijná dráha a záverná výzva
- **H2:** Profesijná dráha
- [DOPLNIŤ: rok] · [DOPLNIŤ: míľnik, napr. ukončenie štúdia]
- [DOPLNIŤ: rok] · [DOPLNIŤ: míľnik, napr. zápis do zoznamu advokátov]
- [DOPLNIŤ: rok] · [DOPLNIŤ: míľnik, napr. založenie kancelárie]

**Záverná výzva**
- H2: Spoznajme sa pri konzultácii
- Tlačidlá: Dohodnúť konzultáciu · Zavolať [DOPLNIŤ: telefón]

**SEO**
- Title: JUDr. Ladislav Pavlovič | Advokát Bratislava
- Meta popis: JUDr. Ladislav Pavlovič, advokát v Bratislave. Zrozumiteľne, diskrétne a s dôrazom na lehoty. Dohodnite si konzultáciu.

---

## ČASŤ 6 · Náš tím `/nas-tim`

Karty členov tímu **nie sú klikateľné** (žiadny odkaz ani hover efekt kurzora). Všetky fotky sú placeholder „Fotografia bude doplnená“. Členov drž v poli v `06-nas-tim.ts`.

### 6.1 Úvod tímu
- **H1:** Náš tím
- **Text:** Každú vec u nás vedie konkrétny advokát. Od prvej konzultácie viete, kto sa vašej veci venuje a s kým komunikujete.

### 6.2 Karty členov tímu
Každá karta má rovnakú štruktúru: fotografia, meno a titul, funkcia, popis (1 až 2 vety) a vedľa tabuľka (Funkcia · Vzdelanie · Zameranie · pri advokátoch aj Zápis v SAK). Poradie: najprv JUDr. Pavlovič (veľká karta), potom ostatní podľa funkcie.

**Člen 1**
- Meno: JUDr. Ladislav Pavlovič
- Funkcia: Advokát
- Popis: Vedie kanceláriu a osobne zodpovedá za veci klientov. Dbá na to, aby každý klient vedel, kde stojí a čo je ďalší krok.
- Tabuľka: Funkcia: Advokát · Vzdelanie: [DOPLNIŤ: škola, rok, titul] · Zameranie: [DOPLNIŤ: 2 až 3 hlavné oblasti] · Zápis v SAK: č. [DOPLNIŤ]

**Člen 2 a Člen 3** (rovnaká štruktúra, zatiaľ placeholdery)
- Meno: [DOPLNIŤ: meno a titul]
- Funkcia: [DOPLNIŤ: advokát / advokátsky koncipient]
- Popis: [DOPLNIŤ: 1 až 2 vety o tom, čomu sa venuje a s čím klientom pomáha]
- Tabuľka: Funkcia: [DOPLNIŤ] · Vzdelanie: [DOPLNIŤ] · Zameranie: [DOPLNIŤ: 2 až 3 oblasti]

### 6.3 Pridajte sa k nám
- **H2:** Pridajte sa k nám
- **Text:** Hľadáme advokátov a advokátskych koncipientov, ktorí chcú pracovať na rôznorodých veciach a komunikovať priamo s klientmi. (OVERIŤ) Ak máte záujem, pošlite nám životopis a niekoľko viet o tom, čomu sa chcete venovať. Ozveme sa vám.
- **Tlačidlo:** Poslať životopis (`mailto:` na e-mail z `site.ts`, predmet „Záujem o prácu“; kým e-mail chýba, tlačidlo je neaktívne a vedľa je čip `[DOPLNIŤ: e-mail pre uchádzačov]`)

**Záverná výzva**
- H2: Potrebujete poradiť?
- Text: Opíšte nám situáciu. Povieme vám, kto z nás sa vašej veci bude venovať.
- Tlačidlá: Dohodnúť konzultáciu · Zavolať [DOPLNIŤ: telefón]

**SEO**
- Title: Náš tím | Advokátska kancelária JUDr. Pavlovič
- Meta popis: Spoznajte ľudí v advokátskej kancelárii JUDr. Ladislava Pavloviča v Bratislave. Každú vec u nás vedie konkrétny advokát.

---

## ČASŤ 7 · Prečo my `/preco-my`

### 7.1 Štruktúra sekcie
- **H1:** Prečo my
- **Úvodná veta:** Namiesto sľubov vám radšej povieme, čo u nás vecne dostanete.

Šesť rozlišovacích znakov. Každý má **názov**, **vysvetlenie** a **dôkaz** (štítok pod textom):

1. **Viac oblastí na jednom mieste**
   Vysvetlenie: Od zmlúv a nehnuteľností cez rodinné veci až po kybernetické právo. Keď sa vaša situácia dotýka viacerých oblastí, nemusíte hľadať ďalšieho advokáta.
   Dôkaz: 9 oblastí práva
2. **Priamy kontakt s advokátom**
   Vysvetlenie: Vašu vec vedie konkrétny advokát a komunikujete priamo s ním. Viete, kto za vaším prípadom stojí a na koho sa obrátiť.
   Dôkaz: Spôsob práce kancelárie
3. **Overená prax**
   Vysvetlenie: [DOPLNIŤ: počet] rokov v advokácii a [DOPLNIŤ: počet] vybavených vecí. Skúsenosti, ktoré sa dajú doložiť, nie len opísať.
   Dôkaz: [DOPLNIŤ: počet] rokov praxe
4. **Pôsobnosť na celom západnom Slovensku**
   Vysvetlenie: Kancelária sídli v Bratislave a klientov zastupuje na celom západnom Slovensku aj pred Špecializovaným trestným súdom v Banskej Bystrici.
   Dôkaz: Západné Slovensko
5. **Diskrétnosť zo zákona**
   Vysvetlenie: Všetko, čo nám poviete, chráni povinná mlčanlivosť advokáta. Je to zákonná povinnosť, nie iba náš záväzok.
   Dôkaz: Zákon o advokácii
6. **Jasný ďalší krok**
   Vysvetlenie: Po konzultácii odchádzate s vysvetlením situácie bez zbytočného žargónu a s konkrétnym návrhom, čo urobiť ďalej.
   Dôkaz: Prvá konzultácia

**Záverná výzva**
- H2: Presvedčte sa sami pri konzultácii
- Text: Opíšte nám, čo riešite. Povieme vám, ako vám vieme pomôcť.
- Tlačidlá: Dohodnúť konzultáciu · Zavolať [DOPLNIŤ: telefón]

**SEO**
- Title: Prečo si vybrať našu kanceláriu | JUDr. Pavlovič
- Meta popis: Priamy kontakt s advokátom, deväť oblastí práva a pôsobnosť na celom západnom Slovensku. Pozrite si, čo u nás dostanete.

---

## ČASŤ 8 · Kontakt `/kontakt`

### 8.1 Úvod stránky
- **H1:** Kontakt
- **Podnadpis:** Zavolajte alebo napíšte. Ozveme sa vám na kontakt, ktorý uvediete, a podrobnosti rozoberieme osobne.

### 8.2 Formulár (`id="konzultacia"`)
- **Nadpis:** Dohodnite si konzultáciu
- **Úvod:** Stačí vyplniť meno a telefón. Podrobnosti rozoberieme osobne.
- **Upozornenie pod úvodom (zvýraznený blok):** Konzultácia je spoplatnená. Jej podmienky vám oznámime vopred, pri dohadovaní termínu. (OVERIŤ)
- **Polia:**
  - Meno a priezvisko *
  - Telefón *
  - E-mail (nepovinné)
  - S čím potrebujete pomôcť? (výber): Dopravné nehody · Obchodné právo · Občianske právo · Rodinné právo · Správne právo · Právo duševného vlastníctva · Patentové právo · Kybernetické právo · Trestné právo (iba pre stálych klientov) · Iné
  - Stručne opíšte situáciu (nepovinné). **Pomocný text:** Neuvádzajte prosím citlivé podrobnosti. Rozoberieme ich osobne.
  - Súhlas: Súhlasím so spracovaním osobných údajov na účel vybavenia môjho dopytu. (odkaz „Zásady ochrany osobných údajov“)
- **Text pri výbere Trestného práva** (zobrazí sa pod výberom): Trestné právo poskytujeme iba stálym klientom a po predchádzajúcej dohode.
- **Tlačidlo:** Odoslať dopyt
- **Pod tlačidlom:** Preferujete telefonát? Zavolajte na [DOPLNIŤ: telefón].
- **Hlásenia:**
  - Úspech: Ďakujeme, správu sme prijali. Ozveme sa vám na uvedený kontakt.
  - Chyba odoslania: Správu sa nepodarilo odoslať. Skúste to prosím znova alebo zavolajte na [DOPLNIŤ: telefón].
  - Povinné pole: Toto pole je povinné.
  - Telefón: Zadajte prosím platné telefónne číslo.
  - E-mail: Zadajte prosím platnú e-mailovú adresu.
  - Súhlas: Pre odoslanie je potrebný súhlas so spracovaním údajov.

### 8.3 Údaje kancelárie
- **Advokátska kancelária:** JUDr. Ladislav Pavlovič s. r. o.
- **Adresa:** Ivanská cesta 32B, 821 04 Bratislava – mestská časť Ružinov
- **Telefón:** [DOPLNIŤ]
- **E-mail:** [DOPLNIŤ]
- **Úradné hodiny:** [DOPLNIŤ]
- **Ako sa k nám dostanete:** [DOPLNIŤ: zastávka MHD, parkovanie, vchod a poschodie]
- **Mapa** (existujúca, Google Maps)

**SEO**
- Title: Kontakt | Advokát Bratislava Ružinov | JUDr. Pavlovič
- Meta popis: Kontakt na advokátsku kanceláriu JUDr. Ladislava Pavloviča, Ivanská cesta 32B, Bratislava Ružinov. Dohodnite si konzultáciu.

### Časté otázky `/caste-otazky` (samostatná stránka, odkaz v pätičke a v 3.7)
- **H1:** Časté otázky
- **Skupiny v tomto poradí:** Konzultácia a spolupráca · Dopravné nehody · Obchodné právo · Občianske právo · Rodinné právo · Správne právo · Duševné vlastníctvo · Patentové právo · Kybernetické právo · Trestné právo
- Otázky jednotlivých služieb sa importujú z blokov 6 v 4.3 až 4.11. Pod každou skupinou je odkaz „Viac o službe →“.

**Konzultácia a spolupráca**
- **Ako si dohodnem konzultáciu?** Zavolajte nám alebo vyplňte formulár na stránke Kontakt. Ozveme sa vám na kontakt, ktorý uvediete, a dohodneme termín.
- **Je konzultácia spoplatnená?** Áno, konzultácia s advokátom je spoplatnená. Jej podmienky vám oznámime vopred, pri dohadovaní termínu. (OVERIŤ)
- **Čo mám priniesť na konzultáciu?** Všetky dokumenty, ktoré sa k veci vzťahujú: zmluvy, korešpondenciu, lekárske správy, rozhodnutia alebo predvolania. Ak niečo nemáte, neznamená to, že sa nedá začať. Zistíme, čo je potrebné doplniť.
- **Je moja vec dôverná?** Áno. Advokát je zo zákona viazaný povinnosťou mlčanlivosti.
- **Venujete sa aj iným oblastiam práva?** Venujeme sa deviatim oblastiam práva, ktoré nájdete v sekcii Služby. Ak vaša vec patrí inam, povieme vám to hneď na začiatku. (OVERIŤ)

**SEO**
- Title: Časté otázky o advokátovi a konzultácii | JUDr. Pavlovič
- Meta popis: Odpovede na časté otázky o konzultácii s advokátom a o oblastiach práva, ktorým sa venujeme v Bratislave a okolí.

---

## ČASŤ 9 · AI asistentka a pätička

### 9.1 AI asistentka
Asistentka **nepoužíva AI ani API**, nemá textové pole, nikam neposiela dáta a nič neukladá. Návštevník kliká na rýchle voľby a dostáva vopred napísané odpovede. Ak asistentka na webe už je, zmeň iba texty. Ak nie je, postav ju ako plávajúce tlačidlo vpravo dole s panelom rozhovoru (na mobile nad mobilnou lištou, nesmie prekrývať cookies lištu).

- **Spúšťacie tlačidlo:** Máte otázku?
- **Hlavička panela:** Virtuálna asistentka · Všeobecné informácie, nenahrádza právnu radu
- **Uvítanie:** Dobrý deň, som virtuálna asistentka kancelárie a pomôžem vám so všeobecnými otázkami, právnu radu advokáta však nenahrádzam.
- **Výzva:** S čím vám môžem pomôcť?

**Rýchle voľby a odpovede (6):**

1. **Mal/a som dopravnú nehodu**
   Po nehode je najdôležitejšie zdravie a bezpečnosť. Zdokumentujte miesto nehody, uschovajte lekárske správy a pred podpisom akejkoľvek dohody s poisťovňou sa poraďte. Či máte nárok na odškodnenie a v akej výške, posúdi advokát pri konzultácii.
   Odkazy: Dohodnúť konzultáciu · Dopravné nehody

2. **Potrebujem zmluvu**
   Pripravujeme a posudzujeme zmluvy pre ľudí aj firmy, napríklad kúpne, nájomné či obchodné. Pred podpisom dôležitej zmluvy je vhodné dať ju posúdiť, pretože opraviť chybu po podpise býva náročnejšie.
   Odkazy: Dohodnúť konzultáciu · Občianske právo · Obchodné právo

3. **Rozvod alebo deti**
   Rozvod a úprava starostlivosti o deti sú citlivé veci. Súd vždy prihliada najmä na záujem dieťaťa a dohoda rodičov konanie výrazne zjednoduší. Konkrétny postup vám vysvetlí advokát pri dôvernej konzultácii.
   Odkazy: Dohodnúť konzultáciu · Rodinné právo

4. **Dostal/a som rozhodnutie úradu**
   Pozrite si poučenie na konci rozhodnutia. Uvádza, či a dokedy sa môžete odvolať. Lehoty sú krátke, preto sa nám ozvite čo najskôr po doručení.
   Odkazy: Dohodnúť konzultáciu · Správne právo

5. **Firma, značka alebo dáta**
   Pomáhame firmám so zakladaním a zmenami spoločností, s ochrannými známkami, s ochranou vynálezov aj s ochranou osobných údajov a kybernetickou bezpečnosťou. Vyberte si oblasť, ktorá vás zaujíma.
   Odkazy: Obchodné právo · Právo duševného vlastníctva · Patentové právo · Kybernetické právo

6. **Ako prebieha a koľko stojí konzultácia?**
   Ozvete sa nám telefonicky alebo cez formulár a dohodneme termín. Na konzultácii prejdeme vašu situáciu, vysvetlíme vám možnosti a navrhneme ďalší postup. Konzultácia je spoplatnená, jej cenu a podmienky vám oznámime vopred. (OVERIŤ)
   Odkazy: Dohodnúť konzultáciu · Zavolať

- **Po každej odpovedi:** Späť na možnosti
- **Odkaz pod voľbami (nie je rýchla voľba):** Máte inú otázku? Napíšte nám cez formulár. (vedie na `/kontakt#konzultacia`)
- **Upozornenie v pätičke panela:** Odpovede majú informatívny charakter a nezakladajú vzťah advokát – klient. Neuvádzajte citlivé údaje. Viac v Zásadách ochrany osobných údajov. (posledné slová sú odkaz na `/ochrana-osobnych-udajov`)

### 9.2 Pätička a právne texty

**Pätička**
- **Navigácia (horný riadok):** Služby · O mne · Náš tím · Prečo my · Kontakt
- **Kancelária:**
  - Advokátska kancelária JUDr. Ladislav Pavlovič s. r. o.
  - Ivanská cesta 32B, 821 04 Bratislava – Ružinov
  - Telefón: [DOPLNIŤ] · E-mail: [DOPLNIŤ]
  - IČO: [DOPLNIŤ] · Zapísaná v obchodnom registri: [DOPLNIŤ]
  - Advokát zapísaný v zozname advokátov Slovenskej advokátskej komory pod č. [DOPLNIŤ]
- **Služby:** 9 odkazov v poradí z časti 2
- **Odkazy:** Služby · O mne · Náš tím · Kontakt · Časté otázky · Ochrana osobných údajov · Cookies
- **Pôsobnosť:** Celé západné Slovensko a Špecializovaný trestný súd v Banskej Bystrici.
- **Upozornenie:** Obsah tejto webovej stránky má informatívny charakter a nenahrádza individuálnu právnu konzultáciu. Jeho zverejnenie ani odoslanie správy cez formulár nezakladá vzťah advokát – klient. Pre posúdenie vašej konkrétnej veci nás, prosím, kontaktujte.
- **Copyright:** © {aktuálny rok} Advokátska kancelária JUDr. Ladislav Pavlovič s. r. o.

**Ochrana osobných údajov** `/ochrana-osobnych-udajov`
- H1: Ochrana osobných údajov
- Pod nadpisom: [DOPLNIŤ: text zásad pripraví advokátska kancelária]
- Nadpisy H2 (pod každým placeholder): Prevádzkovateľ · Účel a právny základ spracúvania · Doba uchovávania · Vaše práva · Kontakt

**Cookies** `/cookies`
- H1: Zásady používania cookies
- Pod nadpisom: [DOPLNIŤ: text zásad pripraví advokátska kancelária]
- Nadpisy H2 (pod každým placeholder): Čo sú cookies · Aké cookies používame · Ako zmeniť súhlas

**Cookies lišta**
- Text: Používame nevyhnutné cookies na fungovanie stránky. S vaším súhlasom používame aj analytické cookies, ktoré nám pomáhajú stránku zlepšovať. Viac v Zásadách cookies.
- Tlačidlá: Prijať všetky · Iba nevyhnutné

**Chyba 404**
- Nadpis: Stránka sa nenašla
- Text: Adresa možno nie je správna alebo stránka už neexistuje.
- Tlačidlá: Späť na úvod · Dohodnúť konzultáciu

---

## ČASŤ 10 · Pravidlá pre vyhľadávanie (SEO)

- Všetky title a meta popisy ber zo SEO blokov pri jednotlivých stránkach a vlož ich do `10-seo.ts`. Každá stránka ich načíta odtiaľ.
- **Úvodná stránka:**
  - Title: Advokát Bratislava a okolie | JUDr. Ladislav Pavlovič
  - Meta popis: Advokátska kancelária v Bratislave a okolí: dopravné nehody, zmluvy, rodinné, obchodné a ďalšie oblasti práva. Dohodnite si konzultáciu.
- **Služby (prehľad):**
  - Title: Služby advokátskej kancelárie Bratislava | JUDr. Pavlovič
  - Meta popis: Deväť oblastí práva, ktorým sa venujeme: od dopravných nehôd a zmlúv až po rodinné a kybernetické právo. Dohodnite si konzultáciu.
- Title max. 60 znakov, meta popis max. 155 znakov. Po vložení to skontroluj skriptom a vypíš mi prehľad dĺžok.
- Na stránke je jeden H1, ktorý obsahuje tému a miesto.
- Pri každej službe sú 3 až 5 otázok s `FAQPage` JSON-LD.
- Alt texty obrázkov: jedna vecná veta po slovensky, bez kľúčových slov navyše.
- Služby sa navzájom prelinkujú (blok 7 Súvisiace služby a odkazy v texte medzi 4.8 a 4.9).

---

## ČASŤ 11 · Čo je potrebné doplniť

Všetky tieto údaje sú na webe ako čipy `[DOPLNIŤ]`. Hodnoty patria do `src/lib/site.ts`, aby sa po doplnení zmenili všade naraz:

| Údaj | Kde sa zobrazí |
|---|---|
| Telefón, e-mail, úradné hodiny | 3.1, všetky záverné výzvy, 8.3, pätička, asistentka |
| IČO, obchodný register, číslo v zozname SAK | pätička, 3.4, 5.2, 6.2 |
| Roky praxe a počet vybavených vecí | 3.1, 3.2, 3.4, 3.6, 5.1, 5.2, 7 |
| Vzdelanie (škola, rok, titul) | 3.4, 5.2, 6.2 |
| Jazyky | 5.2 |
| Míľniky kariéry | 5.3 |
| Členovia tímu (mená, funkcie, vzdelanie, zameranie, popis) | 6.2 |
| E-mail pre uchádzačov | 6.3 |
| Popis príchodu (MHD, parkovanie, vchod) | 8.3 |
| Texty zásad ochrany osobných údajov a cookies | 9.2 |
| Fotografie JUDr. Pavloviča a tímu | 3.1, 3.4, 5.1, 6.2 |

Všetky položky `(OVERIŤ)` vypíš na konci do `TEXTY-MAPA.md` ako samostatný zoznam „Na overenie s klientom“, s číslom bloku a presným znením vety.

---

## Kontrola na konci

- [ ] Každý text na webe sa zhoduje s týmto dokumentom. Nič nechýba a nič nie je navyše.
- [ ] Obsah v `src/content` je rozdelený podľa častí 1 až 11 a každá sekcia má `data-doc` s číslom bloku.
- [ ] Na webe nie je žiadny text, ktorý naznačuje bezplatnú konzultáciu (vyhľadaj: zadarmo, zdarma, bezplatn, nezáväzn, bez poplatku).
- [ ] Na webe nie sú žiadne staré texty z predchádzajúcich verzií (napr. „v troch oblastiach“, „Dlhoročné skúsenosti v advokácii“, „Advokát v Bratislave pre dopravné nehody, trestné a obchodné právo“).
- [ ] Trestné právo: štítok na karte, upozornenie pod hero, tlačidlá „Opísať vec“.
- [ ] Všetky `[DOPLNIŤ]` sú čipy a menia sa v `site.ts`. Všetky `(OVERIŤ)` sú čipy.
- [ ] Prehľad dĺžok title a meta popisov je v limite.
- [ ] `npm run build` prejde bez chýb a warningov.
- [ ] `TEXTY-MAPA.md` je vytvorený.

Na konci mi napíš krátky súhrn: čo si zmenil, ktoré bloky si musel doplniť, ktoré staré texty si odstránil a či niečo nesedelo.
