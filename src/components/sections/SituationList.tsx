import { CornerDownRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { CtaButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { Cta } from "@/content/types";
import { typo } from "@/lib/typo";
import { SectionHeading } from "./SectionHeading";

/** „Kedy ma osloviť“: situácie ako karty 3×2. */
export function SituationList({
  id,
  number,
  eyebrow,
  title,
  items,
  cta,
}: {
  id: string;
  number?: string;
  eyebrow?: string;
  title: string;
  items: string[];
  cta: Cta;
}) {
  return (
    <section aria-labelledby={id} className="bg-bone py-24 md:py-32 lg:py-40">
      <Container>
        <SectionHeading id={id} number={number} eyebrow={eyebrow} title={title} className="max-w-3xl" />
        <Stagger as="ul" className="mt-14 grid gap-4 md:mt-20 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {items.map((item) => (
            <StaggerItem
              as="li"
              key={item}
              className="flex flex-col gap-6 rounded-xs border border-line bg-chalk p-7 md:min-h-[200px] md:p-8"
            >
              <CornerDownRight aria-hidden="true" strokeWidth={1.25} className="size-6 text-bordeaux" />
              <p className="font-serif text-[22px] leading-snug font-medium text-ink">{typo(item)}</p>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-14">
          <CtaButton cta={cta} />
        </Reveal>
      </Container>
    </section>
  );
}
