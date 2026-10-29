import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Placeholder } from "@/components/ui/Placeholder";
import { Rich } from "@/components/ui/Rich";
import { images } from "@/content/images";
import { team } from "@/content/team";
import { pageSeo } from "@/content/10-seo";
import { mailHref, site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(pageSeo.team);

export default function TeamPage() {
  return (
    <>
      <PageHero title={team.h1} subtitle={team.intro} image={images.timKancelaria} dataDoc="6.1" />

      <section data-doc="6.2" className="py-20 md:py-28">
        <Container className="space-y-8">
          {team.members.map((member, index) => (
            <article
              key={member.key ?? `${member.name}-${index}`}
              className={index === 0 ? "overflow-hidden rounded-xs border border-line bg-ink text-chalk" : "overflow-hidden rounded-xs border border-line bg-paper"}
            >
              <div className="grid gap-0 md:grid-cols-12">
                <div className={index === 0 ? "md:col-span-5" : "md:col-span-4"}>
                  <div className="relative aspect-[4/5] w-full bg-bone">
                    <div className="absolute inset-4 flex items-center justify-center border border-white/10 text-center text-[12px] uppercase tracking-[0.18em] text-stone">
                      Fotografia bude doplnená
                    </div>
                  </div>
                </div>
                <div className={index === 0 ? "md:col-span-7 p-8 md:p-12" : "md:col-span-8 p-6 md:p-8"}>
                  <p className={index === 0 ? "text-sm uppercase tracking-[0.18em] text-sand" : "text-xs uppercase tracking-[0.18em] text-bordeaux"}><Rich text={member.role} /></p>
                  <h2 className={index === 0 ? "mt-3 font-serif text-[32px] text-chalk md:text-[44px]" : "mt-3 font-serif text-[28px] text-ink"}><Rich text={member.name} /></h2>
                  <p className={index === 0 ? "mt-4 max-w-[60ch] text-[16px] text-chalk/75" : "mt-4 max-w-[60ch] text-[16px] text-stone"}><Rich text={member.description} /></p>

                  <div className="mt-8 overflow-hidden rounded-xs border border-white/10">
                    <dl className={index === 0 ? "divide-y divide-white/10" : "divide-y divide-line"}>
                      {member.stats.map(([label, value]) => (
                        <div key={label} className="grid gap-3 px-4 py-3 md:grid-cols-[170px_1fr] md:gap-6">
                          <dt className={index === 0 ? "text-[11px] uppercase tracking-[0.14em] text-sand" : "text-[11px] uppercase tracking-[0.14em] text-bordeaux"}>{label}</dt>
                          <dd className={index === 0 ? "text-[15px] text-chalk" : "text-[15px] text-ink"}><Rich text={value} /></dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </Container>
      </section>

      <section data-doc="6.3" className="border-t border-line bg-bone py-20 md:py-24">
        <Container className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="h2">{team.joinTitle}</h2>
          </div>
          <div className="lg:col-span-7">
            <p className="max-w-[60ch] text-[17px] leading-relaxed text-stone">
              <Rich text={team.joinText} />
            </p>
            {site.fields.careersEmail ? (
              <a href={`${mailHref(site.fields.careersEmail)}?subject=Záujem%20o%20prácu`} className="mt-6 inline-flex rounded-full border border-bordeaux bg-bordeaux px-5 py-3 text-[14px] font-semibold text-chalk">
                {team.joinCta}
              </a>
            ) : (
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button type="button" disabled className="inline-flex cursor-not-allowed rounded-full border border-line px-5 py-3 text-[14px] font-semibold text-stone">
                  {team.joinCta}
                </button>
                <Placeholder>{team.careersPlaceholder}</Placeholder>
              </div>
            )}
          </div>
        </Container>
      </section>

      <CtaBand dataDoc="6.3" content={team.closing} />
    </>
  );
}
