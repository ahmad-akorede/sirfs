import { cn } from "@/lib/cn";

export function StepList({
  steps,
}: {
  steps: Array<{ title: string; text: string }>;
}) {
  return (
    <ol className="grid md:grid-cols-4">
      {steps.map((step, index) => (
        <li
          key={step.title}
          className={cn(
            "border-t border-[var(--rule)] py-6 md:py-8",
            index === 0 ? "md:pr-6" : "md:border-l md:px-6",
          )}
        >
          <span className="font-serif text-headline font-medium text-copper tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
          <p className="mt-3 font-serif text-title font-medium md:mt-6">{step.title}</p>
          <p className="mt-3 font-sans text-small text-[var(--muted)]">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
