"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { footer, header, nav, ui } from "@/content/common";
import { cn } from "@/lib/cn";
import { EASE } from "@/lib/motion";
import { site, telHref } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { Rich } from "@/components/ui/Rich";
import { useLenis } from "./SmoothScroll";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const lenis = useLenis();
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const lastY = useRef(0);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 40);
    const delta = y - lastY.current;
    if (y < 120) setHidden(false);
    else if (delta > 4) setHidden(true);
    else if (delta < -4) setHidden(false);
    lastY.current = y;
  });

  // zavrieť menu pri zmene stránky
  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const root = document.documentElement;
    root.style.overflow = "hidden";
    lenis?.stop();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      root.style.overflow = "";
      lenis?.start();
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen, lenis]);

  const phoneHref = telHref(site.fields.phone);
  const solid = scrolled || menuOpen;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[transform,background-color,border-color,height] duration-[350ms] ease-premium",
          solid ? "border-b border-line bg-chalk/[0.86] backdrop-blur-md" : "border-b border-transparent",
          menuOpen && "bg-chalk",
          hidden && !menuOpen ? "-translate-y-full" : "translate-y-0",
        )}
      >
        <div
          className={cn(
            "mx-auto box-content flex max-w-[1280px] items-center justify-between gap-6 px-5 transition-[height] duration-[350ms] ease-premium md:px-10 lg:px-16",
            scrolled ? "h-[68px]" : "h-[84px]",
          )}
        >
          <Link href="/" className="min-w-0">
            <Logo />
          </Link>

          <nav aria-label="Hlavné menu" className="hidden lg:block">
            <ul className="flex items-center gap-7 xl:gap-9">
              {nav.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className="group relative py-2 text-[14.5px] font-medium text-ink/85 transition-colors hover:text-ink"
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={cn(
                          "absolute inset-x-0 -bottom-0.5 h-px origin-left bg-bordeaux transition-transform duration-500 ease-premium",
                          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                        )}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden lg:block">
              <Button
                href={phoneHref ?? "#"}
                disabled={!phoneHref}
                variant="secondary"
                icon="phone"
                className="min-h-[44px] px-5 text-[14px]"
              >
                {header.call}
              </Button>
            </div>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="-mr-2 inline-flex h-11 min-w-11 shrink-0 items-center justify-center gap-2 px-2 text-[13px] font-semibold tracking-[0.14em] text-ink uppercase lg:hidden"
            >
              <span className="max-sm:sr-only">{menuOpen ? ui.close : ui.menu}</span>
              {menuOpen ? (
                <X aria-hidden="true" strokeWidth={1.25} className="size-6" />
              ) : (
                <Menu aria-hidden="true" strokeWidth={1.25} className="size-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label={ui.menu}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-chalk px-5 pt-[104px] pb-[calc(32px+env(safe-area-inset-bottom))] md:px-10 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.35, ease: EASE }}
          >
            <nav aria-label="Mobilné menu">
              <motion.ul
                initial="hidden"
                animate="show"
                variants={{ show: { transition: { staggerChildren: reduced ? 0 : 0.06, delayChildren: 0.05 } } }}
              >
                {nav.map((item) => {
                  const active = isActive(pathname, item.href);
                  return (
                    <motion.li
                      key={item.href}
                      className="border-b border-line"
                      variants={{
                        hidden: { opacity: 0, y: reduced ? 0 : 24 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
                      }}
                    >
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        onClick={() => setMenuOpen(false)}
                        className={cn(
                          "flex items-center justify-between py-3.5 font-serif text-[36px] leading-tight font-medium",
                          active ? "text-bordeaux" : "text-ink",
                        )}
                      >
                        {item.label}
                        {active && <span aria-hidden="true" className="h-px w-8 bg-bordeaux" />}
                      </Link>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </nav>

            <motion.div
              className="mt-auto pt-10"
              initial={{ opacity: 0, y: reduced ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: reduced ? 0 : 0.45 }}
            >
              <p className="text-[15px] leading-relaxed text-stone">
                <Rich text={footer.lines[0]} />
                <br />
                <Rich text={footer.lines[1]} />
              </p>
              <Button
                href={phoneHref ?? "#"}
                disabled={!phoneHref}
                variant="primary"
                icon="phone"
                className="mt-6 w-full"
              >
                {header.call}
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
