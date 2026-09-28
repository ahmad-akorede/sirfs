import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Tone = "paper" | "stone" | "ink" | "olive";
type Spacing = "sm" | "md" | "lg";

const spacingClass: Record<Spacing, string> = {
  sm: "py-10 md:py-20",
  md: "py-12 md:py-[6.5rem]",
  lg: "py-14 md:py-[8.5rem]",
};

export function Section({
  children,
  tone = "paper",
  spacing = "md",
  id,
  className,
}: {
  children: ReactNode;
  tone?: Tone;
  spacing?: Spacing;
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} data-tone={tone} className={cn(spacingClass[spacing], className)}>
      {children}
    </section>
  );
}
