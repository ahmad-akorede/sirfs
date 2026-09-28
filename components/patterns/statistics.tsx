import dynamic from "next/dynamic";
import { cn } from "@/lib/cn";

const CountUp = dynamic(() => import("@/components/ui/count-up").then((mod) => mod.CountUp));

export type Stat = {
  value: string;
  label: string;
};

function StatValue({ value }: { value: string }) {
  if (!/^\d{1,6}$/.test(value)) return value;
  return <CountUp value={value} />;
}

export function Statistics({ items }: { items: Stat[] }) {
  return (
    <dl className="grid sm:grid-cols-3">
      {items.map((item, index) => (
        <div
          key={item.label}
          className={cn(
            "flex flex-col border-[var(--rule)] py-5 md:py-2",
            index === 0 ? "sm:pr-6 md:pr-8" : "border-t sm:border-t-0 sm:border-l sm:px-6 md:px-8",
          )}
        >
          <dt className="order-2 mt-3 max-w-[22ch] font-sans text-small text-[var(--muted)]">
            {item.label}
          </dt>
          <dd className="order-1 font-serif text-[clamp(2rem,8vw,4.5rem)] leading-none font-medium tracking-[-0.03em] tabular-nums sm:text-[clamp(2.25rem,4vw,4.5rem)]">
            <StatValue value={item.value} />
          </dd>
        </div>
      ))}
    </dl>
  );
}
