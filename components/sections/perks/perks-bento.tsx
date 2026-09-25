"use client";

import Image from "next/image";
import { Section, Reveal } from "@/components/shared/section";

/**
 * Four benefits at two weights. The two that need explaining get a full row
 * and a paragraph; the two that are self-evident from a photograph get a half
 * row and a title. The asymmetry is the argument, so the grid keeps it.
 */
export default function PerksBento() {
  return (
    <Section label="What membership gets you">
      <Reveal>
        <div className="grid gap-px bg-white/10 lg:grid-cols-2">
          {/* Competitions — full width, needs the copy */}
          <article className="bg-pd-black p-8 md:p-12 lg:col-span-2">
            <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
              <div>
                <h3 className="display-md text-pd-green">
                  Join competitions and events
                </h3>
                <p className="prose-body mt-6 text-lg">
                  Get offered more opportunities to participate in competitions
                  and experience your college-life attending both National and
                  International events.
                </p>
                <p className="prose-body mt-4 text-lg">
                  As a member of the elite programmers, the College puts its
                  faith in your skills.
                </p>
              </div>
              <Image
                src="/assets/perks-pics/perks-2.png"
                alt="Members competing at an event"
                width={800}
                height={800}
                className="w-full"
              />
            </div>
          </article>

          {/* Merchandise — half width, the photograph carries it */}
          <article className="flex flex-col gap-8 bg-pd-black p-8 md:p-12">
            <h3 className="display-md text-pd-purple">Exclusive merchandise</h3>
            <Image
              src="/assets/perks-pics/perks-4.png"
              alt="Programmers' Den merchandise"
              width={1000}
              height={800}
              className="mt-auto w-full"
            />
          </article>

          {/* Portfolio — half width */}
          <article className="flex flex-col gap-8 bg-pd-black p-8 md:p-12">
            <h3 className="display-md text-pd-green">Build your portfolio</h3>
            <Image
              src="/assets/perks-pics/perks-3.png"
              alt="A member's project work"
              width={1000}
              height={800}
              className="mt-auto w-full"
            />
          </article>

          {/* Team sessions — full width, image leads */}
          <article className="bg-pd-black p-8 md:p-12 lg:col-span-2">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
              <Image
                src="/assets/perks-pics/perks-5.png"
                alt="A monthly team session"
                width={1000}
                height={800}
                className="w-full"
              />
              <div>
                <h3 className="display-md text-pd-purple">
                  Monthly team sessions
                </h3>
                <p className="prose-body mt-6 text-lg">
                  Learn more in the realm of Web and App development, Game
                  Development, and Multimedia with our Monthly Team Sessions!
                </p>
              </div>
            </div>
          </article>
        </div>
      </Reveal>
    </Section>
  );
}
