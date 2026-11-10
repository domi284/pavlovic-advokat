/**
 * Stiahne fotky pre obrázkové sloty webu z Unsplash (oficiálne API) a zapíše autorov
 * do public/images/CREDITS.md.
 *
 * Použitie:
 *   UNSPLASH_ACCESS_KEY=xxx node scripts/fetch-images.mjs            # všetky chýbajúce sloty, prvý výsledok
 *   UNSPLASH_ACCESS_KEY=xxx node scripts/fetch-images.mjs --list     # iba vypíše kandidátov (bez sťahovania)
 *   UNSPLASH_ACCESS_KEY=xxx node scripts/fetch-images.mjs hero-uvod.jpg=3 --force
 *       └ pre slot použije 4. kandidáta (index od 0); --force prepíše existujúci súbor
 *
 * Kľúč: zadarmo na https://unsplash.com/developers (New Application → Access Key).
 * Kľúč: v .env.local ako UNSPLASH_ACCESS_KEY=… (alebo v prostredí).
 * Fotky sa zmenšia na max. ~350 kB. Po stiahnutí každú skontrolujte: bez tvárí, log, oblekov, váh, kladív a sôch Justície.
 */
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

// kľúč z .env.local (súbor je v .gitignore, do kódu sa nedostane)
try {
  const env = await fs.readFile(path.join(process.cwd(), ".env.local"), "utf8");
  for (const line of env.split("\n")) {
    const match = line.match(/^\s*UNSPLASH_ACCESS_KEY\s*=\s*(.+?)\s*$/);
    if (match && !process.env.UNSPLASH_ACCESS_KEY) process.env.UNSPLASH_ACCESS_KEY = match[1];
  }
} catch {}

const KEY = process.env.UNSPLASH_ACCESS_KEY;
const MAX_BYTES = 350 * 1024;

/** Zmenší fotku (dlhšia strana max. 2000 px) a zníži kvalitu, kým nemá najviac ~350 kB. */
async function compress(buffer) {
  for (const [size, quality] of [[2000, 80], [2000, 72], [1800, 70], [1600, 68], [1400, 64], [1200, 60]]) {
    const out = await sharp(buffer)
      .rotate()
      .resize({ width: size, height: size, fit: "inside", withoutEnlargement: true })
      .jpeg({ quality, mozjpeg: true })
      .toBuffer();
    if (out.length <= MAX_BYTES) return out;
  }
  throw new Error("fotku sa nepodarilo zmenšiť pod 350 kB");
}
const DIR = path.join(process.cwd(), "public", "images");
const UTM = "utm_source=pavlovic_advokat&utm_medium=referral";

const SLOTS = [
  { file: "sluzba-obchodne-pravo.jpg", orientation: "landscape", queries: ["office building glass", "modern architecture minimal", "desk documents"] },
  { file: "sluzba-obcianske-pravo.jpg", orientation: "landscape", queries: ["house keys table", "keys documents", "home interior calm"] },
  { file: "sluzba-dopravne-nehody.jpg", orientation: "landscape", queries: ["highway dusk", "light trails road", "city road night"] },
  { file: "sluzba-rodinne-pravo.jpg", orientation: "landscape", queries: ["soft light room", "window light interior", "calm home morning"] },
  { file: "sluzba-trestne-pravo.jpg", orientation: "landscape", queries: ["stone columns shadow", "classical building facade", "stone architecture"] },
  { file: "sluzba-spravne-pravo.jpg", orientation: "landscape", queries: ["government building facade", "official papers stamp", "public building architecture"] },
  { file: "sluzba-dusevne-vlastnictvo.jpg", orientation: "landscape", queries: ["design sketches desk", "creative workspace", "sketchbook desk"] },
  { file: "sluzba-patentove-pravo.jpg", orientation: "landscape", queries: ["technical drawing", "blueprint detail", "engineering sketch"] },
  { file: "sluzba-kyberneticke-pravo.jpg", orientation: "landscape", queries: ["server room", "data center dark", "network cables"] },
  { file: "sluzba-pracovne-pravo.jpg", orientation: "landscape", queries: ["empty office desks", "workplace interior empty", "office chairs daylight"] },
  { file: "sluzby-uvod.jpg", orientation: "landscape", queries: ["law books shelf", "bookshelf blur"] },
  { file: "preco-my.jpg", orientation: "portrait", queries: ["staircase light", "architecture corridor light"] },
  { file: "tim-kancelaria.jpg", orientation: "landscape", queries: ["empty office interior", "meeting room empty", "office light"] },
  { file: "kniznica.jpg", orientation: "landscape", queries: ["law books shelf", "bookshelf blur", "library warm"] },
  { file: "kancelaria-detail.jpg", orientation: "landscape", queries: ["office interior detail", "leather chair", "office door light"] },
  { file: "textura-kamen.jpg", orientation: "landscape", queries: ["dark marble texture", "stone texture"] },
];

