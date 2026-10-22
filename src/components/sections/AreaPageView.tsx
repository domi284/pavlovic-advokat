import type { AreaPage, AreaSection } from "@/content/types";
import { ChecklistSteps } from "./ChecklistSteps";
import { CtaBand } from "./CtaBand";
import { Discretion } from "./Discretion";
import { FaqList } from "./FaqList";
import { IntroText } from "./IntroText";
import { PageHero } from "./PageHero";
import { ServiceList } from "./ServiceList";
import { SituationList } from "./SituationList";
import { Steps } from "./Steps";

/** Spoločná šablóna podstránok oblastí; poradie sekcií je dané content súborom. */
export function AreaPageView({ page }: { page: AreaPage }) {
  let counter = 0;
  const next = () => String(++counter).padStart(2, "0");

  const render = (section: AreaSection, i: number) => {
    const id = `${section.type}-${i}-title`;
    switch (section.type) {
      case "checklist":
        return <ChecklistSteps key={id} id={id} number={next()} {...section} />;
      case "intro":
        return <IntroText key={id} id={id} title={section.title} text={section.text} className="border-t border-line" />;
      case "services":
        return <ServiceList key={id} id={id} number={next()} {...section} />;
      case "situations":
        return <SituationList key={id} id={id} number={next()} {...section} />;
      case "discretion":
        return <Discretion key={id} id={id} title={section.title} text={section.text} />;
      case "process":
        return (
          <Steps
            key={id}
            id={id}
            number={next()}
            eyebrow={section.eyebrow}
            title={section.title}
            steps={section.steps}
          />
        );
      case "faq":
        return (
          <FaqList
            key={id}
            id={id}
            number={next()}
            eyebrow={section.eyebrow}
            title={section.title}
            items={section.items}
          />
        );
    }
  };

  return (
    <>
      <PageHero
        crumb={page.name}
        title={page.hero.h1}
        subtitle={page.hero.subtitle}
        ctas={page.hero.ctas}
        image={page.image}
      />
      {page.sections.map(render)}
      <CtaBand content={page.cta} />
    </>
  );
}
