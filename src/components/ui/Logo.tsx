import { logo } from "@/content/common";
import { cn } from "@/lib/cn";

/** Monogram „LP“: štvorec 44×44, P mierne prekrýva pätku L. */
export function Monogram({ className, title }: { className?: string; title?: string }) {
  return (
    <svg
      viewBox="0 0 44 44"
      width="44"
      height="44"
      className={cn("shrink-0", className)}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <rect x="0.5" y="0.5" width="43" height="43" fill="none" stroke="currentColor" strokeWidth="1" />
      <g
        fill="currentColor"
        style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: 24 }}
      >
        <text x="10.6" y="30.4">
          L
        </text>
        <text x="19.4" y="30.4">
          P
        </text>
      </g>
    </svg>
  );
}

export function Logo({ variant = "light", className }: { variant?: "light" | "dark"; className?: string }) {
  const dark = variant === "dark";
  return (
    <span className={cn("inline-flex items-center", dark ? "text-chalk" : "text-ink", className)}>
      <Monogram />
      <span
        aria-hidden="true"
        className={cn("mx-3.5 h-8 w-px shrink-0", dark ? "bg-sand" : "bg-bordeaux")}
      />
      <span className="flex flex-col justify-center leading-none">
        <span className="whitespace-nowrap font-serif text-[20px] font-semibold leading-[1.1]">
          {logo.name}
        </span>
        <span
          className={cn(
            "mt-1 font-sans text-[10.5px] font-semibold uppercase leading-none tracking-[0.32em] max-[379px]:hidden",
            dark ? "text-chalk-muted" : "text-stone",
          )}
        >
          {logo.role}
        </span>
      </span>
    </span>
  );
}
