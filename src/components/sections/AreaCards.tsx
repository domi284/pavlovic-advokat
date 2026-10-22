import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { SiteImage } from "@/components/ui/SiteImage";
import { TextLink } from "@/components/ui/TextLink";
import type { home } from "@/content/home";
import { typo } from "@/lib/typo";
import { SectionHeading } from "./SectionHeading";

export function AreaCards({ content, number }: { content: typeof home.areas; number: string }) {
  return (
    <section aria-labelledby="oblasti-title" className="py-24 md:py-32 lg:py-40">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            id="oblasti-title"
            number={number}
            eyebrow={content.eyebrow}
            title={content.title}
            className="lg:col-span-7"
          />
          <Reveal className="lg:col-span-4 lg:col-start-9">
            <p className="lead">{typo(content.intro)}</p>
          </Reveal>
        </div>

        <Stagger as="ul" className="mt-16 grid gap-12 md:mt-20 md:grid-cols-3 md:gap-6 lg:gap-10">
          {content.cards.map((card, i) => (
            <StaggerItem as="li" key={card.title}>
              <Link href={card.link.href} className="group flex h-full flex-col">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <div className="absolute inset-0 transition-transform duration-[800ms] ease-premium group-hover:scale-105">
                    <SiteImage slot={card.image} sizes="(min-width: 768px) 33vw, 100vw" />
                  </div>
                </div>
                <div className="relative flex flex-1 flex-col border-b border-line pt-8 pb-9">
                  <span className="step-number text-stone/35 transition-colors duration-500 group-hover:text-bordeaux">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="h3 mt-5">{typo(card.title)}</h3>
                  <p className="body-text mt-4 flex-1 text-[16px]">{typo(card.text)}</p>
                  <TextLink as="span" href={card.link.href} label={card.link.label} className="mt-7 self-start" />
                  <span
                    aria-hidden="true"
                    className="absolute bottom-[-1px] left-0 h-px w-full origin-left scale-x-0 bg-bordeaux transition-transform duration-700 ease-premium group-hover:scale-x-100"
                  />
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
