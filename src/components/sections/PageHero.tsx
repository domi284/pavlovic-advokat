import Link from "next/link";
import type { ReactNode } from "react";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { CtaGroup } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SiteImage } from "@/components/ui/SiteImage";
import { ui } from "@/content/common";
import type { Cta, ImageSlot } from "@/content/types";
import { cn } from "@/lib/cn";
import { typo } from "@/lib/typo";

/** Hero podstránok: drobková navigácia, H1, podnadpis, tlačidlá; vpravo fotka alebo iný obsah. */
export function PageHero({
  title,
  subtitle,
  crumb,
  ctas,
  image,
  aside,
  compact = false,
}: {
  title: string;
  subtitle?: string;
  crumb?: string;
  ctas?: Cta[];
  image?: ImageSlot;
  aside?: ReactNode;
  compact?: boolean;
}) {
  const hasAside = !!(image || aside);
  return (
    <section aria-labelledby="page-title" className="relative pt-[84px]">
      <Container
        className={cn(
          "grid items-center gap-12 py-12 md:py-16 lg:gap-16",
          hasAside && "lg:grid-cols-12",
          !compact && hasAside && "lg:min-h-[calc(78vh-84px)]",
        )}
      >
        <div className={cn(hasAside ? "lg:col-span-7" : "max-w-4xl")}>
          {crumb && (
            <Reveal immediate>
              <nav aria-label={ui.breadcrumb} className="text-[13px] text-stone">
                <ol className="flex items-center gap-2">
                  <li>
                    <Link href="/" className="transition-colors hover:text-bordeaux">
                      {ui.home}
                    </Link>
                  </li>
                  <li aria-hidden="true" className="text-line">
                    /
                  </li>
                  <li aria-current="page" className="text-ink">
                    {crumb}
                  </li>
                </ol>
              </nav>
            </Reveal>
          )}
          <RevealText as="h1" id="page-title" text={title} immediate delay={0.15} className={cn("h1", crumb && "mt-7")} />
          {subtitle && (
            <Reveal immediate delay={0.5}>
              <p className="lead mt-8 max-w-[44ch]">{typo(subtitle)}</p>
            </Reveal>
          )}
          {ctas && (
            <Reveal immediate delay={0.65}>
              <CtaGroup ctas={ctas} className="mt-10" />
            </Reveal>
          )}
        </div>

        {image && (
          <div className="relative lg:col-span-5 lg:pl-8">
            <span aria-hidden="true" className="absolute top-[8%] bottom-[8%] left-0 hidden w-px bg-bordeaux lg:block" />
            <ImageReveal immediate delay={0.2} className="aspect-[4/5] w-full max-lg:aspect-[3/2]">
              <Parallax>
                <SiteImage slot={image} priority sizes="(min-width: 1024px) 40vw, 100vw" />
              </Parallax>
            </ImageReveal>
          </div>
        )}
        {aside && <div className="lg:col-span-5">{aside}</div>}
      </Container>
    </section>
  );
}
