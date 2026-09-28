import { FaqList } from "@/components/patterns/faq-list";
import { Heading, Text } from "@/components/ui/type";

export type FaqGroup = {
  id: string;
  title: string;
  items: ReadonlyArray<{ question: string; answer: string }>;
};

export function FaqGroups({ groups }: { groups: readonly FaqGroup[] }) {
  return (
    <div>
      <nav aria-label="Question categories">
        <ul className="grid grid-cols-2 gap-px border border-[var(--rule)] bg-[var(--rule)] sm:flex sm:flex-wrap sm:gap-1 sm:border-0 sm:bg-transparent">
          {groups.map((group) => (
            <li key={group.id}>
              <a
                href={`#${group.id}`}
                className="flex min-h-12 items-center bg-paper px-3 font-sans text-small sm:bg-transparent sm:px-3 sm:underline sm:decoration-current/30 sm:underline-offset-[0.35em]"
              >
                {group.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-16 grid gap-16">
        {groups.map((group) => (
          <section key={group.id} id={group.id} aria-labelledby={`${group.id}-title`} className="scroll-mt-28">
            <Heading level={2} className="max-w-[16ch]" >
              <span id={`${group.id}-title`}>{group.title}</span>
            </Heading>
            {group.items.length === 0 ? (
              <Text size="small" className="mt-4">
                No question is published in this group yet.
              </Text>
            ) : (
              <div className="mt-8">
                <FaqList items={group.items} />
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
