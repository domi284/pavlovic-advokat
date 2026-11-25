import { Reveal } from "@/components/motion/Reveal";
import { CookieSettingsButton } from "@/components/layout/CookieSettingsButton";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Rich } from "@/components/ui/Rich";
import type { LegalBlock, LegalDocument } from "@/content/types";
import { site } from "@/lib/site";

/** Právna stránka (/ochrana-osobnych-udajov, /cookies). Štítok návrhu riadi `site.showLegalDraftBadge`. */
export function LegalPage({ content }: { content: LegalDocument }) {
  return (
    <>
      <PageHero title={content.h1} compact dataDoc="9.2" />
      <Container data-doc="9.2" className="border-t border-line pt-12 pb-24 md:pb-32 lg:pb-40">
        <div className="max-w-[72ch]">
          {site.showLegalDraftBadge && (
            <p className="mb-8 inline-flex border border-bordeaux px-2.5 py-1 text-[11px] font-semibold tracking-[0.14em] text-bordeaux uppercase">
              Návrh – čaká na schválenie
            </p>
          )}
          <Reveal>
            <p className="lead">
              <Rich text={content.intro} />
            </p>
          </Reveal>
          {content.sections.map((section) => (
            <Reveal key={section.id} className="mt-14">
              <section id={section.id} aria-labelledby={`${section.id}-title`} className="scroll-mt-28">
                <h2 id={`${section.id}-title`} className="font-serif text-[28px] leading-tight font-medium md:text-[34px]">
                  {section.title}
                </h2>
                <div className="mt-5 space-y-4">
                  {section.blocks.map((block, i) => (
                    <Block key={i} block={block} />
                  ))}
                </div>
              </section>
            </Reveal>
          ))}
        </div>
      </Container>
    </>
  );
}

function Block({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case "p":
      return (
        <p className="body-text text-[16px]">
          <Rich text={block.text} />
        </p>
      );
    case "list":
      return (
        <ul className="space-y-2.5">
          {block.items.map((item) => (
            <li key={item} className="body-text relative pl-6 text-[16px]">
              <span aria-hidden="true" className="absolute top-[0.8em] left-0 h-px w-3 bg-bordeaux" />
              <Rich text={item} />
            </li>
          ))}
        </ul>
      );
    case "table":
      return (
        <>
          {/* desktop a tablet: tabuľka */}
          <div className="hidden md:block">
            <table className="w-full border-collapse text-left text-[14.5px] leading-relaxed">
              <thead>
                <tr className="border-b border-ink/70">
                  {block.head.map((cell) => (
                    <th key={cell} scope="col" className="py-3 pr-4 text-[12px] font-semibold tracking-[0.1em] text-stone uppercase">
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row) => (
                  <tr key={row[0]} className="border-b border-line align-top">
                    {row.map((cell, i) => (
                      <td key={i} className={i === 0 ? "py-3.5 pr-4 font-semibold text-ink" : "py-3.5 pr-4 text-ink/85"}>
                        <Rich text={cell} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* mobil: karty, aby nič nepretekalo */}
          <ul className="divide-y divide-line border-y border-line md:hidden">
            {block.rows.map((row) => (
              <li key={row[0]} className="py-4">
                <p className="text-[15px] font-semibold text-ink">
                  <Rich text={row[0]} />
                </p>
                <dl className="mt-2 space-y-1.5">
                  {row.slice(1).map((cell, i) => (
                    <div key={i} className="text-[14.5px] leading-relaxed">
                      <dt className="inline font-semibold text-stone">{block.head[i + 1]}: </dt>
                      <dd className="inline text-ink/85">
                        <Rich text={cell} />
                      </dd>
                    </div>
                  ))}
                </dl>
              </li>
            ))}
          </ul>
        </>
      );
    case "cookieSettings":
      return (
        <CookieSettingsButton
          label={block.label}
          className="min-h-[44px] cursor-pointer rounded-xs border border-ink px-5 text-[14px] font-semibold text-ink transition-colors duration-300 hover:bg-ink hover:text-chalk"
        />
      );
  }
}
