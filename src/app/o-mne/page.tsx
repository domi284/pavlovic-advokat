import { Reveal } from "@/components/motion/Reveal";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { Parallax } from "@/components/motion/Parallax";
import { CtaBand } from "@/components/sections/CtaBand";
import { FactsCard } from "@/components/sections/FactsCard";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Portrait, SiteImage } from "@/components/ui/SiteImage";
import { Rich } from "@/components/ui/Rich";
import { omne } from "@/content/omne";
import { pageSeo } from "@/content/10-seo";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(pageSeo.about);

export default function AboutPage() {
  return (
    <>
      <PageHero
        dataDoc="5.1"
        title={omne.h1}
        subtitle={omne.subtitle}
        aside={
          <Reveal immediate delay={0.2}>
            <Portrait sizes="(min-width: 1024px) 40vw, 100vw" className="mx-auto max-w-[520px] lg:max-w-none" />
          </Reveal>
        }
      />

      <section aria-label="O mne" data-doc="5.1" className="py-24 md:py-32 lg:py-40">
        <Container className="grid gap-16 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            {omne.paragraphs.map((paragraph) => (
              <Reveal key={paragraph} className="mt-8">
                <p className="body-text"><Rich text={paragraph} /></p>
              </Reveal>
            ))}
          </div>
          <div data-doc="5.2" className="lg:col-span-5 lg:col-start-8">
            <Reveal className="lg:sticky lg:top-32">
              <FactsCard facts={omne.facts} />
            </Reveal>
          </div>
        </Container>
      </section>

      <Container className="pb-24 md:pb-32 lg:pb-40">
        <ImageReveal className="aspect-[16/9] w-full">
          <Parallax>
            <SiteImage slot={omne.image} sizes="(min-width: 1408px) 1280px, 100vw" />
          </Parallax>
        </ImageReveal>
      </Container>

      <section data-doc="5.3" aria-labelledby="career-title" className="border-t border-line bg-bone py-20 md:py-28">
        <Container>
          <h2 id="career-title" className="h2">{omne.timelineTitle}</h2>
          <ul className="mt-10 max-w-3xl divide-y divide-line border-y border-line">
            {omne.timeline.map((milestone) => (
              <li key={milestone} className="py-5 text-[17px] leading-relaxed text-ink"><Rich text={milestone} /></li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand dataDoc="5.3" content={omne.cta} />
    </>
  );
}
