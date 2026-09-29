import { Link } from "@/components/ui/link";
import { resourceTopics, type SampleNote } from "@/content/resources";
import { cn } from "@/lib/cn";

export function NoteCard({
  note,
  featured = false,
}: {
  note: SampleNote;
  featured?: boolean;
}) {
  const topic = resourceTopics.find((item) => item.id === note.topic);

  return (
    <article className={cn("flex h-full flex-col border-t border-[var(--rule)] py-8", featured && "md:pr-10")}>
      <p className="font-sans text-eyebrow uppercase text-olive">Sample</p>
      <p className="mt-3 font-sans text-eyebrow uppercase text-[var(--eyebrow)]">{topic?.label}</p>
      <h3 className={cn("mt-4 font-serif font-medium", featured ? "text-headline" : "text-title")}>
        <Link href={note.href} className="hover:underline">
          {note.title}
        </Link>
      </h3>
      <p className="mt-4 max-w-[42ch] font-sans text-small text-[var(--muted)]">{note.summary}</p>
      <p className="mt-6 font-sans text-small text-[var(--muted)]">Not a published note.</p>
    </article>
  );
}

export function NoteShelf({ notes }: { notes: SampleNote[] }) {
  const [lead, ...rest] = notes;
  if (!lead) return null;

  return (
    <div className="border-b border-[var(--rule)]">
      <div className="grid md:grid-cols-12">
        <div className="md:col-span-7">
          <NoteCard note={lead} featured />
        </div>
        <div className="md:col-span-5 md:border-l md:border-[var(--rule)] md:pl-10">
          {rest.slice(0, 2).map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      </div>
      {rest.length > 2 ? (
        <div className="grid border-t border-[var(--rule)] md:grid-cols-2">
          {rest.slice(2).map((note, index) => (
            <div key={note.id} className={index === 0 ? "md:pr-10" : "md:border-l md:border-[var(--rule)] md:pl-10"}>
              <NoteCard note={note} />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
