import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Tone = "paper" | "stone" | "ink" | "olive";
type Spacing = "sm" | "md" | "lg";

const spacingClass: Record<Spacing, string> = {
  sm: "py-14 md:py-[4.5rem] lg:py-24",
  md: "py-14 md:py-[4.5rem] lg:py-28",
  lg: "py-14 md:py-[4.5rem] lg:py-32",
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
