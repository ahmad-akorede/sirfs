import { cn } from "@/lib/cn";

export function SectionHeader({
  eyebrow,
  title,
  text,
  className,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  className?: string;
  light?: boolean;
}) {
  return (
    <div className={cn("max-w-[40rem]", className)}>
      {eyebrow ? (
        <p className={cn("font-sans text-[0.9375rem] font-semibold", light ? "text-paper-muted" : "text-olive")}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-sans text-headline font-bold text-balance">{title}</h2>
      {text ? (
        <p className={cn("mt-5 font-sans text-body", light ? "text-paper-muted" : "text-ink-soft")}>{text}</p>
      ) : null}
    </div>
  );
}
