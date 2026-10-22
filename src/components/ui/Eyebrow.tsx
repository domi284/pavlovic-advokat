import { cn } from "@/lib/cn";

/** Štítok nad H2 v tvare „01 — Názov sekcie“. */
export function Eyebrow({
  number,
  children,
  className,
}: {
  number?: string;
  children: string;
  className?: string;
}) {
  return (
    <p className={cn("eyebrow", className)}>
      {number && (
        <>
          <span>{number}</span>
          <span aria-hidden="true"> — </span>
        </>
      )}
      <span>{children}</span>
    </p>
  );
}
