"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Obsah má 112 % výšky kontajnera a pri scrolle sa posúva o ±6 % výšky kontajnera,
 * takže nikdy nevznikne medzera.
 */
export function Parallax({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  // posun je v % vlastnej výšky (112 %): 5.35 % × 1.12 ≈ 6 % kontajnera
  const y = useTransform(scrollYProgress, [0, 1], ["-5.35%", "5.35%"]);

  return (
    <div ref={ref} className={cn("absolute inset-0 overflow-hidden", className)}>
      <motion.div className="absolute inset-x-0 top-[-6%] h-[112%]" style={{ y: reduced ? 0 : y }}>
        {children}
      </motion.div>
    </div>
  );
}
