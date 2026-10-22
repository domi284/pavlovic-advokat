# PROMPT PRE CLAUDE CODE: Web JUDr. Ladislav Pavlovič, advokát

Si senior frontend developer a webdizajnér. Postav kompletný, prémiový web advokáta podľa tejto špecifikácie. Celá špecifikácia je v tomto jednom dokumente: najprv dizajn a technika (časti A až J), potom presné texty (časť K). Pracuj po fázach v časti J. Po každej fáze skontroluj výsledok a až potom pokračuj. Na konci prejdi kontrolný zoznam v časti J.

---

## A. Najdôležitejšie pravidlá (platia vždy)

1. **Texty sú záväzné.** Všetky texty na webe ber doslovne z časti K. Nič neprepisuj, neskracuj, nevylepšuj a nepridávaj vlastné marketingové vety. Jediné texty navyše, ktoré smieš pridať: čísla sekcií („01“, „02“…), alt texty obrázkov, aria-labely a technické UI prvky (napr. „Menu“, „Zavrieť“).
2. **Jedna oprava v texte:** v sekcii 4.3 zmeň „Zakladám alebo meníte firmu.“ na „**Zakladáte alebo meníte firmu.**“ (zjednotenie osoby). Inak nič nemeň.
3. **Čo z časti K NEzobrazovať:** sekciu „0. Poznámky pre vývoj“ (to sú pravidlá pre teba), riadky začínajúce „Poznámka…“, citácie začínajúce „>“, sekciu „9. Zoznam CTA“ (len referencia), sekciu „10. Otvorené body“ a pri O mne **Verziu B** (použi iba **Verziu A**).
4. **Placeholdery `[DOPLNIŤ: …]`** zobraz ako viditeľný štýlovaný čip (komponent `<Placeholder>`, viď časť F). Všetky kontaktné údaje drž na jednom mieste v `src/lib/site.ts`, aby sa doplnili raz a prepísali všade.
5. **Značka `(OVERIŤ)`** sa nezobrazuje ako text. Namiesto nej vykresli malý čip „overiť“ (komponent `<ReviewMark>`), riadený prepínačom `showReviewMarks: true` v `site.ts`. Keď sa prepne na `false`, čipy zmiznú.
6. **Zakázané:** stock fotky ľudí v oblekoch, váhy spravodlivosti, kladivká, sochy Justície, ceny, slová „zadarmo“, superlatívy, percentá, hodnotenia hviezdičkami, falošné referencie, vymyslené čísla.
7. Jazyk webu: slovenčina (`<html lang="sk">`). Všetky písma musia podporovať diakritiku (subset `latin-ext`).

---

## B. Technológie

- **Next.js 15** (App Router) + **TypeScript** + **Tailwind CSS v4** (tokeny cez `@theme` v `globals.css`)
- **motion** (Framer Motion, import z `motion/react`) na animácie
- **lenis** na plynulý scroll
- **lucide-react** na ikony (tenké, `strokeWidth={1.25}`)
- **react-hook-form + zod** na validáciu formulára (iba klient, bez odosielania)
- **next/font/google** na písma, **next/image** na obrázky
- Nasadenie neskôr na Vercel, takže žiadne serverové závislosti navyše.

Štruktúra:
```
src/
  app/
    layout.tsx, page.tsx, template.tsx, not-found.tsx, globals.css
    dopravne-nehody/page.tsx
    trestne-pravo/page.tsx
    obchodne-pravo/page.tsx
    o-mne/page.tsx
    kontakt/page.tsx
    caste-otazky/page.tsx
    ochrana-osobnych-udajov/page.tsx
    cookies/page.tsx
    sitemap.ts, robots.ts, opengraph-image.tsx, icon.tsx
  components/
    layout/ (Header, Footer, MobileBar, CookieBar, SmoothScroll, Grain)
    ui/ (Button, Placeholder, ReviewMark, Eyebrow, Accordion, Logo, Container)
    motion/ (Reveal, RevealText, ImageReveal, Parallax, DrawLine)
    sections/ (Hero, PageHero, AreaCards, Steps, Principles, FaqList, CtaBand, ChecklistSteps, ServiceList, SituationList, FactsCard, ContactForm)
  content/ (texty po stránkach ako TS objekty, presne z časti K)
  lib/site.ts
public/images/
```
Texty vlož do `src/content/*.ts`, komponenty ich iba vykresľujú. Žiadne texty natvrdo v komponentoch.

---

## C. Farby (smer: antracit + tlmená bordová + kriedovo biela, svetlý web)

Definuj ako CSS premenné a Tailwind tokeny:

| Token | HEX | Použitie |
|---|---|---|
| `--chalk` | `#F6F3EE` | hlavné pozadie stránky |
| `--paper` | `#FBFAF7` | karty, formulár, svetlejšie bloky |
| `--bone` | `#ECE7DF` | striedavé sekcie, pozadie placeholderov obrázkov |
| `--line` | `#DDD6CB` | tenké linky, okraje (1px) |
| `--ink` | `#1C1D20` | nadpisy, hlavný text, tmavé sekcie |
| `--graphite` | `#2B2D32` | tmavé karty v tmavých sekciách, hover tmavých prvkov |
| `--stone` | `#5F5E5B` | sekundárny text, popisky |
| `--bordeaux` | `#6E1E2B` | hlavný akcent: primárne tlačidlá, čísla sekcií, linky, aktívne stavy |
| `--bordeaux-deep` | `#541621` | hover primárneho tlačidla |
| `--bordeaux-soft` | `#F2E8E8` | jemné podfarbenie (čipy, zvýraznenie) |
| `--sand` | `#C8B79F` | akcent na tmavom pozadí (eyebrow, linky, ikony) |

Pravidlá:
- Web je **svetlý**. Tmavé (`--ink`) sú iba: záverný CTA pás na každej stránke, pätička a sekcia „Diskrétnosť“ na Trestnom práve.
- Bordová je **akcent, nie plocha**. Max. 5 až 8 % plochy obrazovky. Nikdy celé bordové sekcie.
- Text `--stone` na `--chalk` a všetky kombinácie musia spĺňať WCAG AA.
- Na tmavom pozadí: text `--chalk`, sekundárny text `rgba(246,243,238,.68)`, akcent `--sand`. Primárne tlačidlo na tmavom = pozadie `--chalk`, text `--ink`.
- Výber textu (`::selection`): pozadie `--bordeaux`, text `--chalk`.

---

## D. Typografia

- **Nadpisy:** `Cormorant Garamond` (500 a 600), subsets `latin`, `latin-ext`
- **Text a UI:** `Manrope` (400, 500, 600), subsets `latin`, `latin-ext`

Škála (fluidná cez `clamp`):
- H1: `clamp(2.75rem, 5.6vw, 5.5rem)`, line-height 1.02, letter-spacing -0.015em, váha 500
- H2: `clamp(2.1rem, 3.6vw, 3.5rem)`, line-height 1.08, váha 500
- H3: `clamp(1.4rem, 1.9vw, 1.75rem)`, Cormorant 600, line-height 1.2
- Text: 17px (mobil 16px), line-height 1.7, farba `--ink` s opacity 0.85; maximálna šírka odseku 64ch
- Podnadpis hero: 19 až 21px, `--stone`
- Eyebrow (číslo + názov sekcie): Manrope 600, 12px, uppercase, letter-spacing 0.18em, `--bordeaux` (na tmavom `--sand`). Formát: `01 — S čím vám môžem pomôcť` (číslo + krátka pomlčka + nadpis sekcie). Eyebrow je malý štítok nad H2, H2 pod ním zostáva v plnom znení.
- Čísla krokov a kariet („01“, „02“, „03“): Cormorant 500, 56 až 72px, `--bordeaux` s opacity 0.9
- Typografické detaily: slovenské úvodzovky „ “, nedeliteľná medzera po jednopísmenových predložkách (v, k, s, z, o, a, i, u), aby nezostávali na konci riadku. Sprav na to utilitu `typo()`, ktorá sa aplikuje na všetky texty z content súborov.

