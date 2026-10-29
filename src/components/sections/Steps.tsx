import { DrawLine } from "@/components/motion/DrawLine";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { CtaButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Rich } from "@/components/ui/Rich";
import type { Cta, Item } from "@/content/types";
import { typo } from "@/lib/typo";
import { SectionHeading } from "./SectionHeading";

/** „Ako to prebieha“: tri kroky prepojené linkou, ktorá sa vykreslí pri scrolle. */
export function Steps({
  id,
  number,
  eyebrow,
  title,
  steps,
  cta,
  dataDoc,
}: {
  id: string;
  number?: string;
  eyebrow?: string;
  title: string;
  steps: Item[];
  cta?: Cta;
  dataDoc?: string;
}) {
  return (
    <section aria-labelledby={id} data-doc={dataDoc} className="bg-bone py-24 md:py-32 lg:py-40">
      <Container>
        <SectionHeading id={id} number={number} eyebrow={eyebrow} title={title} className="max-w-3xl" />

        <div className="relative mt-16 md:mt-24">
          <DrawLine className="absolute top-9 right-0 left-0 hidden h-px text-bordeaux/45 md:block" />
          <DrawLine
            orientation="vertical"
            className="absolute top-2 bottom-8 left-[27px] w-px text-bordeaux/45 md:hidden"
          />
          <Stagger as="ol" stagger={0.15} className="relative grid gap-14 md:grid-cols-3 md:gap-10 lg:gap-16">
            {steps.map((step, i) => (
              <StaggerItem as="li" key={step.title} className="flex gap-7 md:block">
                <span className="step-number relative w-14 shrink-0 bg-bone py-1 md:inline-block md:w-auto md:py-0 md:pr-6">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="pt-2 md:pt-8">
                  <h3 className="h3">{typo(step.title)}</h3>
                  <p className="body-text mt-4 text-[16px]"><Rich text={step.text} /></p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {cta && (
          <Reveal className="mt-16 md:mt-20">
            <CtaButton cta={cta} />
          </Reveal>
        )}
      </Container>
    </section>
  );
}
