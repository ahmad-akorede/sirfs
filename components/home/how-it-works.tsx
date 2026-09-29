import { steps } from "@/data/products";
import { SectionHeader } from "@/components/home/section-header";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export function HowItWorks() {
  return (
    <Section id="process" tone="stone" spacing="lg">
      <Container width="wide">
        <SectionHeader title="Getting started is simple." />
        <ol className="mt-16 border-t border-line">
          {steps.map((step, index) => (
            <li key={step.title} className="grid items-baseline gap-3 border-b border-line py-8 md:grid-cols-12 md:gap-8 md:py-10">
              <span className="font-sans text-small font-semibold text-olive tabular-nums md:col-span-1">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-sans text-[1.75rem] font-bold tracking-[-0.03em] md:col-span-5">{step.title}</h3>
              <p className="font-sans text-body text-ink-soft md:col-span-6">{step.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
