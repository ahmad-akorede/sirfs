import { Link } from "@/components/ui/link";
import { loans } from "@/content/loans";
import { legalNav, site } from "@/content/site";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/type";

const footerLoans = [
  ...loans.map((loan) => ({ label: loan.name, href: loan.href })),
  { label: "Savings", href: "/savings" },
  { label: "Business", href: "/business" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer data-tone="ink">
      <Container width="wide" className="pt-16 pb-24 md:pt-24 lg:pb-12">
        <Link
          href="/"
          className="block font-serif text-[clamp(3.25rem,16vw,9rem)] leading-[0.82] font-medium tracking-[-0.045em]"
        >
          {site.name}
        </Link>

        <div className="mt-14 grid gap-12 border-t border-[var(--rule)] pt-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow>Visit</Eyebrow>
            <address className="mt-5 font-sans text-body not-italic">
              {site.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
              <span className="mt-4 block text-small text-[var(--muted)]">{site.hours}</span>
            </address>
          </div>

          <div className="md:col-span-4">
            <Eyebrow>Contact</Eyebrow>
            <ul className="mt-3 font-sans text-body">
              <li>
                {site.phoneHref && site.phoneDisplay ? (
                  <a href={site.phoneHref} className="flex min-h-11 items-center hover:underline">
                    {site.phoneDisplay}
                  </a>
                ) : (
                  <span>Telephone to be confirmed</span>
                )}
              </li>
              <li>
                {site.email ? (
                  <a href={`mailto:${site.email}`} className="flex min-h-11 items-center hover:underline">
                    {site.email}
                  </a>
                ) : (
                  <span>Email to be confirmed</span>
                )}
              </li>
              <li>
                <Link href={site.contactHref} className="flex min-h-11 items-center hover:underline">
                  Send a message
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <Eyebrow>Credit</Eyebrow>
            <ul className="mt-3 font-sans text-body">
              {footerLoans.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="flex min-h-11 items-center hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-16 max-w-[46ch] font-sans text-small text-[var(--muted)]">
          Licence, regulator, and legal name: to be confirmed. They will be printed on the{" "}
          <Link href="/about/corporate-information" className="text-paper underline decoration-current/30 underline-offset-[0.3em]">
            corporate record
          </Link>
          .
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[var(--rule)] pt-6 font-sans text-small text-[var(--muted)]">
          <span>
            © {year} {site.name}
          </span>
          {legalNav.map((item) => (
            <Link key={item.label} href={item.href} className="inline-flex min-h-11 items-center hover:text-paper">
              {item.label}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}
