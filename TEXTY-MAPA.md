# Mapa textov webu

| Blok | Stránka | Zdroj v `src/content` | Stav |
|---|---|---|---|
| 1 · Základné pravidlá | Celý web | `01-pravidla.ts`, `02-mapa-webu.ts`, `09-asistentka-paticka.ts`, `src/lib/site.ts` | Hotové; údaje označené na doplnenie zostávajú placeholdermi |
| 2 · Mapa webu | Hlavička, menu, mobilná lišta a pätička | `02-mapa-webu.ts`, `services.ts` | Hotové |
| 3.1 · Hero a riadok dôvery | `/` | `03-uvod.ts` | Hotové; chýbajúce údaje a fotografia sú placeholdery |
| 3.2 · Čomu sa venujeme | `/` | `03-uvod.ts`, `04-sluzby/*.ts` | Hotové |
| 3.3 · Ako to prebieha | `/` | `03-uvod.ts` | Hotové; jedna veta čaká na overenie |
| 3.4 · O pánovi doktorovi | `/` | `03-uvod.ts` | Hotové; osobné údaje sú placeholdery |
| 3.5 · Na čom si zakladáme | `/` | `03-uvod.ts` | Hotové |
| 3.6 · Prečo my | `/` | `03-uvod.ts` | Hotové |
| 3.7 · Časté otázky | `/` | `03-uvod.ts`, `04-sluzby/*.ts` | Hotové; odpovede sa importujú zo služieb |
| 3.8 · Záverná výzva | `/` | `03-uvod.ts`, `01-pravidla.ts` | Hotové |
| 4.1 · Prehľad služieb | `/sluzby` | `04-sluzby/4-1-prehlad.ts`, `03-uvod.ts`, `04-sluzby/*.ts` | Hotové |
| 4.2 · Spoločná kostra detailov | `/sluzby/[slug]` | `04-sluzby/*.ts`, `app/sluzby/[slug]/page.tsx` | Hotové |
| 4.3 · Dopravné nehody | `/sluzby/dopravne-nehody` | `04-sluzby/4-3-dopravne-nehody.ts` | Hotové; garančný fond čaká na overenie |
| 4.4 · Obchodné právo | `/sluzby/obchodne-pravo` | `04-sluzby/4-4-obchodne-pravo.ts` | Hotové; dlhodobá spolupráca a súdne zastupovanie čakajú na overenie |
| 4.5 · Občianske právo | `/sluzby/obcianske-pravo` | `04-sluzby/4-5-obcianske-pravo.ts` | Hotové; dedičstvo a exekúcie čakajú na overenie |
| 4.6 · Rodinné právo | `/sluzby/rodinne-pravo` | `04-sluzby/4-6-rodinne-pravo.ts` | Hotové; otcovstvo a osvojenie čakajú na overenie |
| 4.7 · Správne právo | `/sluzby/spravne-pravo` | `04-sluzby/4-7-spravne-pravo.ts` | Hotové; cudzinecké a daňové konania čakajú na overenie |
| 4.8 · Duševné vlastníctvo | `/sluzby/dusevne-vlastnictvo` | `04-sluzby/4-8-dusevne-vlastnictvo.ts` | Hotové; dizajny čakajú na overenie |
| 4.9 · Patentové právo | `/sluzby/patentove-pravo` | `04-sluzby/4-9-patentove-pravo.ts` | Hotové; viaceré tvrdenia čakajú na overenie |
| 4.10 · Kybernetické právo | `/sluzby/kyberneticke-pravo` | `04-sluzby/4-10-kyberneticke-pravo.ts` | Hotové; online podnikanie čaká na overenie |
| 4.11 · Trestné právo | `/sluzby/trestne-pravo` | `04-sluzby/4-11-trestne-pravo.ts` | Hotové; prístup je označený iba pre stálych klientov |
| 5.1 · Hero a príbeh | `/o-mne` | `05-o-mne.ts` | Hotové; fotografia a prax sú placeholdery |
| 5.2 · Karta faktov | `/o-mne` | `05-o-mne.ts`, `src/lib/site.ts` | Hotové; chýbajúce údaje sú placeholdery |
| 5.3 · Profesijná dráha a záverná výzva | `/o-mne` | `05-o-mne.ts` | Placeholder: tri míľniky kariéry |
| 6.1 · Úvod tímu | `/nas-tim` | `06-nas-tim.ts` | Hotové |
| 6.2 · Karty tímu | `/nas-tim` | `06-nas-tim.ts`, `src/lib/site.ts` | Hotové; mená, fotografie a profesijné údaje čakajú na doplnenie |
| 6.3 · Pridajte sa k nám a záverná výzva | `/nas-tim` | `06-nas-tim.ts`, `src/lib/site.ts` | Hotové; náborový text čaká na overenie, e-mail je placeholder |
| 7.1 · Prečo my | `/preco-my` | `07-preco-my.ts` | Hotové; číselné údaje sú placeholdermi |
| 8.1 · Úvod stránky | `/kontakt` | `08-kontakt.ts` | Hotové |
| 8.2 · Formulár | `/kontakt#konzultacia` | `08-kontakt.ts` | Hotové; upozornenie o spoplatnenej konzultácii čaká na overenie |
| 8.3 · Údaje kancelárie a mapa | `/kontakt` | `08-kontakt.ts`, `src/lib/site.ts` | Hotové; chýbajúce kontaktné údaje a pokyny k príchodu sú placeholdery |
| 8.4 · Časté otázky | `/caste-otazky` | `faq.ts`, `04-sluzby/*.ts` | Hotové; otázky služieb sa importujú z ich detailov |
| 9.1 · Virtuálna asistentka | Všetky stránky | `09-asistentka-paticka.ts` | Hotové; odpovede sú statické, bez AI, API a textového poľa |
| 9.2 · Pätička, právne stránky, cookies, 404 | Všetky stránky, `/cookies`, `/ochrana-osobnych-udajov` | `01-pravidla.ts`, `09-asistentka-paticka.ts`, `legal.ts` | Hotové; texty právnych zásad čakajú na dodanie |
| 10 · SEO | Všetky indexované stránky | `10-seo.ts` | Hotové; všetky zmerané title sú do 60 znakov a meta popisy do 155 znakov |
| 11 · Údaje na doplnenie | Celý web | `src/lib/site.ts` | Placeholdery pripravené na centrálne doplnenie |

