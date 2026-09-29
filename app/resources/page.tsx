import { Link } from "@/components/ui/link";
import { Breadcrumb } from "@/components/seo/breadcrumb";
import { crumbs } from "@/lib/seo/json-ld";
import { pageMetadata } from "@/lib/seo/metadata";
import { resourceTopics, sampleNotes } from "@/content/resources";
import { NoteShelf } from "@/components/resources/note-card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@/components/ui/icon";
import { Display, Eyebrow, Heading, Lede, Text } from "@/components/ui/type";

export const metadata = pageMetadata({
  title: "Resources",
  description:
    "Questions on loans, savings, and business. Notes appear when a piece is written.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <>
      <Section tone="paper" spacing="md">
        <Container width="wide">
          <Breadcrumb items={crumbs({ name: "Resources", path: "/resources" })} />
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Eyebrow>Resources</Eyebrow>
              <Display className="mt-5">Read this before you apply.</Display>
              <Lede className="mt-6 max-w-[38ch]">
                Answers holds the questions. Notes is for writing, when a piece exists. The cards
                below are samples. None is published.
              </Lede>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href="/resources/faq" size="lg">
                  Answers
                  <IconArrowRight />
                </Button>
                <Button href="/resources/blog" variant="secondary" size="lg">
                  Notes
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="topics" tone="stone" spacing="lg">
        <Container width="wide">
          <Eyebrow>Topics</Eyebrow>
          <Heading level={2} className="mt-4 max-w-[14ch]">
            Five subjects.
          </Heading>
          <ol className="mt-14 border-b border-[var(--rule)]">
            {resourceTopics.map((topic, index) => (
              <li key={topic.id} id={topic.id} className="grid scroll-mt-28 gap-3 border-t border-[var(--rule)] py-7 md:grid-cols-12 md:items-baseline md:gap-6">
                <span className="font-sans text-small font-semibold text-olive tabular-nums md:col-span-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-title font-medium md:col-span-4">{topic.label}</h3>
                <p className="font-sans text-small text-[var(--muted)] md:col-span-7">{topic.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section id="notes" tone="paper" spacing="lg">
        <Container width="wide">
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <Eyebrow>Notes</Eyebrow>
              <Heading level={2} className="mt-4">
                Sample cards. Not articles.
              </Heading>
            </div>
            <Text className="md:col-span-4 md:col-start-9">
              Each card is marked Sample. A real note replaces it when there is a piece to keep.
            </Text>
          </div>
          <div className="mt-12">
            <NoteShelf notes={[...sampleNotes]} />
          </div>
          <div className="mt-10">
            <Button href="/resources/blog" variant="secondary">
              All notes
              <IconArrowRight />
            </Button>
          </div>
        </Container>
      </Section>

      <Section id="answers" tone="ink" spacing="md">
        <Container width="wide">
          <div className="grid items-end gap-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <Eyebrow>Answers</Eyebrow>
              <Heading level={2} className="mt-4">
                Loans, applications, repayments, savings, and business.
              </Heading>
            </div>
            <div className="md:col-span-4 md:col-start-9">
              <Text>
                Repayment rules and returns stay unpublished until they are confirmed. The answers
                say so.
              </Text>
              <Link
                href="/resources/faq"
                className="mt-6 inline-block font-sans text-small underline decoration-current/30 underline-offset-[0.4em]"
              >
                All answers
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
