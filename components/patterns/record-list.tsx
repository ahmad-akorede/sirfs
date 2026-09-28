import type { TrustLine } from "@/content/trust";

const pending = /^(To be confirmed|To be published|To be written|Not yet)$/i;

export function RecordList({ items }: { items: readonly TrustLine[] }) {
  return (
    <dl className="border-b border-[var(--rule)]">
      {items.map((item) => {
        const unpublished = pending.test(item.value);
        return (
          <div
            key={item.label}
            className="grid gap-2 border-t border-[var(--rule)] py-5 md:grid-cols-12 md:gap-6"
          >
            <dt className="font-serif text-title font-medium md:col-span-4">{item.label}</dt>
            <div className="md:col-span-8">
              <dd className={unpublished ? "font-sans text-small text-[var(--muted)]" : "font-sans text-body"}>
                {unpublished ? <span className="sr-only">Unpublished. </span> : null}
                {item.value}
              </dd>
              <dd className="mt-2 max-w-[52ch] font-sans text-small text-[var(--muted)]">{item.note}</dd>
            </div>
          </div>
        );
      })}
    </dl>
  );
}
