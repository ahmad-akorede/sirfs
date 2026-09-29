import { site } from "@/content/site";
import { complaintLines } from "@/content/trust";
import { Breadcrumb } from "@/components/seo/breadcrumb";
import { crumbs } from "@/lib/seo/json-ld";
import { pageMetadata } from "@/lib/seo/metadata";
import { EnquiryForm } from "@/components/forms/enquiry-form";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { RecordList } from "@/components/patterns/record-list";
import { Display, Eyebrow, Heading, Lede, Text } from "@/components/ui/type";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "The Sirfa Empowerment Initiative office in Geri-Alimi, the telephone, the email, and a message.",
  path: "/contact",
});

const channels = [
  site.phoneDisplay
    ? {
        label: "Telephone",
        value: site.phoneDisplay,
        href: site.phoneHref,
        reach: true,
      }
    : null,
  site.whatsappDisplay
    ? {
        label: "WhatsApp",
        value: site.whatsappDisplay,
        href: site.whatsappHref,
        reach: true,
      }
    : null,
  site.email
    ? {
        label: "Email",
        value: site.email,
        href: `mailto:${site.email}`,
        reach: false,
      }
    : null,
].filter((channel) => channel !== null);

const reach = channels.filter((channel) => channel.reach);

export default function ContactPage() {
  return (
    <Section tone="paper" spacing="md">
      <Container width="wide">
        <Breadcrumb items={crumbs({ name: "Contact", path: "/contact" })} />
        <div className="grid items-start gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>Office</Eyebrow>
            <Display className="mt-5">Write, or come in.</Display>
            <div className="mt-8 border-b border-[var(--rule)] lg:hidden">
              {reach.map((channel) => (
                <Channel key={channel.label} {...channel} tall />
              ))}
            </div>
            <Lede className="mt-8 lg:mt-6">The office is in Geri-Alimi. Call or write during the hours below.</Lede>
            <address className="mt-10 font-serif text-title font-medium not-italic">
              {site.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <Text className="mt-4">{site.hours}</Text>
            <div className="mt-10 border-b border-[var(--rule)]">
              <div className="hidden lg:contents">
                {reach.map((channel) => (
                  <Channel key={channel.label} {...channel} />
                ))}
              </div>
              {channels
                .filter((channel) => !channel.reach)
                .map((channel) => (
                  <Channel key={channel.label} {...channel} />
                ))}
            </div>
            <div className="mt-10">
              <Eyebrow>Support</Eyebrow>
              <Heading level={2} className="mt-4">
                The office answers.
              </Heading>
              <Text className="mt-4">
                A question about a loan, savings, or a visit comes here, during these hours. Leave
                a message if you cannot come in. The message stays in this browser until it can be
                sent.
              </Text>
            </div>
          </div>
          <div className="bg-stone px-6 py-10 sm:px-8 lg:col-span-6 lg:col-start-7 lg:px-10 lg:py-12">
            <Eyebrow>Message</Eyebrow>
            <Heading level={2} className="mt-4">
              Write to the office.
            </Heading>
            <div className="mt-10">
              <EnquiryForm intent="contact" />
            </div>
          </div>
        </div>
        <div id="complaints" className="mt-16 border-t border-[var(--rule)] pt-12 lg:mt-20">
          <Eyebrow>Complaints</Eyebrow>
          <Heading level={2} className="mt-4">
            A complaint.
          </Heading>
          <Text className="mt-4 max-w-[48ch]">
            A complaint is separate from a new application. Until an officer is named, it starts
            with the same office.
          </Text>
          <div className="mt-8">
            <RecordList items={complaintLines} />
          </div>
        </div>
        <div className="mt-16 lg:mt-20">
          <OfficeMap query={site.mapQuery} />
        </div>
      </Container>
    </Section>
  );
}

function Channel({
  label,
  value,
  href,
  tall = false,
}: {
  label: string;
  value: string;
  href: string | null;
  reach?: boolean;
  tall?: boolean;
}) {
  const className = tall
    ? "flex min-h-20 items-center justify-between gap-4 border-t border-[var(--rule)] py-5"
    : "flex min-h-14 items-center justify-between gap-4 border-t border-[var(--rule)] py-4";
  const body = (
    <>
      <span className="font-sans text-eyebrow uppercase text-[var(--eyebrow)]">{label}</span>
      <span className="min-w-0 text-right font-sans text-small font-semibold break-all sm:text-subhead">{value}</span>
    </>
  );

  if (!href) return <div className={className}>{body}</div>;

  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={className}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {body}
    </a>
  );
}

function OfficeMap({ query }: { query: string | null }) {
  if (!query) {
    return (
      <div className="relative aspect-[16/10] bg-stone">
        <div aria-hidden="true" className="absolute inset-y-0 left-0 w-1 bg-olive" />
        <div className="flex h-full flex-col justify-between p-6 md:p-10">
          <p className="font-sans text-eyebrow uppercase text-ink-soft">Map</p>
          <p className="max-w-[18ch] font-sans text-title font-semibold text-ink">
            The address is listed beside this space.
          </p>
        </div>
      </div>
    );
  }

  const src = `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=15&output=embed`;

  return (
    <iframe
      title="Office on the map"
      src={src}
      className="aspect-[16/10] w-full border-0"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
