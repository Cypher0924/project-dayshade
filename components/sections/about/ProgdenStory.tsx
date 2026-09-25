"use client";

import Image from "next/image";
import { Section, Reveal } from "@/components/shared/section";

// Three marks, in the order the organization wore them.
const marks = [
  { src: "/assets/about-pics/about-pd-logo-1.png", alt: "Early Programmers' Den mark" },
  { src: "/assets/about-pics/about-pd-logo-2.png", alt: "Second Programmers' Den mark" },
  { src: "/assets/about-pics/about-pd-logo-3.png", alt: "Current Programmers' Den mark" },
];

export default function ProgdenStory() {
  return (
    <Section label="Our story">
      <Reveal>
        <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:gap-16">
          <div>
            <h2 className="data-label">The mark, over time</h2>
            <ul className="mt-5 grid grid-cols-3 gap-px bg-white/10">
              {marks.map((mark) => (
                <li
                  key={mark.src}
                  className="flex aspect-square items-center justify-center bg-pd-black p-5"
                >
                  <Image
                    src={mark.src}
                    alt={mark.alt}
                    width={200}
                    height={200}
                    className="h-full w-full object-contain"
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className="md:pt-8">
            <p className="prose-body text-lg">
              It all started in 2013 when the founding members of the
              Programmers&apos; Den saw potential of having a skill focused
              student organization. Since then, we have been the top performers
              and competitors for the College of Computer Studies and even the
              University in IT and development.
            </p>
            <p className="prose-body mt-6 text-lg">
              Since then, the organization has continued to grow into what it is
              today. Our team has proudly been improving with our never ending
              challenge to keep up with the latest technologies and programming
              languages.
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
