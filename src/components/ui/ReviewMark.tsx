import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

/** Interný čip „overiť“ pri texte, ktorý musí potvrdiť advokát. Vypína sa v site.ts. */
export function ReviewMark({ className }: { className?: string }) {
  if (!site.showReviewMarks) return null;
  return (
    <span
      className={cn(
        "ml-1.5 inline-block rounded-xs border border-dashed border-stone px-1.5 py-px align-middle font-sans text-[10px] font-semibold uppercase leading-normal tracking-[0.12em] text-stone",
        className,
      )}
      title="Text čaká na overenie advokátom"
    >
      overiť
    </span>
  );
}
