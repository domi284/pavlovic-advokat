# PROMPT PRE CLAUDE CODE: Web JUDr. Ladislav Pavlovič, verzia 2 (úprava a rozšírenie)

Si senior frontend developer a webdizajnér. V tomto priečinku už existuje web advokáta JUDr. Ladislava Pavloviča (Next.js, Tailwind, motion, Lenis), postavený podľa prvej špecifikácie. Klient poslal nové požiadavky. Tvojou úlohou je **web upraviť a rozšíriť** podľa tohto dokumentu.

Najprv si prejdi existujúci projekt (štruktúru, `src/content`, komponenty, tokeny v `globals.css`, `src/lib/site.ts`). Až potom začni meniť. Pracuj po fázach z časti 10. Po každej fáze spusti `npm run dev`, skontroluj výsledok a až potom pokračuj.

---

## 1. Najdôležitejšie pravidlá (platia vždy)

1. **Texty sú záväzné.** Všetky texty na webe ber doslovne z tohto dokumentu (časti 5 až 8). Nič neprepisuj, neskracuj ani nevylepšuj a nepridávaj vlastné marketingové vety. Texty navyše smieš pridať len tieto: čísla sekcií („01“, „02“…), alt texty obrázkov, aria-labely a technické UI prvky („Menu“, „Zavrieť“, „Späť“).
2. **Texty vlož do `src/content/*.ts`** (jeden súbor na stránku, služby v `src/content/services/*.ts`). Komponenty texty iba vykresľujú, nikde nesmú byť natvrdo. Ak sa ten istý text zobrazuje na viacerých miestach (napr. popis služby na úvode aj v Službách, FAQ na úvode aj na podstránke), použi **jeden zdroj**, nie kópiu.
3. **Konzultácia je spoplatnená.** Na webe sa nikde nesmie objaviť nič, čo naznačuje, že je zadarmo: žiadne „zadarmo“, „bezplatne“, „nezáväzne“, „bez poplatku“, „konzultácia zdarma“. Ceny sa neuvádzajú.
4. **Zakázané:** stock fotky ľudí v oblekoch, váhy spravodlivosti, kladivká, sochy Justície, putá, zbrane, ceny, superlatívy („najlepší“, „špičkový“), porovnávanie s inými kanceláriami, sľuby výsledku, percentá úspešnosti, hviezdičkové hodnotenia, falošné referencie a vymyslené čísla.
5. **Placeholdery `[DOPLNIŤ: …]`** zobraz ako viditeľný štýlovaný čip (existujúci komponent `<Placeholder>`). Všetky údaje kancelárie (telefón, e-mail, hodiny, IČO, SAK, roky praxe, počet vecí…) drž na jednom mieste v `src/lib/site.ts`, aby sa doplnili raz a zmenili všade.
6. **Značka `(OVERIŤ)`** sa ako text nezobrazuje. Namiesto nej vykresli malý čip „overiť“ (existujúci `<ReviewMark>`), riadený prepínačom `showReviewMarks` v `site.ts`.
7. **Fotky JUDr. Pavloviča a členov tímu sa NEgenerujú ani nesťahujú.** Všade, kde majú byť, je placeholder s textom „Fotografia bude doplnená“ (viď časť 3.6).
8. Jazyk webu je slovenčina. Používaj slovenské úvodzovky „ “ a existujúcu utilitu `typo()` (nedeliteľné medzery po jednopísmenových predložkách).

---

## 2. Čo zachovať a čo sa mení

**Zachovaj bez zmeny:** farby a tokeny, písma (Cormorant Garamond + Manrope), logo, Grain, Lenis, všetky motion komponenty (RevealText, Reveal, ImageReveal, Parallax, DrawLine), tlačidlá, Placeholder, ReviewMark, Accordion, hlavičku (správanie pri scrolle), MobileBar, CookieBar, template.tsx, 404, právne stránky (kostra s placeholdermi), formulár (vzhľad a správanie, simulované odosielanie).

**Pre istotu, tokeny farieb** (ak by v projekte chýbali alebo sa líšili, oprav ich na tieto):
`--chalk #F6F3EE` · `--paper #FBFAF7` · `--bone #ECE7DF` · `--line #DDD6CB` · `--ink #1C1D20` · `--graphite #2B2D32` · `--stone #5F5E5B` · `--bordeaux #6E1E2B` · `--bordeaux-deep #541621` · `--bordeaux-soft #F2E8E8` · `--sand #C8B79F`

**Pravidlo tmavých plôch sa rozširuje.** Tmavé pozadie `--ink` je povolené pre: záverný CTA pás, pätičku, sekciu Diskrétnosť (Trestné právo), **karty členov tímu** (Náš tím) a **panel AI asistentky** (hlavička panela). Bordová ostáva iba akcentom.

**Mení sa:**
- Menu a štruktúra adries (časť 4).
- Úvodná stránka: nové poradie a texty (časť 5.1).
- Doterajšie 3 podstránky oblastí sa presúvajú pod `/sluzby/…` a pribúda 6 nových služieb, spolu 9 (časť 5.3).
- Nové stránky: `/sluzby`, `/nas-tim`, `/preco-my`.
- O mne: rozšírenie (časť 5.4).
- Kontakt: výber oblasti z 9 služieb + spoplatnená konzultácia (časť 5.7).
- Časté otázky: nové skupiny (časť 5.8).
- Pätička: podľa časti 7.
- Nová AI asistentka s pripravenými odpoveďami (časť 6).
- Obrázky (časť 3.7).

---

## 3. Nové a upravené komponenty

### 3.1 Hlavička a menu
Položky menu: **Úvod · Služby · O mne · Náš tím · Prečo my · Kontakt**, vpravo tlačidlo „Zavolať“.
- **Služby** má na desktope rozbaľovacie menu (otvára sa pri hoveri aj kliku, zatvára sa klávesou Esc a klikom mimo). Panel `--paper`, okraj `--line`, jemný tieň, animácia `opacity 0→1`, `y −8→0`, 0,3 s. Obsah: 9 služieb v troch stĺpcoch, pred každou malé bordové číslo „01“ až „09“. Pri Trestnom práve je pod názvom malý sivý text „Iba pre stálych klientov“. Dole v paneli odkaz „Všetky služby →“ na `/sluzby`. Samotná položka „Služby“ vedie na `/sluzby`.
- Ak sa menu s logom a tlačidlom na šírku nezmestí, prepni na mobilné menu už pod 1200 px.
- **Mobilné menu:** „Služby“ je rozbaľovacia položka (akordeón) so zoznamom 9 služieb a odkazom „Všetky služby“.
- Aktívna položka (vrátane všetkých `/sluzby/*`) má tenkú bordovú linku pod textom.

### 3.2 ServiceCard (karta služby)
Použi ju na úvode aj na `/sluzby`.
- Celá karta je odkaz na detail služby.
- Hore obrázok 3:2 (ImageReveal, jednotná úprava fotiek z časti 3.7).
- Pod ním malé bordové číslo „01“ až „09“ (Cormorant 500, 40 px).
- **Názov veľkým:** Cormorant Garamond 600, `clamp(1.6rem, 2.2vw, 2rem)`, line-height 1.15.
- Popis Manrope 16 px, `--stone`, 2 až 3 vety.
- Dole textový odkaz („Zistiť viac →“), ktorého podčiarknutie narastie pri hoveri.
- Hover: obrázok `scale 1.05` (0,8 s), spodná bordová linka sa roztiahne `scaleX 0→1`, šípka sa posunie o 6 px, číslo zmení farbu na plnú bordovú.
- Mriežka: 3 stĺpce (desktop), 2 (tablet), 1 (mobil), medzery 32 px. Karty v rade majú rovnakú výšku, odkaz je vždy zarovnaný dole.
- Karta Trestného práva má nad názvom štítok „Iba pre stálych klientov“ (Manrope 600, 11 px, uppercase, letter-spacing 0.14em, okraj 1 px `--bordeaux`, text `--bordeaux`, px 8 py 3).

### 3.3 NumbersStrip (pás čísel)
Štyri položky v rade (mobil 2×2), oddelené zvislými linkami `--line`. Každá položka má veľkú hodnotu (Cormorant 500, 56 px, `--ink`) a pod ňou popis (Manrope 13 px, uppercase, letter-spacing 0.12em, `--stone`). Číselné hodnoty sa pri vstupe do viewportu napočítajú od 0 (1,4 s, easing z G). Ak je hodnota placeholder, zobrazí sa čip `<Placeholder>` bez animácie.

### 3.4 Notice (upozornenie)
Zvýraznený blok: pozadie `--bordeaux-soft`, ľavá linka 3 px `--bordeaux`, ikona `Info` (lucide, stroke 1.25), text Manrope 16 px `--ink`. Použije sa na Trestnom práve a pri formulári.

### 3.5 TeamCard (karta člena tímu)
**Karta nie je klikateľná:** žiadny odkaz, žiadny `cursor: pointer`, žiadny hover posun. Je „farebne spracovaná“:
- Pozadie `--ink`, text `--chalk`. Horná linka 2 px `--bordeaux`. Vnútorný tenký rám 1 px `rgba(246,243,238,.08)` s odsadením 12 px.
- Vľavo fotka (placeholder 4:5, viď 3.6, verzia na tmavom pozadí). Vpravo meno (Cormorant 600, 32 px), funkcia (Manrope 600, 12 px, uppercase, letter-spacing 0.18em, `--sand`) a popis (1 až 2 vety, `rgba(246,243,238,.75)`).
- **Pod popisom tabuľka údajov:** riadky oddelené linkou `rgba(246,243,238,.12)`, vľavo popis (`--sand`, 11 px, uppercase), vpravo hodnota (Manrope 15 px). Riadky: Funkcia · Vzdelanie · Zameranie · Zápis v SAK (iba pri advokátoch).
- Pri JUDr. Pavlovičovi je karta na celú šírku a väčšia (fotka 5 stĺpcov, text 7 stĺpcov). Ostatní členovia sú pod ním v mriežke po 2 (mobil 1), kompaktnejšie.
- Animácia: Reveal pri vstupe, stagger 0,1 s. Fotka má ImageReveal.

### 3.6 PhotoPlaceholder (fotky osôb)
Pre všetky fotky JUDr. Pavloviča a členov tímu. Pomer 4:5. Pozadie `--bone`, na tmavom variante `--graphite`. Jemná zrnitosť, vnútorný rám 1 px `--line` (na tmavom `rgba(246,243,238,.12)`) s odsadením 16 px. V strede monogram „LP“ (opacity 0,2) a pod ním text **„Fotografia bude doplnená“** (Manrope 500, 13 px, `--stone`, na tmavom `--sand`). Komponent prijíma `src`: keď sa fotka doplní, zobrazí sa namiesto placeholdera.

Použitie: Hero na úvode (vpravo), sekcia „O pánovi doktorovi“ na úvode, O mne (hero), Náš tím (všetky karty).

### 3.7 Obrázky (stiahni ich teraz z Unsplash)
**Zdroj:** Unsplash (bezplatná licencia). Pre každý slot nižšie vyhľadaj fotku podľa námetu, stiahni ju do `public/images/` pod daným názvom (aspoň 2400 px na dlhšej strane, potom ju zmenši a skomprimuj na max. ~350 kB, napr. cez `sharp`) a autora so zdrojovým odkazom zapíš do `public/images/CREDITS.md`. Ak na vyhľadávanie potrebuješ Unsplash API kľúč, zastav sa a požiadaj ma oň (je zadarmo na unsplash.com/developers).

**Každú stiahnutú fotku si otvor a skontroluj.** Nesmú na nej byť: ľudské tváre, ľudia v oblekoch, logá a značky, čitateľné názvy firiem alebo inštitúcií, váhy, kladivká, putá, zbrane, nehody alebo zranení ľudia. Ak niečo z toho na fotke je, vyber inú.

**Jednotný štýl:** na všetky fotky (okrem textúry) aplikuj existujúcu jednotnú úpravu: `filter: grayscale(0.85) contrast(1.05) brightness(0.92)` a prekrytie `--ink` s `mix-blend-mode: multiply`, opacity 0,12. Výsledkom má byť jedna tlmená „editorial“ séria.

