# Web JUDr. Ladislav Pavlovič, advokát

Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · motion · Lenis. Špecifikácia: `pavlovic-prompt-claude-code.md`.

## Spustenie

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Kde čo upraviť

- **Kontaktné údaje** (telefón, e-mail, IČO, hodiny…): `src/lib/site.ts`. Kým je hodnota `null`, na webe je čip `[DOPLNIŤ]`.
- **Čipy „overiť“**: `showReviewMarks` v `src/lib/site.ts`.
- **Texty**: `src/content/*.ts` (doslovne z časti K špecifikácie).
- **Fotky**: `public/images/` (názvy slotov v `src/content/images.ts`). Stiahnutie z Unsplash:
  `UNSPLASH_ACCESS_KEY=… npm run images` (autori sa zapíšu do `public/images/CREDITS.md`).
- **Odosielanie formulára**: `submitInquiry()` v `src/lib/inquiry.ts` (zatiaľ simulácia).
- **Doména**: premenná prostredia `NEXT_PUBLIC_SITE_URL` (canonical, sitemap, OG).