---

## E. Logo (navrhni ako SVG komponent `<Logo />`)

- **Monogram:** štvorec 44×44 px, okraj 1px `currentColor`. Vnútri písmená **„LP“** v Cormorant Garamond 600, ~24px, opticky vycentrované. Písmeno P mierne prekrýva pätku L (ligatúra, ~2px presah), aby pôsobili ako jeden znak.
- **Oddeľovač:** zvislá linka 1px × 32px vo farbe `--bordeaux`, 14px medzera z oboch strán.
- **Wordmark:** 1. riadok „JUDr. Ladislav Pavlovič“ (Cormorant 600, 20px, `--ink`), 2. riadok „ADVOKÁT“ (Manrope 600, 10.5px, uppercase, letter-spacing 0.32em, `--stone`).
- Varianty: `light` (na svetlom) a `dark` (na tmavom: `--chalk`, oddeľovač `--sand`). Na mobile pod 380px zobraz len monogram + 1. riadok.
- **Favicon / icon.tsx:** monogram „LP“ v `--chalk` na štvorci `--bordeaux`.
- **OG obrázok (opengraph-image.tsx, 1200×630):** pozadie `--ink`, vľavo monogram a wordmark v `--chalk`, pod tým „Advokát · Bratislava“ v `--sand`, jemná linka `--bordeaux`.

---

## F. Layout a komponenty

**Mriežka:** kontajner max 1280px, bočný okraj 20px (mobil), 40px (tablet), 64px (desktop). Vertikálne medzery sekcií: `py-24 md:py-32 lg:py-40`. Rohy takmer ostré: `border-radius: 2px` (tlačidlá, karty, inputy). Prémiový dojem robí vzduch, tenké linky a typografia, nie tiene. Tiene iba veľmi jemné (`0 1px 2px rgba(28,29,32,.04)`).

**Zrnitosť (Grain):** celý web prekry fixnou vrstvou jemného SVG šumu (feTurbulence), opacity 0.035, `pointer-events: none`. Dodá papierovú textúru.

**Tlačidlá (`<Button>`):**
- Primárne: pozadie `--bordeaux`, text `--chalk`, výška 52px, px 28px, Manrope 600 15px, letter-spacing 0.01em. Hover: zľava sa vysunie výplň `--bordeaux-deep` (pseudo-element, `scaleX 0→1`, 0.45s), šípka sa posunie o 4px doprava.
- Sekundárne: priehľadné, okraj 1px `--ink`, text `--ink`. Hover: výplň `--ink`, text `--chalk`.
- Na tmavom: primárne `--chalk`/`--ink`, sekundárne okraj `rgba(246,243,238,.4)`.
- Tlačidlo „Zavolať“ má ikonu `Phone` (lucide), ostatné CTA šípku `ArrowRight`.
- Textové odkazy („Dopravné nehody →“): podčiarknutie 1px `--bordeaux`, ktoré pri hoveri narastie zľava doprava.

**`<Placeholder>`:** inline čip, okraj 1px dashed `--bordeaux`, pozadie `--bordeaux-soft`, text `--bordeaux`, Manrope 500 0.85em, px 8 py 2. Zobrazí obsah v hranatých zátvorkách, napr. „DOPLNIŤ: telefón“. Odkazy `tel:` a `mailto:` s placeholderom smerujú na `#` a majú `aria-disabled`.

**`<ReviewMark>`:** malý čip „overiť“ (10px, uppercase, okraj dashed `--stone`, text `--stone`) za príslušným textom.

**Hlavička (`Header`):**
- Výška 84px (po scrollnutí 68px). Vľavo Logo, v strede menu (Úvod · Dopravné nehody · Trestné právo · Obchodné právo · O mne · Kontakt), vpravo tlačidlo „Zavolať“ (sekundárne, s ikonou).
- Na vrchu stránky priehľadná. Po 40px scrollu: pozadie `rgba(246,243,238,.86)` + `backdrop-blur(12px)` + spodná linka `--line`. Pri scrolle nadol sa skryje (translateY -100%), pri scrolle nahor sa vráti. Prechody 0.35s.
- Aktívna položka menu: tenká bordová linka 1px pod textom.
- Mobil (pod 1024px): Logo + ikona menu. Menu je fullscreen overlay `--chalk`, položky v Cormorant 36px pod sebou, objavujú sa so stagger 0.06s, dole kontakt a tlačidlo „Zavolať“.

**Mobilná dolná lišta (`MobileBar`, iba pod 768px):** fixná dole, dve tlačidlá rovnakej šírky: „Zavolať“ (primárne) a „Napísať“ (sekundárne, vedie na `/kontakt#konzultacia`). Pozadie `--paper`, horná linka, safe-area padding. Objaví sa (slide-up) až po scrollnutí za hero. Skryje sa, keď je vo viewporte formulár alebo pätička.

**Pätička:** pozadie `--ink`, text `--chalk`. Horný riadok: Logo (dark) vľavo, navigácia vpravo. Pod tým 3 stĺpce: údaje kancelárie (text zo sekcie 8), odkazy (Ochrana osobných údajov · Cookies · Kontakt · Časté otázky), upozornenie (text „Upozornenie“ zo sekcie 8, menším písmom, opacity 0.6). Úplne dole linka a „© {aktuálny rok} Advokátska kancelária JUDr. Ladislav Pavlovič s. r. o.“.

**Cookies lišta:** vľavo dole, karta max 420px, `--paper`, okraj `--line`. Text a tlačidlá zo sekcie 8. Voľba sa uloží do localStorage, lišta sa už neukáže. Analytiku zatiaľ nenapájaj, priprav len funkciu `hasAnalyticsConsent()`.

**404:** texty zo sekcie 8, veľké „404“ v Cormorant 160px s opacity 0.08 za nadpisom.

---

## G. Animácie (úroveň: stredná, elegantná, nič nepreskakuje)

Spoločné: easing `[0.22, 1, 0.36, 1]`, animácie sa spúšťajú raz (`once: true`) pri vstupe do viewportu (`amount: 0.2`). Pri `prefers-reduced-motion: reduce` vypni Lenis, parallax a pohyby; ponechaj iba okamžité zobrazenie (opacity bez posunu).

1. **Plynulý scroll (Lenis):** `duration 1.15`, napojený na anchor odkazy (`#konzultacia`) s offsetom podľa výšky hlavičky.
2. **RevealText (H1 a H2):** text rozdeľ na slová, každé slovo v `span` s `overflow: hidden`, vnútorný `span` ide z `y: 110%` na `0`, duration 0.9s, stagger 0.045s. Pri H1 v hero sa spustí po načítaní (delay 0.15s).
3. **Reveal (odseky, karty, zoznamy):** `opacity 0→1`, `y 24→0`, 0.7s. Položky zoznamov a karty so stagger 0.08s.
4. **ImageReveal:** obrázky sa odkryjú `clip-path: inset(100% 0 0 0) → inset(0 0 0 0)` (1.2s) a zároveň `scale 1.12 → 1` (1.6s).
5. **Parallax:** hero obrázok a veľké obrázky sa pri scrolle posúvajú `y` z -6 % na 6 % (useScroll + useTransform). Obrázok má výšku 112 % kontajnera, aby nevznikli medzery.
6. **DrawLine (kroky „Ako to prebieha“):** horizontálna linka (na mobile vertikálna) medzi krokmi sa vykreslí `pathLength 0→1` pri scrolle, čísla krokov sa objavia postupne so stagger 0.15s.
7. **Karty oblastí (hover):** obrázok `scale 1.05` (0.8s), spodná bordová linka sa roztiahne `scaleX 0→1`, šípka sa posunie o 6px, číslo karty zmení farbu na `--bordeaux`.
8. **Akordeón FAQ:** plynulá výška (`height: auto` cez motion), ikona „+“ sa otočí o 45° na „×“, otvorená otázka dostane bordovú linku vľavo (2px). Naraz môže byť otvorená len jedna.
9. **Hlavička:** skrývanie a zobrazovanie podľa smeru scrollu (viď F).
10. **Prechod stránok (`template.tsx`):** obsah `opacity 0→1`, `y 12→0`, 0.45s.
11. **Odkazy a tlačidlá:** viď F (výplň zľava, podčiarknutie zľava).
12. **Hero úvod:** po načítaní postupne: eyebrow (0s) → H1 slovo po slove → podnadpis (0.5s) → tlačidlá (0.65s) → riadok pod tlačidlami (0.8s) → obrázok ImageReveal (0.2s, paralelne).

