import { Reveal } from "@/components/motion/Reveal";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { TestimonialBubbles } from "@/components/sections/TestimonialBubbles";
import { Container } from "@/components/ui/Container";
import { Rich, fillVars } from "@/components/ui/Rich";
import { referencie, referenciePage } from "@/content/referencie";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(referenciePage.meta);

export default function ReferenciePage() {
  const [lead, ...rest] = referenciePage.intro;
  return (
    <>
      {/* Blok R.1 · Úvod */}
      <PageHero
        dataDoc="R.1"
        compact
        title={referenciePage.h1}
        subtitle={fillVars(lead)}
        aside={
          <span
            aria-hidden="true"
            className="pointer-events-none hidden select-none text-right font-serif text-[360px] leading-[0.6] text-bordeaux opacity-[0.08] lg:block"
          >
            „
          </span>
        }
      >
        {rest.map((paragraph) => (
          <p key={paragraph} className="mt-5 max-w-[60ch] text-[17px] leading-relaxed text-stone">
            <Rich text={paragraph} />
          </p>
        ))}
      </PageHero>

      {/* Blok R.2 · Bubliny s referenciami */}
      <section data-doc="R.2" aria-label="Referencie klientov" className="border-t border-line bg-bone py-20 md:py-28 lg:py-32">
        <Container>
          <Reveal>
            <TestimonialBubbles items={referencie} />
          </Reveal>
        </Container>
      </section>

      {/* Blok R.3 · Záverná výzva */}
      <CtaBand dataDoc="R.3" content={referenciePage.cta} />
    </>
  );
}
