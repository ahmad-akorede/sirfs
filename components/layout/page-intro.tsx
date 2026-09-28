import type { ReactNode } from "react";
import { Breadcrumb } from "@/components/seo/breadcrumb";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import type { Crumb } from "@/lib/seo/json-ld";
import { Eyebrow, Heading, Lede } from "@/components/ui/type";

export function PageIntro({
  eyebrow,
  title,
  lede,
  trail,
  children,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  trail?: readonly Crumb[];
  children?: ReactNode;
}) {
  return (
    <Section tone="paper" spacing="lg">
      <Container width="wide">
        {trail ? <Breadcrumb items={trail} /> : null}
        <div className="grid gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <Eyebrow>{eyebrow}</Eyebrow>
            <Heading level={1} className="mt-4">
              {title}
            </Heading>
          </div>
          <div className="md:col-span-4 md:col-start-9 md:pt-10">
            <Lede>{lede}</Lede>
          </div>
        </div>
        {children ? <div className="mt-14">{children}</div> : null}
      </Container>
    </Section>
  );
}
