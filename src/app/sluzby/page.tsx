import { AreaCards } from "@/components/sections/AreaCards";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { s4_1_prehlad } from "@/content/04-sluzby/4-1-prehlad";
import { pageSeo } from "@/content/10-seo";
import { home } from "@/content/home";
import { images } from "@/content/images";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(pageSeo.services);

export default function ServicesIndexPage() {
  return (
    <>
      <PageHero
        crumb="Služby"
        title={s4_1_prehlad.title}
        subtitle={s4_1_prehlad.intro}
        ctas={[
          { kind: "link", label: "Dohodnúť konzultáciu", href: "/kontakt#konzultacia", variant: "primary" },
          { kind: "call", label: "Zavolať {{phone|DOPLNIŤ: telefón}}", variant: "secondary" },
        ]}
        image={images.sluzbyUvod}
        dataDoc="4.1"
      />
      <AreaCards content={home.areas} number="01" dataDoc="4.1" />
      <CtaBand content={s4_1_prehlad.cta} dataDoc="4.1" />
    </>
  );
}
