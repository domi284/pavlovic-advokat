import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { typo } from "@/lib/typo";

/** Úvodný text oblasti: H2 vľavo (5 stĺpcov), text vpravo (7 stĺpcov). */
export function IntroText({ id, title, text, className }: { id: string; title: string; text: string; className?: string }) {
  return (
    <section aria-labelledby={id} className={cn("py-24 md:py-32 lg:py-40", className)}>
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <RevealText id={id} text={title} className="h2 lg:col-span-5" />
        <Reveal className="lg:col-span-7">
          <p className="body-text text-[18px] leading-[1.75] md:text-[19px]">{typo(text)}</p>
        </Reveal>
      </Container>
    </section>
  );
}
