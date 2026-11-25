import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { TextLink } from "@/components/ui/TextLink";
import { referencie, referencieHome } from "@/content/referencie";
import { cn } from "@/lib/cn";
import { typo } from "@/lib/typo";
import { ReferenceLogo } from "./ReferenceLogo";

/**
 * Úvod (3.1-referencie): veta a logá firiem vo farbe, bez pohybu (iba fade-in pri zobrazení).
 * Mobil 3 × 3 (box 46 px pod 640 px, 36 px od 640 px), tablet a menší desktop 5 + 4 centrované (box 48 px),
 * od 1408 px (obsah 1280 px) jeden riadok.
 */
export function HomeReferences() {
  return (
    <section data-doc="3.1-referencie" aria-label="Referencie" className="py-16 md:py-20">
      <Container>
        <Reveal className="flex flex-col items-center text-center">
          <p className="max-w-[60ch] font-sans text-[15px] leading-relaxed text-stone md:text-[16px]">
            {typo(referencieHome.text)}
          </p>
          <ul
            className={cn(
              "mt-10 grid w-full grid-cols-3 gap-x-4 gap-y-10 [--box:46px] sm:gap-y-7 sm:[--box:36px]",
              "md:max-w-[880px] md:grid-cols-10 md:gap-x-6 md:gap-y-9 md:[--box:48px]",
              "min-[88rem]:max-w-none min-[88rem]:grid-cols-9 min-[88rem]:gap-x-8",
            )}
          >
            {referencie.map((item, index) => (
              <li
                key={item.name}
                className={cn(
                  "md:col-span-2 md:max-w-[150px] md:justify-self-center md:w-full",
                  // druhý riadok (4 logá) posunutý o polovicu bunky = centrovaný
                  index === 5 && "md:col-start-2",
                  "min-[88rem]:col-span-1 min-[88rem]:col-start-auto",
                )}
              >
                <ReferenceLogo item={item} sizes="150px" />
              </li>
            ))}
          </ul>
          <TextLink href={referencieHome.link.href} label={referencieHome.link.label} className="mt-10 text-[14px]" />
        </Reveal>
      </Container>
    </section>
  );
}

