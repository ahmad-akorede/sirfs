import { Link } from "@/components/ui/link";
import { PageIntro } from "@/components/layout/page-intro";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { RecordList } from "@/components/patterns/record-list";
import { Heading, Text } from "@/components/ui/type";
import { complaintLines, trustLegend, type TrustLine } from "@/content/trust";
import { crumbs } from "@/lib/seo/json-ld";
import { pageMetadata } from "@/lib/seo/metadata";

const siteTerms: TrustLine[] = [
  {
    label: "Legal name",
    value: "Sirfa Empowerment Initiative",
    note: "The name supplied for the institution. The licence is still to be confirmed.",
  },
  {
    label: "Governing law",
    value: "To be confirmed",
    note: "The law that applies to use of this website.",
  },
  {
    label: "Liability",
    value: "To be published",
    note: "What the institution accepts, and what it limits, for use of the site.",
  },
];

export const metadata = pageMetadata({
  title: "Terms",
  description:
    "The Sirfa Empowerment Initiative website explains the loans. The facility letter is the contract. Governing law is still unpublished.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Legal"
        title="The site explains. The contract decides."
        lede="Pages describe the loans and how to enquire. They are not an offer of credit, and they are not the agreement you sign."
        trail={crumbs({ name: "Terms", path: "/terms" })}
      />
      <Section tone="paper" spacing="md">
        <Container width="wide">
          <Text className="max-w-[52ch]">{trustLegend}</Text>

          <Heading level={2} className="mt-14">
            What counts as a term.
          </Heading>
          <Text className="mt-6 max-w-[52ch]">
            Amounts, interest, and fees count only when they are published on the loan and then
            written into a facility letter. A line marked “To be published” has not been set.
          </Text>

          <Heading level={2} className="mt-16">
            Use of this website.
          </Heading>
          <Text className="mt-6 max-w-[52ch]">
            The{" "}
            <Link href="/privacy" className="underline decoration-current/30 underline-offset-[0.3em]">
              privacy notice
            </Link>{" "}
            covers what a form asks for. These lines cover the site itself, and they are still open.
          </Text>
          <div className="mt-8">
            <RecordList items={siteTerms} />
          </div>

          <Heading level={2} className="mt-16">
            A complaint.
          </Heading>
          <Text className="mt-6 max-w-[52ch]">
            A complaint about a loan, a savings account, or this website starts at the{" "}
            <Link href="/contact" className="underline decoration-current/30 underline-offset-[0.3em]">
              office
            </Link>
            . The{" "}
            <Link
              href="/about/corporate-information"
              className="underline decoration-current/30 underline-offset-[0.3em]"
            >
              corporate record
            </Link>{" "}
            is where the licence will be printed.
          </Text>
          <div className="mt-8">
            <RecordList items={complaintLines} />
          </div>
        </Container>
      </Section>
    </>
  );
}
