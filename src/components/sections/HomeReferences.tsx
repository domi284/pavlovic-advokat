import Image from "next/image";
import type { CSSProperties } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { TextLink } from "@/components/ui/TextLink";
import { referencie, referencieHome } from "@/content/referencie";
import { typo } from "@/lib/typo";

/** Jeden celý okruh pásu líg (ľahko zmeniteľné). */
const MARQUEE_DURATION = "30s";

/**
 * Úvod (3.1-referencie): veta a rámik s nekonečným pásom líg vo farbe (sprava doľava, 30 s/okruh).
 * Zoznam je v DOM dvakrát, pás sa posúva o -50 % → bez trhnutia pri napojení; druhá kópia je skrytá
 * pred čítačkami. Box loga 64 px (52 px pod 640 px), max. šírka 200 px, medzera 64 px (40 px pod 640 px).
 * Pauza pri hover a focus; pri prefers-reduced-motion pás stojí a logá sa zalomia na stred.
 */
export function HomeReferences() {
  return (
    <section data-doc="3.1-referencie" aria-label="Referencie" className="py-16 md:py-20">
      <Container>
        <Reveal className="flex flex-col items-center text-center">
          <p className="max-w-[60ch] font-sans text-[15px] leading-relaxed text-stone md:text-[16px]">
            {typo(referencieHome.text)}
          </p>
          <div
            tabIndex={0}
            aria-label="Logá spoločností a organizácií"
            role="region"
            className="marquee mt-10 w-full min-w-0 overflow-hidden rounded-xs border-2 border-bordeaux bg-paper py-5 shadow-[0_1px_2px_rgba(28,29,32,.04),0_12px_32px_-12px_rgba(28,29,32,.12)] sm:py-7"
          >
            <div className="marquee-mask">
              <div
                className="marquee-track flex w-max [--box:52px] [--gap:40px] sm:[--box:64px] sm:[--gap:64px]"
                style={{ "--marquee-duration": MARQUEE_DURATION } as CSSProperties}
              >
                {[false, true].map((copy) => (
                  <ul
                    key={String(copy)}
                    className="marquee-copy flex shrink-0 items-center"
                    aria-hidden={copy ? "true" : undefined}
                  >
                    {referencie.map((item) => (
                      <li
                        key={item.name}
                        className="flex h-(--box) shrink-0 items-center justify-center px-[calc(var(--gap)/2)]"
                      >
                        <Image
                          src={item.logo}
                          alt={copy ? "" : item.name}
                          sizes="200px"
                          loading="lazy"
                          style={{ "--s": item.scale ?? 1 } as CSSProperties}
                          className="h-[calc(var(--box)*0.7*var(--s))] max-h-full w-auto max-w-[200px] object-contain"
                        />
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>
          <TextLink href={referencieHome.link.href} label={referencieHome.link.label} className="mt-10 text-[14px]" />
        </Reveal>
      </Container>
    </section>
  );
}
