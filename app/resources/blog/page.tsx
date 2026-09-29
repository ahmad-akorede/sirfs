import { Link } from "@/components/ui/link";
import { publishedNotes, sampleNotes } from "@/content/resources";
import { NoteShelf } from "@/components/resources/note-card";
import { Breadcrumb } from "@/components/seo/breadcrumb";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { crumbs } from "@/lib/seo/json-ld";
import { pageMetadata } from "@/lib/seo/metadata";
import { Display, Eyebrow, Heading, Lede, Text } from "@/components/ui/type";

export const metadata = pageMetadata({
  title: "Notes",
  description:
    publishedNotes.length > 0
      ? "Notes from Sirfa Empowerment Initiative on money, business, loans, and savings."
      : "Sample layouts for Sirfa Empowerment Initiative notes. No piece is published yet.",
  path: "/resources/blog",
  index: publishedNotes.length > 0,
  follow: true,
});

export default function BlogPage() {
  return (
    <Section tone="paper" spacing="md">
      <Container width="wide">
        <Breadcrumb
          items={crumbs(
            { name: "Resources", path: "/resources" },
            { name: "Notes", path: "/resources/blog" },
          )}
        />
        <Eyebrow>Resources</Eyebrow>
        <Display className="mt-5 max-w-[12ch]">Notes</Display>
        <Lede className="mt-6 max-w-[40ch]">
          Writing on money, business, loans, and savings. Nothing on this page is published yet.
        </Lede>
        <Text className="mt-6 max-w-[46ch]">
          The cards are samples of the layout. A real note will carry a title, a date, and the
          writing, and it will not be labelled Sample.
        </Text>
        {publishedNotes.length > 0 ? (
          <div className="mt-14 border-b border-[var(--rule)]">
            <Heading level={2}>Published notes</Heading>
            <ul className="mt-6">
              {publishedNotes.map((note) => (
                <li key={note.slug} className="border-t border-[var(--rule)]">
                  <Link href={`/resources/blog/${note.slug}`} className="block py-6">
                    <h3 className="font-serif text-title font-medium">{note.title}</h3>
                    <span className="mt-2 block font-sans text-small text-[var(--muted)]">{note.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        <div className="mt-14">
          <Heading level={2}>Sample layouts</Heading>
          <div className="mt-8">
            <NoteShelf notes={[...sampleNotes]} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
