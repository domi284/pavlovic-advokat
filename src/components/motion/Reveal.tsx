"use client";

import { motion, type Variants } from "motion/react";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { EASE, VIEWPORT } from "@/lib/motion";

const tags = {
  div: motion.div,
  li: motion.li,
  ul: motion.ul,
  ol: motion.ol,
  p: motion.p,
  span: motion.span,
} as const;

type Tag = keyof typeof tags;

function itemVariants(reduced: boolean, delay = 0): Variants {
  return {
    hidden: { opacity: 0, y: reduced ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduced ? 0.01 : 0.7, ease: EASE, delay: reduced ? 0 : delay },
    },
  };
}

/** Odsek, karta alebo blok: opacity 0→1 a posun 24px→0 pri vstupe do viewportu. */
export function Reveal({
  children,
  as = "div",
  delay = 0,
  immediate = false,
  className,
  id,
}: {
  children: ReactNode;
  as?: Tag;
  delay?: number;
  /** spustí sa hneď pri prvom vykreslení (hero) cez CSS, nie pri vstupe do viewportu */
  immediate?: boolean;
  className?: string;
  id?: string;
}) {
  const reduced = useReducedMotion();
  if (immediate) {
    const Tag = as;
    return (
      <Tag id={id} className={cn("anim-reveal", className)} style={{ animationDelay: `${delay}s` }}>
        {children}
      </Tag>
    );
  }
  const Component = tags[as];
  const variants = itemVariants(reduced, delay);
  return (
    <Component
      id={id}
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
    >
      {children}
    </Component>
  );
}

/** Kontajner pre položky zoznamu, ktoré sa objavia postupne (stagger 0.08 s). */
export function Stagger({
  children,
  as = "div",
  stagger = 0.08,
  delay = 0,
  className,
}: {
  children: ReactNode;
  as?: Tag;
  stagger?: number;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const Component = tags[as];
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: reduced ? 0 : stagger, delayChildren: reduced ? 0 : delay } },
      }}
    >
      {children}
    </Component>
  );
}

export function StaggerItem({
  children,
  as = "div",
  className,
}: {
  children: ReactNode;
  as?: Tag;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const Component = tags[as];
  return (
    <Component className={className} variants={itemVariants(reduced)}>
      {children}
    </Component>
  );
}
