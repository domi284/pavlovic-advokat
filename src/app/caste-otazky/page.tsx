import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { FaqGroupNav } from "@/components/sections/FaqGroupNav";
import { PageHero } from "@/components/sections/PageHero";
import { Accordion } from "@/components/ui/Accordion";
import { Container } from "@/components/ui/Container";
import { TextLink } from "@/components/ui/TextLink";
import { plainText } from "@/components/ui/Rich";
import { faqPage } from "@/content/faq";
import { pageSeo } from "@/content/10-seo";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(pageSeo.faq);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqPage.groups.flatMap((group) =>
    group.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: plainText(item.a) },
    })),
  ),
};

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero title={faqPage.h1} compact dataDoc="8.4" />
      <FaqGroupNav groups={faqPage.groups.map(({ id, label }) => ({ id, label }))} />

      <Container className="pt-8 pb-24 md:pb-32 lg:pb-40">
        {faqPage.groups.map((group, i) => (
          <section
            key={group.id}
            id={group.id}
            aria-labelledby={`${group.id}-title`}
            data-doc="8.4"
            className="grid gap-8 border-b border-line py-16 last:border-b-0 md:py-20 lg:grid-cols-12 lg:gap-16"
          >
            <div className="lg:col-span-4">
              <Reveal>
                <p className="eyebrow">{String(i + 1).padStart(2, "0")}</p>
              </Reveal>
              <RevealText id={`${group.id}-title`} text={group.label} className="h2 mt-4" />
            </div>
            <Reveal className="lg:col-span-8">
              <Accordion items={group.items} />
              {group.href && <div className="mt-8"><TextLink href={group.href} label={`Viac o službe →`} /></div>}
            </Reveal>
          </section>
        ))}
      </Container>

    </>
  );
}
