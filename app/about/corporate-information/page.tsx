import { Link } from "@/components/ui/link";
import { PageIntro } from "@/components/layout/page-intro";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { RecordList } from "@/components/patterns/record-list";
import { Heading, Text } from "@/components/ui/type";
import { complaintLines, regulatoryLines, trustLegend } from "@/content/trust";
import { crumbs } from "@/lib/seo/json-ld";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({
  title: "Corporate information",
  description: "Licence, ownership, and complaints for Sirfa. Unpublished lines stay marked.",
  path: "/about/corporate-information",
});

export default function CorporateInformationPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title="The record of the firm."
        lede="Licence, ownership, and where a complaint goes. A line stays empty until the document behind it is confirmed."
        trail={crumbs(
          { name: "About", path: "/about" },
          { name: "Corporate information", path: "/about/corporate-information" },
        )}
      />
      <Section tone="paper" spacing="md">
        <Container width="wide">
          <Text className="max-w-[52ch]">{trustLegend}</Text>
          <Heading level={2} className="mt-14">
            The licence.
          </Heading>
          <div className="mt-8">
            <RecordList items={regulatoryLines} />
          </div>
          <Heading level={2} className="mt-16">
            Complaints.
          </Heading>
          <div className="mt-8">
            <RecordList items={complaintLines} />
          </div>
          <Text className="mt-12 max-w-[52ch]">
            Governance notes and annual filings will sit under these lines when the firm publishes
            them. The{" "}
            <Link href="/privacy" className="underline decoration-current/30 underline-offset-[0.3em]">
              privacy notice
            </Link>{" "}
            and the{" "}
            <Link href="/terms" className="underline decoration-current/30 underline-offset-[0.3em]">
              terms
            </Link>{" "}
            use the same rule.
          </Text>
        </Container>
      </Section>
    </>
  );
}
