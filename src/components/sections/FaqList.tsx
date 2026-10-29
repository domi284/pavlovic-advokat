import { Reveal } from "@/components/motion/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { Container } from "@/components/ui/Container";
import { TextLink } from "@/components/ui/TextLink";
import type { Faq, TextLink as TextLinkType } from "@/content/types";
import { cn } from "@/lib/cn";
import { SectionHeading } from "./SectionHeading";

/** FAQ: vľavo sticky nadpis, vpravo akordeón. */
export function FaqList({
  id,
  number,
  eyebrow,
  title,
  items,
  link,
  className,
  dataDoc,
}: {
  id: string;
  number?: string;
  eyebrow?: string;
  title: string;
  items: Faq[];
  link?: TextLinkType;
  className?: string;
  dataDoc?: string;
}) {
  return (
    <section aria-labelledby={id} data-doc={dataDoc} className={cn("py-24 md:py-32 lg:py-40", className)}>
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionHeading id={id} number={number} eyebrow={eyebrow} title={title} />
          </div>
        </div>
        <div className="lg:col-span-8">
          <Reveal>
            <Accordion items={items} />
          </Reveal>
          {link && (
            <Reveal className="mt-10">
              <TextLink href={link.href} label={link.label} />
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