| Súbor | Kde sa použije | Pomer | Námet | Kľúčové slová |
|---|---|---|---|---|
| `sluzba-dopravne-nehody.jpg` | karta + hero služby | 3:2 | cesta alebo diaľnica za súmraku, svetelné stopy áut, bez nehody | highway dusk, light trails road, city road night |
| `sluzba-obchodne-pravo.jpg` | karta + hero | 3:2 | pracovný stôl s dokumentmi alebo moderná kancelárska budova, bez ľudí | office building glass, desk documents, modern architecture minimal |
| `sluzba-obcianske-pravo.jpg` | karta + hero | 3:2 | kľúče na stole, dokument, dom, pokojná domáca situácia | house keys table, keys documents, home interior calm |
| `sluzba-rodinne-pravo.jpg` | karta + hero | 3:2 | jemný pokojný záber: svetlo v izbe, prázdna detská izba, prípadne detail rúk bez tvárí | soft light room, window light interior, calm home morning |
| `sluzba-spravne-pravo.jpg` | karta + hero | 3:2 | budova úradu (bez nápisov) alebo dokumenty s pečiatkou | government building facade, stamp documents, official papers |
| `sluzba-dusevne-vlastnictvo.jpg` | karta + hero | 3:2 | skice loga alebo návrhu na stole, tvorivé prostredie, bez značiek | design sketches desk, logo sketch, creative workspace |
| `sluzba-patentove-pravo.jpg` | karta + hero | 3:2 | technický výkres alebo detail prototypu, bez konkrétnych produktov | technical drawing, blueprint detail, engineering sketch |
| `sluzba-kyberneticke-pravo.jpg` | karta + hero | 3:2 | server, dátové centrum alebo abstraktný digitálny motív v tlmených farbách | server room, data center dark, abstract network |
| `sluzba-trestne-pravo.jpg` | karta + hero | 3:2 | neutrálna kamenná budova alebo stĺpy, ostré tiene, bez dramatických motívov | stone columns shadow, classical building facade, stone architecture |
| `sluzby-uvod.jpg` | hero stránky `/sluzby` | 16:9 | regál s knihami alebo spismi, rozostrené teplé svetlo | law books shelf, bookshelf blur |
| `preco-my.jpg` | hero `/preco-my` + sekcia na úvode | 4:5 | schodisko alebo chodba s prirodzeným svetlom, architektúra | staircase light, architecture corridor light |
| `tim-kancelaria.jpg` | hero `/nas-tim` | 16:9 | interiér kancelárie bez ľudí, stôl, stoličky, svetlo | empty office interior, meeting room empty, office light |
| `kniznica.jpg` | Na čom si zakladáme + O mne | 16:9 | (ak už existuje, ponechaj) | |
| `kancelaria-detail.jpg` | Kontakt | 4:3 | (ak už existuje, ponechaj) | |
| `textura-kamen.jpg` | pozadie CTA pásu | 16:9 | (ak už existuje, ponechaj) | |

Staré súbory `oblast-*.jpg` môžeš použiť ako zdroj, ak námetom sedia, ale premenuj ich podľa tabuľky. Hero obrázok `hero-uvod.jpg` sa na úvode už nepoužíva (nahrádza ho PhotoPlaceholder). Súbor nemaž, môže sa hodiť.

Alt texty píš po slovensky, jednou vecnou vetou, bez kľúčových slov navyše (napr. „Diaľnica za súmraku so svetelnými stopami áut“).

### 3.8 Ostatné
- **RelatedServices** (Súvisiace služby): 2 malé karty vedľa seba (názov + šípka, bez obrázka), okraj `--line`, hover pozadie `--paper`.
- **Breadcrumbs** na detailoch služieb: „Úvod / Služby / [názov služby]“, Manrope 13 px. Pridaj aj `BreadcrumbList` JSON-LD.

---

## 4. Štruktúra adries a presmerovania

| Adresa | Stránka |
|---|---|
| `/` | Úvod |
| `/sluzby` | Prehľad služieb |
| `/sluzby/dopravne-nehody` | Dopravné nehody |
| `/sluzby/obchodne-pravo` | Obchodné právo |
| `/sluzby/obcianske-pravo` | Občianske právo |
| `/sluzby/rodinne-pravo` | Rodinné právo |
| `/sluzby/spravne-pravo` | Správne právo |
| `/sluzby/dusevne-vlastnictvo` | Právo duševného vlastníctva |
| `/sluzby/patentove-pravo` | Patentové právo |
| `/sluzby/kyberneticke-pravo` | Kybernetické právo |
| `/sluzby/trestne-pravo` | Trestné právo |
| `/o-mne` | O mne |
| `/nas-tim` | Náš tím |
| `/preco-my` | Prečo my |
| `/kontakt` | Kontakt |
| `/caste-otazky` | Časté otázky (nie je v menu, odkaz je v pätičke a na úvode) |
| `/ochrana-osobnych-udajov`, `/cookies` | Právne stránky |

- Detail služby rob ako jednu dynamickú šablónu `src/app/sluzby/[slug]/page.tsx` s `generateStaticParams`. Obsah služby je v `src/content/services/<slug>.ts`. Neexistujúci slug vráti `notFound()`.
- **Presmerovania (301) v `next.config`:** `/dopravne-nehody` → `/sluzby/dopravne-nehody`, `/trestne-pravo` → `/sluzby/trestne-pravo`, `/obchodne-pravo` → `/sluzby/obchodne-pravo`. Staré stránky odstráň.
- Formulár: CTA zo služieb vedú na `/kontakt?oblast=<slug>#konzultacia` a oblasť sa vo formulári predvyberie. Trestné právo posiela `?oblast=trestne-pravo`.

---

## 5. Stránky a PRESNÉ TEXTY

Kde nie je uvedené inak, tlačidlo „Dohodnúť konzultáciu“ vedie na `/kontakt#konzultacia` (pri službách s `?oblast=`), „Zavolať“ na `tel:` z `site.ts`.

### 5.1 Úvodná stránka `/`

**SEO title:** Advokát Bratislava a okolie | JUDr. Ladislav Pavlovič
**Meta description:** Advokátska kancelária v Bratislave a okolí: dopravné nehody, zmluvy, rodinné, obchodné a ďalšie oblasti práva. Dohodnite si konzultáciu.

Poradie sekcií: Hero → Čomu sa venujeme → Ako to prebieha → O pánovi doktorovi → Na čom si zakladáme → Prečo my → Časté otázky → Záverná výzva.

#### 5.1.1 Hero
Rozloženie ako doteraz (dvojstĺpec 7/5, RevealText, postupný nábeh), ale **vpravo je namiesto fotky `PhotoPlaceholder`** s textom „Fotografia bude doplnená“ (pripravený na portrét JUDr. Pavloviča). Parallax a ImageReveal ponechaj.

- **Eyebrow:** Advokát · Bratislava a okolie
- **H1:** Advokát v Bratislave a okolí pre ľudí aj firmy
- **Podnadpis:** Pomôžeme vám pochopiť vašu situáciu, poznať možnosti a urobiť správny ďalší krok. Vecne, diskrétne a zrozumiteľne.
- **Tlačidlá:** Dohodnúť konzultáciu · Zavolať [DOPLNIŤ: telefón]
- **Riadok pod tlačidlami:** Advokátska kancelária JUDr. Ladislav Pavlovič s. r. o. · Ružinov, Bratislava
- **Pás dôvery pod hero (3 fakty s ikonami `Clock3`, `ShieldCheck`, `MapPin`):**
  - [DOPLNIŤ: počet] rokov praxe
  - Zapísaný v Slovenskej advokátskej komore
  - Pôsobnosť: celé západné Slovensko

#### 5.1.2 Čomu sa venujeme
Eyebrow `01`. Dvojstĺpec: vľavo H2, vpravo úvodná veta. Pod tým mriežka **9 kariet `ServiceCard`** (popisy z časti 5.3, pole „Popis karty“, odkaz „Zistiť viac →“ vedie na detail služby). Pod kartami `NumbersStrip`, pod ním veta o pôsobnosti a odkaz.

- **H2:** Čomu sa venujeme
- **Úvod:** Pomáhame ľuďom aj firmám v deviatich oblastiach práva. Vyberte si tú, ktorá sa týka vašej situácie.
- **Poradie kariet:** Dopravné nehody · Obchodné právo · Občianske právo · Rodinné právo · Správne právo · Právo duševného vlastníctva · Patentové právo · Kybernetické právo · Trestné právo
- **Pás čísel (NumbersStrip):**
  - [DOPLNIŤ] · rokov praxe
  - [DOPLNIŤ] · vybavených vecí
  - 9 · oblastí práva
  - Západné Slovensko · pôsobnosť (hodnota „Západné Slovensko“ v Cormorant 32 px, bez napočítavania)
- **Veta o pôsobnosti:** Zastupujeme klientov na celom západnom Slovensku a pred Špecializovaným trestným súdom v Banskej Bystrici.
- **Odkaz:** Všetky služby → (na `/sluzby`)

#### 5.1.3 Ako to prebieha
Eyebrow `02`, pozadie `--bone`. Tri kroky s DrawLine linkou medzi veľkými číslami (existujúci komponent Steps). Pod krokmi tlačidlo.

- **H2:** Od prvého telefonátu k jasnému plánu
- **Úvod:** Nemusíte vedieť, ako sa vaša vec volá právnicky. Stačí, keď nám poviete, čo sa stalo.
1. **Ozvete sa nám.** Zavoláte alebo vyplníte krátky formulár. Stačí stručne opísať, čo riešite, bez právnych pojmov a zbytočných detailov. Ozveme sa vám a dohodneme termín.
2. **Prvá konzultácia.** Prejdeme vašu situáciu aj dokumenty. Vysvetlíme vám, kde stojíte, aké máte možnosti a čo vás čaká. Konzultácia je spoplatnená, jej podmienky vám oznámime vopred. (OVERIŤ)
3. **Postup a zastupovanie.** Ak sa dohodneme na spolupráci, preberáme komunikáciu, listiny a lehoty. Vy sa môžete venovať svojmu životu a o každom dôležitom kroku od nás viete.
- **Tlačidlo:** Dohodnúť konzultáciu

#### 5.1.4 O pánovi doktorovi
Eyebrow `03`. Vľavo `PhotoPlaceholder` 4:5, vpravo text. Text je citát v prvej osobe (Cormorant 26 px, dekoratívna bordová úvodzovka „ s `aria-hidden`). Pod textom 3 fakty ako malá tabuľka (popis `--stone` 12 px uppercase, hodnota 16 px).

- **H2:** JUDr. Ladislav Pavlovič
- **Podnadpis:** Advokát · Bratislava
- **Text:** Advokácii sa venujem [DOPLNIŤ: počet] rokov. Pri každej veci vychádzam z jednoduchého princípu: klient potrebuje vedieť, kde stojí, čo ho čaká a čo je vhodné urobiť ďalej. Preto vysvetľujem zrozumiteľne, otvorene hovorím o možnostiach aj rizikách a nesľubujem nič, čo sa sľúbiť nedá.
- **Fakty:**
  - Vzdelanie: [DOPLNIŤ: škola, rok, titul]
  - Prax: [DOPLNIŤ: počet] rokov v advokácii
  - Slovenská advokátska komora: zápis č. [DOPLNIŤ]
- **Odkaz:** Viac o mne →

#### 5.1.5 Na čom si zakladáme
Eyebrow `04`. **Texty sa nemenia**, zostávajú presne ako doteraz. Rozloženie ako doteraz (mriežka 2×2 + úzka fotka `kniznica.jpg` s parallaxom).

- **H2:** Ako pracujem
- **Zrozumiteľne.** Právnu situáciu vám vysvetlím jazykom, ktorému rozumiete, bez zbytočného žargónu.
- **Diskrétne.** Všetko, čo mi povierite, je chránené povinnou mlčanlivosťou advokáta.
- **Zodpovedne.** Dohodnuté termíny a lehoty sledujem sám, aby sa nič nepremeškalo.
- **Priamo.** Komunikujete s advokátom, ktorý vašu vec rieši.

#### 5.1.6 Prečo my (skrátená verzia)
Eyebrow `05`. Rozloženie: vľavo (5 stĺpcov) H2, úvod, tlačidlo a pod nimi fotka `preco-my.jpg` 4:5 s parallaxom. Vpravo (7 stĺpcov) 4 body pod sebou. Každý bod má veľké bordové číslo (Cormorant 48 px), názov (Cormorant 600, 26 px) a text. Body oddeľujú linky `--line` a pri vstupe do viewportu nabiehajú postupne (stagger 0,1 s).

- **H2:** Prečo my
- **Úvod:** Fakty namiesto sľubov.
1. **Viac oblastí na jednom mieste.** Deväť oblastí práva pod jednou strechou. Keď sa vaša vec dotýka viacerých oblastí, nemusíte hľadať ďalšieho advokáta.
2. **Overená prax.** [DOPLNIŤ: počet] rokov v advokácii a [DOPLNIŤ: počet] vybavených vecí. Skúsenosti, ktoré sa dajú doložiť.
3. **Celé západné Slovensko.** Sídlime v Bratislave a klientov zastupujeme na celom západnom Slovensku aj pred Špecializovaným trestným súdom v Banskej Bystrici.
4. **Jasný ďalší krok.** Z konzultácie odchádzate s vysvetlením bez žargónu a s konkrétnym návrhom, čo urobiť ďalej.
- **Tlačidlo:** Viac (sekundárne tlačidlo so šípkou, vedie na `/preco-my`)

