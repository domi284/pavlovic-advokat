import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Rich } from "@/components/ui/Rich";
import type { Item } from "@/content/types";
import { typo } from "@/lib/typo";
import { SectionHeading } from "./SectionHeading";

/** Zoznam služieb ako riadky oddelené linkami: číslo · názov · text. */
export function ServiceList({
  id,
  number,
  eyebrow,
  title,
  items,
  reviewMark,
  dataDoc,
}: {
  id: string;
  number?: string;
  eyebrow?: string;
  title: string;
  items: Item[];
  reviewMark?: boolean;
  dataDoc?: string;
}) {
  return (
    <section aria-labelledby={id} data-doc={dataDoc} className="py-24 md:py-32 lg:py-40">
      <Container>
        <SectionHeading
          id={id}
          number={number}
          eyebrow={eyebrow}
          title={title}
          reviewMark={reviewMark}
          className="max-w-3xl"
        />
        <Stagger as="ul" className="mt-14 border-t border-line md:mt-20">
          {items.map((item, i) => (
            <StaggerItem as="li" key={item.title} className="border-b border-line">
              <div className="grid gap-3 py-8 transition-[background-color,transform] duration-500 ease-premium hover:translate-x-2 hover:bg-paper md:grid-cols-12 md:gap-8 md:px-4 md:py-10">
                <span className="font-serif text-[22px] font-medium text-bordeaux md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-[24px] leading-tight font-semibold md:col-span-4">{typo(item.title)}</h3>
                <p className="body-text text-[16px] md:col-span-7 md:pt-1">
                  <Rich text={item.text} />
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
