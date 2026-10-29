import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { CtaGroup } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Rich } from "@/components/ui/Rich";
import { Monogram } from "@/components/ui/Logo";
import { SiteImage } from "@/components/ui/SiteImage";
import type { CtaBand as CtaBandContent } from "@/content/types";
import { images } from "@/content/images";

/** Záverný tmavý CTA pás s textúrou kameňa a veľkým monogramom v pozadí. */
export function CtaBand({ content, dataDoc }: { content: CtaBandContent; dataDoc?: string }) {
  return (
    <section aria-labelledby="cta-title" data-doc={dataDoc} className="on-dark relative isolate overflow-hidden bg-ink text-chalk">
      <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-[0.08]">
        <SiteImage slot={images.kamen} sizes="100vw" className="[&_img]:grayscale" />
      </div>
      <Monogram className="pointer-events-none absolute top-1/2 -right-16 -z-10 size-[520px] -translate-y-1/2 text-chalk opacity-[0.04] md:right-[4%]" />

      <Container className="py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <RevealText id="cta-title" text={content.title} className="h2 text-chalk" />
          {content.text && (
            <Reveal delay={0.1}>
              <p className="mt-7 max-w-[52ch] text-[18px] leading-relaxed text-chalk-muted md:text-[19px]">
                <Rich text={content.text} />
              </p>
            </Reveal>
          )}
          <Reveal delay={0.2}>
            <CtaGroup ctas={content.ctas} tone="dark" className="mt-11" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
