import { PageIntro } from "@/components/layout/page-intro";
import { crumbs } from "@/lib/seo/json-ld";
import { pageMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { LinkIndex } from "@/components/patterns/link-index";
import { Text } from "@/components/ui/type";

export const metadata = pageMetadata({
  title: "People",
  description: "The people who direct and manage Sirfa Empowerment Initiative.",
  path: "/about/team",
});

export default function TeamPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title="The people, with the work they do."
        lede="Directors and managers will be listed here with their roles. No portrait and no biography is published until that record is confirmed."
        trail={crumbs(
          { name: "About", path: "/about" },
          { name: "People", path: "/about/team" },
        )}
      />
      <Section tone="stone" spacing="md">
        <Container width="wide">
          <Text className="max-w-[48ch]">
            When the list is ready, each person is a line: name, role, and the part of the firm
            they answer for.
          </Text>
          <div className="mt-12 border-y border-[var(--rule)] py-8">
            <p className="font-serif text-title font-medium">No names published yet.</p>
            <Text size="small" className="mt-3">
              Those names will be checked against the corporate information.
            </Text>
          </div>
          <div className="mt-12">
            <LinkIndex
              items={[
                {
                  href: "/about/corporate-information",
                  label: "Corporate information",
                  note: "Licence, ownership, and governance.",
                },
                {
                  href: "/about",
                  label: "The institution",
                  note: "The short account of the firm.",
                },
              ]}
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
