import { cn } from "@/lib/cn";

export type TrustItem = {
  label: string;
  value: string;
  detail?: string;
};

export function TrustIndicators({ items }: { items: TrustItem[] }) {
  return (
    <dl className="grid grid-cols-2 border-t border-[var(--rule)] lg:grid-cols-4">
      {items.map((item, index) => (
        <div
          key={item.label}
          className={cn(
            "border-b border-[var(--rule)] py-5 lg:border-b-0 lg:px-8 lg:py-6 lg:first:pl-0",
            index % 2 === 1 && "border-l pl-5 lg:pl-8",
            index > 0 && "lg:border-l",
          )}
        >
          <dt className="font-sans text-eyebrow uppercase text-[var(--eyebrow)]">{item.label}</dt>
          <dd className="mt-3 font-serif text-title font-medium">{item.value}</dd>
          {item.detail ? (
            <dd className="mt-2 font-sans text-small text-[var(--muted)]">{item.detail}</dd>
          ) : null}
        </div>
      ))}
    </dl>
  );
}
