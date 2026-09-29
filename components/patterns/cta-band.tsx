import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@/components/ui/icon";
import { Eyebrow, Text } from "@/components/ui/type";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export function CtaBand({
  id = "apply",
  eyebrow = "Apply",
  title,
  note,
  actionLabel,
  actionHref,
  secondaryLabel,
  secondaryHref,
  tone = "olive",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  note?: string;
  actionLabel: string;
  actionHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  tone?: "olive" | "ink";
}) {
  return (
    <Section id={id} tone={tone} spacing="md">
      <Container width="wide">
        <div className="grid items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="mt-5 max-w-[22ch] font-sans text-headline font-semibold text-balance">
              {title}
            </h2>
          </div>
          <div className="flex w-full flex-col items-stretch gap-4 sm:items-start md:col-span-4 md:col-start-9">
            <Button href={actionHref} variant="inverse" size="lg">
              {actionLabel}
              <IconArrowRight />
            </Button>
            {secondaryLabel && secondaryHref ? (
              <Button href={secondaryHref} variant="quiet">
                {secondaryLabel}
              </Button>
            ) : null}
            {note ? <Text size="small">{note}</Text> : null}
          </div>
        </div>
      </Container>
    </Section>
  );
}
