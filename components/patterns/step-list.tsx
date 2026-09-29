import { cn } from "@/lib/cn";

export function StepList({
  steps,
}: {
  steps: Array<{ title: string; text: string }>;
}) {
  return (
    <ol className="grid border-t border-line md:grid-cols-2 xl:grid-cols-4">
      {steps.map((step, index) => (
        <li
          key={step.title}
          className={cn(
            "border-b border-line py-6 md:border-r md:px-6 md:py-8",
            index % 2 === 0 && "md:pl-0",
          )}
        >
          <span className="font-sans text-small font-semibold text-olive tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
          <p className="mt-3 font-sans text-subhead font-semibold">{step.title}</p>
          <p className="mt-3 font-sans text-small text-ink-soft">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
