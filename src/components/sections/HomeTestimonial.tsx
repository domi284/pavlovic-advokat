import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { referencie } from "@/content/referencie";
import { Bubble } from "./TestimonialBubbles";

/**
 * Úvod (3.1-referencie): malá bublina s referenciami z `referencie.ts`.
 * Striedajú sa vyplnené referencie; kým nie je vyplnená žiadna, zobrazí sa prázdna bublina
 * (úvodzovka, 6 bodiek, odkaz) so striedaním ako na /referencie.
 */
export function HomeTestimonial() {
  const filled = referencie.filter((item) => item.text.trim() !== "");
  // kým nie je vyplnená žiadna, ukáže sa prázdna bublina so všetkými (prázdnymi) položkami
  const items = filled.length > 0 ? filled : referencie;

  return (
    <section data-doc="3.1-referencie" aria-label="Referencie klientov" className="py-16 md:py-20">
      <Container>
        <Reveal className="mx-auto max-w-[720px]">
          <Bubble
            items={items}
            label="Referencie klientov"
            size="sm"
            link={{ href: "/referencie", label: "Všetky referencie →" }}
          />
        </Reveal>
      </Container>
    </section>
  );
}
