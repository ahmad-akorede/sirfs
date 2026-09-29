import { Link } from "@/components/ui/link";
import { site } from "@/content/site";
import { Container } from "@/components/layout/container";

const columns = [
  {
    title: "Products",
    links: [
      { label: "Personal", href: "/loans/personal-loan" },
      { label: "Business", href: "/business" },
      { label: "Loans", href: "/loans" },
      { label: "Savings", href: "/savings" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Leadership", href: "/about/team" },
      { label: "Corporate information", href: "/about/corporate-information" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Financial education", href: "/resources" },
      { label: "FAQs", href: "/resources/faq" },
      { label: "Notes", href: "/resources/blog" },
    ],
  },
  {
    title: "Support",
    links: [{ label: "Contact", href: "/contact" }],
  },
] as const;

const legal = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
  { label: "Regulatory information", href: "/about/corporate-information" },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer data-tone="ink" className="bg-ink text-paper">
      <Container width="wide" className="pt-16 pb-10 md:pt-20">
        <div className="grid gap-12 border-b border-[var(--rule)] pb-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="font-sans text-title font-semibold tracking-[-0.02em]">
              {site.name}
            </Link>
            <p className="mt-4 max-w-[32ch] font-sans text-small text-[var(--muted)]">{site.description}</p>
            <address className="mt-6 font-sans text-small not-italic text-[var(--muted)]">
              {site.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
              <span className="mt-3 block">{site.hours}</span>
            </address>
            <p className="mt-6 max-w-[36ch] font-sans text-small text-[var(--muted)]">
              Licence and regulator: to be confirmed.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {columns.map((column) => (
              <div key={column.title}>
                <p className="font-sans text-caption font-semibold tracking-[0.08em] text-[var(--muted)] uppercase">
                  {column.title}
                </p>
                <ul className="mt-4">
                  {column.links.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className="inline-flex min-h-10 items-center font-sans text-small hover:underline">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                  {column.title === "Company" ? (
                    <li className="inline-flex min-h-10 items-center font-sans text-small text-[var(--muted)]">
                      Careers: to be published
                    </li>
                  ) : null}
                  {column.title === "Support" ? (
                    <>
                      <li className="inline-flex min-h-10 items-center font-sans text-small text-[var(--muted)]">
                        Branches: to be published
                      </li>
                      <li className="inline-flex min-h-10 items-center font-sans text-small text-[var(--muted)]">
                        WhatsApp: to be confirmed
                      </li>
                      <li>
                        <a href={site.phoneHref} className="inline-flex min-h-10 items-center font-sans text-small hover:underline">
                          {site.phoneDisplay}
                        </a>
                      </li>
                      <li>
                        <a href={`mailto:${site.email}`} className="inline-flex min-h-10 items-center font-sans text-small break-all hover:underline">
                          {site.email}
                        </a>
                      </li>
                    </>
                  ) : null}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-small text-[var(--muted)]">
            © {year} {site.name}
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legal.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="inline-flex min-h-11 items-center font-sans text-small text-[var(--muted)] hover:text-paper">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
