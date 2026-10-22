"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mobileBar } from "@/content/common";
import { cn } from "@/lib/cn";
import { site, telHref } from "@/lib/site";
import { Button } from "@/components/ui/Button";

/**
 * Mobilná dolná lišta (pod 768px). Objaví sa po scrollnutí za hero
 * a skryje sa, keď je vo viewporte formulár alebo pätička.
 */
export function MobileBar() {
  const pathname = usePathname();
  const [pastHero, setPastHero] = useState(false);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.75);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const targets = [document.getElementById("konzultacia"), document.getElementById("site-footer")].filter(
      (el): el is HTMLElement => !!el,
    );
    const visible = new Set<Element>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target);
        else visible.delete(entry.target);
      }
      setBlocked(visible.size > 0);
    });
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  const show = pastHero && !blocked;
  const phoneHref = telHref(site.fields.phone);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper px-4 pt-2.5 pb-[calc(10px+env(safe-area-inset-bottom))] transition-transform duration-500 ease-premium md:hidden",
        show ? "translate-y-0" : "translate-y-full",
      )}
      aria-hidden={!show}
      inert={!show}
    >
      <div className="grid grid-cols-2 gap-2.5">
        <Button
          href={phoneHref ?? "#"}
          disabled={!phoneHref}
          variant="primary"
          icon="phone"
          className="min-h-[50px] px-4"
        >
          {mobileBar.call}
        </Button>
        <Button href={mobileBar.writeHref} variant="secondary" icon="none" className="min-h-[50px] px-4">
          {mobileBar.write}
        </Button>
      </div>
    </div>
  );
}
