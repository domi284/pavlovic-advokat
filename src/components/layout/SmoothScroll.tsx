"use client";

import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

/** Plynulý scroll (Lenis). Pri prefers-reduced-motion sa nespúšťa. */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const headerOffset = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 84;
    const instance = new Lenis({
      duration: 1.15,
      autoRaf: true,
      anchors: { offset: -(headerOffset + 24) },
    });
    setLenis(instance);

    return () => {
      instance.destroy();
      setLenis(null);
    };
  }, []);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}