Animácie nesmú spôsobovať layout shift. Používaj iba `transform`, `opacity`, `clip-path`.

---

## H. Obrázky

**Štýl všetkých fotiek (dôležité pre jednotný prémiový dojem):** tlmené, tmavšie, s mäkkým prirodzeným svetlom, bez ľudských tvárí. Na všetky fotky aplikuj jednotnú úpravu cez CSS: `filter: grayscale(0.85) contrast(1.05) brightness(0.92)` a cez ne prekrytie `--ink` s `mix-blend-mode: multiply` a opacity 0.12. Tým vznikne jednotná „editorial“ paleta aj z rôznych zdrojov.

**Zdroj:** Unsplash (bezplatná licencia). Pre každý slot nižšie vyhľadaj na unsplash.com fotku podľa popisu a kľúčových slov, stiahni ju do `public/images/` pod daným názvom vo veľkosti aspoň 2400px na dlhšej strane a autora zapíš do `public/images/CREDITS.md`. **Ak nemáš prístup na internet,** vytvor pre slot elegantný náhradný blok: pozadie `--bone`, jemný gradient do `--line`, zrnitosť, v strede monogram „LP“ s opacity 0.15 a malý popis slotu (napr. „hero-uvod.jpg: stôl, pero, dokumenty“). Komponent musí automaticky použiť fotku, keď sa súbor objaví.

| Súbor | Kde | Pomer | Čo má byť na fotke | Kľúčové slová Unsplash |
|---|---|---|---|---|
| `hero-uvod.jpg` | Úvod, hero vpravo | 4:5 | detail tmavého dreveného stola, plniace pero, papiere/desky, svetlo z okna, veľa tieňa | fountain pen desk dark, documents desk light, writing desk shadow |
| `oblast-nehody.jpg` | Karta 1 + hero Dopravné nehody | 3:2 | mestská cesta za súmraku alebo v noci, svetelné stopy áut, bez nehody a bez krvi | city road dusk, light trails street, highway night |
| `oblast-trestne.jpg` | Karta 2 + hero Trestné právo | 3:2 | kamenná architektúra, stĺpy, schodisko inštitúcie, ostré tiene | stone columns shadow, courthouse stairs, classical architecture |
| `oblast-obchodne.jpg` | Karta 3 + hero Obchodné právo | 3:2 | moderná kancelárska architektúra, sklo a betón, alebo detail podpisu dokumentu (iba ruka a pero) | modern office architecture, signing contract pen, glass building minimal |
| `kniznica.jpg` | Úvod sekcia 1.5 + O mne | 16:9 | regál s knihami, rozostrené, teplé svetlo | law books shelf, bookshelf blur, library warm |
| `kancelaria-detail.jpg` | Kontakt | 4:3 | detail interiéru kancelárie, kožené kreslo alebo dvere, svetlo | office interior detail, leather chair, office door light |
| `textura-kamen.jpg` | jemné pozadie CTA pásu (opacity 0.08) | 16:9 | textúra tmavého kameňa / mramoru | dark marble texture, stone texture |

**Portrét advokáta (`portret.jpg`, 4:5) a foto kancelárie:** zatiaľ ich nemáme. Vytvor elegantný placeholder rovnakého pomeru: pozadie `--bone`, tenký vnútorný rám 1px `--line` s odsadením 16px, v strede monogram „LP“ a text „[DOPLNIŤ: portrét JUDr. Pavloviča]“ ako `<Placeholder>`. Použi ho na Úvode (sekcia 1.4) a na O mne.

Všetky obrázky cez `next/image`, `sizes` správne nastavené, hero s `priority`. Alt texty po slovensky a vecne (napr. „Detail pracovného stola s perom a dokumentmi“).

---

## I. Stránky: rozloženie sekcií

Každá podstránka má: hlavičku, obsah, záverný CTA pás (tmavý), pätičku. Texty z časti K, v uvedenom poradí.

### Úvod `/`
1. **Hero (1.1):** dvojstĺpec 7/5 na `--chalk`. Vľavo: eyebrow „Advokát · Bratislava“ (jediný povolený text navyše, je to podnadpis z 1.4), H1, podnadpis, dve tlačidlá vedľa seba, pod nimi riadok s kanceláriou (`--stone`, 14px, pred ním 24px bordová linka). Vpravo: `hero-uvod.jpg` 4:5 s parallaxom a ImageReveal, vľavo od fotky tenká zvislá bordová linka 1px. Výška hero `min-height: 92vh` na desktope.
   Pod hero: pás s tromi bodmi v jednom riadku oddelenými zvislými linkami `--line`, pred každým malá ikona (`Clock3`, `MessageSquare`, `ShieldCheck`, stroke 1.25, `--bordeaux`). Na mobile pod sebou.
2. **Rozcestník (1.2):** eyebrow `01`, H2 + úvod vľavo. Tri karty v rade (mobil pod sebou): fotka 3:2 hore, pod ňou veľké číslo „01/02/03“, H3, text, odkaz. Hover viď G7. Celá karta je klikateľná.
3. **Ako spolupráca prebieha (1.3):** eyebrow `02`, pozadie `--bone`. Tri kroky v rade s DrawLine linkou medzi číslami, pod tým tlačidlo.
4. **O advokátovi (1.4):** eyebrow `03`. Vľavo portrét placeholder 4:5, vpravo H2 (meno), podnadpis, text v Cormorant 26px ako citát s veľkou bordovou úvodzovkou „ (dekoratívna, `aria-hidden`), odkaz.
5. **Ako pracujem (1.5):** eyebrow `04`. Mriežka 2×2 (mobil 1 stĺpec), každá položka: tenká horná linka, tučný názov v Cormorant 24px, text. Vedľa mriežky (desktop) úzka fotka `kniznica.jpg` s parallaxom.
6. **Časté otázky (1.6):** eyebrow `05`. Akordeón s 3 otázkami, odpovede natiahni z príslušných podstránok (rovnaký content objekt, nie kópia textu). Odkaz na všetky otázky.
7. **Záverný CTA pás (1.7):** tmavý `--ink` s textúrou kameňa (opacity 0.08), H2 v `--chalk`, text, dve tlačidlá. Veľký monogram „LP“ v pozadí vpravo s opacity 0.04.

