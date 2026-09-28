import { PageIntro } from "@/components/layout/page-intro";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { RecordList } from "@/components/patterns/record-list";
import { Heading, Text } from "@/components/ui/type";
import { cookieAwaiting, cookieKnown, trustLegend } from "@/content/trust";
import { crumbs } from "@/lib/seo/json-ld";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({
  title: "Cookies",
  description:
    "Sirfa does not set an analytics or advertising cookie. Any cookie added later will be named here first.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Legal"
        title="No tracking cookie is set."
        lede="This site does not set a cookie for analytics, advertising, or a signed-in session."
        trail={crumbs({ name: "Cookies", path: "/cookies" })}
      />
      <Section tone="paper" spacing="md">
        <Container width="wide">
          <Text className="max-w-[52ch]">{cookieKnown}</Text>
          <Text className="mt-6 max-w-[52ch]">{trustLegend}</Text>
          <Heading level={2} className="mt-14">
            If a cookie is added later.
          </Heading>
          <Text className="mt-6 max-w-[52ch]">
            Each one will be named here before it is set. A banner will appear only when there is a
            cookie you can refuse.
          </Text>
          <div className="mt-8">
            <RecordList items={cookieAwaiting} />
          </div>
        </Container>
      </Section>
    </>
  );
}
