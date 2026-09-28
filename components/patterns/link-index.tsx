import { Link } from "@/components/ui/link";

export type IndexLink = {
  href: string;
  label: string;
  note: string;
};

export function LinkIndex({ items }: { items: IndexLink[] }) {
  return (
    <ul className="border-b border-[var(--rule)]">
      {items.map((item) => (
        <li key={item.href} className="border-t border-[var(--rule)]">
          <Link
            href={item.href}
            className="group grid gap-2 py-7 md:grid-cols-12 md:items-baseline md:gap-6"
          >
            <span className="font-serif text-title font-medium md:col-span-4">{item.label}</span>
            <span className="font-sans text-small text-[var(--muted)] md:col-span-7">{item.note}</span>
            <span className="font-sans text-small underline decoration-transparent underline-offset-[0.35em] group-hover:decoration-current md:col-span-1 md:text-right">
              Open
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
