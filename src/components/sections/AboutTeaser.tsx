import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Portrait } from "@/components/ui/SiteImage";
import { TextLink } from "@/components/ui/TextLink";
import type { home } from "@/content/home";
import { typo } from "@/lib/typo";
import { SectionHeading } from "./SectionHeading";

export function AboutTeaser({ content, number }: { content: typeof home.about; number: string }) {
  return (
    <section aria-labelledby="advokat-title" className="py-24 md:py-32 lg:py-40">
      <Container className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <Portrait sizes="(min-width: 1024px) 40vw, 100vw" className="mx-auto max-w-[520px] lg:max-w-none" />
        </Reveal>

        <div className="lg:col-span-6 lg:col-start-7">
          <SectionHeading id="advokat-title" number={number} eyebrow={content.eyebrow} title={content.title} />
          <Reveal>
            <p className="label-caps mt-5">{content.subtitle}</p>
          </Reveal>
          <Reveal className="relative mt-12">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-[104px] -left-1 font-serif text-[140px] leading-none text-bordeaux select-none"
            >
              „
            </span>
            <p className="relative pt-6 font-serif text-[22px] leading-[1.45] font-medium text-ink md:text-[26px]">
              {typo(content.text)}
            </p>
          </Reveal>
          <Reveal className="mt-10">
            <TextLink href={content.link.href} label={content.link.label} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
