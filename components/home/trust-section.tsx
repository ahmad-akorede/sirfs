import { pillars } from "@/data/products";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export function TrustSection() {
  return (
    <Section tone="ink" spacing="lg">
      <Container width="wide">
        <h2 className="max-w-[14ch] font-sans text-headline font-bold text-balance">Why people choose Sirfa.</h2>
        <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="font-sans text-small font-semibold text-paper-muted">01</p>
            <h3 className="mt-4 font-sans text-[2.75rem] leading-none font-bold tracking-[-0.03em]">{pillars[0].title}</h3>
            <p className="mt-5 max-w-[28ch] font-sans text-body text-[var(--muted)]">{pillars[0].text}</p>
          </div>
          <dl className="border-t border-[var(--rule)] lg:col-span-6 lg:col-start-7">
            {pillars.slice(1).map((pillar, index) => (
              <div key={pillar.title} className="border-b border-[var(--rule)] py-7">
                <dt className="font-sans text-[1.5rem] font-bold tracking-[-0.03em]">
                  <span className="mr-4 font-sans text-small font-semibold text-paper-muted">
                    {String(index + 2).padStart(2, "0")}
                  </span>
                  {pillar.title}
                </dt>
                <dd className="mt-2 font-sans text-body text-[var(--muted)]">{pillar.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </Section>
  );
}
