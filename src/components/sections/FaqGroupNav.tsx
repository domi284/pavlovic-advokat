"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

/** Sticky lišta so skupinami otázok; aktívna skupina sa zvýrazní podľa scrollu. */
export function FaqGroupNav({ groups }: { groups: { id: string; label: string }[] }) {
  const [active, setActive] = useState(groups[0]?.id);

  useEffect(() => {
    const onScroll = () => {
      const line = window.innerHeight * 0.35;
      let current = groups[0]?.id;
      for (const group of groups) {
        const el = document.getElementById(group.id);
        if (el && el.getBoundingClientRect().top <= line) current = group.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [groups]);

  return (
    <nav aria-label="Skupiny otázok" className="sticky top-0 z-30 border-y border-line bg-chalk/[0.92] backdrop-blur-md">
      <ul className="mx-auto box-content flex max-w-[1280px] gap-7 overflow-x-auto px-5 [scrollbar-width:none] md:gap-10 md:px-10 lg:px-16">
        {groups.map((group) => {
          const isActive = active === group.id;
          return (
            <li key={group.id} className="shrink-0">
              <a
                href={`#${group.id}`}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "relative block py-5 text-[14.5px] font-medium whitespace-nowrap transition-colors duration-300",
                  isActive ? "text-bordeaux" : "text-stone hover:text-ink",
                )}
              >
                {group.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-x-0 bottom-0 h-px origin-left bg-bordeaux transition-transform duration-500 ease-premium",
                    isActive ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
