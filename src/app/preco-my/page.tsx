import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Rich } from "@/components/ui/Rich";
import { images } from "@/content/images";
import { precoMy } from "@/content/preco-my";
import { pageSeo } from "@/content/10-seo";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(pageSeo.whyUs);

export default function PrecoMyPage() {
  return (
    <>
      <PageHero title={precoMy.h1} subtitle={precoMy.intro} image={images.precoMy} dataDoc="7.1" />

      <section data-doc="7.1" className="py-20 md:py-28">
        <Container className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {precoMy.reasons.map((reason) => (
            <article key={reason.title} className="rounded-xs border border-line bg-paper p-6 md:p-8">
              <span className="step-number text-bordeaux">{reason.number}</span>
              <h2 className="mt-5 font-serif text-[28px] leading-tight text-ink">{reason.title}</h2>
              <p className="mt-4 text-[16px] leading-relaxed text-stone"><Rich text={reason.text} /></p>
              <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-bordeaux"><Rich text={reason.proof} /></p>
            </article>
          ))}
        </Container>
      </section>

      <CtaBand dataDoc="7.1" content={precoMy.cta} />
    </>
  );
}
