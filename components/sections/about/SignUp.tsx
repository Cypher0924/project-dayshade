"use client";

import { Section, Reveal } from "@/components/shared/section";
import { JoinCta } from "@/components/shared/join-cta";

const credits = [
  "King Paolo Franco",
  "John Andrei Tacujan",
  "Paula Joyce Ucol",
  "Mark Louis Cadiente",
  "Marc Jersey Castro",
  "Eithan Mathew Malonzo",
  "Gilbert Cura",
  "Kharl Asuncion",
  "Brigitte Tamondong",
  "Jenny Jane Flores",
  "Kyran Emmanuel Solomon",
];

export default function SignUp() {
  return (
    <>
      <JoinCta
        heading="Be a part of our story"
        secondary={{ label: "Membership perks", href: "/perks" }}
      />

      {/* The people who built the site are a credit list, so they are set as
          one: monospaced, ruled, in order. */}
      <Section label="Colophon" tight>
        <Reveal>
          <h2 className="display-md">ProgDen website created by</h2>
          <ul className="mt-8 grid gap-px border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {credits.map((name) => (
              <li
                key={name}
                className="border-b border-white/10 py-3 font-mono text-sm text-foreground/70"
              >
                {name}
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>
    </>
  );
}
