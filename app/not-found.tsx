import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { pageMetadata } from "@/lib/seo/metadata";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/ui/type";

export const metadata = pageMetadata({
  title: "Page not found",
  description: "This address is not a page on the Sirfa site.",
  path: "/404",
  index: false,
  follow: true,
  canonical: false,
});

export default function NotFound() {
  return (
    <Section tone="paper" spacing="lg">
      <Container width="prose">
        <Heading level={1}>This page is not on the site.</Heading>
        <Text className="mt-6">
          The address may be old, or the page may not have been published. The loans, the office,
          and the application are still in the menu.
        </Text>
        <div className="mt-8">
          <Button href="/">Back to the home page</Button>
        </div>
      </Container>
    </Section>
  );
}
