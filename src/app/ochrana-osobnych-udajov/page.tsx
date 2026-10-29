import { LegalPage } from "@/components/sections/LegalPage";
import { privacy } from "@/content/legal";
import { pageSeo } from "@/content/10-seo";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(pageSeo.privacy);

export default function PrivacyPage() {
  return <LegalPage content={privacy} />;
}
