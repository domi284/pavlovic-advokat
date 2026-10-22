"use client";

import { motion } from "motion/react";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { typo } from "@/lib/typo";
import { EASE, VIEWPORT } from "@/lib/motion";

/**
 * Nadpis, ktorý sa odkryje slovo po slove (každé slovo vyjde zdola z masky).
 * Čítačky obrazovky dostanú celý text naraz.
 */
export function RevealText({
  as: Tag = "h2",
  text,
  id,
  className,
  immediate = false,
  delay = 0,
}: {
  as?: "h1" | "h2" | "h3" | "p";
  text: string;
  id?: string;
  className?: string;
  immediate?: boolean;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  const words = typo(text).split(" ");
  const mask = "-mt-[0.22em] -mb-[0.18em] inline-block overflow-hidden pt-[0.22em] pb-[0.18em] align-top";

  if (immediate) {
    // hero: CSS animácia, ktorá beží hneď od prvého vykreslenia
    return (
      <Tag id={id} className={className}>
        <span className="sr-only">{typo(text)}</span>
        <span aria-hidden="true" className="block">
          {words.map((word, i) => (
            <span key={i}>
              <span className={mask}>
                <span className="anim-word inline-block" style={{ animationDelay: `${delay + i * 0.045}s` }}>
                  {word}
                </span>
              </span>
              {i < words.length - 1 && " "}
            </span>
          ))}
        </span>
      </Tag>
    );
  }

  return (
    <Tag id={id} className={className}>
      <span className="sr-only">{typo(text)}</span>
      <motion.span
        aria-hidden="true"
        className="block"
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: reduced ? 0 : 0.045, delayChildren: reduced ? 0 : delay } },
        }}
      >
        {words.map((word, i) => (
          <span key={i}>
            <span className={mask}>
              <motion.span
                className="inline-block will-change-transform"
                variants={{
                  hidden: reduced ? { opacity: 0, y: "0%" } : { opacity: 1, y: "110%" },
                  show: { opacity: 1, y: "0%", transition: { duration: reduced ? 0.01 : 0.9, ease: EASE } },
                }}
              >
                {word}
              </motion.span>
            </span>
            {i < words.length - 1 && " "}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
