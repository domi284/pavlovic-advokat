"use client";

import { ExternalLink, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { mapConsent } from "@/content/common";
import { grantCategory, useConsent } from "@/lib/consent";
import { typo } from "@/lib/typo";

/**
 * Google Maps embed. Iframe sa načíta iba so súhlasom s kategóriou „maps“ a až keď je blízko obrazovky.
 * Bez súhlasu sa zobrazí náhrada v rozmeroch mapy s adresou, tlačidlom „Zobraziť mapu“
 * (udelí súhlas pre mapy) a odkazom „Otvoriť v Mapách“, ktorý funguje vždy.
 */
export function MapEmbed({
  src,
  title,
  address,
  openHref,
}: {
  src: string;
  title: string;
  address: string;
  openHref: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);
  const consent = useConsent();
  const allowed = consent?.categories.maps === true;

  useEffect(() => {
    const el = ref.current;
    if (!el || !allowed) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [allowed]);

  return (
    <div ref={ref} className="relative h-[360px] w-full border border-line bg-bone">
      {allowed ? (
        near && (
          <iframe
            title={title}
            src={src}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block h-full w-full [filter:grayscale(1)_contrast(1.05)]"
          />
        )
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-5 px-6 text-center">
          <MapPin aria-hidden="true" className="size-7 text-bordeaux" strokeWidth={1.4} />
          <div>
            <p className="font-serif text-[20px] leading-snug font-medium text-ink">{typo(address)}</p>
            <p className="mt-2 text-[14px] leading-relaxed text-stone">{typo(mapConsent.text)}</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <button
              type="button"
              onClick={() => grantCategory("maps")}
              className="min-h-[44px] cursor-pointer rounded-xs border border-bordeaux bg-bordeaux px-5 text-[14px] font-semibold text-chalk transition-colors duration-300 hover:bg-bordeaux-deep"
            >
              {mapConsent.show}
            </button>
            <a
              href={openHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-bordeaux"
            >
              {mapConsent.open}
              <ExternalLink aria-hidden="true" className="size-3.5" strokeWidth={1.8} />
              <span className="sr-only"> (otvorí sa v novom okne)</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