### Podstránky oblastí (`/dopravne-nehody`, `/trestne-pravo`, `/obchodne-pravo`)
Spoločná šablóna, poradie sekcií presne podľa časti K:
- **PageHero:** dvojstĺpec, vľavo malá navigácia (Úvod / názov oblasti) v 13px, H1, podnadpis, tlačidlá. Vpravo príslušná fotka oblasti 4:5 výrez s parallaxom. Výška ~78vh.
- **Checklist „Čo robiť…“ (2.2, 3.2):** číslovaný zoznam ako vertikálna časová os: vľavo číslo v kruhu 40px (okraj 1px `--bordeaux`), vertikálna linka DrawLine, vpravo tučný začiatok + text. Pozadie `--paper` karta s okrajom. Pod ním odkaz.
- **Úvodný text (3.2a, 4.2):** H2 vľavo (5 stĺpcov), text vpravo (7 stĺpcov), väčšie písmo 19px.
- **S čím vám pomôžem (2.3, 3.3, 4.3):** zoznam služieb ako riadky oddelené linkami `--line`: vľavo číslo „01…“, v strede tučný názov (Cormorant 24px), vpravo text. Hover riadku: pozadie `--paper`, posun o 8px.
- **Kedy ma osloviť (2.4):** situácie ako karty 3×2 (mobil 1 stĺpec) na `--bone`, každá s ikonou `CornerDownRight` a textom v Cormorant 22px. Pod nimi tlačidlo.
- **Diskrétnosť (3.4):** tmavá sekcia `--ink` (výnimka), veľký text v Cormorant 34px, ikona `Lock` v `--sand`.
- **Ako to prebieha (2.5, 3.5, 4.4):** rovnaký komponent ako na úvode.
- **FAQ (2.6, 3.6, 4.5):** dvojstĺpec: vľavo sticky H2 „Často kladené otázky“, vpravo akordeón.
- **Záverný CTA.**

### O mne `/o-mne`
- Hero: H1 + podnadpis vľavo, portrét placeholder vpravo.
- Text Verzie A v jednom stĺpci (max 64ch) s väčším prvým odsekom (21px, Cormorant). Vedľa (desktop, sticky) karta **Fakty** na `--paper`: riadky s popisom (`--stone`, 12px uppercase) a hodnotou, placeholdery ako čipy.
- Fotka `kniznica.jpg` široká s parallaxom.
- Záverný CTA.

### Kontakt `/kontakt`
- H1 + podnadpis.
- Dvojstĺpec: vľavo údaje (každá položka: popis 12px uppercase `--stone` + hodnota 20px Cormorant; telefón a e-mail ako odkazy), pod nimi `kancelaria-detail.jpg` a mapa (Google Maps embed na „Ivanská cesta 32B, 821 04 Bratislava“, `loading="lazy"`, CSS `filter: grayscale(1) contrast(1.05)`, výška 360px). Vpravo formulár v karte `--paper` s `id="konzultacia"`.
- **Formulár:** polia presne podľa sekcie 6, labely nad poliami, inputy výška 52px, okraj 1px `--line`, focus okraj `--bordeaux` + jemný ring. Výber oblasti ako 4 „pills“ (radio). Ak používateľ príde z podstránky oblasti, predvyber oblasť cez query `?oblast=nehody|trestne|obchodne`. Všetky CTA „Dohodnúť konzultáciu…“ z podstránok vedú na `/kontakt?oblast=…#konzultacia`. Validácia so slovenskými hláškami zo sekcie 6. **Odosielanie zatiaľ len simuluj:** 1.2s loading stav na tlačidle (spinner), potom úspešná hláška s animáciou (ikona `Check` v kruhu). Kód priprav tak, aby sa dala neskôr doplniť funkcia `submitInquiry()`.

### Časté otázky `/caste-otazky`
- H1, pod ním sticky lišta so 4 skupinami (kotvy), aktívna skupina sa zvýrazní podľa scrollu.
- Skupiny v poradí: Konzultácia a spolupráca · Dopravné nehody · Trestné právo · Obchodné právo. Otázky oblastí ber z rovnakých content objektov ako podstránky.
- Pridaj `FAQPage` schema JSON-LD.

### Ochrana osobných údajov a Cookies
Texty nemáme, nevymýšľaj ich. Stránka má H1 („Ochrana osobných údajov“ / „Zásady používania cookies“), pod ním `<Placeholder>` „DOPLNIŤ: text zásad pripraví advokátska kancelária“ a štruktúru nadpisov H2 bez obsahu: Prevádzkovateľ · Účel a právny základ spracúvania · Doba uchovávania · Vaše práva · Kontakt (pri cookies: Čo sú cookies · Aké cookies používame · Ako zmeniť súhlas). Pod každým H2 placeholder čip. `robots: noindex` zatiaľ nie, nechaj indexovateľné.

### SEO a technika
- Pre každú stránku `metadata` s title a description presne z časti K, canonical, Open Graph.
- `sitemap.ts`, `robots.ts`.
- JSON-LD v layoute: `LegalService` + `Attorney` (meno, adresa Ivanská cesta 32B, 821 04 Bratislava, krajina SK, telefón a hodiny z `site.ts`, ak sú vyplnené).
- Jedno H1 na stránku, sémantické `<section>` s `aria-labelledby`.
- Prístupnosť: viditeľný focus (2px `--bordeaux` outline, offset 3px), skip link „Preskočiť na obsah“, ovládanie klávesnicou (menu, akordeón, formulár), kontrast AA.
- Výkon: Lighthouse 90+ vo všetkých kategóriách na mobile, žiadny CLS z animácií a fontov.

---

## J. Postup a kontrola

**Fázy (každú dokonči, spusti `npm run dev`, skontroluj, potom pokračuj):**
1. Setup projektu, tokeny (C, D), fonty, `site.ts`, content súbory so všetkými textmi z časti K.
2. UI komponenty (Button, Placeholder, ReviewMark, Logo, Eyebrow, Accordion) a motion komponenty (G).
3. Layout: Header, mobilné menu, MobileBar, Footer, CookieBar, Grain, SmoothScroll, template.tsx.
4. Úvodná stránka.
5. Tri podstránky oblastí.
6. O mne, Kontakt (s formulárom), Časté otázky, právne stránky, 404.
7. Obrázky (H), SEO, JSON-LD, sitemap, OG, favicon.
8. Kontrola a doladenie.

**Kontrolný zoznam na konci (prejdi ho a oprav, čo nesedí):**
- [ ] Každý text na webe sa zhoduje s časťou K (okrem jednej opravy v 4.3). Nič nechýba, nič nie je navyše.
- [ ] Žiadna z vecí v A6 sa na webe nenachádza.
- [ ] Verzia B na O mne nie je použitá, interné poznámky sa nezobrazujú.
- [ ] Všetky `[DOPLNIŤ]` sú viditeľné čipy a menia sa na jednom mieste v `site.ts`.
- [ ] Bordová tvorí len akcenty, web pôsobí svetlo a pokojne.
- [ ] Všetky CTA „Dohodnúť konzultáciu“ vedú na formulár, „Zavolať“ na `tel:`.
- [ ] Mobil (375px), tablet (768px) a desktop (1440px) vyzerajú čisto, nič nepretéka, mobilná lišta neprekrýva obsah (spodný padding stránky).
- [ ] Animácie sú plynulé, nič neskáče, reduced motion funguje.
- [ ] `npm run build` prejde bez chýb a warningov.

Na konci mi napíš krátky súhrn: čo je hotové, ktoré obrázky si stiahol (a od koho) a ktoré sloty zostali ako placeholder.

---

## K. PRESNÉ TEXTY WEBU (záväzné, ber doslovne)

~~~~markdown
# Web JUDr. Ladislav Pavlovič: kompletný obsah (verzia 1 na ukážku)

> Pracovný obsah na prvú ukážku pred stretnutím. Texty sú originálne, písané podľa princípov referenčných webov (štruktúra, poradie, tón). Nič nie je kopírované.

## 0. Poznámky pre vývoj (Claude Code)

**Značky v texte**
- `[DOPLNIŤ: …]` = údaj, ktorý musí dodať Pavlovič (telefón, e-mail, IČO, hodiny…). V návrhu zobraziť ako viditeľný placeholder.
- Texty označené `(OVERIŤ)` sú vecne bezpečné, ale ich platnosť pre Pavlovičovu prax potvrdí on.