#### 5.1.7 Časté otázky
Eyebrow `06`. Akordeón s 3 otázkami. **Odpovede ťahaj z obsahu služieb** (jeden zdroj, nie kópia).
- **H2:** Časté otázky
- Mám nárok na odškodnenie, ak som nehodu čiastočne zavinil aj ja? (zo služby Dopravné nehody)
- Ako dlho trvá rozvod? (zo služby Rodinné právo)
- Potrebujem advokáta pri každej zmluve? (zo služby Obchodné právo)
- **Odkaz:** Všetky otázky a odpovede → (na `/caste-otazky`)

#### 5.1.8 Záverná výzva
Tmavý pás `--ink` s textúrou kameňa (ako doteraz).
- **H2:** Neviete, ako ďalej? Začnime jedným rozhovorom.
- **Text:** Opíšte nám, čo riešite. Povieme vám, aké máte možnosti a čo je rozumné urobiť ako prvé.
- **Tlačidlá:** Dohodnúť konzultáciu · Zavolať [DOPLNIŤ: telefón]

---

### 5.2 Prehľad služieb `/sluzby`

**SEO title:** Služby advokátskej kancelárie Bratislava | JUDr. Pavlovič
**Meta description:** Deväť oblastí práva, ktorým sa venujeme: od dopravných nehôd a zmlúv až po rodinné a kybernetické právo. Dohodnite si konzultáciu.

Rozloženie: PageHero (vľavo H1 a úvod, vpravo `sluzby-uvod.jpg` 16:9 s parallaxom) → mriežka 9 kariet `ServiceCard` (rovnaké poradie ako na úvode, odkaz „Zistiť viac →“) → záverný CTA pás.

- **H1:** Služby
- **Úvod:** Venujeme sa deviatim oblastiam práva, s ktorými sa ľudia a firmy stretávajú najčastejšie. Pri každej veci začíname rovnako: vypočujeme si vás, vysvetlíme vám situáciu zrozumiteľne a navrhneme ďalší postup. Kancelária sídli v Bratislave a klientov zastupuje na celom západnom Slovensku.
- **Záverný pás:**
  - H2: Neviete, kam vaša vec patrí?
  - Text: Opíšte nám situáciu. Povieme vám, ako k nej pristúpiť.
  - Tlačidlá: Dohodnúť konzultáciu · Zavolať [DOPLNIŤ: telefón]

---

### 5.3 Detail služby: spoločná šablóna + texty 9 služieb

**Spoločná kostra (rovnaká pre všetky služby, mení sa iba obsah):**
1. **Hero (PageHero):** breadcrumbs, H1, podnadpis, tlačidlá. Vpravo fotka služby (4:5 výrez, parallax).
2. **Úvod:** H2 vľavo (5 stĺpcov), text vpravo (7 stĺpcov, 19 px).
3. **S čím pomáhame:** riadky oddelené linkami (existujúci ServiceList: číslo, tučný názov, text).
4. **Ako postupujeme:** existujúci komponent Steps (DrawLine).
5. **Kedy sa ozvať:** karty 3×2 na `--bone` s ikonou `CornerDownRight` (existujúci SituationList), pod nimi tlačidlo.
6. **Časté otázky:** vľavo sticky H2, vpravo akordeón. Na každej službe pridaj `FAQPage` JSON-LD.
7. **Súvisiace služby:** RelatedServices.
8. **Záverná výzva:** tmavý CTA pás.

Nadpisy blokov (rovnaké pri každej službe, ak nie je pri službe uvedené inak):
- Blok 3: **S čím vám pomôžeme**
- Blok 4: **Ako postupujeme**
- Blok 5: **Kedy sa nám ozvať**
- Blok 6: **Často kladené otázky**
- Blok 7: **Súvisiace služby**

Špeciálne bloky (iba tam, kde sú uvedené): „Čo robiť hneď po nehode“ (Dopravné nehody, hneď po úvode, existujúci ChecklistSteps), upozornenie, „Čo robiť pri predvolaní“ a „Diskrétnosť“ (Trestné právo).

Tlačidlo na službách je **„Dohodnúť konzultáciu“** (vedie na formulár s predvybranou oblasťou). Výnimkou je Trestné právo: tlačidlo **„Opísať vec“**.

---

#### SLUŽBA 1: Dopravné nehody `/sluzby/dopravne-nehody`
**SEO title:** Advokát dopravné nehody Bratislava | JUDr. Pavlovič
**Meta description:** Pomoc po dopravnej nehode: odškodnenie za ujmu na zdraví, škoda na vozidle a komunikácia s poisťovňou. Dohodnite si konzultáciu.
**Popis karty:** Po nehode sa naraz rieši zdravie, auto aj poisťovňa. Pomôžeme vám uplatniť nároky voči poisťovni a zodpovednej osobe a posúdime, či je ponuka poisťovne primeraná.

**Hero**
- H1: Advokát pre dopravné nehody v Bratislave a okolí
- Podnadpis: Po nehode sa naraz rieši zdravie, auto, poisťovňa aj doklady. Pomôžeme vám zorientovať sa a uplatniť vaše nároky.
- Tlačidlá: Dohodnúť konzultáciu · Zavolať [DOPLNIŤ: telefón]

**Úvod**
- H2: Keď sa po nehode nechcete s poisťovňou dohadovať sami
- Text: Dopravná nehoda zasiahne zdravie, peniaze aj čas. Mnohí ľudia nevedia, na aké odškodnenie majú nárok, alebo prijmú prvú ponuku poisťovne bez toho, aby ju niekto posúdil. Iní riešia spor o to, kto nehodu zavinil. Pomáhame poškodeným vodičom, spolujazdcom, chodcom, cyklistom aj pozostalým. Posúdime vašu situáciu, vysvetlíme vám, čo môžete žiadať, a postaráme sa o komunikáciu s poisťovňou.

**Čo robiť hneď po dopravnej nehode** (špeciálny blok, hneď po úvode)
1. **Zdravie a bezpečnosť na prvom mieste.** Pri zranení volajte záchranku (155 alebo 112) a zabezpečte miesto nehody.
2. **Privolajte políciu (158).** Pri zranení alebo väčšej škode je to nevyhnutné.
3. **Zdokumentujte situáciu.** Odfoťte vozidlá, ich polohu, poškodenie a okolie. Zapíšte si údaje druhého vodiča a kontakty svedkov.
4. **Nepodpisujte to, čomu nerozumiete.** Pred podpisom vyhlásenia o vine alebo dohody sa poraďte.
5. **Dajte sa vyšetriť.** Aj pri „drobnom“ zranení, následky sa môžu prejaviť neskôr.
6. **Uschovajte všetky doklady.** Lekárske správy, faktúry, potvrdenia o práceneschopnosti, komunikáciu s poisťovňou.
- Odkaz pod blokom: Máte otázky k vašej situácii? Dohodnúť konzultáciu →

**S čím vám pomôžeme**
- **Odškodnenie za ujmu na zdraví.** Bolestné, sťaženie spoločenského uplatnenia, náklady na liečenie a strata na zárobku.
- **Škoda na vozidle a majetku.** Uplatnenie nároku a posúdenie vyčíslenia škody.
- **Komunikácia s poisťovňou.** Podanie nároku, posúdenie vyjadrení a ponúk poisťovne a postup, keď poisťovňa plnenie odmietne alebo skráti.
- **Spor o zavinenie.** Keď poisťovňa alebo druhá strana spochybňuje priebeh nehody.
- **Pomoc pozostalým.** Nároky blízkych osôb po smrteľnej nehode.
- **Neznámy alebo nepoistený vinník.** Uplatnenie nároku z garančného fondu, ktorý spravuje Slovenská kancelária poisťovateľov. (OVERIŤ)

**Ako postupujeme**
1. **Opíšete nám, čo sa stalo.** Zavoláte alebo napíšete. Stačí stručne: kedy a kde sa nehoda stala, kto bol zranený a čo vám zatiaľ oznámila poisťovňa.
2. **Posúdime nárok a doklady.** Pri konzultácii prejdeme lekárske správy, záznam o nehode a komunikáciu s poisťovňou. Vysvetlíme vám, na čo máte nárok a aké lehoty platia.
3. **Uplatníme nárok.** Pripravíme a podáme nárok, posúdime ponuku poisťovne a rokujeme o primeranom plnení. Ak je to potrebné, zastupujeme vás aj pred súdom.

**Kedy sa nám ozvať**
- Neviem, či mám nárok na odškodnenie.
- Poisťovňa mi ponúkla plnenie a neviem, či je primerané.
- Poisťovňa tvrdí, že nehodu som zavinil/a ja.
- Nehodu spôsobil vodič, ktorého sa nepodarilo zistiť.
- Môj blízky sa pri nehode zranil alebo zomrel.
- Poisťovňa mi plnenie odmietla alebo skrátila.
- Tlačidlo: Dohodnúť konzultáciu

**Často kladené otázky**
- **Mám nárok na odškodnenie, ak som nehodu čiastočne zavinil aj ja?** Spoluzavinenie nárok automaticky nevylučuje, no môže ovplyvniť jeho výšku. Všetko závisí od okolností nehody, preto je vhodné posúdiť konkrétnu situáciu.
- **Môžem sa obrátiť priamo na poisťovňu druhého vodiča?** Áno, poškodený môže svoj nárok spravidla uplatniť priamo voči poisťovni, u ktorej je zodpovedný vodič poistený v rámci povinného zmluvného poistenia.
- **Poisťovňa mi ponúkla odškodné. Mám ho prijať?** Odporúčame ponuku pred prijatím posúdiť, najmä pri zraneniach, pri ktorých sa všetky následky ešte nemusia prejaviť. Po podpise dohody sa na ňu už ťažko vracia.
- **Dokedy musím nárok uplatniť?** Nároky sa premlčujú a lehoty sa môžu líšiť podľa druhu nároku. Preto s riešením neodkladajte.
- **Čo ak vinník ušiel alebo nemá poistenie?** Aj v takom prípade môžu existovať spôsoby, ako nárok uplatniť. Záleží na konkrétnych okolnostiach nehody.

**Súvisiace služby:** Trestné právo · Občianske právo

**Záverná výzva**
- H2: Po nehode nemusíte všetko riešiť sami
- Text: Opíšte nám, čo sa stalo. Povieme vám, aké máte možnosti.
- Tlačidlá: Dohodnúť konzultáciu · Zavolať [DOPLNIŤ: telefón]

---

#### SLUŽBA 2: Obchodné právo `/sluzby/obchodne-pravo`
**SEO title:** Advokát obchodné právo Bratislava | JUDr. Pavlovič
**Meta description:** Právne zázemie pre podnikateľov v Bratislave: zmluvy, spoločnosti, vymáhanie pohľadávok a obchodné spory. Dohodnite si konzultáciu.
**Popis karty:** Zakladáte firmu, potrebujete zmluvu alebo vám odberateľ nezaplatil? Pripravíme a posúdime zmluvy, pomôžeme so zmenami v spoločnosti aj s vymáhaním pohľadávok.

**Hero**
- H1: Advokát pre obchodné právo v Bratislave a okolí
- Podnadpis: Zmluvy, spoločnosti, pohľadávky a spory. Právne zázemie pre podnikateľov, ktorí potrebujú jasné a praktické riešenia.
- Tlačidlá: Dohodnúť konzultáciu · Zavolať [DOPLNIŤ: telefón]

**Úvod**
- H2: Právne zázemie pre vaše podnikanie
- Text: Podnikanie prináša množstvo rozhodnutí, z ktorých mnohé majú právne dôsledky. Pomáhame živnostníkom, podnikateľom a spoločnostiam rozhodovať sa informovane: pri zakladaní firmy, pri uzatváraní zmlúv aj pri sporoch. Cieľom je predchádzať problémom, a ak už nastanú, riešiť ich vecne a včas.

**S čím vám pomôžeme** (nadpis bloku pri tejto službe: **S čím sa na nás podnikatelia obracajú**)
- **Zakladáte alebo meníte firmu.** Založenie spoločnosti, zmeny v spoločnosti a v obchodnom registri.
- **Potrebujete zmluvu.** Príprava a posúdenie zmlúv: dodávateľské, o spolupráci, nájomné a ďalšie obchodné zmluvy.
- **Odberateľ vám nezaplatil.** Posúdenie pohľadávky, výzva na zaplatenie a vymáhanie, vrátane súdneho konania.
- **Máte spor s obchodným partnerom.** Hľadanie dohody alebo zastupovanie v konaní pred súdom.
- **Riešite vzťahy medzi spoločníkmi.** Spoločenská zmluva, prevod obchodného podielu a spory medzi spoločníkmi.
- **Potrebujete právne zázemie pravidelne.** Dlhodobá spolupráca s firmami za individuálne dohodnutých podmienok. (OVERIŤ)

