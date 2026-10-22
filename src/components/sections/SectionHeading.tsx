import { RevealText } from "@/components/motion/RevealText";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ReviewMark } from "@/components/ui/ReviewMark";
import { cn } from "@/lib/cn";

/** Eyebrow („01 — …“) + H2, ktorý sa odkrýva slovo po slove. */
export function SectionHeading({
  id,
  number,
  eyebrow,
  title,
  reviewMark = false,
  className,
  titleClassName,
}: {
  id: string;
  number?: string;
  eyebrow?: string;
  title: string;
  reviewMark?: boolean;
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div className={className}>
      {eyebrow && (
        <Reveal>
          <Eyebrow number={number}>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <RevealText id={id} text={title} className={cn("h2", eyebrow && "mt-5", titleClassName)} />
      {reviewMark && (
        <Reveal className="mt-3">
          <ReviewMark className="ml-0" />
        </Reveal>
      )}
    </div>
  );
}