**Pravidlá tónu (dodržať pri každej úprave)**
- Vykanie, pokojný a vecný tón, bez strašenia a bez slangu.
- Prvá osoba jednotného čísla („pomôžem vám“), web stojí na osobe advokáta.
- Žiadne superlatívy („najlepší“), porovnávanie s inými, garancie, percentá úspešnosti, sumy ani slová „zadarmo“ / „bez poplatku“.
- Cenu neuvádzať. Hlavné CTA je vždy „Dohodnúť konzultáciu“.
- Žiadne stock fotky ľudí v oblekoch ani váhy spravodlivosti.

**Štruktúra stránok**
`/` · `/dopravne-nehody` · `/trestne-pravo` · `/obchodne-pravo` · `/o-mne` · `/kontakt` · `/caste-otazky` · `/ochrana-osobnych-udajov` · `/cookies`

**Pevné prvky na každej stránke**
- Hlavička: logo (text „JUDr. Ladislav Pavlovič · advokát“), menu, tlačidlo „Zavolať“.
- Mobil: dolná lišta s dvoma tlačidlami „Zavolať“ a „Napísať“.
- Pätička: údaje kancelárie + upozornenie (viď sekciu 8).
- Schema.org: `LegalService` / `Attorney`, adresa, telefón, hodiny.

---

## 1. Úvodná stránka `/`

**SEO title:** Advokát Bratislava Ružinov | JUDr. Ladislav Pavlovič
**Meta description:** Advokátska kancelária v Bratislave: dopravné nehody, trestné právo a obchodné právo. Dohodnite si konzultáciu s JUDr. Ladislavom Pavlovičom.

### 1.1 Hero
**H1:** Advokát v Bratislave pre dopravné nehody, trestné a obchodné právo
**Podnadpis:** Vysvetlím vám, v akej ste situácii, aké máte možnosti a aký je ďalší krok. Vecne, diskrétne a zrozumiteľne.
**Primárne tlačidlo:** Dohodnúť konzultáciu → `/kontakt#konzultacia`
**Sekundárne tlačidlo:** Zavolať [DOPLNIŤ: telefón] → `tel:`
**Riadok pod tlačidlami:** Advokátska kancelária JUDr. Ladislav Pavlovič s. r. o. · Ružinov, Bratislava
**Tri krátke body pod hero:**
- Dlhoročné skúsenosti v advokácii
- Priama komunikácia s advokátom
- Povinná mlčanlivosť zo zákona

### 1.2 Rozcestník: S čím vám môžem pomôcť
**Nadpis sekcie:** S čím vám môžem pomôcť
**Úvod:** Vyberte situáciu, ktorá je vám najbližšia.

**Karta 1**
- Nadpis: Mali ste dopravnú nehodu
- Text: Pomôžem vám uplatniť nároky voči poisťovni a zodpovednej osobe, od zdravia až po škodu na vozidle.
- Odkaz: Dopravné nehody →

**Karta 2**
- Nadpis: Čelíte trestnému konaniu
- Text: Zastupujem obvinených aj poškodených, od prvého kontaktu s políciou až po súd. Diskrétne a bez poučovania.
- Odkaz: Trestné právo →

**Karta 3**
- Nadpis: Riešite zmluvu, spor alebo firmu
- Text: Právne zázemie pre podnikateľov: zmluvy, spoločnosti, pohľadávky a obchodné spory.
- Odkaz: Obchodné právo →

### 1.3 Ako to prebieha
**Nadpis:** Ako spolupráca prebieha
1. **Ozvete sa mi.** Zavoláte alebo napíšete a stručne opíšete, čo sa stalo. Nemusíte poznať právne pojmy.
2. **Prvá konzultácia.** Prejdeme vašu situáciu, vysvetlím vám možnosti a navrhnem ďalší postup.
3. **Postup a zastupovanie.** Ak sa dohodneme na spolupráci, postarám sa o komunikáciu, listiny a lehoty, aby ste sa mohli venovať svojmu životu.
**Tlačidlo:** Dohodnúť konzultáciu

### 1.4 O advokátovi (náhľad)
**Nadpis:** JUDr. Ladislav Pavlovič
**Podnadpis:** Advokát · Bratislava
**Text:** Advokácii sa venujem dlhodobo a mám za sebou dlhoročné skúsenosti v dopravných nehodách, trestnom a obchodnom práve. Pri každej veci vychádzam z toho, že klient chce predovšetkým jasnú odpoveď: kde stojí, čo ho čaká a čo je vhodné urobiť teraz.
**Odkaz:** Viac o mne →

### 1.5 Na čom si zakladám
**Nadpis:** Ako pracujem
- **Zrozumiteľne.** Právnu situáciu vám vysvetlím jazykom, ktorému rozumiete, bez zbytočného žargónu.
- **Diskrétne.** Všetko, čo mi povierite, je chránené povinnou mlčanlivosťou advokáta.
- **Zodpovedne.** Dohodnuté termíny a lehoty sledujem sám, aby sa nič nepremeškalo.
- **Priamo.** Komunikujete s advokátom, ktorý vašu vec rieši.

### 1.6 Časté otázky (náhľad, 3 otázky)
**Nadpis:** Časté otázky
- Mám nárok na odškodnenie, ak som nehodu čiastočne zavinil aj ja? (odpoveď z `/dopravne-nehody`)
- Musím na polícii vypovedať? (odpoveď z `/trestne-pravo`)
- Potrebujem advokáta pri každej zmluve? (odpoveď z `/obchodne-pravo`)
**Odkaz:** Všetky otázky a odpovede →

### 1.7 Záverný CTA pás
**Nadpis:** Neviete, ako ďalej? Opíšte mi situáciu.
**Text:** Povedzte mi, čo riešite. Poviem vám, aké máte možnosti a aký je rozumný ďalší krok.
**Tlačidlá:** Dohodnúť konzultáciu · Zavolať [DOPLNIŤ: telefón]

---

## 2. Dopravné nehody `/dopravne-nehody`

**SEO title:** Advokát dopravné nehody Bratislava | JUDr. Pavlovič
**Meta description:** Pomoc po dopravnej nehode v Bratislave: odškodnenie za ujmu na zdraví, škoda na vozidle, komunikácia s poisťovňou. Dohodnite si konzultáciu.

### 2.1 Hero
**H1:** Advokát pre dopravné nehody v Bratislave
**Podnadpis:** Po nehode sa naraz rieši zdravie, auto, poisťovňa aj doklady. Pomôžem vám zorientovať sa a uplatniť vaše nároky.
**Tlačidlá:** Dohodnúť konzultáciu k nehode · Zavolať [DOPLNIŤ: telefón]

### 2.2 Čo robiť hneď po nehode
**Nadpis:** Čo robiť hneď po dopravnej nehode
1. **Zdravie a bezpečnosť na prvom mieste.** Pri zranení volajte záchranku (155 alebo 112) a zabezpečte miesto nehody.
2. **Privolajte políciu (158).** Pri zranení alebo väčšej škode je to nevyhnutné.
3. **Zdokumentujte situáciu.** Odfoťte vozidlá, ich polohu, poškodenie a okolie. Zapíšte si údaje druhého vodiča a kontakty svedkov.
4. **Nepodpisujte to, čomu nerozumiete.** Pred podpisom vyhlásenia o vine alebo dohody sa poraďte.
5. **Dajte sa vyšetriť.** Aj pri „drobnom“ zranení, následky sa môžu prejaviť neskôr.
6. **Uschovajte všetky doklady.** Lekárske správy, faktúry, potvrdenia o práceneschopnosti, komunikáciu s poisťovňou.
**Odkaz:** Máte otázky k vašej situácii? Dohodnúť konzultáciu →

