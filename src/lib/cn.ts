import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  extend: {
    // vlastné triedy z globals.css, aby sa správne prepisovali
    classGroups: { "font-size": ["h1", "h2", "h3"] },
  },
});

/** Spojí triedy; neskoršie Tailwind triedy prepíšu konfliktné skoršie (napr. px-7 → px-4). */
export function cn(...classes: Array<string | false | null | undefined>) {
  return twMerge(classes.filter(Boolean).join(" "));
}
