# Mapa textov webu

Stav po verzii 3 (texty schválené klientom). Texty v `src/content` sú doslovne z časti 8 súboru `pavlovic-prompt-v3.md`.
Poradie služieb určuje jediné pole `servicesOrder` v `src/content/02-mapa-webu.ts`. Údaje kancelárie sú v `src/lib/site.ts`,
počet rokov praxe sa počíta automaticky (`{rokyPraxe}` = aktuálny rok − 1990, prepočíta sa pri každom builde).
Značky „overiť“ už neexistujú (`showReviewMarks: false`).

| Blok | Stránka | Zdroj v `src/content` | Stav |
|---|---|---|---|
| 1 · Základné pravidlá | Celý web | `01-pravidla.ts`, `src/lib/site.ts` | Hotové; overené údaje z registrov (telefón, e-mail, IČO, OR, SAK č. 448) |
| 2 · Hlavička a menu | Všetky stránky | `02-mapa-webu.ts`, `services.ts` | Hotové; 7 položiek vrátane Referencií, mobilné menu pod 1280 px, menu Služby 2 × 5 |
| 3.1 · Hero a pás čísel | `/` | `03-uvod.ts`, `components/sections/NumbersStrip.tsx`, `src/lib/site.ts` | Hotové; pod hero je pás čísel (roky praxe, vybavené veci, oblasti, pôsobnosť) namiesto pásu dôvery s ikonami; portrét zatiaľ „Fotografia bude doplnená“ |
| 3.1-referencie · Bublina s referenciami | `/` | `referencie.ts`, `components/sections/HomeTestimonial.tsx`, `TestimonialBubbles.tsx` (variant `sm`) | Hotové; pod pásom čísel, striedajú sa iba vyplnené referencie z `referencie.ts` s odkazom „Všetky referencie →“; kým nie je vyplnená žiadna, sekcia sa nezobrazuje |
| 3.2 · Čomu sa venujeme | `/` | `03-uvod.ts`, `04-sluzby/*.ts` | Hotové; 10 kariet v poradí `servicesOrder`, na desktope 2 stĺpce horizontálne; pás čísel sa na úvode presunul do 3.1 (na `/sluzby` ostáva pod kartami) |
| 3.3 · Ako to prebieha | `/` | `03-uvod.ts` | Hotové; doplnená úvodná veta |
| 3.4 · O pánovi doktorovi | `/` | `03-uvod.ts` | Hotové; doplnená tabuľka 3 faktov |
| 3.5 · Na čom si zakladáme | `/` | `03-uvod.ts` | Hotové |
| 3.6 · Prečo my | `/` | `03-uvod.ts` | Hotové |
| 3.7 · Časté otázky | `/` | `03-uvod.ts` | Hotové |
| 3.8 · Záverná výzva | `/` | `03-uvod.ts` | Hotové |
| 4.1 · Prehľad služieb | `/sluzby` | `04-sluzby/4-1-prehlad.ts` | Hotové |
| 4.3 · Dopravné nehody | `/sluzby/dopravne-nehody` | `04-sluzby/4-3-dopravne-nehody.ts` | Hotové |
| 4.4 · Obchodné právo | `/sluzby/obchodne-pravo` | `04-sluzby/4-4-obchodne-pravo.ts` | Hotové; súvisiace: Duševné vlastníctvo, Pracovné právo |
| 4.5 · Občianske právo | `/sluzby/obcianske-pravo` | `04-sluzby/4-5-obcianske-pravo.ts` | Hotové |
| 4.6 · Rodinné právo | `/sluzby/rodinne-pravo` | `04-sluzby/4-6-rodinne-pravo.ts` | Hotové |
| 4.7 · Správne právo | `/sluzby/spravne-pravo` | `04-sluzby/4-7-spravne-pravo.ts` | Hotové |
| 4.8 · Duševné vlastníctvo | `/sluzby/dusevne-vlastnictvo` | `04-sluzby/4-8-dusevne-vlastnictvo.ts` | Hotové |
| 4.9 · Patentové právo | `/sluzby/patentove-pravo` | `04-sluzby/4-9-patentove-pravo.ts` | Hotové |
| 4.10 · Kybernetické právo | `/sluzby/kyberneticke-pravo` | `04-sluzby/4-10-kyberneticke-pravo.ts` | Hotové |
| 4.11 · Trestné právo | `/sluzby/trestne-pravo` | `04-sluzby/4-11-trestne-pravo.ts` | Hotové; iba pre stálych klientov, ŠTS Pezinok + pracovisko Banská Bystrica |
| **4.12 · Pracovné právo (nové)** | `/sluzby/pracovne-pravo` | `04-sluzby/4-12-pracovne-pravo.ts` | Hotové; bloky 1 – 8, karta, menu, formulár (`?oblast=pracovne-pravo`), FAQ, pätička, asistentka |
| 5.1 · Hero a príbeh | `/o-mne` | `05-o-mne.ts` | Hotové; portrét zatiaľ placeholder |
| 5.2 · Karta faktov | `/o-mne` | `05-o-mne.ts` | Hotové |
| 5.3 · Profesijná dráha a záverná výzva | `/o-mne` | `05-o-mne.ts` | Hotové (1990, 1995, 1995) |
| 6.1 · Úvod tímu | `/nas-tim` | `06-nas-tim.ts` | Hotové |
| 6.2 · Karty tímu | `/nas-tim` | `06-nas-tim.ts` | Člen 1 hotový okrem „Zameranie“; členovia 2 a 3 sú `[DOPLNIŤ]` |
| 6.3 · Pridajte sa k nám a záverná výzva | `/nas-tim` | `06-nas-tim.ts`, `src/lib/site.ts` | Hotové; e-mail pavlovic@lpavlovic.eu |
| 7.1 · Prečo my | `/preco-my` | `07-preco-my.ts` | Hotové |
| **R.1 · Úvod (nové)** | `/referencie` | `referencie.ts` | Hotové |
| **R.2 · Bubliny s referenciami (nové)** | `/referencie` | `referencie.ts`, `components/sections/TestimonialBubbles.tsx` | Komponent hotový; 6 referencií je zatiaľ prázdnych (doplniť `text`, `autor`, `oblast`); po vyplnení sa zobrazia aj v bubline na úvode |
| **R.3 · Záverná výzva (nové)** | `/referencie` | `referencie.ts` | Hotové |
| 8.1 · Úvod stránky | `/kontakt` | `08-kontakt.ts` | Hotové |
| 8.2 · Formulár | `/kontakt#konzultacia` | `08-kontakt.ts` | Hotové; 10 oblastí v poradí `servicesOrder` + „Iné“ |
| 8.3 · Údaje kancelárie a mapa | `/kontakt` | `08-kontakt.ts`, `src/lib/site.ts` | Hotové okrem úradných hodín a popisu príchodu (`[DOPLNIŤ]`) |
| 8.4 · Časté otázky | `/caste-otazky` | `faq.ts`, `04-sluzby/*.ts` | Hotové; Konzultácia a spolupráca + 10 skupín v poradí `servicesOrder` |
| 9.1 · Virtuálna asistentka | Všetky stránky | `09-asistentka-paticka.ts` | Hotové; 7 rýchlych volieb (pribudla „Práca a zamestnanie“) |
| 9.2 · Pätička, cookies, právne stránky | Všetky stránky | `01-pravidla.ts`, `09-asistentka-paticka.ts`, `legal.ts` | Hotové; doplnený riadok Pôsobnosť; texty zásad sú `[DOPLNIŤ]` |
| 10 · SEO | Všetky indexované stránky | `10-seo.ts` + `meta` v content súboroch | Hotové; title do 60 znakov, meta popisy do 155 znakov |