**Ako postupujeme**
1. **Opíšete nám zámer alebo problém.** Napríklad, čo plánujete podpísať alebo čo sa stalo. Prineste zmluvy, faktúry a korešpondenciu, ktoré sa k veci vzťahujú.
2. **Posúdime a navrhneme postup.** Vysvetlíme vám riziká, možnosti a odporúčaný ďalší krok. Pri spore najprv zvážime, či je reálna dohoda.
3. **Postaráme sa o realizáciu.** Pripravíme alebo posúdime dokumenty, rokujeme s druhou stranou a ak je to potrebné, zastupujeme vás pred súdom.

**Kedy sa nám ozvať**
- Chystáte sa podpísať zmluvu s vysokou hodnotou alebo na dlhé obdobie.
- Zakladáte spoločnosť s ďalším spoločníkom.
- Faktúra je po splatnosti a odberateľ nereaguje.
- Obchodný partner neplní, čo ste si dohodli.
- Meníte konateľa, spoločníkov alebo sídlo firmy.
- Tlačidlo: Dohodnúť konzultáciu

**Často kladené otázky**
- **S čím môžem prísť pri zakladaní firmy?** S nápadom aj s hotovým zámerom. Spolu zvolíme vhodnú formu, upravíme vzťahy medzi spoločníkmi a pripravíme potrebné dokumenty.
- **Potrebujem advokáta pri každej zmluve?** Nie vždy. Pri dlhodobých, hodnotnejších alebo rizikovejších zmluvách je však posúdenie pred podpisom vhodné, lebo opraviť chybu po podpise býva náročnejšie.
- **Čo robiť, ak mi odberateľ nezaplatil?** Dôležité je zhromaždiť doklady a čo najskôr zvoliť postup, od výzvy na zaplatenie až po súd. Pohľadávky sa premlčujú, preto neodkladajte.
- **Zastupujete aj pred súdom?** Áno, zastupujeme klientov v obchodných sporoch aj pred súdom. (OVERIŤ)
- **Je možná dlhodobá spolupráca pre firmu?** Podnikateľom, ktorí potrebujú právne zázemie pravidelne, ponúkame dlhodobú spoluprácu. Podmienky sa dohodnú individuálne. (OVERIŤ)

**Súvisiace služby:** Právo duševného vlastníctva · Kybernetické právo

**Záverná výzva**
- H2: Majte právne veci vo firme pod kontrolou
- Text: Povedzte nám, čo plánujete alebo riešite. Povieme vám, ako k tomu pristúpiť.
- Tlačidlá: Dohodnúť konzultáciu · Zavolať [DOPLNIŤ: telefón]

---

#### SLUŽBA 3: Občianske právo `/sluzby/obcianske-pravo`
**SEO title:** Advokát občianske právo Bratislava | JUDr. Pavlovič
**Meta description:** Zmluvy, nehnuteľnosti, susedské a majetkové spory, náhrada škody či dedičstvo. Pomôžeme vám v občianskoprávnych veciach. Dohodnite si konzultáciu.
**Popis karty:** Kupujete byt, riešite spor so susedom alebo dedičstvo? Pripravíme a posúdime zmluvy a zastúpime vás v majetkových sporoch aj pri náhrade škody.

**Hero**
- H1: Advokát pre občianske právo v Bratislave a okolí
- Podnadpis: Zmluvy, nehnuteľnosti, spory a náhrada škody. Pomôžeme vám vyriešiť situácie, s ktorými sa človek stretne v súkromnom živote.
- Tlačidlá: Dohodnúť konzultáciu · Zavolať [DOPLNIŤ: telefón]

**Úvod**
- H2: Čo patrí do občianskeho práva
- Text: Občianske právo upravuje vzťahy medzi ľuďmi v súkromnom živote: majetok, zmluvy, náhradu škody či dedenie. Nepatria sem rodinné veci, ako je rozvod, ani podnikanie, ktoré riešime v rámci rodinného a obchodného práva. Ľudia sa na nás najčastejšie obracajú, keď kupujú alebo predávajú nehnuteľnosť, keď im niekto spôsobil škodu alebo keď sa nevedia dohodnúť so susedom či spoluvlastníkom.

**S čím vám pomôžeme**
- **Zmluvy.** Príprava a posúdenie kúpnych, darovacích, nájomných a ďalších zmlúv.
- **Nehnuteľnosti.** Prevody bytov, domov a pozemkov, návrh na vklad do katastra a vzťahy medzi spoluvlastníkmi.
- **Susedské a majetkové spory.** Spory o užívanie pozemkov a spoločných vecí či o vrátenie požičaných peňazí.
- **Náhrada škody.** Uplatnenie náhrady, keď vám niekto spôsobil škodu na majetku alebo zdraví.
- **Ochrana osobnosti.** Postup pri zásahu do cti, dobrej povesti alebo súkromia.
- **Dedičské konanie.** Zastupovanie dedičov a pomoc pri dohode o rozdelení dedičstva. (OVERIŤ)
- **Exekúcie a ochrana spotrebiteľa.** Posúdenie exekúcie a ochrana vašich práv ako spotrebiteľa. (OVERIŤ)

**Ako postupujeme**
1. **Opíšete nám situáciu.** Povedzte nám, čo sa stalo alebo čo plánujete. Ak máte zmluvu, list či rozhodnutie, prineste ich na konzultáciu.
2. **Vysvetlíme vám možnosti.** Posúdime vaše postavenie, vysvetlíme riziká a navrhneme postup. Pri spore najprv zvážime, či sa dá vec vyriešiť dohodou.
3. **Pripravíme dokumenty alebo vás zastúpime.** Pripravíme zmluvu či podanie, rokujeme s druhou stranou a ak je to potrebné, zastupujeme vás pred súdom.

**Kedy sa nám ozvať**
- Kupujete alebo predávate nehnuteľnosť.
- Niekto vám dlží peniaze a nereaguje.
- So susedom sa neviete dohodnúť.
- Niekto vám spôsobil škodu.
- Dostali ste žalobu alebo výzvu na zaplatenie.
- Riešite rozdelenie dedičstva.
- Tlačidlo: Dohodnúť konzultáciu

**Často kladené otázky**
- **Čo musí obsahovať kúpna zmluva k nehnuteľnosti?** Okrem údajov o zmluvných stranách, cene a predmete prevodu musí presne zodpovedať údajom v katastri. Chyba v zmluve môže viesť k tomu, že kataster vklad nepovolí alebo konanie preruší. Preto je vhodné dať zmluvu posúdiť pred podpisom.
- **Ako riešiť spor so susedom?** Najprv sa oplatí skúsiť dohodu, ideálne písomnú. Ak nepomôže, prichádza do úvahy výzva od advokáta a napokon žaloba na súde. Vhodný postup závisí od toho, o čo v spore ide.
- **Ako postupovať pri dedičstve?** Dedičské konanie začína súd spravidla sám, keď sa dozvie o úmrtí, a vedie ho notár ako súdny komisár. Ak sa dedičia nevedia dohodnúť alebo je majetok zložitejší, pomôžeme vám chrániť vaše záujmy.
- **Dokedy môžem žiadať vrátenie dlhu?** Nároky sa premlčujú a lehota závisí od druhu nároku. Ak dlžník neplatí, s riešením zbytočne neodkladajte.

**Súvisiace služby:** Rodinné právo · Obchodné právo

**Záverná výzva**
- H2: Riešite zmluvu alebo spor?
- Text: Opíšte nám situáciu. Povieme vám, aké máte možnosti.
- Tlačidlá: Dohodnúť konzultáciu · Zavolať [DOPLNIŤ: telefón]

---

#### SLUŽBA 4: Rodinné právo `/sluzby/rodinne-pravo`
**SEO title:** Advokát rodinné právo Bratislava | JUDr. Pavlovič
**Meta description:** Rozvod, starostlivosť o deti, výživné a vyporiadanie majetku manželov. Pokojne, diskrétne a s ohľadom na deti. Dohodnite si konzultáciu.
**Popis karty:** Rozvod, starostlivosť o deti či výživné patria k najcitlivejším životným situáciám. Pomôžeme vám ich riešiť pokojne, diskrétne a s ohľadom na deti.

**Hero**
- H1: Advokát pre rodinné právo v Bratislave a okolí
- Podnadpis: Rozvod, deti, výživné a majetok. Pomôžeme vám prejsť náročným obdobím pokojne, s jasným plánom a s ohľadom na to, čo je dobré pre vaše deti.
- Tlačidlá: Dohodnúť konzultáciu · Zavolať [DOPLNIŤ: telefón]

**Úvod**
- H2: Keď sa mení rodina
- Text: Rozpad vzťahu zasiahne celú rodinu. Okrem emócií treba vyriešiť aj praktické otázky: kde budú žiť deti, aké bude výživné a ako sa rozdelí spoločný majetok. Postupujeme pokojne a vecne. Ak je to možné, hľadáme dohodu, pretože býva rýchlejšia a pre deti šetrnejšia ako dlhý spor pred súdom.

**Diskrétnosť** (krátky Notice blok hneď pod úvodom, ikona `Lock` namiesto `Info`)
- Text: Všetko, čo nám poviete, zostáva chránené povinnou mlčanlivosťou advokáta. Na konzultácii môžete hovoriť otvorene.

**S čím vám pomôžeme**
- **Rozvod manželstva.** Príprava návrhu, zastupovanie v konaní a pomoc pri dohode o podmienkach.
- **Starostlivosť o deti a styk.** Úprava toho, komu súd deti zverí, a ako bude upravený kontakt s druhým rodičom.
- **Výživné.** Určenie, zvýšenie alebo zníženie výživného pre dieťa, prípadne aj medzi manželmi.
- **Vyporiadanie spoločného majetku.** Rozdelenie bezpodielového spoluvlastníctva manželov dohodou alebo na súde.
- **Určenie a zapretie otcovstva.** Zastupovanie v konaní o určení alebo zapretí otcovstva. (OVERIŤ)
- **Osvojenie.** Pomoc a sprevádzanie počas konania o osvojení. (OVERIŤ)

**Ako postupujeme**
1. **Pokojný rozhovor.** Na konzultácii si vypočujeme vašu situáciu bez súdenia. Zistíme, čo je pre vás a pre deti najdôležitejšie.
2. **Jasný plán.** Vysvetlíme vám, ako konanie prebieha, čo bude súd posudzovať a aké máte možnosti. Spolu zvážime, či je reálna dohoda s druhou stranou.
3. **Dohoda alebo zastupovanie.** Pripravíme návrhy a dohody, komunikujeme s druhou stranou a zastupujeme vás pred súdom. Vždy s ohľadom na záujem detí.

**Kedy sa nám ozvať**
- Zvažujete rozvod a neviete, kde začať.
- S druhým rodičom sa neviete dohodnúť na starostlivosti o deti.
- Druhý rodič neplatí výživné.
- Zmenili sa pomery a výživné už nezodpovedá realite.
- Riešite rozdelenie majetku po rozvode.
- Tlačidlo: Dohodnúť konzultáciu

**Často kladené otázky**
- **Ako dlho trvá rozvod?** Závisí najmä od toho, či sa manželia dohodnú a či majú maloleté deti. Ak súd rozhoduje aj o deťoch alebo je vec sporná, konanie trvá dlhšie. Presnejší odhad vám dáme po posúdení vašej situácie.
- **Ako sa určuje výživné?** Súd prihliada na odôvodnené potreby dieťaťa a na schopnosti, možnosti a majetkové pomery rodičov. Výživné sa dá neskôr zmeniť, ak sa podstatne zmenia pomery.
- **Kedy je možná striedavá starostlivosť?** Súd môže zveriť dieťa do striedavej starostlivosti, ak sú obaja rodičia spôsobilí sa oň starať a ak je to v záujme dieťaťa. Rozhodujúci je vždy záujem dieťaťa, nie želanie rodičov.
- **Musíme ísť na súd, aj keď sa dohodneme?** O rozvode a o úprave pomerov k maloletým deťom vždy rozhoduje súd. Dohoda rodičov však konanie výrazne zjednoduší a urýchli.

**Súvisiace služby:** Občianske právo · Správne právo

**Záverná výzva**
- H2: Urobme prvý krok spolu
- Text: Opíšte nám svoju situáciu. Pokojne a dôverne.
- Tlačidlá: Dohodnúť konzultáciu · Zavolať [DOPLNIŤ: telefón]

---

#### SLUŽBA 5: Správne právo `/sluzby/spravne-pravo`
**SEO title:** Advokát správne právo Bratislava | JUDr. Pavlovič
**Meta description:** Odvolanie proti rozhodnutiu úradu, povoľovanie stavieb, priestupky a správna žaloba. Pomôžeme vám v konaní pred úradmi. Dohodnite si konzultáciu.
**Popis karty:** Dostali ste rozhodnutie úradu, pokutu alebo zamietnuté povolenie? Posúdime ho, pripravíme odvolanie a zastúpime vás pred úradom aj pred správnym súdom.

