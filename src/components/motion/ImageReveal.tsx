"use client";

import { motion, useInView } from "motion/react";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { EASE, VIEWPORT } from "@/lib/motion";

/**
 * Obrázok sa odkryje zdola nahor (clip-path) a zároveň jemne zmenší z 1.12 na 1.
 * Viditeľnosť sa sleduje na obale bez clip-path (orezaný prvok by IntersectionObserver nezachytil).
 */
export function ImageReveal({
  children,
  className,
  immediate = false,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  immediate?: boolean;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, VIEWPORT);
  const reduced = useReducedMotion();
  const state = immediate || inView ? "show" : "hidden";

  return (
    <div ref={ref} className={cn("relative", className)}>
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial="hidden"
        animate={state}
        variants={{
          hidden: reduced
            ? { opacity: 0, clipPath: "inset(0% 0% 0% 0%)" }
            : { opacity: 1, clipPath: "inset(100% 0% 0% 0%)" },
          show: {
            opacity: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            transition: { duration: reduced ? 0.01 : 1.2, ease: EASE, delay: reduced ? 0 : delay },
          },
        }}
      >
        <motion.div
          className="absolute inset-0"
          variants={{
            hidden: { scale: reduced ? 1 : 1.12 },
            show: { scale: 1, transition: { duration: reduced ? 0.01 : 1.6, ease: EASE, delay: reduced ? 0 : delay } },
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}