### 2.3 S čím vám pomôžem
**Nadpis:** S čím vám pomôžem
- **Odškodnenie za ujmu na zdraví.** Bolestné, sťaženie spoločenského uplatnenia, náklady na liečenie a strata na zárobku.
- **Škoda na vozidle a majetku.** Uplatnenie nároku a posúdenie vyčíslenia škody.
- **Komunikácia s poisťovňou.** Podanie nároku, posúdenie vyjadrení a ponúk poisťovne, odvolanie voči rozhodnutiu.
- **Spor o zavinenie.** Keď poisťovňa alebo druhá strana spochybňuje priebeh nehody.
- **Pomoc pozostalým.** Nároky blízkych osôb po smrteľnej nehode.
- **Trestné konanie po nehode.** Zastupovanie poškodeného, ale aj vodiča, voči ktorému sa vedie trestné konanie. Viac na stránke Trestné právo.

### 2.4 Kedy ma osloviť
**Nadpis:** Kedy sa mi oplatí ozvať
- Neviem, či mám nárok na odškodnenie.
- Poisťovňa mi ponúkla plnenie a neviem, či je primerané.
- Poisťovňa tvrdí, že nehodu som zavinil/a ja.
- Nehodu spôsobil vodič, ktorého sa nepodarilo zistiť.
- Môj blízky sa pri nehode zranil alebo zomrel.
- Poisťovňa mi plnenie odmietla alebo skrátila.
**Tlačidlo:** Opísať mi situáciu

### 2.5 Ako to prebieha
1. **Opíšete mi, čo sa stalo.** Zavoláte alebo napíšete. Stačí stručne.
2. **Posúdim vašu situáciu.** Vysvetlím vám možnosti, lehoty a ďalší postup.
3. **Postupujem podľa dohody.** Komunikácia s poisťovňou, zhromaždenie dokladov a, ak je to potrebné, konanie na súde.

### 2.6 Často kladené otázky
**Mám nárok na odškodnenie, ak som nehodu čiastočne zavinil aj ja?**
Spoluzavinenie nárok automaticky nevylučuje, no môže ovplyvniť jeho výšku. Všetko závisí od okolností nehody, preto je vhodné posúdiť konkrétnu situáciu.

**Môžem sa obrátiť priamo na poisťovňu druhého vodiča?**
Áno, poškodený môže svoj nárok spravidla uplatniť priamo voči poisťovni, u ktorej je zodpovedný vodič poistený v rámci povinného zmluvného poistenia.

**Poisťovňa mi ponúkla odškodné. Mám ho prijať?**
Odporúčam ponuku pred prijatím posúdiť, najmä pri zraneniach, pri ktorých sa všetky následky nemusia ešte prejaviť. Po podpise dohody sa na ňu už ťažko vracia.

**Aké škody môžem uplatniť?**
Podľa okolností ide o škodu na vozidle a majetku, náklady na liečenie, bolestné, sťaženie spoločenského uplatnenia, stratu na zárobku. Pri smrteľnej nehode vznikajú nároky aj blízkym osobám.

**Dokedy musím nárok uplatniť?**
Nároky sa premlčujú a lehoty sa môžu líšiť podľa druhu nároku. Preto s riešením neodkladajte.

**Čo ak vinník ušiel alebo nemá poistenie?**
Aj v takom prípade môžu existovať spôsoby, ako nárok uplatniť. Záleží na konkrétnych okolnostiach nehody.

### 2.7 Záverný CTA
**Nadpis:** Po nehode nemusíte všetko riešiť sami
**Text:** Opíšte mi, čo sa stalo. Poviem vám, aké máte možnosti.
**Tlačidlá:** Dohodnúť konzultáciu k nehode · Zavolať [DOPLNIŤ: telefón]

---

## 3. Trestné právo `/trestne-pravo`

**SEO title:** Advokát trestné právo Bratislava | JUDr. Pavlovič
**Meta description:** Obhajoba obvinených a zastupovanie poškodených v trestnom konaní v Bratislave. Diskrétne, vecne a zrozumiteľne. Dohodnite si konzultáciu.

### 3.1 Hero
**H1:** Advokát pre trestné právo v Bratislave
**Podnadpis:** Trestné konanie je pre každého náročné. Pomôžem vám zorientovať sa, chrániť vaše práva a postupovať premyslene. Diskrétne a bez poučovania.
**Tlačidlá:** Dohodnúť diskrétnu konzultáciu · Zavolať [DOPLNIŤ: telefón]

### 3.2 Čo robiť pri predvolaní alebo zadržaní
**Nadpis:** Čo robiť, keď vás predvolá polícia alebo vás zadržia
1. **Zachovajte pokoj.** Vyjadrenia v strese sa neskôr ťažko menia.
2. **Zistite svoje postavenie.** Pýtajte sa, či ste volaný ako svedok, podozrivý alebo obvinený. Od toho závisia vaše práva.
3. **Máte právo na obhajcu.** Poraďte sa s advokátom skôr, ako sa podrobne vyjadríte.
4. **Obvinený má právo odoprieť výpoveď.** Pri svedeckej výpovedi platia iné pravidlá.
5. **Nepodpisujte protokol bez prečítania.** Podpisujete len to, čomu rozumiete a s čím súhlasíte.
**Odkaz:** Potrebujete sa poradiť? Dohodnúť konzultáciu →

### 3.2a Úvod
**Nadpis:** Obhajoba a zastupovanie v trestnom konaní
**Text:** V trestnom konaní ide o dôležité veci: o povesť, rodinu, prácu a niekedy aj o slobodu. Vediem obhajobu obvinených a zastupujem poškodených v celom priebehu konania. Pri každom prípade začínam rovnako: pozorne vás vypočujem, vysvetlím vám, v akej fáze konania ste, a spolu určíme ďalší postup.

### 3.3 S čím vám pomôžem
- **Obhajoba obvineného.** V prípravnom konaní aj pred súdom, vrátane vypracovania návrhov, sťažností a opravných prostriedkov.
- **Zastupovanie poškodeného.** Uplatnenie nároku na náhradu škody v trestnom konaní a ochrana vašich práv ako poškodeného.
- **Pomoc rodine obvineného.** Orientácia v situácii, komunikácia s orgánmi činnými v trestnom konaní, výber obhajcu v mene blízkej osoby.
- **Trestné oznámenia.** Posúdenie veci a podanie trestného oznámenia.
- **Väzba a procesné rozhodnutia.** Zastupovanie pri návrhoch na vzatie do väzby a pri sťažnostiach voči rozhodnutiam.
- **Žiadosti po odsúdení.** Napríklad podmienečné prepustenie, zahladenie odsúdenia či obnova konania (OVERIŤ).

### 3.4 Diskrétnosť
**Nadpis:** Diskrétnosť je samozrejmosť
**Text:** Advokát je zo zákona viazaný povinnosťou mlčanlivosti. To, čo mi poviete, zostáva medzi nami. Na prvej konzultácii môžete otvorene povedať, ako sa veci skutočne majú.

### 3.5 Ako to prebieha
1. **Ozvete sa mi.** Stačí telefonát alebo krátka správa. Podrobnosti nemusíte písať, rozoberieme ich osobne.
2. **Osobná konzultácia.** Prejdeme situáciu, vysvetlím vám, v akej fáze konania ste, a aké máte možnosti.
3. **Obhajoba alebo zastupovanie.** Ak sa dohodneme na spolupráci, preberám komunikáciu, lehoty a procesné kroky.

### 3.6 Často kladené otázky
**Kedy si mám zvoliť obhajcu?**
Čo najskôr, ideálne skôr, ako sa vyjadríte alebo podpíšete protokol. Právo na obhajcu máte od začiatku trestného stíhania.

**Musím na polícii vypovedať?**
Obvinený má právo odoprieť výpoveď. Svedok má povinnosť vypovedať, s určitými výnimkami, napríklad ak by výpoveďou vystavil seba alebo blízku osobu trestnému stíhaniu. Preto je dôležité vedieť, v akom postavení ste.

