import { DrawLine } from "@/components/motion/DrawLine";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { TextLink } from "@/components/ui/TextLink";
import type { Item, TextLink as TextLinkType } from "@/content/types";
import { typo } from "@/lib/typo";
import { SectionHeading } from "./SectionHeading";

/** „Čo robiť…“: číslovaná vertikálna časová os v karte. */
export function ChecklistSteps({
  id,
  number,
  eyebrow,
  title,
  items,
  link,
}: {
  id: string;
  number?: string;
  eyebrow: string;
  title: string;
  items: Item[];
  link: TextLinkType;
}) {
  return (
    <section aria-labelledby={id} className="py-24 md:py-32 lg:py-40">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHeading id={id} number={number} eyebrow={eyebrow} title={title} />
          </div>
        </div>

        <div className="lg:col-span-7">
          <Reveal className="rounded-xs border border-line bg-paper px-6 py-10 shadow-hair md:px-12 md:py-14">
            <div className="relative">
              <DrawLine orientation="vertical" className="absolute top-5 bottom-5 left-5 w-px text-bordeaux/40" />
              <Stagger as="ol" className="relative space-y-9">
                {items.map((item, i) => (
                  <StaggerItem as="li" key={item.title} className="flex gap-6">
                    <span
                      aria-hidden="true"
                      className="flex size-10 shrink-0 items-center justify-center rounded-full border border-bordeaux bg-paper font-serif text-[19px] font-semibold text-bordeaux"
                    >
                      {i + 1}
                    </span>
                    <p className="body-text pt-1.5 text-[16px] md:text-[17px]">
                      <strong className="font-semibold text-ink">{typo(item.title)}</strong> {typo(item.text)}
                    </p>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </Reveal>
          <Reveal className="mt-9 flex flex-wrap items-baseline gap-x-3 gap-y-2">
            {link.lead && <span className="text-stone">{typo(link.lead)}</span>}
            <TextLink href={link.href} label={link.label} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
