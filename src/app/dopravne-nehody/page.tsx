import { AreaPageView } from "@/components/sections/AreaPageView";
import { nehody } from "@/content/nehody";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(nehody.meta);

export default function DopravnePage() {
  return <AreaPageView page={nehody} />;
}
