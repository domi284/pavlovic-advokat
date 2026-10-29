"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { MessageCircle, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { assistantContent } from "@/content/assistant";
import { cn } from "@/lib/cn";
import { Rich } from "@/components/ui/Rich";
import { site, telHref } from "@/lib/site";
import { readConsent } from "@/lib/consent";

export function AssistantWidget() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [cookieBannerVisible, setCookieBannerVisible] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoaded(true), 1500);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const updateCookieVisibility = () => setCookieBannerVisible(readConsent() === null);
    updateCookieVisibility();
    window.addEventListener("cookie-consent-changed", updateCookieVisibility);
    return () => window.removeEventListener("cookie-consent-changed", updateCookieVisibility);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onPointerDown = (event: MouseEvent) => {
      const panel = panelRef.current;
      const trigger = triggerRef.current;
      if (!panel || !trigger) return;
      if (!panel.contains(event.target as Node) && !trigger.contains(event.target as Node)) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [open]);

  const option = useMemo(
    () => assistantContent.options.find((item) => item.id === selected) ?? null,
    [selected],
  );

  const reveal = option ?? null;

  return (
    <>
      {isLoaded && (
        <button
          ref={triggerRef}
          type="button"
          aria-label={assistantContent.trigger}
          onClick={() => setOpen((value) => !value)}
          className={cn(
            "fixed right-5 z-[60] inline-flex items-center gap-3 rounded-full bg-ink px-4 py-3 text-sm font-semibold text-chalk shadow-[0_20px_50px_rgba(28,29,32,.18)] transition-transform duration-300 hover:-translate-y-0.5 md:right-6 md:bottom-6 md:px-5",
            cookieBannerVisible
              ? "bottom-[calc(var(--mobile-bar-h)+220px+env(safe-area-inset-bottom))]"
              : "bottom-[calc(var(--mobile-bar-h)+1rem+env(safe-area-inset-bottom))]",
            open && "hidden",
          )}
        >
          <MessageCircle aria-hidden="true" className="hidden size-4 md:block" strokeWidth={1.8} />
          <span>{assistantContent.trigger}</span>
          <span className="inline-flex size-10 items-center justify-center rounded-full bg-chalk/10 md:hidden">
            <MessageCircle aria-hidden="true" className="size-5" strokeWidth={1.8} />
          </span>
        </button>
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className={cn(
              "fixed right-4 z-[70] w-[min(92vw,380px)] overflow-hidden rounded-[20px] border border-line bg-paper shadow-[0_32px_80px_rgba(28,29,32,.16)] md:right-6 md:bottom-6",
              cookieBannerVisible
                ? "bottom-[calc(var(--mobile-bar-h)+220px+env(safe-area-inset-bottom))]"
                : "bottom-[calc(var(--mobile-bar-h)+1rem+env(safe-area-inset-bottom))]",
            )}
          >
            <div ref={panelRef} role="dialog" aria-modal="true" aria-label={assistantContent.title} data-doc="9.1" className="flex flex-col">
              <div className="flex items-center justify-between bg-ink px-4 py-3 text-chalk">
                <div className="flex items-center gap-3">
                  <div className="flex size-8 items-center justify-center rounded-full border border-sand/80 text-[12px] font-semibold text-sand">
                    LP
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold">{assistantContent.title}</p>
                    <p className="text-[11px] leading-none text-sand">{assistantContent.subtitle}</p>
                  </div>
                </div>
                <button type="button" aria-label="Zavrieť" onClick={() => setOpen(false)} className="rounded-full p-2 text-chalk/80 transition-colors hover:text-chalk">
                  <X aria-hidden="true" className="size-5" strokeWidth={1.8} />
                </button>
              </div>

              <div className={cn("flex flex-col gap-4 overflow-y-auto bg-paper p-4", cookieBannerVisible ? "max-h-[calc(100dvh-var(--mobile-bar-h)-240px-env(safe-area-inset-bottom))] md:max-h-[70vh]" : "max-h-[70vh]")}>
                <div className="rounded-[2px] border border-line bg-chalk p-3 text-[15px] leading-relaxed text-ink">
                  <Rich text={assistantContent.welcome} />
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-stone">{assistantContent.prompt}</p>
                </div>

                {!reveal && (
                  <div className="flex flex-wrap gap-2">
                    {assistantContent.options.map((optionItem) => (
                      <button
                        key={optionItem.id}
                        type="button"
                        onClick={() => setSelected(optionItem.id)}
                        className="rounded-full border border-bordeaux bg-paper px-3 py-2 text-[14px] font-medium text-bordeaux transition-colors hover:bg-bordeaux hover:text-chalk"
                      >
                        {optionItem.label}
                      </button>
                    ))}
                  </div>
                )}

                {reveal && (
                  <>
                    <div className="ml-auto max-w-[85%] rounded-[2px] border border-ink bg-ink p-3 text-[14px] leading-relaxed text-chalk">
                      {reveal.label}
                    </div>
                    <div className="mr-auto max-w-[90%] rounded-[2px] border border-line bg-chalk p-3 text-[14px] leading-relaxed text-ink">
                      <Rich text={reveal.answer} />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {reveal.links.map((link) => (
                        <Link
                          key={link.href + link.label}
                          href={link.href === "tel:" ? (telHref(site.fields.phone) ?? "/kontakt") : link.href}
                          onClick={() => setOpen(false)}
                          className="rounded-full border border-bordeaux bg-paper px-3 py-2 text-[13px] font-medium text-bordeaux transition-colors hover:bg-bordeaux hover:text-chalk"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelected(null)}
                      className="self-start rounded-full border border-line bg-chalk px-3 py-2 text-[13px] font-medium text-ink"
                    >
                      {assistantContent.back}
                    </button>
                  </>
                )}
                {!reveal && (
                  <Link href="/kontakt#konzultacia" onClick={() => setOpen(false)} className="text-[13px] text-stone underline underline-offset-4">
                    {assistantContent.otherQuestion}
                  </Link>
                )}
              </div>

              <div className="border-t border-line bg-paper px-3 py-2 text-[11px] leading-relaxed text-stone">
                <Rich text={assistantContent.footer} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
