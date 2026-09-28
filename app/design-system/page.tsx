import { Specimen } from "@/components/design-system/specimen";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({
  title: "Design system",
  description: "Colour, type, and interface primitives for the Sirfa website.",
  path: "/design-system",
  index: false,
  follow: false,
});

export default function DesignSystemPage() {
  return <Specimen />;
}
