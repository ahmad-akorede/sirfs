import { Link } from "@/components/ui/link";
import { Breadcrumb } from "@/components/seo/breadcrumb";
import { crumbs } from "@/lib/seo/json-ld";
import { pageMetadata } from "@/lib/seo/metadata";
import {
  aboutStory,
  inclusion,
  institutionStory,
  leadership,
  locationsCopy,
  milestones,
  milestonesIntro,
  mission,
  trust,
  values,
  valuesIntro,
  vision,
  whyWeExist,
} from "@/content/about";
import { site } from "@/content/site";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CtaBand } from "@/components/patterns/cta-band";
import { TrustIndicators } from "@/components/patterns/trust-indicators";
import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@/components/ui/icon";
import { ImageFrame } from "@/components/ui/image-frame";
import { Display, Eyebrow, Heading, Lede, Text } from "@/components/ui/type";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Sirfa Empowerment Initiative lends to salary earners, traders, and small businesses. History, people, and the licence are published when confirmed.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Section tone="paper" spacing="md">
        <Container width="wide">
          <Breadcrumb items={crumbs({ name: "About", path: "/about" })} />
          <div className="grid items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Eyebrow>{aboutStory.eyebrow}</Eyebrow>
              <Display className="mt-4">{aboutStory.title}</Display>
            </div>
            <Lede className="max-w-[34ch] lg:col-span-4 lg:col-start-9">{aboutStory.lede}</Lede>
          </div>
        </Container>
      </Section>

      <Section id="why" tone="olive" spacing="lg">
        <Container width="wide">
          <Eyebrow>{whyWeExist.eyebrow}</Eyebrow>
          <h2 className="mt-6 max-w-[16ch] font-serif text-display font-medium text-balance">
            {whyWeExist.title}
          </h2>
          <div className="mt-12 grid gap-12 md:grid-cols-12 md:items-end">
            <Text className="max-w-[42ch] md:col-span-6">{whyWeExist.text}</Text>
            <ul className="border-t border-[var(--rule)] md:col-span-4 md:col-start-9">
              {whyWeExist.audiences.map((audience, index) => (
                <li
                  key={audience}
                  className="flex items-baseline justify-between gap-4 border-b border-[var(--rule)] py-4"
                >
                  <span className="font-serif text-title font-medium">{audience}</span>
                  <span className="font-sans text-small tabular-nums text-[var(--muted)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section id="story" tone="paper" spacing="lg">
        <Container width="wide">
          <div className="grid items-start gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5 lg:pt-16">
              <ImageFrame ratio="landscape" overlap="stone" caption={institutionStory.photoCaption} />
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <Eyebrow>{institutionStory.eyebrow}</Eyebrow>
              <Heading level={2} className="mt-4">
                {institutionStory.title}
              </Heading>
              <div className="mt-8 space-y-6">
                {institutionStory.paragraphs.map((paragraph) => (
                  <Text key={paragraph}>{paragraph}</Text>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="purpose" tone="stone" spacing="lg">
        <Container width="wide">
          <div className="grid md:grid-cols-2">
            <PurposeBlock label={mission.label} title={mission.title} text={mission.text} />
            <PurposeBlock label={vision.label} title={vision.title} text={vision.text} rule />
          </div>
        </Container>
      </Section>

      <Section id="values" tone="paper" spacing="lg">
        <Container width="wide">
          <div className="grid gap-8 md:grid-cols-12">
            <Heading level={2} className="md:col-span-5">
              Values
            </Heading>
            <Text className="md:col-span-6 md:col-start-7">{valuesIntro}</Text>
          </div>
          <ol className="mt-14 border-b border-[var(--rule)]">
            {values.map((value, index) => (
              <li
                key={`${value.name}-${index}`}
                className="grid gap-3 border-t border-[var(--rule)] py-8 md:grid-cols-12 md:items-baseline md:gap-6"
              >
                <span className="font-sans text-small font-semibold text-olive tabular-nums md:col-span-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-serif text-title font-medium md:col-span-4">{value.name}</span>
                <span className="font-sans text-body text-[var(--muted)] md:col-span-6">{value.text}</span>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section id="leadership" tone="stone" spacing="lg">
        <Container width="wide">
          <div className="grid items-end gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <ImageFrame ratio="portrait" overlap="none" caption={leadership.photoCaption} />
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <Eyebrow>{leadership.eyebrow}</Eyebrow>
              <Heading level={2} className="mt-4">
                {leadership.title}
              </Heading>
              <Text className="mt-6">{leadership.text}</Text>
              <div className="mt-8 flex flex-col items-start gap-4">
                <Button href="/about/team" variant="secondary">
                  The people
                  <IconArrowRight />
                </Button>
                <Link
                  href="/about/corporate-information"
                  className="font-sans text-small underline decoration-current/30 underline-offset-[0.4em]"
                >
                  Corporate information
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="milestones" tone="paper" spacing="lg">
        <Container width="wide">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-5">
              <Eyebrow>Milestones</Eyebrow>
              <Heading level={2} className="mt-4">
                Dates, when confirmed.
              </Heading>
            </div>
            <Text className="md:col-span-5 md:col-start-8">{milestonesIntro}</Text>
          </div>
          <ol className="mt-14">
            {milestones.map((item, index) => (
              <li key={`${item.when}-${index}`} className="relative border-l border-[var(--rule)] pb-12 pl-8">
                <span
                  aria-hidden="true"
                  className="absolute top-2 left-0 size-2 -translate-x-1/2 bg-olive"
                />
                <p className="font-sans text-eyebrow uppercase text-[var(--eyebrow)]">{item.when}</p>
                <p className="mt-3 font-serif text-title font-medium">{item.title}</p>
                <p className="mt-2 max-w-[46ch] font-sans text-small text-[var(--muted)]">{item.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section id="inclusion" tone="ink" spacing="lg">
        <Container width="wide">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <Eyebrow>{inclusion.eyebrow}</Eyebrow>
              <Heading level={2} className="mt-4">
                {inclusion.title}
              </Heading>
            </div>
            <Text className="md:col-span-4 md:col-start-9">{inclusion.text}</Text>
          </div>
          <dl className="mt-12 grid border-t border-[var(--rule)] md:grid-cols-3">
            {inclusion.stats.map((item, index) => (
              <div
                key={item.label}
                className={
                  index > 0
                    ? "border-b border-[var(--rule)] py-5 md:border-b-0 md:border-l md:px-8"
                    : "border-b border-[var(--rule)] py-5 md:border-b-0 md:pr-8"
                }
              >
                <dt className="font-sans text-small text-[var(--muted)]">{item.label}</dt>
                <dd className="mt-2 font-serif text-title font-medium">{item.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <Section id="trust" tone="paper" spacing="md">
        <Container width="wide">
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-6">
              <Eyebrow>{trust.eyebrow}</Eyebrow>
              <Heading level={2} className="mt-4">
                {trust.title}
              </Heading>
            </div>
            <Text className="md:col-span-5 md:col-start-8">{trust.text}</Text>
          </div>
          <div className="mt-12">
            <TrustIndicators items={trust.items} />
          </div>
          <Link
            href="/about/corporate-information"
            className="mt-8 inline-block font-sans text-small underline decoration-current/30 underline-offset-[0.4em]"
          >
            Corporate information
          </Link>
        </Container>
      </Section>

      <Section id="locations" tone="stone" spacing="lg">
        <Container width="wide">
          <div className="grid items-start gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Eyebrow>{locationsCopy.eyebrow}</Eyebrow>
              <Heading level={2} className="mt-4">
                {locationsCopy.title}
              </Heading>
              <address className="mt-8 font-serif text-title font-medium not-italic">
                {site.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <Text className="mt-4">{site.hours}</Text>
              <Text size="small" className="mt-3">
                <a href={site.phoneHref} className="underline decoration-current/30 underline-offset-[0.3em]">
                  {site.phoneDisplay}
                </a>
              </Text>
              <Text size="small" className="mt-2">
                <a href={`mailto:${site.email}`} className="underline decoration-current/30 underline-offset-[0.3em]">
                  {site.email}
                </a>
              </Text>
              <Text size="small" className="mt-2">
                {locationsCopy.further}
              </Text>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <ImageFrame ratio="landscape" caption={locationsCopy.mapCaption} />
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand
        id="begin"
        eyebrow="Begin"
        title="The application is the next page."
        actionLabel={site.applyLabel}
        actionHref={site.applyHref}
        secondaryLabel="Or ask the office"
        secondaryHref={site.contactHref}
        note="The form starts an enquiry. It does not approve the loan."
      />
    </>
  );
}

function PurposeBlock({
  label,
  title,
  text,
  rule = false,
}: {
  label: string;
  title: string;
  text: string;
  rule?: boolean;
}) {
  return (
    <div className={rule ? "border-t border-[var(--rule)] pt-10 md:border-t-0 md:border-l md:pt-0 md:pl-12" : "pb-10 md:pr-12 md:pb-0"}>
      <Eyebrow>{label}</Eyebrow>
      <Heading level={2} className="mt-4">
        {title}
      </Heading>
      <Text className="mt-6 max-w-[36ch]">{text}</Text>
    </div>
  );
}
