import { site } from "@/content/site";
import { JsonLd } from "@/components/seo/json-ld";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo/json-ld";
import { pageMetadata } from "@/lib/seo/metadata";
import { BusinessFinanceSection } from "@/components/home/business-finance";
import { CustomerStory } from "@/components/home/customer-story";
import { FeaturedProduct } from "@/components/home/featured-product";
import { FinalCta } from "@/components/home/final-cta";
import { Hero } from "@/components/home/hero";
import { HowItWorks } from "@/components/home/how-it-works";
import { PersonalFinanceSection } from "@/components/home/personal-finance";
import { ProductDiscovery } from "@/components/home/product-discovery";
import { ResourcesSection } from "@/components/home/resources-section";
import { TrustBar } from "@/components/home/trust-bar";
import { TrustSection } from "@/components/home/trust-section";

export const metadata = pageMetadata({
  title: site.name,
  description:
    "Personal finance, business finance, and savings from Sirfa Empowerment Initiative in Geri-Alimi.",
  path: "/",
  absolute: true,
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd data={websiteJsonLd()} />
      <Hero />
      <TrustBar />
      <ProductDiscovery />
      <FeaturedProduct />
      <PersonalFinanceSection />
      <BusinessFinanceSection />
      <HowItWorks />
      <CustomerStory />
      <ResourcesSection />
      <TrustSection />
      <FinalCta />
    </>
  );
}
