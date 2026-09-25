import { cn } from "@/lib/utils";

/**
 * Stack tags. Violet is the site's voice for anything to do with people and
 * membership; a project's stack is what its people chose, so tags carry it.
 * Squared and monospaced, because a tag is data, not a pill.
 */
export function TagList({
  tags,
  className,
}: {
  tags: string[];
  className?: string;
}) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {tags.map((tag) => (
        <li
          key={tag}
          className="border border-pd-purple/40 px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-[0.12em] text-pd-purple"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
