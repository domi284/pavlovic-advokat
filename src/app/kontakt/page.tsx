import { Suspense } from "react";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { ContactForm } from "@/components/sections/ContactForm";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { Rich } from "@/components/ui/Rich";
import { SiteImage } from "@/components/ui/SiteImage";
import { kontakt } from "@/content/kontakt";
import { mapsEmbedUrl, pageMetadata } from "@/lib/seo";
import { typo } from "@/lib/typo";

export const metadata = pageMetadata(kontakt.meta);

export default function ContactPage() {
  return (
    <>
      <PageHero title={kontakt.h1} subtitle={kontakt.subtitle} compact />

      <section aria-label="Kontaktné údaje a formulár" className="border-t border-line pt-16 pb-24 md:pt-20 md:pb-32 lg:pb-40">
        <Container className="grid gap-16 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Stagger as="ul" className="space-y-7">
              {kontakt.details.map((detail) => (
                <StaggerItem as="li" key={detail.label} className="border-b border-line pb-6">
                  <p className="label-caps">{detail.label}</p>
                  <p className="mt-2 font-serif text-[20px] leading-snug font-medium text-ink">
                    <Rich text={detail.value} />
                  </p>
                </StaggerItem>
              ))}
            </Stagger>

            <ImageReveal className="mt-12 aspect-[4/3] w-full">
              <SiteImage slot={kontakt.image} sizes="(min-width: 1024px) 40vw, 100vw" />
            </ImageReveal>

            <Reveal className="mt-6">
              <MapEmbed title={kontakt.map.title} src={mapsEmbedUrl(kontakt.map.query)} />
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div
              id="konzultacia"
              className="rounded-xs border border-line bg-paper px-6 py-10 shadow-hair md:px-12 md:py-14"
            >
              <RevealText id="konzultacia-title" text={kontakt.form.title} className="h2" />
              <Reveal>
                <p className="mt-5 mb-10 text-[17px] text-stone">{typo(kontakt.form.intro)}</p>
              </Reveal>
              <Suspense fallback={null}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
