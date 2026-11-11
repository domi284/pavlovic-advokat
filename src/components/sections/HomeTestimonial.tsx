import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { referencie } from "@/content/referencie";
import { Bubble } from "./TestimonialBubbles";

/**
 * Úvod (3.1-referencie): malá bublina s referenciami z `referencie.ts`.
 * Zobrazujú sa iba vyplnené referencie; ak nie je žiadna, sekcia sa nevykreslí.
 */
export function HomeTestimonial() {
  const filled = referencie.filter((item) => item.text.trim() !== "");
  if (filled.length === 0) return null;

  return (
    <section data-doc="3.1-referencie" aria-label="Referencie klientov" className="py-16 md:py-20">
      <Container>
        <Reveal className="mx-auto max-w-[720px]">
          <Bubble
            items={filled}
            label="Referencie klientov"
            size="sm"
            link={{ href: "/referencie", label: "Všetky referencie →" }}
          />
        </Reveal>
      </Container>
    </section>
  );
}
