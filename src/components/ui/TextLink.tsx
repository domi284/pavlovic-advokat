import Link from "next/link";
import { typo } from "@/lib/typo";
import { cn } from "@/lib/cn";

/** Textový odkaz typu „Dopravné nehody →“; šípka z textu sa animuje pri hoveri. */
export function TextLink({
  href,
  label,
  className,
  as = "link",
}: {
  href: string;
  label: string;
  className?: string;
  /** "span" = vnútri inak klikateľného prvku (napr. celá karta je odkaz) */
  as?: "link" | "span";
}) {
  const hasArrow = label.endsWith("→");
  const text = hasArrow ? label.slice(0, -1).trimEnd() : label;
  const inner = (
    <>
      <span>{typo(text)}</span>
      {hasArrow && (
        <span className="arrow" aria-hidden="true">
          →
        </span>
      )}
    </>
  );
  if (as === "span") return <span className={cn("text-link", className)}>{inner}</span>;
  return (
    <Link href={href} className={cn("text-link", className)}>
      {inner}
    </Link>
  );
}
