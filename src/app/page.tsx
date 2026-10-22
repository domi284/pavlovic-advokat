import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { AreaCards } from "@/components/sections/AreaCards";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqList } from "@/components/sections/FaqList";
import { Hero } from "@/components/sections/Hero";
import { Principles } from "@/components/sections/Principles";
import { Steps } from "@/components/sections/Steps";
import { home } from "@/content/home";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(home.meta);

export default function HomePage() {
  return (
    <>
      <Hero content={home.hero} />
      <AreaCards content={home.areas} number="01" />
      <Steps
        id="spolupraca-title"
        number="02"
        eyebrow={home.process.eyebrow}
        title={home.process.title}
        steps={home.process.steps}
        cta={home.process.cta}
      />
      <AboutTeaser content={home.about} number="03" />
      <Principles content={home.principles} number="04" />
      <FaqList
        id="faq-title"
        number="05"
        eyebrow={home.faq.eyebrow}
        title={home.faq.title}
        items={home.faq.items}
        link={home.faq.link}
        className="border-t border-line"
      />
      <CtaBand content={home.cta} />
    </>
  );
}
