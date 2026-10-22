"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { useRef } from "react";
import { cn } from "@/lib/cn";

/** Tenká linka, ktorá sa pri scrolle vykreslí (pathLength 0→1). */
export function DrawLine({
  orientation = "horizontal",
  className,
}: {
  orientation?: "horizontal" | "vertical";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: orientation === "horizontal" ? ["start 0.9", "start 0.45"] : ["start 0.8", "end 0.55"],
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const horizontal = orientation === "horizontal";

  return (
    <div ref={ref} aria-hidden="true" className={cn("pointer-events-none", className)}>
      <svg
        className="block h-full w-full overflow-visible"
        viewBox={horizontal ? "0 0 100 2" : "0 0 2 100"}
        preserveAspectRatio="none"
      >
        <motion.path
          d={horizontal ? "M0 1 H100" : "M1 0 V100"}
          fill="none"
          stroke="currentColor"
          strokeWidth={1}
          vectorEffect="non-scaling-stroke"
          style={{ pathLength: reduced ? 1 : pathLength }}
        />
      </svg>
    </div>
  );
}
