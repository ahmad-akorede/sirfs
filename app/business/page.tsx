import { Link } from "@/components/ui/link";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumb } from "@/components/seo/breadcrumb";
import { crumbs, faqPageJsonLd } from "@/lib/seo/json-ld";
import { pageMetadata } from "@/lib/seo/metadata";
import {
  businessAudiences,
  businessBenefits,
  businessChallenges,
  businessFacilities,
  businessFaqs,
  businessHero,
  businessScenarios,
  businessSolutions,
  businessSteps,
} from "@/content/business";
import { site } from "@/content/site";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CtaBand } from "@/components/patterns/cta-band";
import { FaqList } from "@/components/patterns/faq-list";
import { StepList } from "@/components/patterns/step-list";
import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@/components/ui/icon";
import { ImageFrame } from "@/components/ui/image-frame";
import { Display, Eyebrow, Heading, Lede, Text } from "@/components/ui/type";

export const metadata = pageMetadata({
  title: "Business",
  description:
    "Finance for entrepreneurs, traders, and small firms. Working capital, orders, invoices, and savings kept apart from a loan. Rates published when confirmed.",
  path: "/business",
});

export default function BusinessPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(businessFaqs)} />
      <Section tone="paper" spacing="md">
        <Container width="wide">
          <Breadcrumb items={crumbs({ name: "Business", path: "/business" })} />
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-6">
              <Eyebrow>{businessHero.eyebrow}</Eyebrow>
              <Display className="mt-5">{businessHero.title}</Display>
              <Lede className="mt-6 max-w-[36ch]">{businessHero.lede}</Lede>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href={site.applyHref} size="lg">
                  {site.applyLabel}
                  <IconArrowRight />
                </Button>
                <Button href="#work" variant="secondary" size="lg">
                  See the fit
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 lg:mt-14">
              <ImageFrame
                src="/images/business/fabric-shop.jpg"
                alt="A woman arranging folded fabric on a shop counter"
                width={864}
                height={1152}
                ratio="portrait"
                overlap="copper"
                priority
                caption="A shop at the counter. Not a customer portrait."
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="ink" spacing="sm">
        <Container width="wide">
          <ul className="grid border-t border-[var(--rule)] sm:grid-cols-2 lg:grid-cols-5">
            {businessAudiences.map((audience) => (
              <li
                key={audience}
                className="border-b border-[var(--rule)] py-5 font-serif text-subhead font-medium lg:border-b-0 lg:px-5 lg:first:pl-0 lg:[&:not(:first-child)]:border-l"
              >
                {audience}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section id="work" tone="paper" spacing="lg">
        <Container width="wide">
          <div className="grid items-end gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <Eyebrow>The trading cycle</Eyebrow>
              <Heading level={2} className="mt-4">
                When the cash is short.
              </Heading>
              <Text className="mt-6 max-w-[42ch]">
                These are common situations. They are not customer stories, and they are not
                approvals.
              </Text>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <ImageFrame
                src="/images/business/provisions-store.jpg"
                alt="A man checking sacks beside stacked cartons in a provisions store"
                width={1280}
                height={720}
                webpSrcSet="/images/business/provisions-store-800.webp 800w, /images/business/provisions-store.webp 1280w"
                sizes="(min-width: 1024px) 42rem, 100vw"
                ratio="landscape"
                overlap="stone"
                caption="Goods in the store. Not a customer portrait."
              />
            </div>
          </div>
          <ol className="mt-16 border-b border-[var(--rule)]">
            {businessScenarios.map((scenario, index) => (
              <li
                key={scenario.title}
                className="grid gap-3 border-t border-[var(--rule)] py-8 md:grid-cols-12 md:items-baseline md:gap-6"
              >
                <span className="font-serif text-small text-copper tabular-nums md:col-span-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-title font-medium md:col-span-4">{scenario.title}</h3>
                <p className="font-sans text-small text-[var(--muted)] md:col-span-5">{scenario.text}</p>
                <a
                  href={scenario.href}
                  className="font-sans text-small underline decoration-current/30 underline-offset-[0.4em] md:col-span-2 md:text-right"
                >
                  {scenario.action}
                </a>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section id="facilities" tone="stone" spacing="lg">
        <Container width="wide">
          <Eyebrow>Facilities</Eyebrow>
          <Heading level={2} className="mt-4 max-w-[16ch]">
            Loans, and what is not a loan.
          </Heading>
          <Text size="small" className="mt-5 max-w-[46ch]">
            Working capital, orders, and invoices have loan pages. Asset finance is arranged with
            the office. Terms are published when confirmed.
          </Text>
          <div className="mt-14 border-b border-[var(--rule)]">
            {businessFacilities.map((facility) => (
              <article
                key={facility.id}
                id={facility.id}
                className="grid scroll-mt-28 gap-4 border-t border-[var(--rule)] py-8 md:grid-cols-12 md:gap-6"
              >
                <h3 className="font-serif text-title font-medium md:col-span-4">{facility.name}</h3>
                <div className="md:col-span-5">
                  <p className="font-sans text-body">{facility.summary}</p>
                  <p className="mt-3 font-sans text-small text-[var(--muted)]">{facility.detail}</p>
                </div>
                <div className="flex flex-col items-start gap-3 md:col-span-3 md:items-end">
                  <Button href={facility.href} variant="quiet">
                    {facility.action}
                    <span className="sr-only">, {facility.name}</span>
                  </Button>
                  {facility.secondaryHref && facility.secondaryAction ? (
                    <Button href={facility.secondaryHref} variant="quiet">
                      {facility.secondaryAction}
                      <span className="sr-only">, {facility.name}</span>
                    </Button>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="challenges" tone="ink" spacing="lg">
        <Container width="wide">
          <Eyebrow>Business challenges</Eyebrow>
          <Heading level={2} className="mt-4 max-w-[14ch]">
            Where the cash breaks.
          </Heading>
          <ul className="mt-14 border-b border-[var(--rule)]">
            {businessChallenges.map((item, index) => (
              <li
                key={item.title}
                className="grid gap-3 border-t border-[var(--rule)] py-7 md:grid-cols-12 md:gap-6"
              >
                <span className="font-serif text-small tabular-nums text-[var(--muted)] md:col-span-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-title font-medium md:col-span-5">{item.title}</h3>
                <p className="font-sans text-small text-[var(--muted)] md:col-span-6">{item.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section id="solutions" tone="paper" spacing="lg">
        <Container width="wide">
          <Eyebrow>What to use</Eyebrow>
          <Heading level={2} className="mt-4 max-w-[16ch]">
            The facility for the gap.
          </Heading>
          <div className="mt-14 border-b border-[var(--rule)]">
            {businessSolutions.map((item) => (
              <div
                key={item.challenge}
                className="grid gap-3 border-t border-[var(--rule)] py-7 md:grid-cols-12 md:items-baseline md:gap-6"
              >
                <h3 className="font-serif text-title font-medium md:col-span-5">{item.challenge}</h3>
                <p className="font-sans text-body md:col-span-4">{item.response}</p>
                <Link
                  href={item.href}
                  className="font-sans text-small underline decoration-current/30 underline-offset-[0.4em] md:col-span-3 md:text-right"
                >
                  Details<span className="sr-only">, {item.challenge}</span>
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="benefits" tone="stone" spacing="md">
        <Container width="wide">
          <Eyebrow>Benefits</Eyebrow>
          <Heading level={2} className="mt-4 max-w-[18ch]">
            What you can expect.
          </Heading>
          <ul className="mt-12 border-b border-[var(--rule)]">
            {businessBenefits.map((benefit) => (
              <li key={benefit} className="border-t border-[var(--rule)] py-5 font-sans text-body">
                {benefit}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section id="how-to-apply" tone="paper" spacing="lg">
        <Container width="wide">
          <Eyebrow>How to apply</Eyebrow>
          <Heading level={2} className="mt-4 max-w-[16ch]">
            Start from the need.
          </Heading>
          <div className="mt-14">
            <StepList steps={businessSteps} />
          </div>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Button href={site.applyHref} size="lg">
              {site.applyLabel}
              <IconArrowRight />
            </Button>
            <Button href={site.contactHref} variant="quiet">
              Or ask the office
            </Button>
          </div>
        </Container>
      </Section>

      <Section id="questions" tone="stone" spacing="lg">
        <Container width="wide">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow>Questions</Eyebrow>
              <Heading level={2} className="mt-4">
                Before you apply.
              </Heading>
            </div>
            <div className="md:col-span-8">
              <FaqList items={businessFaqs} />
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand
        id="begin"
        eyebrow="Begin"
        title="Name the need, the amount, and the reason."
        actionLabel={site.applyLabel}
        actionHref={site.applyHref}
        secondaryLabel="Or ask the office"
        secondaryHref={site.contactHref}
        note="The form records an enquiry. Savings, and any facility still unpublished, starts with the office. Nothing here approves the request."
      />
    </>
  );
}
