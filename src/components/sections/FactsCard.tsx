import { Rich } from "@/components/ui/Rich";
import { cn } from "@/lib/cn";

/** Karta „Fakty“ na stránke O mne: popis + hodnota, placeholdery ako čipy. */
export function FactsCard({
  facts,
  className,
}: {
  facts: { label: string; value: string }[];
  className?: string;
}) {
  return (
    <dl className={cn("rounded-xs border border-line bg-paper px-7 py-4 shadow-hair md:px-9", className)}>
      {facts.map((fact) => (
        <div key={fact.label} className="border-b border-line py-5 last:border-b-0">
          <dt className="label-caps">{fact.label}</dt>
          <dd className="mt-2 text-[16px] leading-relaxed text-ink">
            <Rich text={fact.value} />
          </dd>
        </div>
      ))}
    </dl>
  );
}
