import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardVariant = "rule" | "outline" | "inverse";

const variants: Record<CardVariant, string> = {
  rule: "border-t border-[var(--rule)] pt-8",
  outline: "border border-[var(--rule)] p-8",
  inverse: "bg-ink p-8 text-paper",
};

export function Card({
  children,
  variant = "rule",
  className,
}: {
  children: ReactNode;
  variant?: CardVariant;
  className?: string;
}) {
  return (
    <div
      data-tone={variant === "inverse" ? "ink" : undefined}
      className={cn(variants[variant], className)}
    >
      {children}
    </div>
  );
}

export function Rule({ className }: { className?: string }) {
  return <hr className={cn("border-0 border-t border-[var(--rule)]", className)} />;
}
