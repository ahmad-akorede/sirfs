import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type BadgeTone = "ink" | "copper" | "olive" | "paper";

const tones: Record<BadgeTone, string> = {
  ink: "border-ink/20 text-ink",
  copper: "border-copper/40 text-copper",
  olive: "border-olive/30 text-olive",
  paper: "border-paper/30 text-paper",
};

export function Badge({
  children,
  tone = "ink",
  className,
}: {
  children: ReactNode;
  tone?: BadgeTone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center border px-2 py-1 font-sans text-eyebrow uppercase",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
