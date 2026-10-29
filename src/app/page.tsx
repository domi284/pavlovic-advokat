import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { AreaCards } from "@/components/sections/AreaCards";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqList } from "@/components/sections/FaqList";
import { Hero } from "@/components/sections/Hero";
import { Principles } from "@/components/sections/Principles";
import { Steps } from "@/components/sections/Steps";
import { Container } from "@/components/ui/Container";
import { Rich } from "@/components/ui/Rich";
import { TextLink } from "@/components/ui/TextLink";
import { home } from "@/content/home";
import { pageSeo } from "@/content/10-seo";
import { pageMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/sections/SectionHeading";

export const metadata = pageMetadata(pageSeo.home);

export default function HomePage() {
  return (
    <>
      <Hero content={home.hero} />
      <AreaCards content={home.areas} number="01" dataDoc="3.2" />
      <Steps
        id="spolupraca-title"
        number="02"
        eyebrow={home.process.eyebrow}
        title={home.process.title}
        steps={home.process.steps}
        cta={home.process.cta}
        dataDoc="3.3"
      />
      <AboutTeaser content={home.about} number="03" dataDoc="3.4" />
      <Principles content={home.principles} number="04" dataDoc="3.5" />
      {/* Dokument 3.6 · Prečo my */}
      <section data-doc="3.6" aria-labelledby="why-home-title" className="border-t border-line bg-bone py-24 md:py-32 lg:py-40">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <SectionHeading
              id="why-home-title"
              number="05"
              title={home.whyUs.title}
              className="lg:col-span-6"
            />
            <p className="lead lg:col-span-5 lg:col-start-8">{home.whyUs.intro}</p>
          </div>
          <ul className="mt-14 grid gap-8 md:grid-cols-2 lg:mt-16">
            {home.whyUs.items.map((item, index) => (
              <li key={item.title} className="border-t border-line pt-6">
                <span className="step-number text-bordeaux">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-serif text-[24px] leading-tight text-ink">{item.title}</h3>
                <p className="mt-3 max-w-[60ch] text-[16px] leading-relaxed text-stone"><Rich text={item.text} /></p>
              </li>
            ))}
          </ul>
          <div className="mt-10"><TextLink href={home.whyUs.link.href} label={home.whyUs.link.label} /></div>
        </Container>
      </section>
      <FaqList
        id="faq-title"
        number="06"
        eyebrow={home.faq.eyebrow}
        title={home.faq.title}
        items={home.faq.items}
        link={home.faq.link}
        className="border-t border-line"
        dataDoc="3.7"
      />
      <CtaBand content={home.cta} dataDoc="3.8" />
    </>
  );
}
