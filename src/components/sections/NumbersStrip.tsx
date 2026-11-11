import { Rich } from "@/components/ui/Rich";
import { cn } from "@/lib/cn";

export type NumberItem = { value: string; label: string };

/**
 * Pás čísel (roky praxe, vybavené veci, oblasti, pôsobnosť).
 * Mobil 2 × 2, od tabletu 4 v rade. Horné a dolné linky si dodáva rodič.
 */
export function NumbersStrip({ items, className }: { items: NumberItem[]; className?: string }) {
  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-4", className)}>
      {items.map((item, index) => (
        <div
          key={item.label}
          className={cn(
            "border-line px-4 py-6 md:px-6 md:py-8",
            index % 2 === 1 && "border-l",
            index > 0 && "md:border-l",
            index >= 2 && "border-t md:border-t-0",
          )}
        >
          <p
            className={
              item.value.length > 12
                ? "font-serif text-[22px] leading-tight text-ink md:text-[26px]"
                : "font-serif text-[34px] leading-none text-ink md:text-[48px]"
            }
          >
            <Rich text={item.value} />
          </p>
          <p className="mt-3 text-[11px] font-semibold tracking-[0.12em] text-stone uppercase">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
