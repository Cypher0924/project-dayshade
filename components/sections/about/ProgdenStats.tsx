"use client";

import { Section, Reveal } from "@/components/shared/section";

const stats = [
  { value: "100+", label: "Active members", accent: "text-pd-green" },
  { value: "20+", label: "Projects", accent: "text-pd-purple" },
  { value: "12", label: "Years of excellence", accent: "text-foreground" },
];

export default function ProgdenStats() {
  return (
    <Section label="By the numbers">
      <Reveal>
        <div className="flex flex-col gap-4 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
          <h2 className="display-lg">Our impact</h2>
          <p className="data-label pb-1">Growing stronger every year</p>
        </div>

        {/* The numbers are the whole point of this section, so nothing else
            competes with them. */}
        <dl className="mt-10 grid gap-px bg-white/10 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-pd-black px-6 py-12 md:px-8">
              <dd
                className={`data-value text-6xl leading-none md:text-7xl lg:text-8xl ${stat.accent}`}
              >
                {stat.value}
              </dd>
              <dt className="data-label mt-6">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
