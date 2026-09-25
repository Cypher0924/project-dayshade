"use client";

import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
// lucide-react v1 dropped brand icons; Tabler provides the equivalents.
import {
  IconBrandFacebook as Facebook,
  IconBrandYoutube as Youtube,
} from "@tabler/icons-react";
import { Section, Reveal } from "@/components/shared/section";

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://facebook.com/ccsprogrammersden",
    description: "Follow us on Facebook",
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://www.youtube.com/@progdenofficial",
    description: "Subscribe to our channel",
  },
  {
    name: "Discord",
    icon: MessageCircle,
    url: "https://discord.gg/bTXvdggz4g",
    description: "Join the Official CCS Discord server",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:progdenofficial@gmail.com",
    description: "Send us an email",
  },
];

export default function SocialLinksSection() {
  return (
    <Section label="Find us">
      <Reveal>
        <h2 className="display-lg max-w-[16ch]">
          Connect with CCS Programmers&apos; Den
        </h2>
        <p className="prose-lead mt-6">
          Stay updated with Programmers&apos; Den through our social links!
          Where great minds compile!
        </p>

        <ul className="mt-12 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {socialLinks.map(({ name, icon: Icon, url, description }) => (
            <li key={name}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col justify-between gap-8 bg-pd-black p-6 transition-colors hover:bg-pd-dark-grey/40"
              >
                <div className="flex items-start justify-between">
                  <Icon
                    className="h-6 w-6 text-foreground/60 transition-colors group-hover:text-pd-green"
                    aria-hidden
                  />
                  <ArrowUpRight
                    className="h-4 w-4 text-white/20 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-pd-green"
                    aria-hidden
                  />
                </div>
                <div>
                  <h3 className="display-sm text-base md:text-lg">{name}</h3>
                  <p className="mt-1 font-mono text-xs leading-relaxed text-foreground/60">
                    {description}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
