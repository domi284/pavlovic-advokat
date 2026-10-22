import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import type { ImageSlot } from "@/content/types";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";
import { grainBackground } from "@/components/layout/Grain";
import { Monogram } from "./Logo";
import { Placeholder } from "./Placeholder";

function exists(file: string) {
  return fs.existsSync(path.join(process.cwd(), "public", file.replace(/^\//, "")));
}

/**
 * Fotka zo slotu v /public/images. Ak súbor ešte neexistuje, vykreslí sa
 * náhradný blok s popisom slotu; po pridaní súboru sa automaticky použije fotka.
 * Vypĺňa rodiča (rodič určuje pomer strán).
 */
export function SiteImage({
  slot,
  sizes,
  priority = false,
  className,
  imgClassName,
}: {
  slot: ImageSlot;
  sizes: string;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
}) {
  const src = `/images/${slot.file}`;

  if (!exists(src)) {
    return (
      <div
        className={cn("absolute inset-0 flex flex-col items-center justify-center gap-4 overflow-hidden", className)}
        style={{ background: "linear-gradient(160deg, var(--bone) 0%, var(--line) 100%)" }}
        role={slot.alt ? "img" : undefined}
        aria-label={slot.alt || undefined}
      >
        <div aria-hidden="true" className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: grainBackground }} />
        <Monogram className="relative size-16 text-ink opacity-15" />
        <p className="relative px-6 text-center text-[12px] tracking-[0.06em] text-stone">{slot.label}</p>
      </div>
    );
  }

  return (
    <div className={cn("editorial absolute inset-0", className)}>
      <Image
        src={src}
        alt={slot.alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover", imgClassName)}
      />
    </div>
  );
}

/** Portrét advokáta: kým nie je fotka v site.ts, zobrazí sa elegantný placeholder 4:5. */
export function Portrait({ sizes, className }: { sizes: string; className?: string }) {
  const portrait = site.fields.portrait;
  return (
    <div className={cn("relative aspect-[4/5] overflow-hidden bg-bone", className)}>
      {portrait && exists(portrait) ? (
        <div className="editorial absolute inset-0">
          <Image src={portrait} alt={`Portrét ${site.name}`} fill sizes={sizes} className="object-cover" />
        </div>
      ) : (
        <>
          <div aria-hidden="true" className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: grainBackground }} />
          <div className="absolute inset-4 flex flex-col items-center justify-center gap-6 border border-line px-4 text-center">
            <Monogram className="size-20 text-ink opacity-30" />
            <Placeholder>DOPLNIŤ: portrét JUDr. Pavloviča</Placeholder>
          </div>
        </>
      )}
    </div>
  );
}