## SEO dĺžky

| URL | Title | Znaky | Meta popis | Znaky |
|---|---|---:|---|---:|
| `/` | Advokát Bratislava a okolie \| JUDr. Ladislav Pavlovič | 53 | Advokátska kancelária v Bratislave a okolí: dopravné nehody, zmluvy, rodinné, obchodné a ďalšie oblasti práva. Dohodnite si konzultáciu. | 136 |
| `/sluzby` | Služby advokátskej kancelárie Bratislava \| JUDr. Pavlovič | 57 | Deväť oblastí práva, ktorým sa venujeme: od dopravných nehôd a zmlúv až po rodinné a kybernetické právo. Dohodnite si konzultáciu. | 130 |
| `/sluzby/dopravne-nehody` | Advokát dopravné nehody Bratislava \| JUDr. Pavlovič | 51 | Pomoc po dopravnej nehode: odškodnenie za ujmu na zdraví, škoda na vozidle a komunikácia s poisťovňou. Dohodnite si konzultáciu. | 128 |
| `/sluzby/obchodne-pravo` | Advokát obchodné právo Bratislava \| JUDr. Pavlovič | 50 | Právne zázemie pre podnikateľov v Bratislave: zmluvy, spoločnosti, vymáhanie pohľadávok a obchodné spory. Dohodnite si konzultáciu. | 131 |
| `/sluzby/obcianske-pravo` | Advokát občianske právo Bratislava \| JUDr. Pavlovič | 51 | Zmluvy, nehnuteľnosti, susedské a majetkové spory, náhrada škody či dedičstvo. Pomôžeme vám v občianskoprávnych veciach. | 120 |
| `/sluzby/rodinne-pravo` | Advokát rodinné právo Bratislava \| JUDr. Pavlovič | 49 | Rozvod, starostlivosť o deti, výživné a vyporiadanie majetku manželov. Pokojne, diskrétne a s ohľadom na deti. Dohodnite si konzultáciu. | 136 |
| `/sluzby/spravne-pravo` | Advokát správne právo Bratislava \| JUDr. Pavlovič | 49 | Odvolanie proti rozhodnutiu úradu, povoľovanie stavieb, priestupky a správna žaloba. Pomôžeme vám v konaní pred úradmi. | 119 |
| `/sluzby/dusevne-vlastnictvo` | Advokát duševné vlastníctvo Bratislava \| JUDr. Pavlovič | 55 | Ochranné známky, autorské právo a licenčné zmluvy. Pomôžeme vám chrániť názov, logo aj tvorivú prácu. Dohodnite si konzultáciu. | 127 |
| `/sluzby/patentove-pravo` | Advokát patentové právo Bratislava \| JUDr. Pavlovič | 51 | Posúdenie vynálezu, patent a úžitkový vzor, licenčné zmluvy a spory. Pomôžeme vám chrániť technické riešenia. Dohodnite si konzultáciu. | 135 |
| `/sluzby/kyberneticke-pravo` | Advokát kybernetické právo Slovensko \| JUDr. Pavlovič | 53 | Kybernetická bezpečnosť, ochrana osobných údajov, únik dát a IT zmluvy. Pomôžeme vašej firme splniť povinnosti. | 111 |
| `/sluzby/trestne-pravo` | Advokát trestné právo Bratislava \| JUDr. Pavlovič | 49 | Obhajoba obvinených a zastupovanie poškodených v trestnom konaní. Poskytujeme iba stálym klientom a po predchádzajúcej dohode. | 126 |
| `/o-mne` | JUDr. Ladislav Pavlovič \| Advokát Bratislava | 44 | JUDr. Ladislav Pavlovič, advokát v Bratislave. Zrozumiteľne, diskrétne a s dôrazom na lehoty. Dohodnite si konzultáciu. | 119 |
| `/nas-tim` | Náš tím \| Advokátska kancelária JUDr. Pavlovič | 46 | Spoznajte ľudí v advokátskej kancelárii JUDr. Ladislava Pavloviča v Bratislave. Každú vec u nás vedie konkrétny advokát. | 120 |
| `/preco-my` | Prečo si vybrať našu kanceláriu \| JUDr. Pavlovič | 48 | Priamy kontakt s advokátom, deväť oblastí práva a pôsobnosť na celom západnom Slovensku. Pozrite si, čo u nás dostanete. | 120 |
| `/kontakt` | Kontakt \| Advokát Bratislava Ružinov \| JUDr. Pavlovič | 53 | Kontakt na advokátsku kanceláriu JUDr. Ladislava Pavloviča, Ivanská cesta 32B, Bratislava Ružinov. Dohodnite si konzultáciu. | 124 |
| `/caste-otazky` | Časté otázky o advokátovi a konzultácii \| JUDr. Pavlovič | 56 | Odpovede na časté otázky o konzultácii s advokátom a o oblastiach práva, ktorým sa venujeme v Bratislave a okolí. | 113 |
| `/ochrana-osobnych-udajov` | Ochrana osobných údajov \| JUDr. Ladislav Pavlovič | 49 | — | — |
| `/cookies` | Zásady používania cookies \| JUDr. Ladislav Pavlovič | 51 | — | — |

