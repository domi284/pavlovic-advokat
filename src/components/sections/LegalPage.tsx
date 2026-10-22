import { Reveal } from "@/components/motion/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Placeholder } from "@/components/ui/Placeholder";
import type { privacy } from "@/content/legal";

/** Štruktúra právnej stránky; text zásad dodá advokátska kancelária. */
export function LegalPage({ content }: { content: typeof privacy }) {
  return (
    <>
      <PageHero title={content.h1} compact />
      <Container className="border-t border-line pt-12 pb-24 md:pb-32 lg:pb-40">
        <div className="max-w-[64ch]">
          <Reveal>
            <Placeholder>{content.pending}</Placeholder>
          </Reveal>
          {content.sections.map((heading, i) => {
            const id = `zasady-${i}`;
            return (
              <Reveal key={heading} className="mt-14">
                <section aria-labelledby={id}>
                  <h2 id={id} className="font-serif text-[30px] leading-tight font-medium md:text-[36px]">
                    {heading}
                  </h2>
                  <p className="mt-4">
                    <Placeholder>{content.sectionPlaceholder}</Placeholder>
                  </p>
                </section>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </>
  );
}
