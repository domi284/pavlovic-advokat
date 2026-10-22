import { ImageReveal } from "@/components/motion/ImageReveal";
import { Parallax } from "@/components/motion/Parallax";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { SiteImage } from "@/components/ui/SiteImage";
import type { home } from "@/content/home";
import { typo } from "@/lib/typo";
import { SectionHeading } from "./SectionHeading";

export function Principles({ content, number }: { content: typeof home.principles; number: string }) {
  return (
    <section aria-labelledby="principy-title" className="pb-24 md:pb-32 lg:pb-40">
      <Container className="grid gap-16 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-8">
          <SectionHeading id="principy-title" number={number} eyebrow={content.eyebrow} title={content.title} />
          <Stagger as="ul" className="mt-14 grid gap-x-12 gap-y-12 md:mt-16 md:grid-cols-2">
            {content.items.map((item) => (
              <StaggerItem as="li" key={item.title} className="border-t border-line pt-7">
                <h3 className="font-serif text-[24px] leading-tight font-semibold">{typo(item.title)}</h3>
                <p className="body-text mt-3 text-[16px]">{typo(item.text)}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
        <div className="hidden lg:col-span-3 lg:col-start-10 lg:block">
          <div className="sticky top-28">
            <ImageReveal className="aspect-[9/16] w-full">
              <Parallax>
                <SiteImage slot={content.image} sizes="25vw" />
              </Parallax>
            </ImageReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