## Ostáva doplniť (`[DOPLNIŤ]` na webe)

- Úradné hodiny (`site.fields.hours`, `hoursSchema`)
- Ako sa k nám dostanete: MHD, parkovanie, vchod a poschodie (`site.fields.directions`)
- Náš tím: zameranie JUDr. Pavloviča, členovia 2 a 3 (meno, funkcia, vzdelanie, zameranie, text)
- Fotografie: portrét a fotky tímu („Fotografia bude doplnená“)
- Texty Ochrany osobných údajov a Zásad cookies
- Referencie (6 položiek v `referencie.ts`; vyplnené sa automaticky zobrazia aj na úvode)

## SEO dĺžky

| URL | Title | Znaky | Meta popis | Znaky |
|---|---|---:|---|---:|
| `/` | Advokát Bratislava a okolie \| JUDr. Ladislav Pavlovič, LL.M. | 60 | Advokátska kancelária v Bratislave a okolí: dopravné nehody, zmluvy, rodinné, obchodné a ďalšie oblasti práva. Dohodnite si konzultáciu. | 136 |
| `/sluzby` | Služby advokátskej kancelárie Bratislava \| JUDr. Pavlovič | 57 | 10 oblastí práva, ktorým sa venujeme: od dopravných nehôd a zmlúv až po rodinné a kybernetické právo. Dohodnite si konzultáciu. | 127 |
| `/sluzby/obchodne-pravo` | Advokát obchodné právo Bratislava \| JUDr. Pavlovič | 50 | Právne zázemie pre podnikateľov v Bratislave: zmluvy, spoločnosti, vymáhanie pohľadávok a obchodné spory. Dohodnite si konzultáciu. | 131 |
| `/sluzby/obcianske-pravo` | Advokát občianske právo Bratislava \| JUDr. Pavlovič | 51 | Zmluvy, nehnuteľnosti, susedské a majetkové spory, náhrada škody či dedičstvo. Pomôžeme Vám v občianskoprávnych veciach. | 120 |
| `/sluzby/dopravne-nehody` | Advokát dopravné nehody Bratislava \| JUDr. Pavlovič | 51 | Pomoc po dopravnej nehode: odškodnenie za ujmu na zdraví, škoda na vozidle a komunikácia s poisťovňou. Dohodnite si konzultáciu. | 128 |
| `/sluzby/rodinne-pravo` | Advokát rodinné právo Bratislava \| JUDr. Pavlovič | 49 | Rozvod, starostlivosť o deti, výživné a vyporiadanie majetku manželov. Pokojne, diskrétne a s ohľadom na deti. Dohodnite si konzultáciu. | 136 |
| `/sluzby/trestne-pravo` | Advokát trestné právo Bratislava \| JUDr. Pavlovič | 49 | Obhajoba obvinených a zastupovanie poškodených v trestnom konaní. Poskytujeme iba stálym klientom a po predchádzajúcej dohode. | 126 |
| `/sluzby/spravne-pravo` | Advokát správne právo Bratislava \| JUDr. Pavlovič | 49 | Odvolanie proti rozhodnutiu úradu, povoľovanie stavieb, priestupky a správna žaloba. Pomôžeme Vám v konaní pred úradmi. | 119 |
| `/sluzby/dusevne-vlastnictvo` | Advokát duševné vlastníctvo Bratislava \| JUDr. Pavlovič | 55 | Ochranné známky, autorské právo a licenčné zmluvy. Pomôžeme Vám chrániť názov, logo aj tvorivú prácu. Dohodnite si konzultáciu. | 127 |
| `/sluzby/patentove-pravo` | Advokát patentové právo Bratislava \| JUDr. Pavlovič | 51 | Posúdenie vynálezu, patent a úžitkový vzor, licenčné zmluvy a spory. Pomôžeme Vám chrániť technické riešenia. Dohodnite si konzultáciu. | 135 |
| `/sluzby/kyberneticke-pravo` | Advokát kybernetické právo Slovensko \| JUDr. Pavlovič | 53 | Kybernetická bezpečnosť, ochrana osobných údajov, únik dát a IT zmluvy. Pomôžeme Vašej firme splniť povinnosti. | 111 |
| `/sluzby/pracovne-pravo` | Advokát pracovné právo Bratislava \| JUDr. Pavlovič | 50 | Výpoveď, neplatné skončenie pracovného pomeru, mzda, odstupné a pracovné zmluvy. Pomôžeme zamestnancom aj zamestnávateľom. | 122 |
| `/o-mne` | JUDr. Ladislav Pavlovič, LL.M. \| Advokát Bratislava | 51 | JUDr. Ladislav Pavlovič, LL.M., advokát v Bratislave. Zrozumiteľne, diskrétne a s dôrazom na lehoty. Dohodnite si konzultáciu. | 126 |
| `/nas-tim` | Náš tím \| Advokátska kancelária JUDr. Pavlovič | 46 | Spoznajte ľudí v advokátskej kancelárii JUDr. Ladislava Pavloviča, LL.M. v Bratislave. Každú vec u nás vedie konkrétny advokát. | 127 |
| `/preco-my` | Prečo si vybrať našu kanceláriu \| JUDr. Pavlovič | 48 | Priamy kontakt s advokátom, 10 oblastí práva a pôsobnosť na celom západnom Slovensku. Pozrite si, čo u nás dostanete. | 117 |
| `/referencie` | Referencie \| Advokátska kancelária JUDr. Pavlovič | 49 | Hodnotenia klientov advokátskej kancelárie JUDr. Ladislava Pavloviča, LL.M. v Bratislave, zverejnené s ich súhlasom. | 116 |
| `/kontakt` | Kontakt \| Advokát Bratislava Ružinov \| JUDr. Pavlovič | 53 | Kontakt na advokátsku kanceláriu JUDr. Ladislava Pavloviča, LL.M., Ivanská cesta 32B, Bratislava Ružinov. Dohodnite si konzultáciu. | 131 |
| `/caste-otazky` | Časté otázky o advokátovi a konzultácii \| JUDr. Pavlovič | 56 | Odpovede na časté otázky o konzultácii s advokátom a o oblastiach práva, ktorým sa venujeme v Bratislave a okolí. | 113 |
| `/ochrana-osobnych-udajov` | Ochrana osobných údajov \| JUDr. Pavlovič | 40 | — | — |
| `/cookies` | Zásady používania cookies \| JUDr. Pavlovič | 42 | — | — |
