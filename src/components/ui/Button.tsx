import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import type { ReactNode } from "react";
import type { Cta } from "@/content/types";
import { cn } from "@/lib/cn";
import { site, telHref } from "@/lib/site";
import { Rich } from "./Rich";

type Variant = "primary" | "secondary";
type Tone = "light" | "dark";

const base =
  "group/btn relative isolate inline-flex min-h-[52px] items-center justify-center gap-3 overflow-hidden rounded-xs px-7 py-2.5 text-center font-sans text-[15px] font-semibold leading-tight tracking-[0.01em] transition-colors duration-[450ms] ease-premium";

const styles: Record<Tone, Record<Variant, { root: string; fill: string }>> = {
  light: {
    primary: { root: "bg-bordeaux text-chalk", fill: "bg-bordeaux-deep" },
    secondary: {
      root: "border border-ink text-ink hover:text-chalk focus-visible:text-chalk",
      fill: "bg-ink",
    },
  },
  dark: {
    primary: { root: "bg-chalk text-ink", fill: "bg-bone" },
    secondary: {
      root: "border border-chalk/40 text-chalk hover:text-ink focus-visible:text-ink",
      fill: "bg-chalk",
    },
  },
};

export function Button({
  href,
  children,
  variant = "primary",
  tone = "light",
  icon = "arrow",
  disabled = false,
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  tone?: Tone;
  icon?: "arrow" | "phone" | "none";
  disabled?: boolean;
  className?: string;
}) {
  const style = styles[tone][variant];
  const content = (
    <>
      <span
        aria-hidden="true"
        className={cn(
          "absolute inset-0 -z-10 origin-left scale-x-0 transition-transform duration-[450ms] ease-premium group-hover/btn:scale-x-100 group-focus-visible/btn:scale-x-100",
          style.fill,
        )}
      />
      {icon === "phone" && <Phone aria-hidden="true" strokeWidth={1.25} className="size-[18px] shrink-0" />}
      <span>{children}</span>
      {icon === "arrow" && (
        <ArrowRight
          aria-hidden="true"
          strokeWidth={1.25}
          className="size-[18px] shrink-0 transition-transform duration-[450ms] ease-premium group-hover/btn:translate-x-1"
        />
      )}
    </>
  );

  const classes = cn(base, style.root, className);

  if (disabled || href.startsWith("tel:") || href.startsWith("mailto:") || href === "#") {
    return (
      <a href={href} className={classes} aria-disabled={disabled || undefined}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}

/** Tlačidlo podľa definície CTA v content súboroch. */
export function CtaButton({ cta, tone = "light", className }: { cta: Cta; tone?: Tone; className?: string }) {
  if (cta.kind === "call") {
    const href = telHref(site.fields.phone);
    return (
      <Button
        href={href ?? "#"}
        disabled={!href}
        variant={cta.variant}
        tone={tone}
        icon="phone"
        className={className}
      >
        <Rich text={cta.label} plain />
      </Button>
    );
  }
  return (
    <Button href={cta.href} variant={cta.variant} tone={tone} className={className}>
      <Rich text={cta.label} plain />
    </Button>
  );
}

export function CtaGroup({ ctas, tone = "light", className }: { ctas: Cta[]; tone?: Tone; className?: string }) {
  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row sm:flex-wrap", className)}>
      {ctas.map((cta) => (
        <CtaButton key={cta.label} cta={cta} tone={tone} />
      ))}
    </div>
  );
}
