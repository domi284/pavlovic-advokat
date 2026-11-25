"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { cookieBar } from "@/content/common";
import {
  CONSENT_EVENT,
  OPEN_SETTINGS_EVENT,
  allChoices,
  currentConsent,
  setCookieBarOpen,
  writeConsent,
  type ConsentChoices,
  type OptionalCategory,
} from "@/lib/consent";
import { cn } from "@/lib/cn";
import { EASE } from "@/lib/motion";
import { typo } from "@/lib/typo";
import { useReducedMotion } from "@/lib/use-reduced-motion";

/* Prijať a Odmietnuť majú rovnakú veľkosť aj výraznosť. */
const choiceButton =
  "min-h-[44px] flex-1 cursor-pointer rounded-xs bg-bordeaux px-4 text-[14px] font-semibold text-chalk transition-colors duration-300 hover:bg-bordeaux-deep";
const secondaryButton =
  "min-h-[44px] cursor-pointer rounded-xs border border-ink px-4 text-[14px] font-semibold text-ink transition-colors duration-300 hover:bg-ink hover:text-chalk";

/**
 * Cookie lišta so súhlasom. Na mobile je nad spodnou lištou Zavolať/Napísať; keď je na obrazovke
 * formulár, zmenší sa na jeden riadok tlačidiel, aby nezakrývala polia formulára.
 */
