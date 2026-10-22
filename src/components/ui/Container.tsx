import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/lib/cn";

type Props<T extends ElementType> = { as?: T } & ComponentPropsWithoutRef<T>;

export function Container<T extends ElementType = "div">({ as, className, ...props }: Props<T>) {
  const Tag = as ?? "div";
  return (
    <Tag
      className={cn("mx-auto box-content w-auto max-w-[1280px] px-5 md:px-10 lg:px-16", className)}
      {...props}
    />
  );
}
