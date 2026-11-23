import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import type { ImageSlot } from "@/content/types";
import { cn } from "@/lib/cn";
import { grainBackground } from "@/components/layout/Grain";
import { Monogram } from "./Logo";

function exists(file: string) {
  return fs.existsSync(path.join(process.cwd(), "public", file.replace(/^\//, "")));
}

/**
 * Fotka zo slotu v /public/images. Ak súbor ešte neexistuje, vykreslí sa
 * neutrálny náhradný blok (bez názvu súboru); po pridaní súboru sa automaticky použije fotka.
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
      </div>
    );
  }

  return (
    <div className={cn(slot.natural ? "natural" : "editorial", "absolute inset-0", className)}>
      <Image
        src={src}
        alt={slot.alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover", imgClassName)}
        style={slot.position ? { objectPosition: slot.position } : undefined}
      />
    </div>
  );
}

/** Portrét advokáta v ráme 4:5. Kým súbor neexistuje, zobrazí sa placeholder „Fotografia bude doplnená“. */
export function Portrait({
  slot,
  sizes,
  priority = false,
  className,
}: {
  slot: ImageSlot;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("relative aspect-[4/5] overflow-hidden bg-bone", className)}>
      {exists(`/images/${slot.file}`) ? (
        <SiteImage slot={slot} sizes={sizes} priority={priority} />
      ) : (
        <>
          <div aria-hidden="true" className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: grainBackground }} />
          <div className="absolute inset-4 flex flex-col items-center justify-center gap-6 border border-line px-4 text-center">
            <Monogram className="size-20 text-ink opacity-30" />
            <p className="text-[12px] tracking-[0.06em] text-stone">Fotografia bude doplnená</p>
          </div>
        </>
      )}
    </div>
  );
}
