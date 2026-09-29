import type { ProductSummary } from "@/components/patterns/product";
import { ProductIndex } from "@/components/patterns/product";
import { RecordList } from "@/components/patterns/record-list";
import type { ProductPageData } from "@/content/product";
import { disclosureNote, loanDisclosure } from "@/content/trust";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CtaBand } from "@/components/patterns/cta-band";
import { FaqList } from "@/components/patterns/faq-list";
import { StepList } from "@/components/patterns/step-list";
import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@/components/ui/icon";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumb } from "@/components/seo/breadcrumb";
import { faqPageJsonLd, type Crumb } from "@/lib/seo/json-ld";
import { Display, Eyebrow, Heading, Lede, Text } from "@/components/ui/type";

export function ProductPage({
  product,
  related,
  relatedTitle = "Other facilities",
  trail,
}: {
  product: ProductPageData;
  related?: ProductSummary[];
  relatedTitle?: string;
  trail?: readonly Crumb[];
}) {
  return (
    <>
      {product.faqs.length > 0 ? <JsonLd data={faqPageJsonLd(product.faqs)} /> : null}
      <Section id="summary" tone="paper" spacing="md">
        <Container width="wide">
          {trail ? <Breadcrumb items={trail} /> : null}
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7 lg:pt-6">
              <Eyebrow>{product.eyebrow}</Eyebrow>
              <Display className="mt-4">{product.name}</Display>
              {product.purpose ? <Lede className="mt-6 max-w-[34ch]">{product.purpose}</Lede> : null}
              <div className="mt-8">
                <Button href={product.applyHref} size="lg">
                  {product.applyLabel}
                  <IconArrowRight />
                </Button>
              </div>
            </div>
            {product.facts.length > 0 ? (
              <aside className="bg-stone px-6 py-8 sm:px-8 lg:col-span-5 lg:col-start-8 lg:mt-10 lg:py-10">
                <p className="font-sans text-eyebrow uppercase text-ink-soft">{product.labels.summary}</p>
                <dl className="mt-6">
                  {product.facts.map((fact) => (
                    <div
                      key={fact.label}
                      className="grid grid-cols-[minmax(0,1fr)_minmax(0,9rem)] items-baseline gap-4 border-t border-ink/15 py-4"
                    >
                      <dt className="font-sans text-small text-ink-soft">{fact.label}</dt>
                      <dd className="min-w-0 text-right font-serif text-subhead font-medium break-words text-ink">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-6 font-sans text-small text-ink-soft">{product.summary}</p>
              </aside>
            ) : null}
          </div>
        </Container>
      </Section>

      {product.who ? (
        <Section id="who" tone="stone" spacing="md">
          <Container width="wide">
            <div className="grid gap-8 md:grid-cols-12">
              <div className="md:col-span-5">
                <Eyebrow>{product.labels.who}</Eyebrow>
                <Heading level={2} className="mt-4">
                  {product.audience}
                </Heading>
              </div>
              <Text className="md:col-span-6 md:col-start-7">{product.who}</Text>
            </div>
          </Container>
        </Section>
      ) : null}

      {product.benefits.length > 0 ? (
        <Section id="benefits" tone="paper" spacing="md">
          <Container width="wide">
            <Eyebrow>{product.labels.benefits}</Eyebrow>
            <Heading level={2} className="mt-4 max-w-[16ch]">
              What this facility is meant to do.
            </Heading>
            <ol className="mt-12 border-b border-[var(--rule)]">
              {product.benefits.map((benefit, index) => (
                <li
                  key={benefit}
                  className="grid gap-3 border-t border-[var(--rule)] py-5 md:grid-cols-12 md:gap-6"
                >
                  <span className="font-sans text-small font-semibold text-olive tabular-nums md:col-span-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-sans text-body md:col-span-10">{benefit}</span>
                </li>
              ))}
            </ol>
          </Container>
        </Section>
      ) : null}

      {product.eligibility.length > 0 ? (
        <Section id="eligibility" tone="ink" spacing="md">
          <Container width="wide">
            <div className="grid gap-10 md:grid-cols-12">
              <div className="md:col-span-5">
                <Eyebrow>{product.labels.eligibility}</Eyebrow>
                <Heading level={2} className="mt-4">
                  What has to be true.
                </Heading>
              </div>
              <ul className="border-b border-[var(--rule)] md:col-span-6 md:col-start-7">
                {product.eligibility.map((item) => (
                  <li key={item} className="border-t border-[var(--rule)] py-4 font-sans text-body">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </Section>
      ) : null}

      {product.requirements.length > 0 ? (
        <Section id="requirements" tone="paper" spacing="md">
          <Container width="wide">
            <Eyebrow>{product.labels.requirements}</Eyebrow>
            <Heading level={2} className="mt-4 max-w-[18ch]">
              What the application asks for.
            </Heading>
            <ul className="mt-12 border-b border-[var(--rule)]">
              {product.requirements.map((item) => (
                <li key={item} className="border-t border-[var(--rule)] py-5 font-sans text-body">
                  {item}
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      <Section id="disclosure" tone="stone" spacing="md">
        <Container width="wide">
          <Eyebrow>{product.labels.range}</Eyebrow>
          <Heading level={2} className="mt-4 max-w-[18ch]">
            What this loan has not set.
          </Heading>
          <Text className="mt-6 max-w-[52ch]">{disclosureNote}</Text>
          <div className="mt-10">
            <RecordList items={loanDisclosure} />
          </div>
          {product.repayment ? (
            <div id="repayment" className="mt-14 max-w-[52ch]">
              <Eyebrow>{product.labels.repayment}</Eyebrow>
              <Heading level={2} className="mt-4">
                How it is paid back.
              </Heading>
              <Text className="mt-6">{product.repayment}</Text>
            </div>
          ) : null}
        </Container>
      </Section>

      {product.process.length > 0 ? (
        <Section id="process" tone="paper" spacing="lg">
          <Container width="wide">
            <Eyebrow>{product.labels.process}</Eyebrow>
            <Heading level={2} className="mt-4 max-w-[16ch]">
              From the choice to a person’s decision.
            </Heading>
            <div className="mt-14">
              <StepList steps={product.process} />
            </div>
            <div className="mt-10">
              <Button href={product.applyHref} size="lg">
                {product.applyLabel}
                <IconArrowRight />
              </Button>
            </div>
          </Container>
        </Section>
      ) : null}

      {product.faqs.length > 0 ? (
        <Section id="questions" tone="stone" spacing="lg">
          <Container width="wide">
            <div className="grid gap-10 md:grid-cols-12">
              <div className="md:col-span-4">
                <Eyebrow>{product.labels.faq}</Eyebrow>
                <Heading level={2} className="mt-4">
                  Before you apply.
                </Heading>
              </div>
              <div className="md:col-span-8">
                <FaqList items={product.faqs} />
              </div>
            </div>
          </Container>
        </Section>
      ) : null}

      <CtaBand
        id="begin"
        eyebrow={product.ctaEyebrow}
        title={product.ctaTitle}
        note={product.ctaNote}
        actionLabel={product.applyLabel}
        actionHref={product.applyHref}
        secondaryLabel={product.ctaSecondaryLabel}
        secondaryHref={product.ctaSecondaryHref}
      />

      {related && related.length > 0 ? (
        <Section tone="paper" spacing="md">
          <Container width="wide">
            <Heading level={2}>{relatedTitle}</Heading>
            <div className="mt-12">
              <ProductIndex products={related} />
            </div>
          </Container>
        </Section>
      ) : null}
    </>
  );
}

