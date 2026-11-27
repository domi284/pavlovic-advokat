import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { CtaGroup } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Rich } from "@/components/ui/Rich";
import { FullLogo } from "@/components/ui/Logo";
import type { CtaBand as CtaBandContent } from "@/content/types";

/** Záverný tmavý CTA pás so štvorcom s jemným rámom a zreteľným logom kancelárie vpravo. */
export function CtaBand({ content, dataDoc }: { content: CtaBandContent; dataDoc?: string }) {
  return (
    <section aria-labelledby="cta-title" data-doc={dataDoc} className="on-dark relative isolate overflow-hidden bg-ink text-chalk">
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
        {/* Štvorec s logom: od 1280 px vpravo vedľa textu (absolútne, vycentrovaný na výšku pásu),
            pod 1280 px v toku pod tlačidlami (menší), aby sa neprekrýval s textom. */}
        <div
          aria-hidden="true"
          className="pointer-events-none mt-16 flex aspect-square w-full max-w-[340px] items-center justify-center border-[8px] border-chalk/[0.04] md:mt-20 xl:absolute xl:top-1/2 xl:right-[4%] xl:mt-0 xl:size-[520px] xl:max-w-none xl:-translate-y-1/2 xl:border-[12px]"
        >
          {/* celé logo, svetlé na tmavom pozadí, max. 75 % šírky štvorca */}
          <FullLogo tone="light" decorative sizes="(min-width: 1280px) 390px, 255px" className="w-[75%] opacity-85" />
        </div>
      </Container>
    </section>
  );
}
