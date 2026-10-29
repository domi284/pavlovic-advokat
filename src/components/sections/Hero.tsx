import { Clock3, MapPin, ShieldCheck } from "lucide-react";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { CtaGroup } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Portrait } from "@/components/ui/SiteImage";
import { Rich } from "@/components/ui/Rich";
import type { home } from "@/content/home";
import { typo } from "@/lib/typo";

const icons = [Clock3, ShieldCheck, MapPin];

export function Hero({ content }: { content: typeof home.hero }) {
  return (
    <>
      {/* Dokument 3.1 · Hero */}
      <section aria-labelledby="hero-title" data-doc="3.1" className="relative pt-[84px]">
        <Container className="grid items-center gap-12 py-12 md:py-16 lg:min-h-[calc(92vh-84px)] lg:grid-cols-12 lg:gap-16 lg:py-20">
          <div className="lg:col-span-7">
            <Reveal immediate>
              <Eyebrow>{content.eyebrow}</Eyebrow>
            </Reveal>
            <RevealText as="h1" id="hero-title" text={content.h1} immediate delay={0.15} className="h1 mt-6" />
            <Reveal immediate delay={0.5}>
              <p className="lead mt-8 max-w-[38ch]">{typo(content.subtitle)}</p>
            </Reveal>
            <Reveal immediate delay={0.65}>
              <CtaGroup ctas={content.ctas} className="mt-10" />
            </Reveal>
            <Reveal immediate delay={0.8}>
              <p className="mt-9 flex items-center gap-4 text-[14px] leading-snug text-stone">
                <span aria-hidden="true" className="h-px w-6 shrink-0 bg-bordeaux" />
                <span>{typo(content.office)}</span>
              </p>
            </Reveal>
          </div>

          <div className="relative lg:col-span-5 lg:pl-8">
            <span aria-hidden="true" className="absolute top-[8%] bottom-[8%] left-0 hidden w-px bg-bordeaux lg:block" />
            <ImageReveal immediate delay={0.2} className="aspect-[4/5] w-full">
              <Parallax>
                <Portrait sizes="(min-width: 1024px) 40vw, 100vw" />
              </Parallax>
            </ImageReveal>
          </div>
        </Container>
      </section>

      {/* Dokument 3.1 · Riadok dôvery */}
      <div data-doc="3.1" className="border-y border-line">
        <Container>
          <Stagger as="ul" className="grid md:grid-cols-3 md:divide-x md:divide-line">
            {content.points.map((point, i) => {
              const Icon = icons[i];
              return (
                <StaggerItem
                  as="li"
                  key={point}
                  className="flex items-center gap-4 border-b border-line py-6 last:border-b-0 md:justify-center md:border-b-0 md:px-6 md:py-8"
                >
                  <Icon aria-hidden="true" strokeWidth={1.25} className="size-6 shrink-0 text-bordeaux" />
                  <span className="text-[15px] font-medium text-ink"><Rich text={point} /></span>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </div>
    </>
  );
}
