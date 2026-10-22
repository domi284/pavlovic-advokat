import { LegalPage } from "@/components/sections/LegalPage";
import { privacy } from "@/content/legal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(privacy.meta);

export default function PrivacyPage() {
  return <LegalPage content={privacy} />;
}
