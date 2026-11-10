import type { Metadata } from "next";
import { serviceDetails } from "@/content/04-sluzby";
import { fullAddress, site, telHref } from "./site";

const ogImage = { url: "/opengraph-image", width: 1200, height: 630, alt: "JUDr. Ladislav Pavlovič, LL.M., advokát · Bratislava" };

/** Metadata stránky: title a description presne z časti K, canonical a Open Graph. */
export function pageMetadata(meta: { title: string; description?: string; path: string }): Metadata {
  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: { canonical: meta.path },
    openGraph: {
      type: "website",
      locale: site.locale,
      siteName: site.company,
      url: meta.path,
      title: meta.title,
      description: meta.description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [ogImage.url],
    },
  };
}

export function legalServiceJsonLd() {
  const { email, hoursSchema, ico } = site.fields;
  const phone = telHref(site.fields.phone)?.replace(/^tel:/, "") ?? null;
  const identifier = ico ? { "@type": "PropertyValue", propertyID: "IČO", value: ico } : undefined;
  const knowsAbout = serviceDetails.map((service) => service.name);
  const address = {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.postalCode,
    addressLocality: site.address.city,
    addressRegion: site.address.district,
    addressCountry: site.address.country,
  };
  const attorneyId = `${site.url}/#advokat`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LegalService",
        "@id": `${site.url}/#kancelaria`,
        name: site.company,
        url: site.url,
        image: `${site.url}/opengraph-image`,
        address,
        areaServed: site.areaServed,
        knowsAbout,
        ...(identifier && { identifier }),
        founder: { "@id": attorneyId },
        ...(phone && { telephone: phone }),
        ...(email && { email }),
        ...(hoursSchema && { openingHours: hoursSchema }),
      },
      {
        "@type": "Attorney",
        "@id": attorneyId,
        name: site.name,
        url: `${site.url}/o-mne`,
        address,
        areaServed: site.areaServed,
        knowsAbout,
        parentOrganization: { "@id": `${site.url}/#kancelaria` },
        ...(phone && { telephone: phone }),
        ...(email && { email }),
        ...(hoursSchema && { openingHours: hoursSchema }),
      },
    ],
  };
}

export const mapsEmbedUrl = (query = fullAddress) =>
  `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=16&output=embed`;
