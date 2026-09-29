import { Link } from "@/components/ui/link";
import { site } from "@/content/site";
import { Container } from "@/components/layout/container";

const columns = [
  {
    title: "Products",
    links: [
      { label: "Personal Finance", href: "/loans/personal" },
      { label: "Business Finance", href: "/business" },
      { label: "Savings", href: "/savings" },
      { label: "Payroll Finance", href: "/loans/payroll" },
      { label: "LPO Finance", href: "/loans/lpo" },
      { label: "Invoice Finance", href: "/loans/invoice" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Resources", href: "/resources" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQs", href: "/resources/faq" },
      { label: "Help", href: "/contact" },
      { label: "Application Process", href: "/apply" },
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer data-tone="ink" className="bg-ink text-paper">
      <Container width="wide" className="pt-16 pb-10 md:pt-20">
        <div className="grid gap-12 border-b border-[var(--rule)] pb-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="font-sans text-[1.75rem] leading-none font-bold tracking-[-0.03em]">
              Sirfa
            </Link>
            <p className="mt-4 max-w-[28ch] font-sans text-small text-[var(--muted)]">{site.name}</p>
            <address className="mt-6 font-sans text-small not-italic text-[var(--muted)]">
              {site.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
              <span className="mt-3 block text-paper">{site.hours}</span>
            </address>
            <ul className="mt-5">
              {site.phoneHref && site.phoneDisplay ? (
                <li>
                  <a href={site.phoneHref} className="inline-flex min-h-10 items-center font-sans text-small hover:underline">
                    {site.phoneDisplay}
                  </a>
                </li>
              ) : null}
              {site.email ? (
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex min-h-10 items-center font-sans text-small break-all hover:underline"
                  >
                    {site.email}
                  </a>
                </li>
              ) : null}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            {columns.map((column) => (
              <div key={column.title}>
                <p className="font-sans text-small font-semibold">{column.title}</p>
                <ul className="mt-4">
                  {column.links.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className="inline-flex min-h-10 items-center font-sans text-small text-[var(--muted)] hover:text-paper">
                        {item.label}
                      </Link>
                    </li>
                  ))}
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
            <li>
              <Link href="/privacy" className="inline-flex min-h-11 items-center font-sans text-small text-[var(--muted)] hover:text-paper">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="inline-flex min-h-11 items-center font-sans text-small text-[var(--muted)] hover:text-paper">
                Terms
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="inline-flex min-h-11 items-center font-sans text-small text-[var(--muted)] hover:text-paper">
                Cookies
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