**Hero**
- H1: Advokát pre správne právo v Bratislave a okolí
- Podnadpis: Rozhodnutie úradu nemusí byť konečné. Pomôžeme vám ho posúdiť, včas sa odvolať a chrániť vaše práva pred úradmi aj pred súdom.
- Tlačidlá: Dohodnúť konzultáciu · Zavolať [DOPLNIŤ: telefón]

**Úvod**
- H2: Pri rozhodnutí úradu rozhodujú lehoty
- Text: Proti rozhodnutiu úradu sa spravidla dá brániť, no lehoty na odvolanie sú krátke. Ak ich zmeškáte, vaše možnosti sa výrazne zúžia. Preto je dôležité ozvať sa čo najskôr po doručení rozhodnutia. Zastupujeme vás pred obcami, okresnými úradmi, stavebnými úradmi a ďalšími orgánmi verejnej správy. Ak úrad nerozhodne správne ani po odvolaní, môžeme rozhodnutie napadnúť správnou žalobou na súde.

**S čím vám pomôžeme**
- **Odvolanie proti rozhodnutiu.** Posúdenie rozhodnutia a príprava odvolania alebo iného opravného prostriedku.
- **Povoľovanie stavieb.** Zastupovanie stavebníkov aj susedov v konaní o povolení stavby.
- **Priestupky.** Obrana v priestupkovom konaní, napríklad pri pokute za dopravný priestupok.
- **Správna žaloba.** Preskúmanie rozhodnutia úradu správnym súdom.
- **Cudzinecké a daňové konania.** Zastupovanie v konaniach o pobyte cudzincov a pri daňovej kontrole. (OVERIŤ)

**Ako postupujeme**
1. **Prinesiete nám rozhodnutie.** Ozvite sa čo najskôr po doručení. Uveďte, kedy vám rozhodnutie prišlo, a prineste ho na konzultáciu spolu s ďalšími písomnosťami.
2. **Posúdime ho a overíme lehotu.** Zistíme, či má rozhodnutie nedostatky, aké opravné prostriedky prichádzajú do úvahy a dokedy ich treba podať.
3. **Podáme odvolanie alebo žalobu.** Pripravíme odvolanie, komunikujeme s úradom a zastupujeme vás v konaní. Ak je to potrebné, podáme správnu žalobu na súd.

**Kedy sa nám ozvať**
- Dostali ste rozhodnutie, s ktorým nesúhlasíte.
- Úrad vám uložil pokutu.
- Stavebný úrad zamietol vašu žiadosť alebo povolil stavbu, ktorá vás obmedzuje.
- Úrad vo vašej veci nekoná alebo konanie zbytočne predlžuje.
- Chystáte sa podať žiadosť a chcete ju mať v poriadku.
- Tlačidlo: Dohodnúť konzultáciu

**Často kladené otázky**
- **Dostal som rozhodnutie úradu. Čo ďalej?** Pozorne si prečítajte poučenie na konci rozhodnutia. Uvádza, či a dokedy sa môžete odvolať. Lehoty sú krátke, preto sa s nami poraďte čo najskôr po doručení.
- **Dá sa odvolať proti pokute?** Proti rozhodnutiu o pokute sa spravidla dá podať odvolanie alebo iný opravný prostriedok. Či má zmysel, závisí od okolností a od dôkazov, ktoré máte k dispozícii.
- **Kedy podať správnu žalobu?** Správnu žalobu môžete spravidla podať až po tom, čo ste využili odvolanie. Lehota na jej podanie je zákonom obmedzená, preto ju neodkladajte.

**Súvisiace služby:** Občianske právo · Dopravné nehody

**Záverná výzva**
- H2: Nesúhlasíte s rozhodnutím úradu?
- Text: Ozvite sa čo najskôr. Posúdime ho a povieme vám, aké máte možnosti.
- Tlačidlá: Dohodnúť konzultáciu · Zavolať [DOPLNIŤ: telefón]

---

#### SLUŽBA 6: Právo duševného vlastníctva `/sluzby/dusevne-vlastnictvo`
**SEO title:** Advokát duševné vlastníctvo Bratislava | JUDr. Pavlovič
**Meta description:** Ochranné známky, autorské právo a licenčné zmluvy. Pomôžeme vám chrániť názov, logo aj tvorivú prácu. Dohodnite si konzultáciu.
**Popis karty:** Chcete ochrániť názov firmy, logo alebo svoju tvorbu? Pomôžeme vám s ochrannou známkou, licenčnými zmluvami a pri porušení vašich práv.

**Hero**
- H1: Advokát pre duševné vlastníctvo v Bratislave a okolí
- Podnadpis: Názov, logo, dizajn aj autorské dielo majú hodnotu. Pomôžeme vám ich chrániť, správne licencovať a brániť, keď ich niekto použije bez súhlasu.
- Tlačidlá: Dohodnúť konzultáciu · Zavolať [DOPLNIŤ: telefón]

**Úvod**
- H2: Chráňte to, čo ste vytvorili
- Text: Duševné vlastníctvo sú výsledky tvorivej práce: názvy, logá, dizajny, texty, fotografie či softvér. Pomáhame podnikateľom, tvorcom a startupom, ktorí chcú mať istotu, že ich značku alebo dielo nemôže voľne použiť niekto iný. Vysvetlíme vám, čo je chránené automaticky, čo treba zaregistrovať a ako na to. Ak ide o vynález alebo technické riešenie, pozrite si stránku Patentové právo. (slová „Patentové právo“ sú odkaz na `/sluzby/patentove-pravo`)

**S čím vám pomôžeme**
- **Ochranné známky.** Ochranná známka je zapísané označenie, napríklad názov alebo logo, ktoré odlišuje vaše výrobky či služby od iných. Pomôžeme vám s prihláškou aj s preverením podobných známok.
- **Autorské právo.** Autorské právo chráni dielo, ako je text, fotografia alebo softvér. Vzniká automaticky vytvorením diela, bez registrácie.
- **Licenčné zmluvy.** Licencia je povolenie použiť dielo alebo známku za dohodnutých podmienok. Pripravíme ju alebo posúdime.
- **Prevod ochrannej známky.** Zmluvy o prevode alebo licencovaní známky, napríklad pri predaji firmy.
- **Dizajny.** Ochrana vzhľadu výrobku zápisom dizajnu. (OVERIŤ)
- **Porušenie práv.** Postup, keď niekto bez súhlasu používa vašu značku alebo dielo.

**Ako postupujeme**
1. **Opíšete nám, čo chcete chrániť.** Povedzte nám, o aký názov, logo alebo dielo ide a ako ho používate. Prineste aj zmluvy, ktoré ste k nemu uzavreli.
2. **Navrhneme spôsob ochrany.** Vysvetlíme vám, či je vaše dielo chránené automaticky alebo treba podať prihlášku, a odporučíme vhodný rozsah ochrany.
3. **Postaráme sa o realizáciu.** Pripravíme prihlášku, licenčnú zmluvu alebo výzvu pri porušení práv a sprevádzame vás celým konaním.

**Kedy sa nám ozvať**
- Zakladáte značku a chcete si chrániť jej názov.
- Niekto používa podobný názov alebo logo ako vy.
- Chcete niekomu povoliť používať vašu tvorbu.
- Dali ste si vytvoriť logo, web alebo softvér a chcete mať jasné, kto ich smie používať.
- Dostali ste výzvu, že porušujete cudzie práva.
- Tlačidlo: Dohodnúť konzultáciu

**Často kladené otázky**
- **Ako si ochrániť názov firmy?** Zápis obchodného mena chráni najmä názov firmy ako podnikateľa. Ak chcete chrániť názov ako značku vašich výrobkov alebo služieb, je vhodné zapísať ochrannú známku.
- **Čo je ochranná známka?** Je to zapísané označenie, napríklad slovo, logo alebo ich kombinácia, ktoré odlišuje vaše výrobky alebo služby od iných. Zapisuje ju Úrad priemyselného vlastníctva SR, prípadne úrad Európskej únie pre celú Úniu.
- **Kto vlastní autorské práva k dielu?** Autorom je vždy človek, ktorý dielo vytvoril. Pri dielach vytvorených v zamestnaní alebo na objednávku je dôležité, kto ich smie a ako používať. To upravuje zákon a zmluva.

**Súvisiace služby:** Patentové právo · Obchodné právo

**Záverná výzva**
- H2: Chcete chrániť svoju značku alebo tvorbu?
- Text: Opíšte nám, o čo ide. Navrhneme vhodný spôsob ochrany.
- Tlačidlá: Dohodnúť konzultáciu · Zavolať [DOPLNIŤ: telefón]

---

#### SLUŽBA 7: Patentové právo `/sluzby/patentove-pravo`
**SEO title:** Advokát patentové právo Bratislava | JUDr. Pavlovič
**Meta description:** Posúdenie vynálezu, patent a úžitkový vzor, licenčné zmluvy a spory. Pomôžeme vám chrániť technické riešenia. Dohodnite si konzultáciu.
**Popis karty:** Máte vynález alebo technické riešenie? Pomôžeme vám zistiť, ako ho chrániť patentom alebo úžitkovým vzorom, a pripravíme licenčné zmluvy.

**Hero**
- H1: Advokát pre patentové právo v Bratislave a okolí
- Podnadpis: Vynález má hodnotu, ak je správne chránený. Pomôžeme vám zvoliť vhodnú ochranu, upraviť zmluvy a brániť vaše práva.
- Tlačidlá: Dohodnúť konzultáciu · Zavolať [DOPLNIŤ: telefón]

**Úvod**
- H2: Ochrana technických riešení
- Text: Patent a úžitkový vzor chránia technické riešenia, teda vynálezy. Na rozdiel od názvu alebo loga, ktoré chráni ochranná známka, ide tu o to, ako niečo funguje. Pomáhame vynálezcom, firmám a startupom posúdiť, či a ako je možné ich riešenie chrániť. Pripravujeme licenčné a ďalšie zmluvy a pri konaní pred úradom spolupracujeme s patentovými zástupcami. (OVERIŤ) Ak riešite značku alebo autorské dielo, pozrite si stránku Právo duševného vlastníctva. (slová „Právo duševného vlastníctva“ sú odkaz na `/sluzby/dusevne-vlastnictvo`)

**S čím vám pomôžeme**
- **Posúdenie vynálezu.** Vysvetlíme vám, či riešenie môže spĺňať podmienky ochrany: novosť, vynálezcovskú činnosť a priemyselnú využiteľnosť.
- **Patentová prihláška.** Príprava podkladov a sprevádzanie konaním o udelenie patentu. (OVERIŤ)
- **Úžitkový vzor.** Rýchlejšia a jednoduchšia forma ochrany technického riešenia.
- **Konanie pred Úradom priemyselného vlastníctva SR.** Zastupovanie alebo koordinácia s patentovým zástupcom. (OVERIŤ)
- **Licenčné zmluvy.** Úprava podmienok, za ktorých môže váš vynález využívať niekto iný.
- **Spory o patenty.** Postup pri porušení patentu alebo úžitkového vzoru. (OVERIŤ)

**Ako postupujeme**
1. **Opíšete nám riešenie.** Stručne nám vysvetlíte, čo ste vytvorili a či ste to už niekde zverejnili. Všetko, čo nám poviete, chráni povinná mlčanlivosť advokáta.
2. **Posúdime možnosti ochrany.** Vysvetlíme vám rozdiel medzi patentom a úžitkovým vzorom a odporučíme vhodný postup vrátane ďalších krokov pred úradom.
3. **Zabezpečíme ochranu a zmluvy.** Pripravíme podklady a zmluvy a postaráme sa o konanie, v prípade potreby v spolupráci s patentovým zástupcom.

**Kedy sa nám ozvať**
- Vyvinuli ste nové technické riešenie.
- Chystáte sa vynález predstaviť verejnosti alebo investorom.
- Chcete vynález predať alebo licencovať.
- Niekto kopíruje vaše technické riešenie.
- Tlačidlo: Dohodnúť konzultáciu

**Často kladené otázky**
- **Čo sa dá patentovať?** Patentovať možno vynález, ktorý je nový, je výsledkom vynálezcovskej činnosti a je priemyselne využiteľný. Patentovať nemožno napríklad samotné objavy, vedecké teórie či obchodné plány.
- **Aký je rozdiel medzi patentom a úžitkovým vzorom?** Úžitkový vzor má nižšie nároky na vynálezcovskú úroveň a zapisuje sa rýchlejšie, chráni však kratšie. Patent poskytuje silnejšiu a dlhšiu ochranu, konanie o ňom však trvá dlhšie.
- **Ako dlho trvá konanie?** Konanie o udelenie patentu trvá spravidla niekoľko rokov, zápis úžitkového vzoru býva rýchlejší. Presný čas závisí od úradu a od zložitosti riešenia. (OVERIŤ)
- **Môžem vynález zverejniť pred podaním prihlášky?** Neodporúčame to. Zverejnenie pred podaním prihlášky môže narušiť novosť vynálezu, a tým aj možnosť jeho ochrany.

