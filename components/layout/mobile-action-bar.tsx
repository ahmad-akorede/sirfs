import { Link } from "@/components/ui/link";
import { site } from "@/content/site";

export function MobileActionBar() {
  const contactHref = site.phoneHref ?? site.contactHref;
  const contactLabel = site.phoneHref ? "Call" : "Contact";

  return (
    <nav
      aria-label="Actions"
      className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 border-t border-line bg-paper lg:hidden"
    >
      <Link
        href={contactHref}
        className="flex h-14 items-center justify-center border-r border-line font-sans text-small font-medium text-ink"
      >
        {contactLabel}
      </Link>
      <Link
        href={site.applyHref}
        className="flex h-14 items-center justify-center bg-olive font-sans text-small font-medium text-paper"
      >
        {site.applyLabel}
      </Link>
    </nav>
  );
}