const args = process.argv.slice(2);
const listOnly = args.includes("--list");
const force = args.includes("--force");
const picks = Object.fromEntries(
  args.filter((a) => a.includes("=")).map((a) => {
    const [file, index] = a.split("=");
    return [file, Number(index)];
  }),
);
const only = Object.keys(picks);

if (!KEY) {
  console.error("Chýba UNSPLASH_ACCESS_KEY. Kľúč získate zadarmo na https://unsplash.com/developers");
  process.exit(1);
}

async function api(url) {
  const res = await fetch(url, { headers: { Authorization: `Client-ID ${KEY}`, "Accept-Version": "v1" } });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}: ${url}`);
  return res.json();
}

async function candidates(slot) {
  const seen = new Set();
  const out = [];
  for (const query of slot.queries) {
    const params = new URLSearchParams({ query, orientation: slot.orientation, per_page: "10", content_filter: "high" });
    const data = await api(`https://api.unsplash.com/search/photos?${params}`);
    for (const photo of data.results) {
      if (seen.has(photo.id) || photo.premium || photo.plus) continue;
      if (Math.max(photo.width, photo.height) < 2400) continue;
      seen.add(photo.id);
      out.push({ ...photo, query });
    }
  }
  return out;
}

async function exists(file) {
  return fs.access(path.join(DIR, file)).then(() => true, () => false);
}

const credits = [];
await fs.mkdir(DIR, { recursive: true });

for (const slot of SLOTS) {
  if (only.length && !only.includes(slot.file)) continue;
  if (!listOnly && !force && (await exists(slot.file))) {
    console.log(`✓ ${slot.file} už existuje (prepíšete s --force)`);
    continue;
  }

  const list = await candidates(slot);
  if (listOnly) {
    console.log(`\n${slot.file}`);
    list.slice(0, 12).forEach((p, i) =>
      console.log(`  [${i}] ${p.user.name} · ${p.alt_description ?? ""} · ${p.links.html}`),
    );
    continue;
  }

  const photo = list[picks[slot.file] ?? 0];
  if (!photo) {
    console.warn(`✗ ${slot.file}: nenašla sa vhodná fotka`);
    continue;
  }

  // dlhšia strana aspoň 2400 px
  const size = photo.width >= photo.height ? "w=2400" : "h=2400";
  const res = await fetch(`${photo.urls.raw}&${size}&fit=max&fm=jpg&q=82`);
  const jpg = await compress(Buffer.from(await res.arrayBuffer()));
  await fs.writeFile(path.join(DIR, slot.file), jpg);
  // podľa pravidiel Unsplash API treba nahlásiť stiahnutie
  await api(photo.links.download_location).catch(() => {});

  credits.push({ file: slot.file, photo });
  console.log(`↓ ${slot.file} (${Math.round(jpg.length / 1024)} kB) ← ${photo.user.name} (${photo.links.html})`);
}

if (credits.length) {
  const file = path.join(DIR, "CREDITS.md");
  const previous = await fs.readFile(file, "utf8").catch(() => "# Zdroje fotografií\n\nVšetky fotky: Unsplash, [Unsplash License](https://unsplash.com/license).\n\n");
  const lines = previous
    .split("\n")
    .filter((line) => !line.startsWith("Zatiaľ") && !line.startsWith("Stiahnutie:"))
    .filter((line) => !credits.some((c) => line.startsWith(`- \`${c.file}\``)));
  for (const { file: name, photo } of credits) {
    lines.push(
      `- \`${name}\`: foto [${photo.user.name}](${photo.user.links.html}?${UTM}) na [Unsplash](${photo.links.html}?${UTM})`,
    );
  }
  await fs.writeFile(file, `${lines.join("\n").trim()}\n`);
  console.log(`\nAutori zapísaní do public/images/CREDITS.md`);
}
