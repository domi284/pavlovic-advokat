import Image from "next/image";
import type { CSSProperties } from "react";
import type { Referencia } from "@/content/referencie";
import { cn } from "@/lib/cn";

/**
 * Logo firmy v boxe s pevnou výškou. Výšku boxu určuje rodič cez CSS premennú `--box`
 * (napr. `[--box:48px]`); logo má základnú výšku 70 % boxu × `scale`, nikdy však
 * nepresiahne box (výšku ani šírku) – object-contain, bez deformácie.
 */
export function ReferenceLogo({
  item,
  sizes,
  className,
  priority = false,
}: {
  item: Referencia;
  /** šírka loga pre srcset, napr. "150px" */
  sizes: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("flex h-(--box) w-full items-center justify-center", className)}>
      <Image
        src={item.logo}
        alt={item.name}
        sizes={sizes}
        priority={priority}
        style={{ "--s": item.scale ?? 1 } as CSSProperties}
        className="h-[calc(var(--box)*0.7*var(--s))] max-h-full w-auto max-w-full object-contain"
      />
    </div>
  );
}
