import { ImageReveal } from "@/components/motion/ImageReveal";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { CtaBand } from "@/components/sections/CtaBand";
import { FactsCard } from "@/components/sections/FactsCard";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Portrait, SiteImage } from "@/components/ui/SiteImage";
import { omne } from "@/content/omne";
import { pageMetadata } from "@/lib/seo";
import { typo } from "@/lib/typo";

export const metadata = pageMetadata(omne.meta);

export default function AboutPage() {
  const [first, ...rest] = omne.paragraphs;
  return (
    <>
      <PageHero
        title={omne.h1}
        subtitle={omne.subtitle}
        aside={
          <Reveal immediate delay={0.2}>
            <Portrait sizes="(min-width: 1024px) 40vw, 100vw" className="mx-auto max-w-[520px] lg:max-w-none" />
          </Reveal>
        }
      />

      <section aria-label="O mne" className="py-24 md:py-32 lg:py-40">
        <Container className="grid gap-16 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="max-w-[64ch] font-serif text-[21px] leading-[1.55] font-medium text-ink md:text-[24px]">
                {typo(first)}
              </p>
            </Reveal>
            {rest.map((paragraph) => (
              <Reveal key={paragraph} className="mt-8">
                <p className="body-text">{typo(paragraph)}</p>
              </Reveal>
            ))}
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
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

      <CtaBand content={omne.cta} />
    </>
  );
}