**Súvisiace služby:** Právo duševného vlastníctva · Obchodné právo

**Záverná výzva**
- H2: Máte vynález, ktorý chcete chrániť?
- Text: Povedzte nám o ňom. Navrhneme, ako postupovať ďalej.
- Tlačidlá: Dohodnúť konzultáciu · Zavolať [DOPLNIŤ: telefón]

---

#### SLUŽBA 8: Kybernetické právo `/sluzby/kyberneticke-pravo`
**SEO title:** Advokát kybernetické právo Slovensko | JUDr. Pavlovič
**Meta description:** Kybernetická bezpečnosť, ochrana osobných údajov, únik dát a IT zmluvy. Pomôžeme vašej firme splniť povinnosti. Dohodnite si konzultáciu.
**Popis karty:** Kybernetické právo upravuje bezpečnosť informačných systémov, ochranu dát a IT zmluvy. Pomôžeme vašej firme splniť povinnosti a pripraviť sa na únik dát.

**Hero**
- H1: Advokát pre kybernetické právo na Slovensku
- Podnadpis: Kybernetická bezpečnosť, osobné údaje a IT zmluvy. Pomôžeme vašej firme pochopiť povinnosti, nastaviť pravidlá a správne reagovať, keď nastane incident.
- Tlačidlá: Dohodnúť konzultáciu · Zavolať [DOPLNIŤ: telefón]

**Úvod**
- H2: Čo je kybernetické právo
- Text: Kybernetické právo sú pravidlá pre bezpečnosť informačných systémov, ochranu dát a podnikanie v digitálnom prostredí. Týka sa čoraz viac firiem, nielen IT spoločností. Nové európske pravidlá rozšírili okruh firiem, ktoré musia plniť povinnosti v oblasti kybernetickej bezpečnosti. Pomôžeme vám zistiť, či sa vás týkajú, nastaviť interné pravidlá a pripraviť zmluvy s dodávateľmi. Ak nastane únik dát, poradíme vám, čo a komu treba nahlásiť.

**S čím vám pomôžeme**
- **Povinnosti v kybernetickej bezpečnosti.** Posúdenie, či sa na vašu firmu vzťahujú, a pomoc s ich splnením.
- **Ochrana osobných údajov (GDPR).** Nastavenie dokumentácie, zmlúv a postupov pri spracúvaní osobných údajov.
- **Únik dát a bezpečnostné incidenty.** Postup pri incidente vrátane hlásenia úradom a komunikácie s dotknutými osobami.
- **IT zmluvy a licencie.** Zmluvy o vývoji softvéru, softvérové licencie a softvér poskytovaný ako služba.
- **Online podnikanie a e-shopy.** Obchodné podmienky, informačné povinnosti a ochrana spotrebiteľa. (OVERIŤ)

**Ako postupujeme**
1. **Opíšete nám svoju firmu a systémy.** Povedzte nám, čomu sa venujete, aké údaje spracúvate a s akými dodávateľmi IT spolupracujete. Technické detaily nie sú potrebné.
2. **Posúdime vaše povinnosti.** Zistíme, ktoré pravidlá sa na vás vzťahujú, čo už máte v poriadku a čo treba doplniť.
3. **Nastavíme pravidlá a zmluvy.** Pripravíme dokumentáciu, zmluvy a postupy pre prípad incidentu, aby ste vedeli, čo robiť, keď niečo nastane.

**Kedy sa nám ozvať**
- Neviete, či sa na vás vzťahujú nové povinnosti v kybernetickej bezpečnosti.
- Došlo k úniku dát alebo ku kybernetickému útoku.
- Spúšťate e-shop alebo online službu.
- Uzatvárate zmluvu o vývoji softvéru alebo o cloudovej službe.
- U vás začal kontrolu úrad.
- Tlačidlo: Dohodnúť konzultáciu

**Často kladené otázky**
- **Musí moja firma plniť povinnosti kybernetickej bezpečnosti?** Závisí od odvetvia, v ktorom podnikáte, a od veľkosti firmy. Nové pravidlá sa týkajú oveľa viac firiem ako predtým, preto sa oplatí to preveriť.
- **Čo robiť pri úniku osobných údajov?** Zdokumentujte, čo sa stalo, a obmedzte ďalšie šírenie. Porušenie ochrany osobných údajov treba spravidla ohlásiť Úradu na ochranu osobných údajov SR bez zbytočného odkladu, ak je to možné, do 72 hodín od zistenia.
- **Aké zmluvy potrebuje e-shop?** Najmä obchodné podmienky, informácie o ochrane osobných údajov a reklamačný poriadok. Dôležité sú aj zmluvy s dodávateľmi, napríklad s poskytovateľom platobnej brány či s dopravcom.

**Súvisiace služby:** Obchodné právo · Právo duševného vlastníctva

**Záverná výzva**
- H2: Chcete mať firmu pripravenú na incident?
- Text: Opíšte nám, ako fungujete. Povieme vám, čo je potrebné doplniť.
- Tlačidlá: Dohodnúť konzultáciu · Zavolať [DOPLNIŤ: telefón]

---

#### SLUŽBA 9: Trestné právo `/sluzby/trestne-pravo`
**SEO title:** Advokát trestné právo Bratislava | JUDr. Pavlovič
**Meta description:** Obhajoba obvinených a zastupovanie poškodených v trestnom konaní. Poskytujeme najmä stálym klientom a po predchádzajúcej dohode.
**Popis karty:** Obhajobu a zastupovanie v trestnom konaní poskytujeme iba stálym klientom a po predchádzajúcej dohode. Dôvodom je vysoká pracovná vyťaženosť kancelárie.
**Štítok na karte:** Iba pre stálych klientov

**Hero**
- H1: Advokát pre trestné právo v Bratislave a okolí
- Podnadpis: Trestné konanie je pre každého náročné. Pomôžeme vám zorientovať sa, chrániť vaše práva a postupovať premyslene. Diskrétne a bez poučovania.
- Tlačidlá: Opísať vec · Zavolať [DOPLNIŤ: telefón]

**Upozornenie** (Notice, hneď pod hero, ešte pred ostatným obsahom, výrazne viditeľné)
- Text: Trestné právo poskytujeme iba stálym klientom a po predchádzajúcej dohode. Dôvodom je vysoká pracovná vyťaženosť kancelárie. Ďakujeme za pochopenie.

**Čo robiť pri predvolaní alebo zadržaní** (špeciálny blok, existujúci ChecklistSteps)
- H2: Čo robiť, keď vás predvolá polícia alebo vás zadržia
1. **Zachovajte pokoj.** Vyjadrenia v strese sa neskôr ťažko menia.
2. **Zistite svoje postavenie.** Pýtajte sa, či ste predvolaný ako svedok, podozrivý alebo obvinený. Od toho závisia vaše práva.
3. **Máte právo na obhajcu.** Poraďte sa s advokátom skôr, ako sa podrobne vyjadríte.
4. **Obvinený má právo odoprieť výpoveď.** Pri svedeckej výpovedi platia iné pravidlá.
5. **Nepodpisujte protokol bez prečítania.** Podpisujete len to, čomu rozumiete a s čím súhlasíte.

**Úvod**
- H2: Obhajoba a zastupovanie v trestnom konaní
- Text: V trestnom konaní ide o dôležité veci: o povesť, rodinu, prácu a niekedy aj o slobodu. Našim stálym klientom poskytujeme obhajobu a zastupovanie v celom priebehu konania. Pri každom prípade začíname rovnako: pozorne vás vypočujeme, vysvetlíme vám, v akej fáze konania ste, a spolu určíme ďalší postup.

**S čím vám pomôžeme**
- **Obhajoba obvineného.** V prípravnom konaní aj pred súdom, vrátane návrhov, sťažností a opravných prostriedkov.
- **Zastupovanie poškodeného.** Uplatnenie nároku na náhradu škody v trestnom konaní a ochrana vašich práv ako poškodeného.
- **Pomoc rodine obvineného.** Orientácia v situácii a zvolenie obhajcu v mene blízkej osoby.
- **Trestné oznámenia.** Posúdenie veci a podanie trestného oznámenia. (OVERIŤ)
- **Konania pred Špecializovaným trestným súdom.** Obhajoba a zastupovanie v konaniach pred Špecializovaným trestným súdom v Banskej Bystrici. (OVERIŤ)

**Diskrétnosť** (tmavá sekcia `--ink`, ako doteraz)
- H2: Diskrétnosť je samozrejmosť
- Text: Advokát je zo zákona viazaný povinnosťou mlčanlivosti. To, čo nám poviete, zostáva medzi nami. Na konzultácii môžete otvorene povedať, ako sa veci skutočne majú.

**Ako postupujeme**
1. **Ozvete sa nám.** Stačí telefonát alebo krátka správa. Podrobnosti nemusíte písať, rozoberieme ich osobne.
2. **Osobná konzultácia.** Prejdeme situáciu a vysvetlíme vám, v akej fáze konania ste a aké máte možnosti.
3. **Obhajoba alebo zastupovanie.** Ak sa dohodneme na spolupráci, preberáme komunikáciu, lehoty a procesné kroky.

(Blok „Kedy sa nám ozvať“ sa pri Trestnom práve **nezobrazuje**.)

**Často kladené otázky**
- **Kedy si mám zvoliť obhajcu?** Čo najskôr, ideálne skôr, ako sa vyjadríte alebo podpíšete protokol. Právo na obhajcu máte od začiatku trestného stíhania.
- **Musím na polícii vypovedať?** Obvinený má právo odoprieť výpoveď. Svedok má povinnosť vypovedať, s určitými výnimkami, napríklad ak by výpoveďou spôsobil nebezpečenstvo trestného stíhania sebe alebo blízkej osobe. Preto je dôležité vedieť, v akom postavení ste.
- **Môže obhajcu zvoliť aj niekto z rodiny?** Áno, obhajcu môžu v mene obvineného zvoliť aj niektoré blízke osoby.
- **Je moja komunikácia s advokátom dôverná?** Áno, advokát je zo zákona viazaný povinnosťou mlčanlivosti.

**Súvisiace služby:** Dopravné nehody · Správne právo

**Záverná výzva**
- H2: Ste náš stály klient?
- Text: Opíšte nám vec. Ozveme sa vám a dohodneme ďalší postup.
- Tlačidlá: Opísať vec · Zavolať [DOPLNIŤ: telefón]

---

### 5.4 O mne `/o-mne`

**SEO title:** JUDr. Ladislav Pavlovič | Advokát Bratislava
**Meta description:** JUDr. Ladislav Pavlovič, advokát v Bratislave. Zrozumiteľne, diskrétne a s dôrazom na lehoty. Dohodnite si konzultáciu.

Rozloženie ako doteraz (hero s `PhotoPlaceholder`, text vľavo, sticky karta Fakty vpravo, široká fotka `kniznica.jpg`), **pribúda blok Profesijná dráha** pred záverným pásom.

- **H1:** JUDr. Ladislav Pavlovič
- **Podnadpis:** Advokát · Bratislava

**Text** (prvá osoba, prvý odsek väčším písmom):

Volám sa Ladislav Pavlovič a advokácii sa venujem [DOPLNIŤ: počet] rokov. Spolu s kolegami pomáhame ľuďom a firmám vo viacerých oblastiach práva, od dopravných nehôd a obchodného práva až po rodinné, správne či kybernetické právo.

Pri každej veci vychádzam z jednoduchého princípu: klient potrebuje vedieť, kde stojí, čo ho čaká a čo je vhodné urobiť ako ďalšie. Preto vám situáciu vysvetlím zrozumiteľne, otvorene poviem, aké sú možnosti a riziká, a nebudem vám sľubovať nič, čo sa sľúbiť nedá.

Svoju prácu považujem za zodpovednosť voči ľuďom, ktorí sa na mňa obracajú v dôležitých chvíľach. Preto sledujem lehoty, komunikujem priamo a chránim to, čo mi povierite, v rámci povinnej mlčanlivosti advokáta.

**Karta faktov:**
- **Prax:** [DOPLNIŤ: počet] rokov v advokácii
- **Vybavené veci:** [DOPLNIŤ: počet]
- **Vzdelanie:** [DOPLNIŤ: škola, rok ukončenia, titul JUDr.]
- **Profesijné oprávnenie:** advokát zapísaný v Slovenskej advokátskej komore, č. [DOPLNIŤ]
- **Oblasti:** 9 oblastí práva (odkaz „Služby“ na `/sluzby`)
- **Jazyky:** [DOPLNIŤ]
- **Pôsobnosť:** celé západné Slovensko, Špecializovaný trestný súd v Banskej Bystrici
- **Kancelária:** Ivanská cesta 32B, 821 04 Bratislava, Ružinov

