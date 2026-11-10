import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { mailHref, rokyPraxe, site, telHref, type SiteField } from "@/lib/site";
import { typo } from "@/lib/typo";
import { Placeholder } from "./Placeholder";
import { ReviewMark } from "./ReviewMark";

/**
 * Vykreslí text z content súborov:
 * - typografia (nedeliteľné medzery),
 * - {{pole|DOPLNIŤ: …}} → hodnota zo site.ts alebo <Placeholder>,
 * - {rokyPraxe} → počet rokov praxe (počíta sa automaticky v site.ts),
 * - (OVERIŤ) → <ReviewMark>,
 * - [text](/odkaz) → interný odkaz.
 * `plain` = bez odkazov (napr. vnútri tlačidla, ktoré už odkazom je).
 */
const TOKEN = /\{\{(?<field>\w+)\|(?<fallback>[^}]+)\}\}|\[(?<placeholder>DOPLNIŤ(?::\s*[^\]]+)?)\]|\[(?<linkText>[^\]]+)\]\((?<href>[^)]+)\)|\s*\(OVERIŤ\)(?<punctuation>[.,;:]?)/g;

/** Nahradí premenné v texte (napr. `{rokyPraxe}`) ich hodnotou. */
export function fillVars(text: string) {
  return text.replace(/\{rokyPraxe\}/g, String(rokyPraxe));
}

export function Rich({ text: raw, plain = false }: { text: string; plain?: boolean }) {
  const text = fillVars(raw);
  const parts: ReactNode[] = [];
  let last = 0;
  let key = 0;

  for (const match of text.matchAll(TOKEN)) {
    const index = match.index ?? 0;
    if (index > last) parts.push(typo(text.slice(last, index)));

    const { field, fallback, placeholder, linkText, href, punctuation } = match.groups ?? {};
    if (field) {
      parts.push(<FieldValue key={key++} field={field as SiteField} fallback={fallback} plain={plain} />);
    } else if (placeholder) {
      parts.push(<Placeholder key={key++}>{placeholder}</Placeholder>);
    } else if (linkText) {
      parts.push(
        plain ? (
          <Fragment key={key++}>{typo(linkText)}</Fragment>
        ) : (
          <Link key={key++} href={href} className="inline-link">
            {typo(linkText)}
          </Link>
        ),
      );
    } else {
      // „konania (OVERIŤ).“ → „konania.“ + čip
      if (punctuation) parts.push(punctuation);
      parts.push(<ReviewMark key={key++} />);
    }
    last = index + match[0].length;
  }

  if (last < text.length) parts.push(typo(text.slice(last)));
  return <>{parts}</>;
}

function FieldValue({ field, fallback, plain }: { field: SiteField; fallback: string; plain: boolean }) {
  const value = site.fields[field];
  if (typeof value !== "string" || !value) return <Placeholder>{fallback}</Placeholder>;
  if (plain) return <>{value}</>;
  const href = field === "phone" ? telHref(value) : field === "email" ? mailHref(value) : null;
  return href ? (
    <a href={href} className="inline-link whitespace-nowrap">
      {value}
    </a>
  ) : (
    <>{value}</>
  );
}

/** Čistý text bez značiek (pre meta tagy a JSON-LD). */
export function plainText(text: string) {
  return fillVars(text)
    .replace(/\{\{(\w+)\|([^}]+)\}\}/g, (_, field: SiteField) => {
      const value = site.fields[field];
      return typeof value === "string" ? value : "";
    })
    .replace(/\[DOPLNIŤ(?::\s*[^\]]+)?\]/g, "")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
    .replace(/\s*\(OVERIŤ\)/g, "")
    .trim();
}
