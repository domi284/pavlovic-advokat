import Image from "next/image";
import { logo } from "@/content/common";
import { cn } from "@/lib/cn";
import logoFullLight from "../../../public/images/brand/logo-full-light.png";
import logoFullNavy from "../../../public/images/brand/logo-full-navy.png";
import monogramLight from "../../../public/images/brand/monogram-ak-light.png";
import monogramNavy from "../../../public/images/brand/monogram-ak-navy.png";

export const BRAND_NAME = "Advokátska kancelária JUDr. Ladislav Pavlovič";

type Tone = "navy" | "light";

/**
 * Monogram kancelárie „AK“ (obrázok, priehľadné pozadie). Veľkosť určuje `className` (výška, šírka auto).
 * `alt=""`, ak je vedľa text s menom; inak názov kancelárie.
 */
export function Monogram({
  tone = "navy",
  className,
  decorative = false,
  priority = false,
  sizes = "48px",
}: {
  tone?: Tone;
  className?: string;
  decorative?: boolean;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <Image
      src={tone === "light" ? monogramLight : monogramNavy}
      alt={decorative ? "" : BRAND_NAME}
      sizes={sizes}
      priority={priority}
      className={cn("w-auto shrink-0 object-contain", className)}
    />
  );
}

/** Celé logo „Advokátska kancelária JUDr. Ladislav Pavlovič“ (navy na svetlom, light na tmavom). */
export function FullLogo({
  tone = "navy",
  className,
  decorative = false,
  sizes = "240px",
}: {
  tone?: Tone;
  className?: string;
  decorative?: boolean;
  sizes?: string;
}) {
  return (
    <Image
      src={tone === "light" ? logoFullLight : logoFullNavy}
      alt={decorative ? "" : BRAND_NAME}
      sizes={sizes}
      className={cn("h-auto object-contain", className)}
    />
  );
}

/** Logo v hlavičke: monogram AK + deliaca čiara + meno a „advokát“. */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center text-ink", className)}>
      {/* meno je hneď vedľa → alt="" (čítačka ho neprečíta dvakrát) */}
      <Monogram decorative priority className="h-[34px] sm:h-10" />
      <span aria-hidden="true" className="mx-2.5 h-8 w-px shrink-0 bg-bordeaux sm:mx-3.5" />
      <span className="flex flex-col justify-center leading-none">
        <span className="whitespace-nowrap font-serif text-[15px] font-semibold leading-[1.1] min-[400px]:text-[17px] sm:text-[18px]">
          {logo.name}
        </span>
        <span className="mt-1 font-sans text-[10.5px] font-semibold uppercase leading-none tracking-[0.32em] text-stone max-[379px]:hidden">
          {logo.role}
        </span>
      </span>
    </span>
  );
}
