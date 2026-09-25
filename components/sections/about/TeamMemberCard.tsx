import { Mail } from "lucide-react";
// lucide-react v1 dropped brand icons; Tabler provides the equivalents.
import { IconBrandGithub as Github } from "@tabler/icons-react";
import Image from "next/image";
import type { TeamMember } from "@/data/teamMembers";

interface TeamMemberCardProps {
  member: TeamMember;
}

/**
 * An officer record. The portrait fills the cell edge to edge rather than
 * sitting in a circle inside a card, so a wall of officers reads as one roster
 * instead of a row of badges.
 */
export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <article className="group flex h-full flex-col bg-pd-black">
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4 md:p-5">
        <div>
          <h3 className="display-sm text-sm leading-tight md:text-base">
            {member.name}
          </h3>
          <p className="data-label mt-2 normal-case tracking-[0.08em]">
            {member.title}
          </p>
        </div>

        {member.socials.github || member.socials.email ? (
          <div className="mt-auto flex items-center gap-3 pt-2">
            {member.socials.github && (
              <a
                href={member.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} on GitHub`}
                className="text-foreground/40 transition-colors hover:text-pd-green"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
            {member.socials.email && (
              <a
                href={`mailto:${member.socials.email}`}
                aria-label={`Email ${member.name}`}
                className="text-foreground/40 transition-colors hover:text-pd-green"
              >
                <Mail className="h-4 w-4" />
              </a>
            )}
          </div>
        ) : null}
      </div>
    </article>
  );
}