**Profesijná dráha** (nový blok, vertikálna časová os s DrawLine linkou, rok vľavo v Cormorant 32 px bordovou, popis vpravo):
- H2: Profesijná dráha
- [DOPLNIŤ: rok] · [DOPLNIŤ: míľnik, napr. ukončenie štúdia]
- [DOPLNIŤ: rok] · [DOPLNIŤ: míľnik, napr. zápis do zoznamu advokátov]
- [DOPLNIŤ: rok] · [DOPLNIŤ: míľnik, napr. založenie kancelárie]

**Záverná výzva**
- H2: Spoznajme sa pri konzultácii
- Tlačidlá: Dohodnúť konzultáciu · Zavolať [DOPLNIŤ: telefón]

---

### 5.5 Náš tím `/nas-tim`

**SEO title:** Náš tím | Advokátska kancelária JUDr. Pavlovič
**Meta description:** Spoznajte ľudí v advokátskej kancelárii JUDr. Ladislava Pavloviča v Bratislave. Každú vec u nás vedie konkrétny advokát.

Rozloženie: PageHero (H1 a úvod vľavo, `tim-kancelaria.jpg` 16:9 vpravo) → karta JUDr. Pavloviča na celú šírku → karty ďalších členov v mriežke po 2 → sekcia Pridajte sa k nám → záverný pás. Karty sú `TeamCard` (časť 3.5), **nie sú klikateľné**, všetky fotky sú `PhotoPlaceholder` s textom „Fotografia bude doplnená“.

- **H1:** Náš tím
- **Úvod:** Každú vec u nás vedie konkrétny advokát. Od prvej konzultácie viete, kto sa vašej veci venuje a s kým komunikujete.

**Člen 1 (veľká karta)**
- Meno: JUDr. Ladislav Pavlovič
- Funkcia: Advokát
- Popis: Vedie kanceláriu a osobne zodpovedá za veci klientov. Dbá na to, aby každý klient vedel, kde stojí a čo je ďalší krok.
- Tabuľka:
  - Funkcia: Advokát
  - Vzdelanie: [DOPLNIŤ: škola, rok, titul]
  - Zameranie: [DOPLNIŤ: 2 až 3 hlavné oblasti]
  - Zápis v SAK: č. [DOPLNIŤ]

**Člen 2 a 3 (rovnaká štruktúra, zatiaľ placeholdery)**
- Meno: [DOPLNIŤ: meno a titul]
- Funkcia: [DOPLNIŤ: advokát / advokátsky koncipient]
- Popis: [DOPLNIŤ: 1 až 2 vety o tom, čomu sa venuje a s čím klientom pomáha]
- Tabuľka:
  - Funkcia: [DOPLNIŤ]
  - Vzdelanie: [DOPLNIŤ]
  - Zameranie: [DOPLNIŤ: 2 až 3 oblasti]

Členov tímu drž v poli v `src/content/team.ts`, aby sa dali ľahko pridávať a uberať.

**Pridajte sa k nám** (sekcia na `--bone`, dvojstĺpec: vľavo H2, vpravo text a tlačidlo)
- H2: Pridajte sa k nám
- Text: Hľadáme advokátov a advokátskych koncipientov, ktorí chcú pracovať na rôznorodých veciach a komunikovať priamo s klientmi. (OVERIŤ) Ak máte záujem, pošlite nám životopis a niekoľko viet o tom, čomu sa chcete venovať. Ozveme sa vám.
- Tlačidlo: Poslať životopis (`mailto:` na e-mail z `site.ts`, predmet „Záujem o prácu“; kým e-mail chýba, tlačidlo je `aria-disabled` a vedľa je čip `[DOPLNIŤ: e-mail pre uchádzačov]`)

**Záverná výzva**
- H2: Potrebujete poradiť?
- Text: Opíšte nám situáciu. Povieme vám, kto z nás sa vašej veci bude venovať.
- Tlačidlá: Dohodnúť konzultáciu · Zavolať [DOPLNIŤ: telefón]

---

### 5.6 Prečo my `/preco-my`

**SEO title:** Prečo si vybrať našu kanceláriu | JUDr. Pavlovič
**Meta description:** Priamy kontakt s advokátom, deväť oblastí práva a pôsobnosť na celom západnom Slovensku. Pozrite si, čo u nás dostanete.

Rozloženie: PageHero (H1 a úvod vľavo, `preco-my.jpg` vpravo s parallaxom) → 6 rozlišovacích znakov v mriežke 2×3 (mobil 1 stĺpec) → záverný pás. Každý znak je karta na `--paper` s okrajom `--line`: hore veľké bordové číslo (Cormorant 56 px), názov (Cormorant 600, 28 px), vysvetlenie (Manrope 16 px) a dole za linkou **dôkaz** ako štítok (Manrope 600, 11 px, uppercase, letter-spacing 0.14em, `--bordeaux`, pred ním ikona `Check`). Karty nabiehajú postupne (stagger 0,08 s), pri hoveri sa zvýrazní horná bordová linka.

- **H1:** Prečo my
- **Úvod:** Namiesto sľubov vám radšej povieme, čo u nás vecne dostanete.

1. **Viac oblastí na jednom mieste**
   Od zmlúv a nehnuteľností cez rodinné veci až po kybernetické právo. Keď sa vaša situácia dotýka viacerých oblastí, nemusíte hľadať ďalšieho advokáta.
   Dôkaz: 9 oblastí práva
2. **Priamy kontakt s advokátom**
   Vašu vec vedie konkrétny advokát a komunikujete priamo s ním. Viete, kto za vaším prípadom stojí a na koho sa obrátiť.
   Dôkaz: Spôsob práce kancelárie
3. **Overená prax**
   [DOPLNIŤ: počet] rokov v advokácii a [DOPLNIŤ: počet] vybavených vecí. Skúsenosti, ktoré sa dajú doložiť, nie len opísať.
   Dôkaz: [DOPLNIŤ: počet] rokov praxe
4. **Pôsobnosť na celom západnom Slovensku**
   Kancelária sídli v Bratislave a klientov zastupuje na celom západnom Slovensku aj pred Špecializovaným trestným súdom v Banskej Bystrici.
   Dôkaz: Západné Slovensko
5. **Diskrétnosť zo zákona**
   Všetko, čo nám poviete, chráni povinná mlčanlivosť advokáta. Je to zákonná povinnosť, nie iba náš záväzok.
   Dôkaz: Zákon o advokácii
6. **Jasný ďalší krok**
   Po konzultácii odchádzate s vysvetlením situácie bez zbytočného žargónu a s konkrétnym návrhom, čo urobiť ďalej.
   Dôkaz: Prvá konzultácia

**Záverná výzva**
- H2: Presvedčte sa sami pri konzultácii
- Text: Opíšte nám, čo riešite. Povieme vám, ako vám vieme pomôcť.
- Tlačidlá: Dohodnúť konzultáciu · Zavolať [DOPLNIŤ: telefón]

---

### 5.7 Kontakt `/kontakt`

Stránka **ostáva ako doteraz** (rozloženie, údaje, mapa, formulár, hlášky). Menia sa iba tieto veci:

1. **Výber oblasti vo formulári** je teraz štýlovaný `<select>` (nie pills), label „S čím potrebujete pomôcť?“, možnosti v tomto poradí:
   Dopravné nehody · Obchodné právo · Občianske právo · Rodinné právo · Správne právo · Právo duševného vlastníctva · Patentové právo · Kybernetické právo · Trestné právo (iba pre stálych klientov) · Iné
   Predvoľba cez `?oblast=<slug>` (slugy z časti 4, pre „Iné“ `ine`).
2. **Pod úvodom formulára** (pod textom „Stačí vyplniť meno a telefón. Podrobnosti rozoberieme osobne.“) pribudne Notice:
   Konzultácia je spoplatnená. Jej podmienky vám oznámime vopred, pri dohadovaní termínu. (OVERIŤ)
3. Ak je vybrané Trestné právo, pod selectom sa plynulo zobrazí malý text (`--stone`, 14 px):
   Trestné právo poskytujeme iba stálym klientom a po predchádzajúcej dohode.

Ostatné texty Kontaktu (pre istotu, ak by v projekte chýbali):
- SEO title: Kontakt | Advokát Bratislava Ružinov | JUDr. Pavlovič
- Meta description: Kontakt na advokátsku kanceláriu JUDr. Ladislava Pavloviča, Ivanská cesta 32B, Bratislava Ružinov. Dohodnite si konzultáciu telefonicky alebo cez formulár.
- H1: Kontakt
- Podnadpis: Zavolajte alebo napíšte. Ozvem sa vám na kontakt, ktorý uvediete.
- Údaje: Advokátska kancelária: JUDr. Ladislav Pavlovič s. r. o. · Adresa: Ivanská cesta 32B, 821 04 Bratislava – mestská časť Ružinov · Telefón: [DOPLNIŤ] · E-mail: [DOPLNIŤ] · Úradné hodiny: [DOPLNIŤ] · Ako sa k nám dostanete: [DOPLNIŤ: MHD zastávka, parkovanie, vchod/poschodie]
- Formulár, nadpis: Dohodnite si konzultáciu
- Polia: Meno a priezvisko * · Telefón * · E-mail (nepovinné) · S čím potrebujete pomôcť? · Stručne opíšte situáciu (nepovinné), pomocný text: Neuvádzajte prosím citlivé podrobnosti. Rozoberieme ich osobne. · Súhlas: Súhlasím so spracovaním osobných údajov na účel vybavenia môjho dopytu. (odkaz „Zásady ochrany osobných údajov“)
- Tlačidlo: Odoslať dopyt · Pod tlačidlom: Preferujete telefonát? Zavolajte na [DOPLNIŤ: telefón].
- Hlášky: Úspech: Ďakujem, správu som prijal. Ozvem sa vám na uvedený kontakt. · Chyba: Správu sa nepodarilo odoslať. Skúste to prosím znova alebo zavolajte na [DOPLNIŤ: telefón]. · Povinné pole: Toto pole je povinné. · Telefón: Zadajte prosím platné telefónne číslo. · E-mail: Zadajte prosím platnú e-mailovú adresu. · Súhlas: Pre odoslanie je potrebný súhlas so spracovaním údajov.

---

### 5.8 Časté otázky `/caste-otazky`

**SEO title:** Časté otázky o advokátovi a konzultácii | JUDr. Pavlovič
**Meta description:** Odpovede na časté otázky o konzultácii s advokátom a o oblastiach práva, ktorým sa venujeme v Bratislave a okolí.

- **H1:** Časté otázky
- Sticky lišta skupín (na mobile horizontálne posúvateľná): **Konzultácia a spolupráca** · Dopravné nehody · Obchodné právo · Občianske právo · Rodinné právo · Správne právo · Duševné vlastníctvo · Patentové právo · Kybernetické právo · Trestné právo
- Otázky služieb ťahaj z obsahu služieb (jeden zdroj). Pri každej skupine je dole odkaz na detail služby („Viac o službe →“).
- `FAQPage` JSON-LD.

**Konzultácia a spolupráca** (nové znenie)
- **Ako si dohodnem konzultáciu?** Zavolajte nám alebo vyplňte formulár na stránke Kontakt. Ozveme sa vám na kontakt, ktorý uvediete, a dohodneme termín.
- **Je konzultácia spoplatnená?** Áno, konzultácia s advokátom je spoplatnená. Jej podmienky vám oznámime vopred, pri dohadovaní termínu. (OVERIŤ)
- **Čo mám priniesť na konzultáciu?** Všetky dokumenty, ktoré sa k veci vzťahujú: zmluvy, korešpondenciu, lekárske správy, rozhodnutia alebo predvolania. Ak niečo nemáte, neznamená to, že sa nedá začať. Zistíme, čo je potrebné doplniť.
- **Je moja vec dôverná?** Áno. Advokát je zo zákona viazaný povinnosťou mlčanlivosti.
- **Venujete sa aj iným oblastiam práva?** Venujeme sa deviatim oblastiam práva, ktoré nájdete v sekcii Služby. Ak vaša vec patrí inam, povieme vám to hneď na začiatku. (OVERIŤ)

---

### 5.9 404, cookies lišta, právne stránky
Ostávajú ako doteraz. Pre istotu texty:
- **404:** Nadpis: Stránka sa nenašla · Text: Adresa možno nie je správna alebo stránka už neexistuje. · Tlačidlá: Späť na úvod · Dohodnúť konzultáciu
- **Cookies lišta:** Používame nevyhnutné cookies na fungovanie stránky. S vaším súhlasom používame aj analytické cookies, ktoré nám pomáhajú stránku zlepšovať. Viac v Zásadách cookies. · Tlačidlá: Prijať všetky · Iba nevyhnutné
- **Ochrana osobných údajov a Cookies:** kostra s nadpismi a placeholdermi, ako doteraz. Texty nevymýšľaj.

---

## 6. AI asistentka (verzia s pripravenými odpoveďami)

