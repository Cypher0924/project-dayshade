import { JoinForm } from "@/components/sections/join/JoinForm";
import { SectionLabel } from "@/components/shared/section";
import { memberData } from "@/data/join-stats";
import { Presentation, Shirt, SquareUser, Trophy } from "lucide-react";

const youllGet = [
  {
    icon: Trophy,
    title: "More chances to join competitions",
    description: "Access to hackathons, coding challenges and more!",
  },
  {
    icon: Presentation,
    title: "Exclusive Sessions",
    description: "Access to ProgDen webinars and workshops",
  },
  {
    icon: Shirt,
    title: "Exclusive Merchandise",
    description: "Access to eye-catching merchandise",
  },
  {
    icon: SquareUser,
    title: "Real Projects",
    description: "Access to collaborate with seniors to build your portfolio!",
  },
];

const promises = [
  {
    title: "Nurture Your Talents",
    body: "Welcome to our team, where programmers and multimedia enthusiasts thrive! We're a supportive organization dedicated to nurturing talents and empowering growth.",
    accent: "text-pd-purple",
  },
  {
    title: "Shape the Future",
    body: "Join us today and be part of shaping a brighter future together. Conquer challenges, celebrate achievements, and reach new heights in your career.",
    accent: "text-pd-green",
  },
  {
    title: "Embrace Success",
    body: "Your dreams and aspirations matter to us. Let's embrace this journey of success together, as we foster and celebrate your skills in programming and multimedia.",
    accent: "text-pd-purple",
  },
];

const stats = [
  { value: memberData[0].ActiveMember, label: "Active members", accent: "text-pd-green" },
  { value: memberData[0].Projects, label: "Projects", accent: "text-pd-purple" },
  {
    value: memberData[0].YearsOfExcellence,
    label: "Years of excellence",
    accent: "text-foreground",
  },
];

export default function JoinPage() {
  return (
    <div className="relative">
      <section className="rail-x pt-16 pb-16 md:pt-24 md:pb-20">
        <SectionLabel>Recruitment</SectionLabel>
        <h1 className="display-xl mt-8">Unlock your potential</h1>
        <p className="prose-lead mt-8">Join our amazing team!</p>

        <ul className="mt-14 grid gap-px bg-white/10 md:mt-20 md:grid-cols-3">
          {promises.map((promise) => (
            <li key={promise.title} className="bg-pd-black p-8">
              <h2 className={`display-sm ${promise.accent}`}>
                {promise.title}
              </h2>
              <p className="prose-body mt-4 text-[0.9375rem]">{promise.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="rail-x pb-24 md:pb-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          {/* What you get, and what the organization already is */}
          <div>
            <h2 className="display-md">What you&apos;ll get</h2>
            <p className="prose-body mt-4">
              Unlock exclusive perks and become part of a thriving community.
            </p>

            <ul className="mt-10 border-t border-white/10">
              {youllGet.map(({ icon: Icon, title, description }) => (
                <li
                  key={title}
                  className="flex gap-5 border-b border-white/10 py-6"
                >
                  <Icon
                    className="mt-1 h-5 w-5 shrink-0 text-pd-green"
                    aria-hidden
                  />
                  <div>
                    <h3 className="display-sm text-base md:text-lg">{title}</h3>
                    <p className="prose-body mt-2 text-sm">{description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <h2 className="data-label mt-14">Community stats</h2>
            <dl className="mt-5 grid grid-cols-3 gap-px bg-white/10">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-pd-black px-4 py-6">
                  <dd
                    className={`data-value text-3xl leading-none md:text-4xl ${stat.accent}`}
                  >
                    {stat.value}
                  </dd>
                  <dt className="data-label mt-3 leading-relaxed">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>

          {/* The form */}
          <div className="panel p-6 md:p-10">
            <h2 className="display-md">Join the Den</h2>
            <p className="prose-body mt-3 text-sm">
              Fill out the form to become a member
            </p>

            <div className="mt-10">
              <JoinForm />
            </div>

            <p className="mt-10 border-t border-white/10 pt-6 text-xs leading-relaxed text-foreground/50">
              By submitting through the form, you agree to the following. In
              compliance with Data Privacy Act 0f 2012, it&apos;s implementing
              rules and regulations, and other issuance of the National Privacy
              Commission, you authorize the organization(Programmers&apos; Den)
              to collect your data for accomplishing the said activity
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
