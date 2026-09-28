import { faqGroups } from "@/content/resources";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumb } from "@/components/seo/breadcrumb";
import { crumbs, faqPageJsonLd } from "@/lib/seo/json-ld";
import { pageMetadata } from "@/lib/seo/metadata";
import { FaqGroups } from "@/components/resources/faq-groups";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Display, Eyebrow, Lede } from "@/components/ui/type";

export const metadata = pageMetadata({
  title: "Answers",
  description:
    "Questions on loans, applications, repayments, savings, and business. Rates and rules appear when confirmed.",
  path: "/resources/faq",
});

const faqItems = faqGroups.flatMap((group) => [...group.items]);

export default function FaqPage() {
  return (
    <Section tone="paper" spacing="md">
      <JsonLd data={faqPageJsonLd(faqItems)} />
      <Container width="wide">
        <Breadcrumb
          items={crumbs(
            { name: "Resources", path: "/resources" },
            { name: "Answers", path: "/resources/faq" },
          )}
        />
        <Eyebrow>Resources</Eyebrow>
        <Display className="mt-5 max-w-[16ch]">Questions, by subject.</Display>
        <Lede className="mt-6 max-w-[40ch]">
          A rate, a repayment rule, or a document list appears only when it has been confirmed.
        </Lede>
        <div className="mt-14">
          <FaqGroups groups={faqGroups} />
        </div>
      </Container>
    </Section>
  );
}
