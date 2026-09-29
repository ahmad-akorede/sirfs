import type { ProductSummary } from "@/components/patterns/product";
import type { ProductPageData } from "@/content/product";
import { siteImages, type SiteImage } from "@/data/site";
import { Photo } from "@/components/home/photo";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumb } from "@/components/seo/breadcrumb";
import { FaqList } from "@/components/patterns/faq-list";
import { faqPageJsonLd, type Crumb } from "@/lib/seo/json-ld";

const pending = /to be published|to be written|to be confirmed|not published/i;

function known(items: string[]) {
  return items.filter((item) => item.trim() && !pending.test(item));
}

function knownSentence(text: string) {
  return text
    .split(/(?<=\.)\s+/)
    .filter((sentence) => sentence.trim() && !pending.test(sentence))
    .join(" ");
}

const frames: Record<string, SiteImage> = {
  personal: siteImages.hero,
  payroll: siteImages.personalFinance,
  business: siteImages.businessFinance,
  lpo: { ...siteImages.businessFinance, position: "center 48%" },
  invoice: { ...siteImages.hero, position: "center 72%" },
};

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
  const image = frames[product.slug] ?? siteImages.hero;
  const benefits = known(product.benefits);
  const requirements = known(product.requirements);
  const repayment = knownSentence(product.repayment);

  return (
    <>
      {product.faqs.length > 0 ? <JsonLd data={faqPageJsonLd(product.faqs)} /> : null}

      <section className="bg-white">
        <div className="grid lg:min-h-[42rem] lg:grid-cols-12">
          <div className="flex flex-col justify-center px-5 py-14 sm:px-6 lg:col-span-5 lg:py-20 lg:pr-12 lg:pl-[max(1.5rem,calc((100%-80rem)/2+2rem))]">
            {trail ? <Breadcrumb items={trail} /> : null}
            <p className="mt-8 font-sans text-[0.9375rem] font-semibold text-olive">{product.eyebrow}</p>
            <h1 className="mt-4 max-w-[10em] font-sans text-display font-bold text-balance">{product.name}</h1>
            <p className="mt-6 max-w-[36ch] font-sans text-body text-ink-soft">{product.purpose}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href={product.applyHref} size="lg">
                {product.applyLabel}
              </Button>
              <Button href="#how" variant="secondary" size="lg">
                How it works
              </Button>
            </div>
          </div>
          <figure className="relative min-h-[28rem] lg:col-span-7 lg:min-h-full">
            <Photo image={image} priority sizes="(min-width: 1024px) 58vw, 100vw" />
          </figure>
        </div>
      </section>

      <Section id="proposition" tone="paper" spacing="md">
        <Container width="wide" className="grid items-end gap-8 lg:grid-cols-12">
          <h2 className="font-sans text-headline font-bold text-balance lg:col-span-7">{product.summary}</h2>
          <p className="font-sans text-body text-ink-soft lg:col-span-4 lg:col-start-9">
            The amount, the term, and the cost are written into the facility letter. This page names the purpose.
          </p>
        </Container>
      </Section>

      <section id="who" className="bg-olive text-paper" data-tone="olive">
        <Container width="wide" className="grid items-center gap-10 py-14 md:py-[4.5rem] lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-5">
            <p className="font-sans text-[0.9375rem] font-semibold text-paper-muted">{product.labels.who}</p>
            <h2 className="mt-4 font-sans text-headline font-bold text-balance">{product.audience}</h2>
          </div>
          <p className="font-sans text-body text-paper-muted lg:col-span-6 lg:col-start-7">{product.who}</p>
        </Container>
      </section>

      <Section id="how" tone="stone" spacing="lg">
        <Container width="wide">
          <h2 className="font-sans text-headline font-bold">How it works</h2>
          <ol className="mt-14 border-t border-line">
            {product.process.map((step, index) => (
              <li key={step.title} className="grid items-baseline gap-3 border-b border-line py-8 md:grid-cols-12 md:gap-8">
                <span className="font-sans text-small font-semibold text-olive tabular-nums md:col-span-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-sans text-[1.5rem] font-bold md:col-span-5">{step.title}</h3>
                <p className="font-sans text-body text-ink-soft md:col-span-6">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {benefits.length > 0 ? (
        <Section id="benefits" tone="paper" spacing="lg">
          <Container width="wide" className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="font-sans text-headline font-bold">What this facility is for</h2>
              <p className="mt-6 font-sans text-[1.75rem] leading-tight font-bold tracking-[-0.03em]">{benefits[0]}</p>
            </div>
            <ul className="border-t border-line lg:col-span-6 lg:col-start-7">
              {benefits.slice(1).map((benefit) => (
                <li key={benefit} className="border-b border-line py-5 font-sans text-body">
                  {benefit}
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      <Section id="requirements" tone="stone" spacing="md">
        <Container width="wide" className="grid gap-8 lg:grid-cols-12">
          <h2 className="font-sans text-headline font-bold lg:col-span-5">What to prepare</h2>
          <div className="lg:col-span-6 lg:col-start-7">
            {requirements.length > 0 ? (
              <ul className="border-t border-line">
                {requirements.map((item) => (
                  <li key={item} className="border-b border-line py-5 font-sans text-body">
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="font-sans text-body text-ink-soft">The papers for this facility are named when you apply.</p>
            )}
            {repayment ? <p className="mt-8 font-sans text-body text-ink-soft">{repayment}</p> : null}
          </div>
        </Container>
      </Section>

      <section id="process" className="border-y border-line bg-white">
        <Container width="wide" className="py-14 md:py-[4.5rem] lg:py-24">
          <h2 className="font-sans text-headline font-bold">The decision</h2>
          <p className="mt-5 max-w-[46ch] font-sans text-body text-ink-soft">
            Apply names the facility, the amount, and the reason. A person reviews the file. The facility letter is the agreement.
          </p>
        </Container>
      </section>

      {product.faqs.length > 0 ? (
        <Section id="questions" tone="paper" spacing="lg">
          <Container width="wide" className="grid gap-10 lg:grid-cols-12">
            <h2 className="font-sans text-headline font-bold lg:col-span-4">Before you apply</h2>
            <div className="lg:col-span-8">
              <FaqList items={product.faqs} />
            </div>
          </Container>
        </Section>
      ) : null}

      <section className="bg-olive text-paper" data-tone="olive">
        <Container width="wide" className="py-16 md:py-24 lg:py-32">
          <h2 className="max-w-[12ch] font-sans text-headline font-bold text-balance">{product.ctaTitle}</h2>
          <p className="mt-5 max-w-[36ch] font-sans text-body text-paper-muted">
            {product.ctaNote ?? "A person reviews the file and writes the outcome."}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={product.applyHref} variant="inverse" size="lg">
              {product.applyLabel}
            </Button>
            {product.ctaSecondaryHref && product.ctaSecondaryLabel ? (
              <Button href={product.ctaSecondaryHref} variant="ghost" size="lg">
                {product.ctaSecondaryLabel}
              </Button>
            ) : null}
          </div>
        </Container>
      </section>

      {related && related.length > 0 ? (
        <Section tone="paper" spacing="sm">
          <Container width="wide">
            <h2 className="font-sans text-[1.75rem] font-bold">{relatedTitle}</h2>
            <ul className="mt-8 border-t border-line">
              {related.map((item) => (
                <li key={item.href} className="border-b border-line">
                  <Link href={item.href} className="grid gap-1 py-5 sm:grid-cols-12 sm:items-baseline">
                    <span className="font-sans text-body font-semibold sm:col-span-4">{item.name}</span>
                    <span className="font-sans text-small text-ink-soft sm:col-span-8">{item.audience}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}
    </>
  );
}
