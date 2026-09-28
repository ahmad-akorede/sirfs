export function FaqList({
  items,
}: {
  items: ReadonlyArray<{ question: string; answer: string }>;
}) {
  return (
    <div className="border-b border-[var(--rule)]">
      {items.map((item) => (
        <details key={item.question} className="disclose group border-t border-[var(--rule)]">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 font-serif text-title font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper [&::-webkit-details-marker]:hidden">
            <span>{item.question}</span>
            <span className="shrink-0 font-sans text-small text-[var(--muted)] group-open:hidden">Show</span>
            <span className="hidden shrink-0 font-sans text-small text-[var(--muted)] group-open:inline">Hide</span>
          </summary>
          <p className="max-w-[62ch] pb-6 font-sans text-body text-[var(--muted)]">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
