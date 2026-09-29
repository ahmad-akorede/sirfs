import { Link } from "@/components/ui/link";
import { PageIntro } from "@/components/layout/page-intro";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { RecordList } from "@/components/patterns/record-list";
import { Heading, Text } from "@/components/ui/type";
import {
  collectedLines,
  privacyAwaiting,
  securityAwaiting,
  securityKnown,
  trustLegend,
} from "@/content/trust";
import { crumbs } from "@/lib/seo/json-ld";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({
  title: "Privacy",
  description:
    "What a Sirfa Empowerment Initiative enquiry asks for, what this site does with it today, and which privacy terms are still unpublished.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Legal"
        title="What an enquiry collects."
        lede="The forms ask for who you are, how you earn, and the loan you have in mind. This page says what happens to those answers today, and which rules are still unpublished."
        trail={crumbs({ name: "Privacy", path: "/privacy" })}
      />
      <Section tone="paper" spacing="md">
        <Container width="wide">
          <Text className="max-w-[52ch]">{trustLegend}</Text>

          <Heading level={2} className="mt-14">
            What the forms ask for.
          </Heading>
          <div className="mt-8">
            <RecordList items={collectedLines} />
          </div>

          <Heading level={2} className="mt-16">
            What happens to the answers today.
          </Heading>
          <ul className="mt-8 max-w-[52ch] border-b border-[var(--rule)]">
            {securityKnown.map((line) => (
              <li key={line} className="border-t border-[var(--rule)] py-4 font-sans text-body">
                {line}
              </li>
            ))}
          </ul>
          <Text className="mt-6 max-w-[52ch]">
            The{" "}
            <Link href="/cookies" className="underline decoration-current/30 underline-offset-[0.3em]">
              cookie notice
            </Link>{" "}
            says the same about this browser: no analytics cookie is set.
          </Text>

          <Heading level={2} className="mt-16">
            Still unpublished.
          </Heading>
          <Text className="mt-6 max-w-[52ch]">
            These lines wait on the institution. They are not filled with a general promise.
          </Text>
          <div className="mt-8">
            <RecordList items={privacyAwaiting} />
          </div>

          <Heading level={2} className="mt-16">
            When a system can receive an application.
          </Heading>
          <Text className="mt-6 max-w-[52ch]">
            The control is named here when a system is connected.
          </Text>
          <div className="mt-8">
            <RecordList items={securityAwaiting} />
          </div>
        </Container>
      </Section>
    </>
  );
}
