"use client";

import { AnimatePresence, motion } from "motion/react";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { useEffect, useState } from "react";
import { cookieBar } from "@/content/common";
import { readConsent, writeConsent, type ConsentValue } from "@/lib/consent";
import { EASE } from "@/lib/motion";
import { Rich } from "@/components/ui/Rich";

export function CookieBar() {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (readConsent() === null) setOpen(true);
  }, []);

  const choose = (value: ConsentValue) => {
    writeConsent(value);
    window.dispatchEvent(new Event("cookie-consent-changed"));
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.section
          aria-label="Cookies"
          data-doc="9.2"
          className="fixed right-4 bottom-[calc(var(--mobile-bar-h)+env(safe-area-inset-bottom)+12px)] left-4 z-[45] max-w-[420px] rounded-xs border border-line bg-paper p-6 shadow-[0_1px_2px_rgba(28,29,32,.04),0_12px_32px_-12px_rgba(28,29,32,.12)] md:right-auto md:bottom-6 md:left-6"
          initial={{ opacity: 0, y: reduced ? 0 : 24 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE, delay: reduced ? 0 : 1.2 } }}
          exit={{ opacity: 0, y: reduced ? 0 : 16, transition: { duration: 0.35, ease: EASE } }}
        >
          <p className="text-[14px] leading-relaxed text-ink/85">
            <Rich text={cookieBar.text} />
          </p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            <button
              type="button"
              onClick={() => choose("all")}
              className="min-h-[44px] flex-1 cursor-pointer rounded-xs bg-bordeaux px-5 text-[14px] font-semibold text-chalk transition-colors duration-300 hover:bg-bordeaux-deep"
            >
              {cookieBar.accept}
            </button>
            <button
              type="button"
              onClick={() => choose("necessary")}
              className="min-h-[44px] flex-1 cursor-pointer rounded-xs border border-ink px-5 text-[14px] font-semibold text-ink transition-colors duration-300 hover:bg-ink hover:text-chalk"
            >
              {cookieBar.necessary}
            </button>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
