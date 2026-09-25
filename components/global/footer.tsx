import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
// lucide-react v1 dropped brand icons; Tabler provides the equivalents.
import {
  IconBrandFacebook as Facebook,
  IconBrandYoutube as Youtube,
} from "@tabler/icons-react";

const browse = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Leaderboards", href: "/leaderboard" },
];

const apply = [
  { label: "Perks", href: "/perks" },
  { label: "Register", href: "/join" },
];

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/ccsprogrammersden",
    Icon: Facebook,
    external: true,
  },
  {
    label: "Email",
    href: "mailto:progdenofficial@gmail.com",
    Icon: Mail,
    external: false,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@ccsprogrammersden3712",
    Icon: Youtube,
    external: true,
  },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h2 className="data-label">{title}</h2>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="link-rule inline-block text-base text-foreground/70 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-pd-void">
      <div className="rail-x py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr] md:gap-16">
          <div>
            <div className="flex items-center gap-1">
              <Image
                src="/assets/pd-logo-sm.png"
                alt=""
                width={40}
                height={40}
                className="h-8 w-auto"
              />
              <Image
                src="/assets/pd-banner.png"
                alt="Programmers' Den"
                width={200}
                height={30}
                className="h-5 w-auto"
              />
            </div>
            <p className="prose-body mt-6 text-base">
              The computer technology-focused college organization preparing
              students for industry practices in Design and Development
            </p>
            <div className="mt-8 flex gap-3">
              {socials.map(({ label, href, Icon, external }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="flex h-10 w-10 items-center justify-center border border-white/10 text-foreground/60 transition-colors hover:border-pd-purple hover:text-pd-purple"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          <FooterColumn title="Browse" links={browse} />
          <FooterColumn title="Apply" links={apply} />
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-white/10 pt-6 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-foreground/60 md:flex-row md:items-center md:justify-between">
          <span>Tarlac State University — College of Computer Studies</span>
          <span>Programmers&apos; Den &copy; 2025</span>
        </div>
      </div>
    </footer>
  );
}
