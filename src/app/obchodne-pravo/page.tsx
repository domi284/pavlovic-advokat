import { AreaPageView } from "@/components/sections/AreaPageView";
import { obchodne } from "@/content/obchodne";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(obchodne.meta);

export default function ObchodnePage() {
  return <AreaPageView page={obchodne} />;
}
