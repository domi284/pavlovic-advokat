"use client";

import { useEffect, useRef, useState } from "react";

/** Google Maps embed, ktorý sa načíta až keď sa k nemu používateľ priblíži (šetrí výkon stránky). */
export function MapEmbed({ src, title }: { src: string; title: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="h-[360px] w-full border border-line bg-bone">
      {visible && (
        <iframe
          title={title}
          src={src}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block h-full w-full [filter:grayscale(1)_contrast(1.05)]"
        />
      )}
    </div>
  );
}
