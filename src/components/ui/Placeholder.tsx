import { cn } from "@/lib/cn";

/** Viditeľný čip pre údaj, ktorý ešte treba doplniť, napr. „[DOPLNIŤ: telefón]“. */
export function Placeholder({ children, className }: { children: string; className?: string }) {
  return (
    <span
      className={cn(
        "inline-block rounded-xs border border-dashed border-bordeaux bg-bordeaux-soft px-2 py-0.5 align-baseline font-sans text-[0.85em] font-medium leading-snug tracking-normal text-bordeaux normal-case",
        className,
      )}
    >
      [{children}]
    </span>
  );
}
