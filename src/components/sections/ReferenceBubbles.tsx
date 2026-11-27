"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { Referencia } from "@/content/referencie";
import { cn } from "@/lib/cn";
import { EASE } from "@/lib/motion";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { ReferenceLogo } from "./ReferenceLogo";

/** Výmena dvojice líg (ms) a dĺžka prelínania (s) – ľahko zmeniteľné. */
const INTERVAL = 3000;
const FADE = 0.4;

/**
 * /referencie (R.2): dve bubliny vedľa seba (mobil pod sebou), bez pozadia, rámu a tieňa.
 * Ľavá strieda firmy 1, 3, 5, 7, 9, pravá 2, 4, 6, 8 → naraz vždy dve rôzne firmy.
 * Výmena každé 3 s (fade 400 ms + posun 8 px), pauza pri hover/focus; pri prefers-reduced-motion
 * sa nestriedajú samy a prepínajú sa bez animácie, iba bodkami.
 */
export function ReferenceBubbles({ items }: { items: Referencia[] }) {
  const left = items.filter((_, index) => index % 2 === 0);
  const right = items.filter((_, index) => index % 2 === 1);
  const count = left.length;

  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  /** zmena reštartuje časovač po kliknutí na bodku */
  const [cycle, setCycle] = useState(0);
  const paused = hovered || focused || reduced;

  useEffect(() => {
    if (paused || count < 2) return;
    const timer = window.setTimeout(() => setActive((value) => (value + 1) % count), INTERVAL);
    return () => window.clearTimeout(timer);
  }, [active, paused, count, cycle]);

  const pairs = [left[active], right.length ? right[active % right.length] : undefined];

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Spoločnosti a organizácie, ktorým sme poskytli právne služby"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocused(false);
      }}
    >
      {/* názvy pre čítačky obrazovky: jedna trvalá oblasť, bubliny samotné sú len vizuálne */}
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {pairs.filter(Boolean).map((item) => item!.name).join(", ")}
      </p>
      {/* prednačítanie všetkých líg hneď pri zobrazení (rovnaké sizes ako bublina → rovnaký súbor zo srcset) */}
      <div hidden aria-hidden="true">
        {items.map((item) => (
          <Image key={item.name} src={item.logo} alt="" sizes="260px" loading="eager" fetchPriority="low" />
        ))}
      </div>
      <div className="grid gap-10 md:grid-cols-2 md:gap-8">
        {pairs.map((item, side) => (
          <div
            key={side}
            className="grid h-[150px] overflow-hidden md:h-[180px]"
            aria-hidden="true"
          >
            <AnimatePresence initial={false}>
              {item && (
                <motion.figure
                  key={item.name}
                  className="flex flex-col items-center justify-center text-center [grid-area:1/1]"
                  initial={reduced ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduced ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, y: -8 }}
                  transition={{ duration: reduced ? 0 : FADE, ease: EASE }}
                >
                  <ReferenceLogo
                    item={item}
                    sizes="260px"
                    className="max-w-[260px] [--box:64px] md:[--box:80px]"
                  />
                  <figcaption className="mt-5 font-serif text-[22px] leading-snug text-ink md:text-[24px]">
                    {item.name}
                  </figcaption>
                </motion.figure>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-2.5">
        {left.map((item, index) => {
          const current = index === active;
          const partner = right.length ? right[index % right.length] : undefined;
          return (
            <button
              key={item.name}
              type="button"
              aria-label={`Zobraziť ${item.name}${partner ? ` a ${partner.name}` : ""}`}
              aria-current={current ? "true" : undefined}
              onClick={() => {
                setActive(index);
                setCycle((value) => value + 1);
              }}
              className="group flex h-11 items-center justify-center px-0.5"
            >
              <span
                className={cn(
                  "block h-2 rounded-[999px] transition-all duration-500 ease-premium",
                  current ? "w-6 bg-bordeaux" : "w-2 border border-stone group-hover:border-bordeaux",
                )}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
