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
 * Po stiahnutí každú fotku skontrolujte: bez ľudských tvárí, bez váh, kladív a sôch Justície.
 */
import fs from "node:fs/promises";
import path from "node:path";

const KEY = process.env.UNSPLASH_ACCESS_KEY;
const DIR = path.join(process.cwd(), "public", "images");
const UTM = "utm_source=pavlovic_advokat&utm_medium=referral";

const SLOTS = [
  { file: "hero-uvod.jpg", orientation: "portrait", queries: ["fountain pen desk dark", "documents desk light", "writing desk shadow"] },
  { file: "oblast-nehody.jpg", orientation: "landscape", queries: ["city road dusk", "light trails street", "highway night"] },
  { file: "oblast-trestne.jpg", orientation: "landscape", queries: ["stone columns shadow", "courthouse stairs", "classical architecture"] },
  { file: "oblast-obchodne.jpg", orientation: "landscape", queries: ["modern office architecture", "glass building minimal", "signing contract pen"] },
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
  await fs.writeFile(path.join(DIR, slot.file), Buffer.from(await res.arrayBuffer()));
  // podľa pravidiel Unsplash API treba nahlásiť stiahnutie
  await api(photo.links.download_location).catch(() => {});

  credits.push({ file: slot.file, photo });
  console.log(`↓ ${slot.file} ← ${photo.user.name} (${photo.links.html})`);
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
