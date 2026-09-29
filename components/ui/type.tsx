import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type TypeProps = {
  children: ReactNode;
  className?: string;
};

export function Display({ children, className }: TypeProps) {
  return (
    <h1 className={cn("font-sans text-display font-bold text-balance", className)}>
      {children}
    </h1>
  );
}

const headingClass = {
  1: "text-headline",
  2: "text-headline",
  3: "text-title",
  4: "text-subhead",
} as const;

export function Heading({
  level = 2,
  children,
  className,
}: TypeProps & { level?: 1 | 2 | 3 | 4 }) {
  const Tag = `h${level}` as const;
  return (
    <Tag className={cn("font-sans font-semibold text-balance", headingClass[level], className)}>
      {children}
    </Tag>
  );
}

export function Lede({ children, className }: TypeProps) {
  return (
    <p className={cn("font-sans text-lede text-balance text-ink-soft", className)}>{children}</p>
  );
}

export function Eyebrow({ children, className }: TypeProps) {
  return (
    <p className={cn("font-sans text-eyebrow uppercase text-[var(--eyebrow)]", className)}>
      {children}
    </p>
  );
}

export function Text({
  children,
  className,
  size = "body",
}: TypeProps & { size?: "body" | "small" }) {
  return (
    <p
      className={cn(
        "font-sans",
        size === "body" ? "text-body" : "text-small text-[var(--muted)]",
        className,
      )}
    >
      {children}
    </p>
  );
}
