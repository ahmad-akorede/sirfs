import { Link } from "@/components/ui/link";
import { breadcrumbJsonLd, type Crumb } from "@/lib/seo/json-ld";
import { JsonLd } from "@/components/seo/json-ld";

export function Breadcrumb({ items }: { items: readonly Crumb[] }) {
  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-sans text-small text-[var(--muted)]">
          {items.map((item, index) => {
            const current = index === items.length - 1;
            return (
              <li key={`${item.path}-${item.name}`} className="flex items-center gap-2">
                {index > 0 ? (
                  <span aria-hidden="true" className="text-[var(--muted)]">
                    /
                  </span>
                ) : null}
                {current ? (
                  <span aria-current="page" className="text-inherit">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.path}
                    className="underline decoration-current/30 underline-offset-[0.3em] hover:decoration-current"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbJsonLd(items)} />
    </>
  );
}