export function CookieBar() {
  const reduced = useReducedMotion();
  const uid = useId();
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<"main" | "settings">("main");
  const [choices, setChoices] = useState<ConsentChoices>(allChoices(false));
  const [compact, setCompact] = useState(false);
  /** zobrazí sa s oneskorením iba pri prvom otvorení, nie po kliknutí v pätičke */
  const [delayed, setDelayed] = useState(true);

  useEffect(() => {
    if (!currentConsent()) setOpen(true);
    const onOpenSettings = () => {
      const consent = currentConsent();
      setChoices(consent ? { ...allChoices(false), ...pickChoices(consent.categories) } : allChoices(false));
      setDelayed(false);
      setView("settings");
      setOpen(true);
    };
    // súhlas udelený inde (napr. tlačidlo „Zobraziť mapu“) lištu zatvorí
    const onConsent = () => {
      if (currentConsent()) {
        setOpen(false);
        setView("main");
      }
    };
    window.addEventListener(OPEN_SETTINGS_EVENT, onOpenSettings);
    window.addEventListener(CONSENT_EVENT, onConsent);
    return () => {
      window.removeEventListener(OPEN_SETTINGS_EVENT, onOpenSettings);
      window.removeEventListener(CONSENT_EVENT, onConsent);
    };
  }, []);

  useEffect(() => setCookieBarOpen(open), [open]);

  // mobil: kompaktný režim, keď je na obrazovke formulár
  useEffect(() => {
    if (!open) return;
    const form = document.getElementById("konzultacia");
    if (!form) return;
    const mq = window.matchMedia("(max-width: 767px)");
    let visible = false;
    const update = () => setCompact(mq.matches && visible);
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    });
    observer.observe(form);
    mq.addEventListener("change", update);
    return () => {
      observer.disconnect();
      mq.removeEventListener("change", update);
      setCompact(false);
    };
  }, [open]);

  const decide = (value: ConsentChoices) => {
    writeConsent(value);
    setOpen(false);
    setView("main");
  };

  const closeSettings = () => {
    if (currentConsent()) {
      setOpen(false);
      setView("main");
    } else {
      setView("main");
    }
  };

  const showCompact = compact && view === "main";

  return (
    <AnimatePresence>
      {open && (
        <motion.section
          id="cookie-bar"
          aria-label={view === "settings" ? cookieBar.settingsTitle : "Cookies"}
          data-doc="9.2"
          className={cn(
            "fixed right-4 bottom-[calc(var(--mobile-bar-h)+env(safe-area-inset-bottom)+12px)] left-4 z-[45] max-h-[calc(100dvh-var(--mobile-bar-h)-env(safe-area-inset-bottom)-96px)] max-w-[440px] overflow-y-auto overscroll-contain rounded-xs border border-line bg-paper shadow-[0_1px_2px_rgba(28,29,32,.04),0_12px_32px_-12px_rgba(28,29,32,.12)] md:right-auto md:bottom-6 md:left-6 md:max-h-[calc(100dvh-48px)]",
            // pri formulári je spodná lišta Zavolať/Napísať skrytá: kompaktná lišta sa pritiahne k spodnému okraju
            showCompact ? "p-3 max-md:right-2 max-md:bottom-[calc(env(safe-area-inset-bottom)+8px)] max-md:left-2" : "p-5 md:p-6",
          )}
          initial={{ opacity: 0, y: reduced ? 0 : 24 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: EASE, delay: reduced || !delayed ? 0 : 1.2 },
          }}
          exit={{ opacity: 0, y: reduced ? 0 : 16, transition: { duration: 0.35, ease: EASE } }}
        >
          {view === "main" ? (
            <>
              {showCompact ? (
                <p className="mb-2.5 text-[12.5px] leading-snug text-ink/80">
                  Cookies ·{" "}
                  <Link href={cookieBar.more.href} className="inline-link">
                    {cookieBar.more.label}
                  </Link>
                </p>
              ) : (
                <p className="text-[14px] leading-relaxed text-ink/85">
                  {typo(cookieBar.text)}{" "}
                  <Link href={cookieBar.more.href} className="inline-link whitespace-nowrap">
                    {cookieBar.more.label}
                  </Link>
                </p>
              )}
              <div className={cn("flex flex-wrap gap-2", !showCompact && "mt-5 gap-2.5")}>
                <button
                  type="button"
                  onClick={() => decide(allChoices(true))}
                  className={cn(choiceButton, showCompact && "min-h-[40px] px-2 text-[13px]")}
                >
                  {cookieBar.accept}
                </button>
                <button
                  type="button"
                  onClick={() => decide(allChoices(false))}
                  className={cn(choiceButton, showCompact && "min-h-[40px] px-2 text-[13px]")}
                >
                  {cookieBar.reject}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setChoices(allChoices(false));
                    setView("settings");
                  }}
                  className={cn(secondaryButton, showCompact ? "min-h-[40px] flex-1 px-2 text-[13px]" : "w-full")}
                >
                  {cookieBar.settings}
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-start justify-between gap-4">
                <h2 className="font-serif text-[24px] leading-tight font-medium text-ink">{cookieBar.settingsTitle}</h2>
                <button
                  type="button"
                  onClick={closeSettings}
                  aria-label={cookieBar.close}
                  className="-mt-1 -mr-2 inline-flex size-10 shrink-0 cursor-pointer items-center justify-center text-stone transition-colors hover:text-ink"
                >
                  <X aria-hidden="true" className="size-5" strokeWidth={1.6} />
                </button>
              </div>
              <ul className="mt-4 divide-y divide-line border-y border-line">
                {cookieBar.categories.map((category) => {
                  const required = category.key === "necessary";
                  const key = category.key as OptionalCategory;
                  const checked = required || choices[key];
                  const labelId = `${uid}-${category.key}`;
                  return (
                    <li key={category.key} className="flex items-start justify-between gap-4 py-4">
                      <div>
                        <p id={labelId} className="text-[15px] font-semibold text-ink">
                          {category.title}
                        </p>
                        <p className="mt-1 text-[13.5px] leading-relaxed text-stone">{typo(category.text)}</p>
                      </div>
                      {required ? (
                        <span className="mt-0.5 shrink-0 text-[12px] font-semibold tracking-[0.06em] whitespace-nowrap text-bordeaux">
                          {cookieBar.alwaysOn}
                        </span>
                      ) : (
                        <button
                          type="button"
                          role="switch"
                          aria-checked={checked}
                          aria-labelledby={labelId}
                          onClick={() => setChoices((value) => ({ ...value, [key]: !value[key] }))}
                          className={cn(
                            "relative mt-0.5 inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bordeaux",
                            checked ? "bg-bordeaux" : "bg-stone/35",
                          )}
                        >
                          <span
                            aria-hidden="true"
                            className={cn(
                              "inline-block size-[18px] rounded-full bg-chalk shadow-sm transition-transform duration-300",
                              checked ? "translate-x-[23px]" : "translate-x-[3px]",
                            )}
                          />
                        </button>
                      )}
                    </li>
                  );
                })}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2.5">
                <button type="button" onClick={() => decide(allChoices(true))} className={choiceButton}>
                  {cookieBar.accept}
                </button>
                <button type="button" onClick={() => decide(allChoices(false))} className={choiceButton}>
                  {cookieBar.reject}
                </button>
                <button type="button" onClick={() => decide(choices)} className={cn(secondaryButton, "w-full")}>
                  {cookieBar.save}
                </button>
              </div>
            </>
          )}
        </motion.section>
      )}
    </AnimatePresence>
  );
}

function pickChoices(categories: Record<string, boolean>): Partial<ConsentChoices> {
  return Object.fromEntries(Object.entries(categories).filter(([key]) => key !== "necessary"));
}
