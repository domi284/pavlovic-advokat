"use client";

import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Referencia } from "@/content/referencie";
import { cn } from "@/lib/cn";
import { EASE } from "@/lib/motion";
import { typo } from "@/lib/typo";
import { useReducedMotion } from "@/lib/use-reduced-motion";

const INTERVAL = 8000;
const SWIPE_THRESHOLD = 40;

/** Dve bubliny vedľa seba (mobil pod sebou), v každej sa striedajú tri referencie. */
export function TestimonialBubbles({ items }: { items: Referencia[] }) {
  const groups = [items.slice(0, 3), items.slice(3, 6)];
  return (
    <div className="grid gap-12 md:grid-cols-2 md:gap-8">
      {groups.map((group, index) => (
        <Bubble key={index} items={group} label={`Referencie ${index + 1}`} />
      ))}
    </div>
  );
}

function Bubble({ items, label }: { items: Referencia[]; label: string }) {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  /** zmena kľúča reštartuje časovač (po kliknutí na bodku alebo swipe) */
  const [cycle, setCycle] = useState(0);
  const touchX = useRef<number | null>(null);
  const count = items.length;
  const paused = hovered || focused || reduced;

  useEffect(() => {
    if (paused || count < 2) return;
    const timer = window.setTimeout(() => setActive((value) => (value + 1) % count), INTERVAL);
    return () => window.clearTimeout(timer);
  }, [active, paused, count, cycle]);

  const show = useCallback((index: number) => {
    setActive(((index % count) + count) % count);
    setCycle((value) => value + 1);
  }, [count]);

  const item = items[active];
  const hasMeta = !!(item.autor || item.oblast);

  return (
    <div>
      <section
        role="region"
        aria-roledescription="carousel"
        aria-label={label}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setFocused(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocused(false);
        }}
        onTouchStart={(event) => {
          touchX.current = event.touches[0]?.clientX ?? null;
        }}
        onTouchEnd={(event) => {
          const start = touchX.current;
          touchX.current = null;
          const end = event.changedTouches[0]?.clientX;
          if (start == null || end == null) return;
          const delta = end - start;
          if (Math.abs(delta) < SWIPE_THRESHOLD) return;
          show(delta < 0 ? active + 1 : active - 1);
        }}
        className="relative min-h-[280px] rounded-[24px] border border-line bg-paper p-7 shadow-[0_18px_40px_rgba(28,29,32,.06)] md:p-10"
      >
        {/* chvostík bubliny */}
        <span
          aria-hidden="true"
          className="absolute -bottom-[11px] left-12 size-5 rotate-45 border-r border-b border-line bg-paper"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-2 left-6 font-serif text-[96px] leading-none text-bordeaux opacity-25 select-none md:left-9"
        >
          „
        </span>

        <div className="relative grid overflow-hidden pt-14" aria-live={paused ? "polite" : "off"}>
          <AnimatePresence initial={false}>
            <motion.figure
              key={active}
              aria-roledescription="slide"
              aria-label={`${active + 1} z ${count}`}
              className="[grid-area:1/1]"
              initial={reduced ? { opacity: 0 } : { x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={reduced ? { opacity: 0 } : { x: "100%", opacity: 0 }}
              transition={{ duration: reduced ? 0 : 0.7, ease: EASE }}
            >
              {item.text && (
                <blockquote className="font-serif text-[22px] leading-[1.45] text-ink">{typo(item.text)}</blockquote>
              )}
              {hasMeta && (
                <figcaption className="mt-6 border-t border-line pt-4">
                  {item.autor && <span className="font-sans text-[14px] font-semibold text-ink">{item.autor}</span>}
                  {item.autor && item.oblast && <span className="text-stone"> · </span>}
                  {item.oblast && <span className="font-sans text-[13px] text-stone">{item.oblast}</span>}
                </figcaption>
              )}
            </motion.figure>
          </AnimatePresence>
        </div>
      </section>

      <div className="mt-8 flex items-center gap-2.5 pl-1">
        {items.map((_, index) => {
          const current = index === active;
          return (
            <button
              key={index}
              type="button"
              aria-label={`Zobraziť referenciu ${index + 1}`}
              aria-current={current ? "true" : undefined}
              onClick={() => show(index)}
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
