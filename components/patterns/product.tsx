import { Link } from "@/components/ui/link";
import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@/components/ui/icon";
import { Eyebrow, Heading, Text } from "@/components/ui/type";

export type ProductFact = {
  label: string;
  value: string;
};

export type ProductSummary = {
  name: string;
  audience: string;
  summary: string;
  amount: string;
  tenor: string;
  href: string;
  facts?: ProductFact[];
};

export function ProductFeature({
  product,
  actionLabel = "Read the terms",
  actionHref,
}: {
  product: ProductSummary;
  actionLabel?: string;
  actionHref?: string;
}) {
  return (
    <article className="grid items-start gap-y-12 md:grid-cols-12 md:gap-x-8">
      <div className="md:col-span-5">
        <Eyebrow>{product.audience}</Eyebrow>
        <Heading level={2} className="mt-4">
          {product.name}
        </Heading>
        <Text className="mt-6 max-w-[36ch]">{product.summary}</Text>
        <div className="mt-8">
          <Button href={actionHref ?? product.href} variant="secondary">
            {actionLabel}
            <IconArrowRight />
          </Button>
        </div>
      </div>
      <div className="min-w-0 md:col-span-6 md:col-start-7">
        <p className="font-serif text-[clamp(1.75rem,8vw,5.25rem)] leading-[0.95] font-medium tracking-[-0.035em] break-words">
          {product.amount}
        </p>
        <p className="mt-3 font-sans text-eyebrow uppercase text-[var(--eyebrow)]">{product.tenor}</p>
        {product.facts ? (
          <dl className="mt-10">
            {product.facts.map((fact) => (
              <div
                key={fact.label}
                className="grid grid-cols-[minmax(0,1fr)_minmax(0,12rem)] items-baseline gap-4 border-t border-[var(--rule)] py-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-6"
              >
                <dt className="font-sans text-small text-[var(--muted)]">{fact.label}</dt>
                <dd className="min-w-0 text-right font-sans text-body break-words">{fact.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </article>
  );
}

export function ProductIndex({ products }: { products: ProductSummary[] }) {
  return (
    <ol className="border-b border-[var(--rule)]">
      {products.map((product, index) => (
        <li key={product.name} className="border-t border-[var(--rule)]">
          <Link
            href={product.href}
            className="discover group grid gap-3 py-7 md:grid-cols-12 md:items-baseline md:gap-6"
          >
            <span className="font-serif text-small text-copper tabular-nums md:col-span-1">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="font-serif text-title font-medium md:col-span-4">{product.name}</span>
            <span className="font-sans text-small text-[var(--muted)] md:col-span-4">
              {product.audience}
            </span>
            <span className="font-sans text-small md:col-span-2">{product.tenor}</span>
            <span className="font-sans text-small underline decoration-transparent underline-offset-[0.35em] group-hover:decoration-current md:col-span-1 md:text-right">
              View
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
