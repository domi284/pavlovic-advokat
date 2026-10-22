"use client";

import { AnimatePresence, motion } from "motion/react";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { Plus } from "lucide-react";
import { useId, useState } from "react";
import type { Faq } from "@/content/types";
import { cn } from "@/lib/cn";
import { EASE } from "@/lib/motion";
import { typo } from "@/lib/typo";
import { Rich } from "./Rich";

/** FAQ akordeón: naraz je otvorená najviac jedna otázka. */
export function Accordion({ items, className }: { items: Faq[]; className?: string }) {
  const [open, setOpen] = useState<number | null>(null);
  const reduced = useReducedMotion();
  const baseId = useId();

  return (
    <div className={cn("border-t border-line", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const buttonId = `${baseId}-q${i}`;
        const panelId = `${baseId}-a${i}`;
        return (
          <div key={item.q} className="relative border-b border-line">
            <span
              aria-hidden="true"
              className={cn(
                "absolute inset-y-0 left-0 w-0.5 origin-top bg-bordeaux transition-transform duration-500 ease-premium",
                isOpen ? "scale-y-100" : "scale-y-0",
              )}
            />
            <h3 className="font-serif">
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full cursor-pointer items-start justify-between gap-6 py-6 pr-1 pl-5 text-left text-[21px] leading-snug font-semibold text-ink transition-colors duration-300 hover:text-bordeaux md:text-[23px]"
              >
                <span>{typo(item.q)}</span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "mt-1 flex size-8 shrink-0 items-center justify-center rounded-full border border-line text-bordeaux transition-[transform,border-color] duration-500 ease-premium group-hover:border-bordeaux",
                    isOpen && "rotate-45 border-bordeaux",
                  )}
                >
                  <Plus strokeWidth={1.25} className="size-4" />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: reduced ? 0 : 0.55, ease: EASE }}
                >
                  <p className="body-text pr-12 pb-7 pl-5">
                    <Rich text={item.a} />
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
