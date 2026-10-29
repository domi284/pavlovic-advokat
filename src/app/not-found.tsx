import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { CtaGroup } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { notFound } from "@/content/common";
import { typo } from "@/lib/typo";

export const metadata: Metadata = {
  title: { absolute: notFound.title },
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section aria-labelledby="page-title" data-doc="9.2" className="relative flex min-h-[80vh] items-center pt-[84px]">
      <Container className="relative w-full py-24">
        <div className="relative">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-[88px] -left-2 font-serif text-[160px] leading-none font-medium text-ink opacity-[0.08] select-none"
          >
            404
          </span>
          <RevealText as="h1" id="page-title" text={notFound.title} immediate className="h1 relative" />
          <Reveal immediate delay={0.3}>
            <p className="lead mt-7 max-w-[44ch]">{typo(notFound.text)}</p>
          </Reveal>
          <Reveal immediate delay={0.45}>
            <CtaGroup ctas={notFound.ctas} className="mt-10" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
