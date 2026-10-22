import { Lock } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { Container } from "@/components/ui/Container";
import { typo } from "@/lib/typo";

/** Tmavá sekcia „Diskrétnosť“ (výnimka na Trestnom práve). */
export function Discretion({ id, title, text }: { id: string; title: string; text: string }) {
  return (
    <section aria-labelledby={id} className="on-dark bg-ink py-24 text-chalk md:py-32 lg:py-40">
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Reveal>
            <span className="flex size-16 items-center justify-center rounded-full border border-sand/40">
              <Lock aria-hidden="true" strokeWidth={1.25} className="size-7 text-sand" />
            </span>
          </Reveal>
          <RevealText id={id} text={title} className="h2 mt-8 text-chalk" />
        </div>
        <Reveal className="lg:col-span-7 lg:col-start-6 lg:pt-24">
          <p className="font-serif text-[26px] leading-[1.4] font-medium text-chalk md:text-[34px]">{typo(text)}</p>
        </Reveal>
      </Container>
    </section>
  );
}