## Na overenie s klientom

- **3.3** „Konzultácia je spoplatnená, jej podmienky vám oznámime vopred.“
- **4.3** „Uplatnenie nároku z garančného fondu, ktorý spravuje Slovenská kancelária poisťovateľov.“
- **4.4** „Dlhodobá spolupráca s firmami za individuálne dohodnutých podmienok.“
- **4.4** „Áno, zastupujeme klientov v obchodných sporoch aj pred súdom.“
- **4.4** „Podnikateľom, ktorí potrebujú právne zázemie pravidelne, ponúkame dlhodobú spoluprácu. Podmienky sa dohodnú individuálne.“
- **4.5** „Zastupovanie dedičov a pomoc pri dohode o rozdelení dedičstva.“
- **4.5** „Posúdenie exekúcie a ochrana vašich práv ako spotrebiteľa.“
- **4.6** „Zastupovanie v konaní o určení alebo zapretí otcovstva.“
- **4.6** „Pomoc a sprevádzanie počas konania o osvojení.“
- **4.7** „Zastupovanie v konaniach o pobyte cudzincov a pri daňovej kontrole.“
- **4.8** „Ochrana vzhľadu výrobku zápisom dizajnu.“
- **4.9** „Pripravujeme licenčné a ďalšie zmluvy a pri konaní pred úradom spolupracujeme s patentovými zástupcami.“
- **4.9** „Príprava podkladov a sprevádzanie konaním o udelenie patentu.“
- **4.9** „Zastupovanie alebo koordinácia s patentovým zástupcom.“
- **4.9** „Postup pri porušení patentu alebo úžitkového vzoru.“
- **4.9** „Konanie o udelenie patentu trvá spravidla niekoľko rokov, zápis úžitkového vzoru býva rýchlejší. Presný čas závisí od úradu a od zložitosti riešenia.“
- **4.10** „Obchodné podmienky, informačné povinnosti a ochrana spotrebiteľa.“
- **4.11** „Posúdenie veci a podanie trestného oznámenia.“
- **4.11** „Obhajoba a zastupovanie v konaniach pred Špecializovaným trestným súdom v Banskej Bystrici.“
- **6.3** „Hľadáme advokátov a advokátskych koncipientov, ktorí chcú pracovať na rôznorodých veciach a komunikovať priamo s klientmi.“
- **8.2** „Konzultácia je spoplatnená. Jej podmienky vám oznámime vopred, pri dohadovaní termínu.“
- **8.4** „Áno, konzultácia s advokátom je spoplatnená. Jej podmienky vám oznámime vopred, pri dohadovaní termínu.“
- **8.4** „Venujeme sa deviatim oblastiam práva, ktoré nájdete v sekcii Služby. Ak vaša vec patrí inam, povieme vám to hneď na začiatku.“
- **9.1** „Ozvete sa nám telefonicky alebo cez formulár a dohodneme termín. Na konzultácii prejdeme vašu situáciu, vysvetlíme vám možnosti a navrhneme ďalší postup. Konzultácia je spoplatnená, jej cenu a podmienky vám oznámime vopred.“