**Môže obhajcu zvoliť aj niekto z rodiny?**
Áno, obhajcu môžu v mene obvineného zvoliť aj niektoré blízke osoby.

**Aký je rozdiel medzi prípravným a súdnym konaním?**
Prípravné konanie vedie polícia pod dohľadom prokurátora a zisťuje, či došlo k trestnému činu a kto sa ho dopustil. Súdne konanie nasleduje po podaní obžaloby, kedy o veci rozhoduje súd.

**Zastupujete aj poškodených?**
Áno, zastupujem aj poškodených, vrátane uplatnenia nároku na náhradu škody v trestnom konaní. (OVERIŤ)

**Je moja komunikácia s advokátom dôverná?**
Áno, advokát je zo zákona viazaný povinnosťou mlčanlivosti.

### 3.7 Záverný CTA
**Nadpis:** Nemusíte na to byť sami
**Text:** Ozvite sa mi. Povieme si, v akej situácii ste a čo je rozumné urobiť ako prvé.
**Tlačidlá:** Dohodnúť diskrétnu konzultáciu · Zavolať [DOPLNIŤ: telefón]

---

## 4. Obchodné právo `/obchodne-pravo`

**SEO title:** Advokát obchodné právo Bratislava | JUDr. Pavlovič
**Meta description:** Právne zázemie pre podnikateľov v Bratislave: zmluvy, spoločnosti, vymáhanie pohľadávok a obchodné spory. Dohodnite si konzultáciu.

### 4.1 Hero
**H1:** Advokát pre obchodné právo a podnikateľov v Bratislave
**Podnadpis:** Zmluvy, spoločnosti, pohľadávky a spory. Právne zázemie pre podnikateľov, ktorí potrebujú jasné a praktické riešenia.
**Tlačidlá:** Dohodnúť konzultáciu pre firmu · Zavolať [DOPLNIŤ: telefón]

### 4.2 Úvod
**Nadpis:** Právne zázemie pre vaše podnikanie
**Text:** Podnikanie prináša množstvo rozhodnutí, z ktorých mnohé majú právne dôsledky. Pomáham podnikateľom a spoločnostiam rozhodovať sa informovane: pri zakladaní, uzatváraní zmlúv aj pri sporoch. Cieľom je predchádzať problémom, a ak už nastanú, riešiť ich vecne a včas.

### 4.3 Čo riešite
**Nadpis:** S čím sa na mňa podnikatelia obracajú
- **Zakladám alebo meníte firmu.** Založenie spoločnosti, zmeny v spoločnosti a v obchodnom registri, vzťahy medzi spoločníkmi.
- **Potrebujem zmluvu.** Príprava a posúdenie zmlúv: dodávateľské, o spolupráci, nájomné a ďalšie obchodné zmluvy.
- **Odberateľ mi nezaplatil.** Posúdenie pohľadávky, výzva na plnenie a vymáhanie, vrátane súdneho konania.
- **Mám spor s obchodným partnerom.** Hľadanie dohody alebo zastupovanie v konaní pred súdom.
- **Potrebujem poradiť pri rozhodnutí.** Právne posúdenie zámeru ešte skôr, ako ho podpíšete alebo spustíte.
**Poznámka (OVERIŤ):** presný zoznam služieb potvrdí Pavlovič.

### 4.4 Ako to prebieha
1. **Opíšete mi zámer alebo problém.** Napríklad, čo plánujete podpísať alebo čo sa stalo.
2. **Posúdim a navrhnem postup.** Vysvetlím riziká, možnosti a odporúčaný ďalší krok.
3. **Postarám sa o realizáciu.** Pripravím alebo posúdim dokumenty, rokujem alebo zastupujem pred súdom.

### 4.5 Často kladené otázky
**S čím môžem prísť pri zakladaní firmy?**
S nápadom aj s hotovým zámerom. Spolu zvolíme vhodnú formu, upravíme vzťahy medzi spoločníkmi a pripravíme potrebné dokumenty.

**Potrebujem právnika pri každej zmluve?**
Nie vždy. Pri dlhodobých, hodnotnejších alebo rizikovejších zmluvách je však posúdenie pred podpisom vhodné, lebo opraviť chybu po podpise býva náročnejšie.

**Čo robiť, ak mi odberateľ nezaplatil?**
Dôležité je zhromaždiť doklady a čo najskôr zvoliť postup, od výzvy na plnenie až po súd. Pohľadávky sa premlčujú, preto neodkladajte.

**Zastupujete aj pred súdom?**
Áno, zastupujem klientov v obchodných sporoch aj pred súdom. (OVERIŤ)

**Je možná dlhodobá spolupráca pre firmu?**
Podnikateľom, ktorí potrebujú právne zázemie pravidelne, je možná dlhodobá spolupráca. Podmienky sa dohodnú individuálne. (OVERIŤ)

### 4.6 Záverný CTA
**Nadpis:** Majte právne veci vo firme pod kontrolou
**Text:** Povedzte mi, čo plánujete alebo riešite. Poviem vám, ako k tomu pristúpiť.
**Tlačidlá:** Dohodnúť konzultáciu pre firmu · Zavolať [DOPLNIŤ: telefón]

---

## 5. O mne `/o-mne`

**SEO title:** JUDr. Ladislav Pavlovič | Advokát Bratislava
**Meta description:** JUDr. Ladislav Pavlovič, advokát v Bratislave. Dlhoročné skúsenosti v dopravných nehodách, trestnom a obchodnom práve. Dohodnite si konzultáciu.

**H1:** JUDr. Ladislav Pavlovič
**Podnadpis:** Advokát · Bratislava

### Verzia A, vecná (odporúčam)
Volám sa Ladislav Pavlovič a advokácii sa venujem dlhodobo. Mám dlhoročné skúsenosti v troch oblastiach, v ktorých sa na mňa klienti najčastejšie obracajú: dopravné nehody, trestné právo a obchodné právo.

Pri každej veci vychádzam z jednoduchého princípu: klient potrebuje vedieť, kde stojí, čo ho čaká a čo je vhodné urobiť ako ďalšie. Preto vám situáciu vysvetlím zrozumiteľne, otvorene poviem, aké sú možnosti a riziká, a nebudem vám sľubovať nič, čo sa sľúbiť nedá.

Svoju prácu považujem za zodpovednosť voči ľuďom, ktorí sa na mňa obracajú v dôležitých chvíľach. Preto sledujem lehoty, komunikujem priamo a chránim to, čo mi povierite, v rámci povinnej mlčanlivosti advokáta.

### Verzia B, osobnejšia
Ľudia sa k advokátovi dostávajú zvyčajne vtedy, keď sa im stalo niečo, s čím nerátali: nehoda, vyšetrovanie alebo spor, ktorý ohrozuje firmu. V takej chvíli nepotrebujú prednášku. Potrebujú pokojný rozhovor a jasný plán.

Volám sa Ladislav Pavlovič. Mám dlhoročné skúsenosti v advokácii a venujem sa dopravným nehodám, trestnému a obchodnému právu. Rád vám situáciu najprv vypočujem, potom ju vysvetlím po ľudsky a spolu určíme, čo urobiť ako prvé.

Hovorím priamo a vecne. Keď vám niečo nemôžem sľúbiť, poviem to hneď na začiatku. A čo mi povierite, zostáva u mňa v bezpečí.

### Fakty (karta vedľa textu)
- **Oblasti:** dopravné nehody · trestné právo · obchodné právo
- **Skúsenosti:** dlhoročné skúsenosti v advokácii
- **Vzdelanie:** [DOPLNIŤ: škola, rok ukončenia, titul JUDr.]
- **Profesijné oprávnenie:** advokát zapísaný v Slovenskej advokátskej komore, č. [DOPLNIŤ]
- **Jazyky:** [DOPLNIŤ]
- **Kancelária:** Ivanská cesta 32B, 821 04 Bratislava, Ružinov

