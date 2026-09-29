import { trustPoints } from "@/data/products";
import { Container } from "@/components/layout/container";

export function TrustBar() {
  return (
    <section className="border-y border-line bg-white" aria-label="What Sirfa offers">
      <Container width="wide" className="py-8 lg:py-10">
        <p className="font-sans text-small text-ink-faint">Built around your financial goals.</p>
        <dl className="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <div key={point.title}>
              <dt className="font-sans text-[1.15rem] font-semibold">{point.title}</dt>
              <dd className="mt-1 font-sans text-small text-ink-soft">{point.text}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
