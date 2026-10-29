import Link from "next/link";
import { notFound } from "next/navigation";
import { ChecklistSteps } from "@/components/sections/ChecklistSteps";
import { CtaBand } from "@/components/sections/CtaBand";
import { Discretion } from "@/components/sections/Discretion";
import { FaqList } from "@/components/sections/FaqList";
import { IntroText } from "@/components/sections/IntroText";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceList } from "@/components/sections/ServiceList";
import { SituationList } from "@/components/sections/SituationList";
import { Steps } from "@/components/sections/Steps";
import { Container } from "@/components/ui/Container";
import { serviceDetails, serviceDetailBySlug } from "@/content/04-sluzby";
import { serviceSeoBySlug } from "@/content/10-seo";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return serviceDetails.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceDetailBySlug[slug];
  const meta = serviceSeoBySlug[slug as keyof typeof serviceSeoBySlug];
  return service && meta ? pageMetadata(meta) : {};
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceDetailBySlug[slug];
  if (!service) notFound();

  const formHref = `/kontakt?oblast=${service.slug}#konzultacia`;
  const ctaLabel = service.hero.ctaLabel ?? "Dohodnúť konzultáciu";
  const related = service.related.map((relatedSlug) => serviceDetailBySlug[relatedSlug]).filter(Boolean);
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a.replace(/\s*\(OVERIŤ\)\s*/g, "") },
    })),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Úvod", item: "/" },
      { "@type": "ListItem", position: 2, name: "Služby", item: "/sluzby" },
      { "@type": "ListItem", position: 3, name: service.name, item: `/sluzby/${service.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {/* Dokument 4.3–4.11 · Blok 1: Hero */}
      <PageHero
        dataDoc={`${service.block}-1`}
        breadcrumbTrail={[
          { label: "Úvod", href: "/" },
          { label: "Služby", href: "/sluzby" },
          { label: service.name },
        ]}
        title={service.hero.title}
        subtitle={service.hero.subtitle}
        ctas={[
          { kind: "link", label: ctaLabel, href: formHref, variant: "primary" },
          { kind: "call", label: "Zavolať {{phone|DOPLNIŤ: telefón}}", variant: "secondary" },
        ]}
        image={service.image}
      />
      {service.hero.notice && (
        <section data-doc={`${service.block}-1-upozornenie`} className="border-t border-line py-6 md:py-8">
          <Container>
            <div className="border-l-[3px] border-bordeaux bg-bordeaux-soft px-5 py-4 text-[16px] leading-relaxed text-ink">
              {service.hero.notice}
            </div>
          </Container>
        </section>
      )}
      {/* Dokument 4.3–4.11 · Blok 2: Úvod */}
      <IntroText
        id={`${slug}-intro`}
        dataDoc={`${service.block}-2`}
        title={service.intro.title}
        text={service.intro.text}
        className="border-t border-line"
      />
      {service.checklist && (
        <>
          {/* Dokument 4.3 · Špeciálny blok: Čo robiť hneď po dopravnej nehode */}
          <ChecklistSteps
            id={`${slug}-checklist`}
            dataDoc={`${service.block}-special-checklist`}
            eyebrow={service.checklist.title}
            title={service.checklist.title}
            items={service.checklist.items}
            link={{
              lead: service.checklist.linkLead,
              label: `${ctaLabel} →`,
              href: formHref,
            }}
          />
        </>
      )}
      {/* Dokument 4.3–4.11 · Blok 3: S čím pomáhame */}
      <ServiceList
        id={`${slug}-services`}
        dataDoc={`${service.block}-3`}
        title={service.services.title}
        items={service.services.items}
      />
      {service.discretion && (
        <>
          {/* Dokument 4.11 · Špeciálny blok: Diskrétnosť */}
          <Discretion
            id={`${slug}-discretion`}
            dataDoc={`${service.block}-special-discretion`}
            title={service.discretion.title}
            text={service.discretion.text}
          />
        </>
      )}
      {/* Dokument 4.3–4.11 · Blok 4: Ako postupujeme */}
      <Steps
        id={`${slug}-steps`}
        dataDoc={`${service.block}-4`}
        title="Ako postupujeme"
        steps={service.steps}
      />
      {/* Dokument 4.3–4.11 · Blok 5: Kedy sa ozvať */}
      <SituationList
        id={`${slug}-situations`}
        dataDoc={`${service.block}-5`}
        title={service.situations.title}
        items={service.situations.items}
        cta={{ kind: "link", label: ctaLabel, href: formHref, variant: "primary" }}
      />
      {/* Dokument 4.3–4.11 · Blok 6: Časté otázky */}
      <FaqList
        id={`${slug}-faq`}
        dataDoc={`${service.block}-6`}
        title="Často kladené otázky"
        items={service.faq}
      />
      {/* Dokument 4.3–4.11 · Blok 7: Súvisiace služby */}
      <section data-doc={`${service.block}-7`} aria-labelledby={`${slug}-related`} className="border-t border-line py-16 md:py-20">
        <Container>
          <h2 id={`${slug}-related`} className="h2 mb-8">Súvisiace služby</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/sluzby/${item.slug}`}
                className="group flex items-center justify-between border border-line px-5 py-4 text-ink transition-colors hover:bg-paper"
              >
                <span className="font-serif text-[22px]">{item.name}</span>
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      {/* Dokument 4.3–4.11 · Blok 8: Záverná výzva */}
      <CtaBand
        dataDoc={`${service.block}-8`}
        content={{
          ...service.cta,
          ctas: [
            { kind: "link", label: ctaLabel, href: formHref, variant: "primary" },
            { kind: "call", label: "Zavolať {{phone|DOPLNIŤ: telefón}}", variant: "secondary" },
          ],
        }}
      />
    </>
  );
}