**Dôležité:** Asistentka **nepoužíva žiadnu AI ani API**, nemá textové pole na písanie, nikam neposiela dáta a nič neukladá. Funguje ako vopred napísaný rozhovor: návštevník kliká na možnosti a dostáva schválené odpovede. Všetky texty sú v `src/content/assistant.ts`, aby sa dali neskôr ľahko upraviť alebo nahradiť skutočnou AI.

### 6.1 Vzhľad a správanie
- **Spúšťacie tlačidlo:** fixne vpravo dole (desktop 24 px od okrajov). Zaoblený obdĺžnik (radius 999 px), pozadie `--ink`, text `--chalk`, ikona `MessageCircle` + text „Máte otázku?“. Na mobile iba okrúhla ikona 56 px, umiestnená **nad** MobileBar, aby ju neprekrývala. Objaví sa 1,5 s po načítaní stránky (fade + `y 12→0`). Nesmie prekrývať cookies lištu: kým je lišta zobrazená, tlačidlo je posunuté nad ňu.
- **Panel:** desktop 380 × max. 600 px, ukotvený vpravo dole. Mobil: bottom sheet na 88 % výšky obrazovky. Otvára sa animáciou `opacity 0→1`, `scale 0.96→1`, `y 16→0` (0,35 s). Zatvára sa tlačidlom ×, klávesou Esc aj klikom mimo panela (desktop). Fokus sa pri otvorení presunie do panela a pri zatvorení vráti na spúšťacie tlačidlo.
- **Hlavička panela:** pozadie `--ink`, vľavo malý monogram „LP“ v kruhu s okrajom `--sand`, text „Virtuálna asistentka“ (Manrope 600, 15 px, `--chalk`) a pod ním „Všeobecné informácie · nenahrádza právnu radu“ (12 px, `--sand`). Vpravo ×.
- **Telo panela:** pozadie `--paper`. Správy asistentky sú bubliny vľavo (pozadie `--chalk`, okraj `--line`, radius 2 px). Voľba návštevníka sa zobrazí ako bublina vpravo (pozadie `--ink`, text `--chalk`). Pred každou odpoveďou sa na 700 ms zobrazí indikátor písania (tri bodky). Nové správy nabiehajú `opacity 0→1`, `y 8→0`. Panel sa automaticky posúva na poslednú správu.
- **Možnosti:** pod správou ako čipy (okraj 1 px `--bordeaux`, text `--bordeaux`, hover výplň `--bordeaux` a text `--chalk`, radius 999 px, Manrope 500, 14 px).
- **Odkazy v odpovediach:** ako malé tlačidlá pod bublinou: primárne „Dohodnúť konzultáciu“ (vedie na `/kontakt#konzultacia`, pri službe s `?oblast=`) a sekundárne odkazy na služby. Po kliknutí na odkaz sa panel zatvorí.
- **Po každej odpovedi** sa zobrazí čip „Späť na možnosti“.
- **Pätička panela:** malý text (11 px, `--stone`), viď 6.2.
- Prístupnosť: panel má `role="dialog"`, `aria-modal="true"`, `aria-label="Virtuálna asistentka"`, správy sú v `aria-live="polite"`. Celé sa dá ovládať klávesnicou.
- Pri `prefers-reduced-motion` bez animácií a bez oneskorenia písania.

### 6.2 Texty asistentky
- **Uvítanie:** Dobrý deň, som virtuálna asistentka kancelárie a pomôžem vám so všeobecnými otázkami, právnu radu advokáta však nenahrádzam.
- **Výzva pod uvítaním:** S čím vám môžem pomôcť?
- **Pätička panela:** Odpovede majú informatívny charakter a nezakladajú vzťah advokát – klient. Neuvádzajte citlivé údaje. Viac v Zásadách ochrany osobných údajov. (posledné tri slová sú odkaz na `/ochrana-osobnych-udajov`)

**Možnosti a odpovede:**

1. **Možnosť:** Mal/a som dopravnú nehodu
   **Odpoveď:** Po nehode je najdôležitejšie zdravie a bezpečnosť. Zdokumentujte miesto nehody, uschovajte lekárske správy a pred podpisom akejkoľvek dohody s poisťovňou sa poraďte. Či máte nárok na odškodnenie a v akej výške, posúdi advokát pri konzultácii.
   **Odkazy:** Dohodnúť konzultáciu (`?oblast=dopravne-nehody`) · Dopravné nehody

2. **Možnosť:** Potrebujem zmluvu
   **Odpoveď:** Pripravujeme a posudzujeme zmluvy pre ľudí aj firmy, napríklad kúpne, nájomné či obchodné. Pred podpisom dôležitej zmluvy je vhodné dať ju posúdiť, pretože opraviť chybu po podpise býva náročnejšie.
   **Odkazy:** Dohodnúť konzultáciu · Občianske právo · Obchodné právo

3. **Možnosť:** Rozvod alebo deti
   **Odpoveď:** Rozvod a úprava starostlivosti o deti sú citlivé veci. Súd vždy prihliada najmä na záujem dieťaťa a dohoda rodičov konanie výrazne zjednoduší. Konkrétny postup vám vysvetlí advokát pri dôvernej konzultácii.
   **Odkazy:** Dohodnúť konzultáciu (`?oblast=rodinne-pravo`) · Rodinné právo

4. **Možnosť:** Dostal/a som rozhodnutie úradu
   **Odpoveď:** Pozrite si poučenie na konci rozhodnutia. Uvádza, či a dokedy sa môžete odvolať. Lehoty sú krátke, preto sa nám ozvite čo najskôr po doručení.
   **Odkazy:** Dohodnúť konzultáciu (`?oblast=spravne-pravo`) · Správne právo

5. **Možnosť:** Firma, značka alebo dáta
   **Odpoveď:** Pomáhame firmám so zakladaním a zmenami spoločností, s ochrannými známkami, s ochranou vynálezov aj s ochranou osobných údajov a kybernetickou bezpečnosťou. Vyberte si oblasť, ktorá vás zaujíma.
   **Odkazy:** Obchodné právo · Právo duševného vlastníctva · Patentové právo · Kybernetické právo

6. **Možnosť:** Ako prebieha konzultácia?
   **Odpoveď:** Ozvete sa nám telefonicky alebo cez formulár a dohodneme termín. Na konzultácii prejdeme vašu situáciu, vysvetlíme vám možnosti a navrhneme ďalší postup. Konzultácia je spoplatnená, jej podmienky vám oznámime vopred. (OVERIŤ)
   **Odkazy:** Dohodnúť konzultáciu

7. **Možnosť:** Koľko stojí konzultácia?
   **Odpoveď:** Konzultácia s advokátom je spoplatnená. Jej cenu a podmienky vám oznámime vopred, pri dohadovaní termínu. (OVERIŤ)
   **Odkazy:** Dohodnúť konzultáciu · Zavolať

8. **Možnosť:** Iná otázka
   **Odpoveď:** Na konkrétne otázky vám odpovie advokát. Napíšte nám cez formulár alebo zavolajte, ozveme sa vám.
   **Odkazy:** Dohodnúť konzultáciu · Zavolať

(Značka `(OVERIŤ)` sa v asistentke zobrazuje rovnako ako inde, ako malý čip, riadený `showReviewMarks`.)

---

## 7. Pätička (podľa dokumentu, údaje doplníme neskôr)

Pozadie `--ink`, text `--chalk`, rozloženie ako doteraz (horný riadok Logo + navigácia, pod tým stĺpce, dole copyright).

**Horný riadok, navigácia:** Služby · O mne · Náš tím · Prečo my · Kontakt

**Stĺpec 1: Kancelária**
- **Advokátska kancelária JUDr. Ladislav Pavlovič s. r. o.**
- Ivanská cesta 32B, 821 04 Bratislava – Ružinov
- Telefón: [DOPLNIŤ] · E-mail: [DOPLNIŤ]
- IČO: [DOPLNIŤ] · Zapísaná v obchodnom registri: [DOPLNIŤ]
- Advokát zapísaný v zozname advokátov Slovenskej advokátskej komory pod č. [DOPLNIŤ]

**Stĺpec 2: Služby** (9 odkazov na detaily služieb, rovnaké poradie ako v menu)

**Stĺpec 3: Odkazy a pôsobnosť**
- Odkazy: Služby · O mne · Náš tím · Kontakt · Časté otázky · Ochrana osobných údajov · Cookies
- **Pôsobnosť:** Celé západné Slovensko a Špecializovaný trestný súd v Banskej Bystrici.

**Upozornenie** (pod stĺpcami, menším písmom, opacity 0,6):
Obsah tejto webovej stránky má informatívny charakter a nenahrádza individuálnu právnu konzultáciu. Jeho zverejnenie ani odoslanie správy cez formulár nezakladá vzťah advokát – klient. Pre posúdenie vašej konkrétnej veci nás, prosím, kontaktujte.

**Dole:** © {aktuálny rok} Advokátska kancelária JUDr. Ladislav Pavlovič s. r. o.

---

## 8. SEO a technika

- Každá stránka má `metadata` s title a description presne z tohto dokumentu, canonical a Open Graph (existujúci OG obrázok).
- Jeden H1 na stránku, sémantické `<section>` s `aria-labelledby`.
- Aktualizuj `sitemap.ts` o všetky nové adresy (vrátane 9 služieb) a odstráň staré.
- JSON-LD: v layoute `LegalService` + `Attorney` (doplň `areaServed`: „Západné Slovensko“, a `knowsAbout`: 9 oblastí). Na službách `Service` + `FAQPage` + `BreadcrumbList`. Na Častých otázkach `FAQPage`.
- Služby sa navzájom prelinkujú cez blok Súvisiace služby a odkazy v texte (Duševné vlastníctvo ↔ Patentové právo).
- Prístupnosť a výkon ako doteraz: viditeľný focus, ovládanie klávesnicou (mega menu, akordeóny, asistentka, formulár), kontrast AA, Lighthouse 90+ na mobile, žiadny CLS.

---

## 9. Kontrolný zoznam (na konci prejdi a oprav, čo nesedí)

- [ ] Každý text na webe sa zhoduje s týmto dokumentom. Nič nechýba a nič nie je navyše.
- [ ] Na celom webe nie je nič, čo naznačuje bezplatnú konzultáciu (hľadaj: zadarmo, bezplatn, zdarma, nezáväzn, bez poplatku).
- [ ] Žiadna z vecí v bode 1.4 sa na webe nenachádza. Každú stiahnutú fotku si znova otvor a skontroluj.
- [ ] Všetky fotky JUDr. Pavloviča a tímu sú placeholdery „Fotografia bude doplnená“.
- [ ] Menu: Úvod · Služby (rozbaľovacie) · O mne · Náš tím · Prečo my · Kontakt. Funguje na desktope aj mobile.
- [ ] Všetkých 9 služieb funguje na `/sluzby/<slug>`, karty na úvode aj v Službách vedú na správny detail, staré adresy presmerúvajú.
- [ ] Trestné právo: štítok na karte, upozornenie pod hero, tlačidlá „Opísať vec“, bez bloku „Kedy sa nám ozvať“.
- [ ] Karty tímu nie sú klikateľné.
- [ ] AI asistentka funguje bez internetu, neprekrýva MobileBar ani cookies lištu a dá sa ovládať klávesnicou.
- [ ] Všetky `[DOPLNIŤ]` sú viditeľné čipy a menia sa na jednom mieste v `site.ts`. Všetky `(OVERIŤ)` sú čipy.
- [ ] Mobil (375 px), tablet (768 px) a desktop (1440 px) vyzerajú čisto a nič nepretéka.
- [ ] Animácie sú plynulé a reduced motion funguje.
- [ ] `npm run build` prejde bez chýb a warningov.

---

## 10. Postup po fázach

1. Prejdi existujúci projekt. Uprav `site.ts` (nové polia: roky praxe, počet vecí, e-mail pre uchádzačov…), vytvor content súbory so všetkými textmi z častí 5 až 7.
2. Routing: `/sluzby`, dynamický `/sluzby/[slug]`, presmerovania, odstránenie starých stránok.
3. Hlavička s rozbaľovacím menu Služby (desktop + mobil), pätička.
4. Nové komponenty: ServiceCard, NumbersStrip, Notice, PhotoPlaceholder, TeamCard, RelatedServices, Breadcrumbs.
5. Úvodná stránka v novom poradí.
6. Stránka Služby a šablóna detailu, potom všetkých 9 služieb.
7. O mne, Náš tím, Prečo my, úpravy Kontaktu a Častých otázok.
8. AI asistentka.
9. Obrázky z Unsplash (stiahnuť, skontrolovať, zmenšiť, CREDITS.md).
10. SEO, JSON-LD, sitemap. Prejdi kontrolný zoznam z časti 9.

Na konci mi napíš krátky súhrn:
- čo je hotové,
- ktoré obrázky si stiahol a od koho,
- ktoré miesta sú ešte placeholder,
- čo si nevedel dodržať presne a prečo.
