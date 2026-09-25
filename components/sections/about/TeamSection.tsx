"use client";

import { teamMembers } from "@/data/teamMembers";
import { Section, Reveal } from "@/components/shared/section";
import TeamMemberCard from "./TeamMemberCard";

export default function TeamSection() {
  const year = new Date().getFullYear();

  return (
    <Section label="Officers">
      <Reveal>
        <div className="flex flex-col gap-4 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
          <h2 className="display-lg">Meet the team</h2>
          <p className="data-value pb-1 text-sm text-foreground/60">
            PD Officers {year}–{year + 1}
          </p>
        </div>

        {/* One roster, one grid. The old layout centred the top two officers on
            their own row; rank is already carried by reading order and by each
            card's title. */}
        <div className="mt-10 grid grid-cols-2 gap-px bg-white/10 sm:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
