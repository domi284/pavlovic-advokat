/**
 * Texty v content súboroch sú doslovne z časti K špecifikácie.
 * Značky v reťazcoch (spracuje komponent <Rich>):
 *   {{pole|DOPLNIŤ: popis}}  údaj zo site.ts, kým je null, zobrazí sa čip <Placeholder>
 *   (OVERIŤ)                 čip <ReviewMark>, riadený site.showReviewMarks
 *   [text](/odkaz)           interný odkaz
 */

export type Meta = { title: string; description?: string; path: string };

export type Cta =
  | { kind: "link"; label: string; href: string; variant: "primary" | "secondary" }
  | { kind: "call"; label: string; variant: "primary" | "secondary" };

export type TextLink = { lead?: string; label: string; href: string };

export type Item = { title: string; text: string };

export type Faq = { q: string; a: string };

export type ImageSlot = { file: string; alt: string; label: string };

export type CtaBand = { title: string; text?: string; ctas: Cta[] };

export type ServiceDetail = {
  block: string;
  slug: string;
  name: string;
  image: ImageSlot;
  cardDescription: string;
  hero: { title: string; subtitle: string; ctaLabel?: string; notice?: string };
  intro: { title: string; text: string };
  checklist?: { title: string; items: Item[]; linkLead?: string };
  services: { title: string; items: Item[] };
  discretion?: { title: string; text: string };
  steps: Item[];
  situations: { title: string; items: string[] };
  faq: Faq[];
  related: string[];
  cta: CtaBand;
  meta: Meta;
};

export type AreaKey = "nehody" | "trestne" | "obchodne";

export type AreaSection =
  | { type: "checklist"; eyebrow: string; title: string; items: Item[]; link: TextLink }
  | { type: "intro"; title: string; text: string }
  | { type: "services"; eyebrow: string; title: string; items: Item[]; reviewMark?: boolean }
  | { type: "situations"; eyebrow: string; title: string; items: string[]; cta: Cta }
  | { type: "discretion"; title: string; text: string }
  | { type: "process"; eyebrow: string; title: string; steps: Item[] }
  | { type: "faq"; eyebrow: string; title: string; items: Faq[] };

export type AreaPage = {
  key: AreaKey;
  meta: Meta;
  name: string;
  image: ImageSlot;
  hero: { h1: string; subtitle: string; ctas: Cta[] };
  sections: AreaSection[];
  cta: CtaBand;
};