### Záverný CTA
**Nadpis:** Spoznajme sa pri konzultácii
**Tlačidlá:** Dohodnúť konzultáciu · Zavolať [DOPLNIŤ: telefón]

> **Poznámka k fotke:** použiť skutočné fotografie Pavloviča (portrét + kancelária). Bez nich zatiaľ viditeľný placeholder.

---

## 6. Kontakt `/kontakt`

**SEO title:** Kontakt | Advokát Bratislava Ružinov | JUDr. Pavlovič
**Meta description:** Kontakt na advokátsku kanceláriu JUDr. Ladislava Pavloviča, Ivanská cesta 32B, Bratislava Ružinov. Dohodnite si konzultáciu telefonicky alebo cez formulár.

**H1:** Kontakt
**Podnadpis:** Zavolajte alebo napíšte. Ozvem sa vám na kontakt, ktorý uvediete.

### Údaje
- **Advokátska kancelária:** JUDr. Ladislav Pavlovič s. r. o.
- **Adresa:** Ivanská cesta 32B, 821 04 Bratislava – mestská časť Ružinov
- **Telefón:** [DOPLNIŤ]
- **E-mail:** [DOPLNIŤ]
- **Úradné hodiny:** [DOPLNIŤ]
- **Ako sa k nám dostanete:** [DOPLNIŤ: MHD zastávka, parkovanie, vchod/poschodie]
- Mapa (Google Maps, vložená)

### Formulár `id="konzultacia"`
**Nadpis:** Dohodnite si konzultáciu
**Úvod:** Stačí vyplniť meno a telefón. Podrobnosti rozoberieme osobne.
**Polia:**
- Meno a priezvisko *
- Telefón *
- E-mail (nepovinné)
- S čím potrebujete pomôcť? (výber: Dopravná nehoda · Trestné právo · Obchodné právo · Iné)
- Stručne opíšte situáciu (nepovinné). **Pomocný text:** Neuvádzajte prosím citlivé podrobnosti. Rozoberieme ich osobne.
- Súhlas: Súhlasím so spracovaním osobných údajov na účel vybavenia môjho dopytu. ([Zásady ochrany osobných údajov])
**Tlačidlo:** Odoslať dopyt
**Pod tlačidlom:** Preferujete telefonát? Zavolajte na [DOPLNIŤ: telefón].

**Hlášky**
- Úspech: Ďakujem, správu som prijal. Ozvem sa vám na uvedený kontakt.
- Chyba odoslania: Správu sa nepodarilo odoslať. Skúste to prosím znova alebo zavolajte na [DOPLNIŤ: telefón].
- Povinné pole: Toto pole je povinné.
- Telefón: Zadajte prosím platné telefónne číslo.
- E-mail: Zadajte prosím platnú e-mailovú adresu.
- Súhlas: Pre odoslanie je potrebný súhlas so spracovaním údajov.

---

## 7. Časté otázky `/caste-otazky`

**SEO title:** Časté otázky o advokátovi a konzultácii | JUDr. Pavlovič
**Meta description:** Odpovede na časté otázky o dopravných nehodách, trestnom a obchodnom práve a o tom, ako prebieha konzultácia s advokátom v Bratislave.

**H1:** Časté otázky
**Skupiny:** Konzultácia a spolupráca · Dopravné nehody · Trestné právo · Obchodné právo
(otázky pre tri oblasti zo sekcií 2.6, 3.6 a 4.5)

### Konzultácia a spolupráca
**Ako si dohodnem konzultáciu?**
Zavolajte, alebo vyplňte formulár na stránke Kontakt. Ozvem sa vám na kontakt, ktorý uvediete.

**Čo mám priniesť na konzultáciu?**
Všetky dokumenty, ktoré sa k veci vzťahujú: zmluvy, korešpondenciu, lekárske správy, rozhodnutia alebo predvolania. Ak niečo nemáte, neznamená to, že sa nedá začať. Zistíme, čo je potrebné doplniť.

**Je moja vec dôverná?**
Áno. Advokát je zo zákona viazaný povinnosťou mlčanlivosti.

**Venujete sa aj iným oblastiam práva?**
Sústreďujem sa na dopravné nehody, trestné a obchodné právo. Ak vaša vec patrí inam, poviem vám to na začiatku. (OVERIŤ)

---

## 8. Pätička, právne texty a mikrotexty

### Pätička
**Advokátska kancelária JUDr. Ladislav Pavlovič s. r. o.**
Ivanská cesta 32B, 821 04 Bratislava – Ružinov
Telefón: [DOPLNIŤ] · E-mail: [DOPLNIŤ]
IČO: [DOPLNIŤ] · Zapísaná v obchodnom registri: [DOPLNIŤ]
Advokát zapísaný v zozname advokátov Slovenskej advokátskej komory pod č. [DOPLNIŤ]

**Odkazy:** Ochrana osobných údajov · Cookies · Kontakt

**Upozornenie:** Obsah tejto webovej stránky má informatívny charakter a nenahrádza individuálnu právnu konzultáciu. Jeho zverejnenie ani odoslanie správy cez formulár nezakladá vzťah advokát – klient. Pre posúdenie vašej konkrétnej veci ma, prosím, kontaktujte.

### Cookies lišta
**Text:** Používame nevyhnutné cookies na fungovanie stránky. S vaším súhlasom používame aj analytické cookies, ktoré nám pomáhajú stránku zlepšovať. Viac v [Zásadách cookies].
**Tlačidlá:** Prijať všetky · Iba nevyhnutné

### Navigácia
Úvod · Dopravné nehody · Trestné právo · Obchodné právo · O mne · Kontakt

### Chyba 404
**Nadpis:** Stránka sa nenašla
**Text:** Adresa možno nie je správna alebo stránka už neexistuje.
**Tlačidlá:** Späť na úvod · Dohodnúť konzultáciu

---

## 9. Zoznam všetkých CTA a tlačidiel

| Kde | Text |
|---|---|
| Hero (úvod) primárne | Dohodnúť konzultáciu |
| Hero (úvod) sekundárne | Zavolať [telefón] |
| Hlavička | Zavolať |
| Mobilná lišta | Zavolať · Napísať |
| Karty na úvode | Dopravné nehody → · Trestné právo → · Obchodné právo → |
| O advokátovi (úvod) | Viac o mne → |
| FAQ náhľad | Všetky otázky a odpovede → |
| Záverný pás (úvod) | Dohodnúť konzultáciu · Zavolať [telefón] |
| Dopravné nehody | Dohodnúť konzultáciu k nehode · Opísať mi situáciu |
| Trestné právo | Dohodnúť diskrétnu konzultáciu |
| Obchodné právo | Dohodnúť konzultáciu pre firmu |
| O mne | Dohodnúť konzultáciu |
| Formulár | Odoslať dopyt |
| 404 | Späť na úvod |
| Cookies | Prijať všetky · Iba nevyhnutné |

---

## 10. Otvorené body na overenie s Pavlovičom
1. Telefón, e-mail, úradné hodiny, IČO, registrácia SAK, údaje o vzdelaní.
2. Presný zoznam služieb v každej oblasti (najmä žiadosti po odsúdení, zastupovanie poškodených, vymáhanie pohľadávok, dlhodobá spolupráca pre firmy).
3. Či chce uvádzať jazyky a či zverejní referencie (len so súhlasom klientov a bez dôverných údajov).
4. Schválenie každej formulácie vzhľadom na pravidlá reklamy advokáta (dôstojnosť, žiadne porovnávanie).
5. Skutočné fotografie (portrét, kancelária) a prípadné krátke video.

~~~~

**Koniec špecifikácie.** Začni fázou 1.
