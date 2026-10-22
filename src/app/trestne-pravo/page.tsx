import { AreaPageView } from "@/components/sections/AreaPageView";
import { trestne } from "@/content/trestne";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(trestne.meta);

export default function TrestnePage() {
  return <AreaPageView page={trestne} />;
}
