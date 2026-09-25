"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Perks", link: "/perks" },
  { name: "Projects", link: "/projects" },
  { name: "Leaderboard", link: "/leaderboard" },
];

export function NavbarDemo() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // The bar earns its background as you leave the hero rather than snapping
  // between two states. Driven by motion values, so scrolling costs no renders.
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 90],
    ["rgba(11, 11, 13, 0)", "rgba(11, 11, 13, 0.88)"]
  );
  const backdropFilter = useTransform(
    scrollY,
    [0, 90],
    ["blur(0px)", "blur(14px)"]
  );
  const borderColor = useTransform(
    scrollY,
    [0, 90],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.1)"]
  );

  const isActive = (link: string) =>
    link === "/" ? pathname === "/" : pathname.startsWith(link);

  return (
    <motion.header
      style={{ background, backdropFilter, borderColor }}
      className="fixed inset-x-0 top-0 z-50 border-b"
    >
      <div className="rail-x flex h-16 items-center justify-between gap-6 md:h-20">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-1"
          aria-label="Programmers' Den — home"
        >
          <Image
            src="/assets/pd-logo.png"
            alt=""
            width={30}
            height={30}
            className="h-7 w-auto"
          />
          <Image
            src="/assets/pd-banner.png"
            alt="Programmers' Den"
            width={150}
            height={30}
            className="h-4 w-auto md:h-5"
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              data-active={isActive(item.link)}
              aria-current={isActive(item.link) ? "page" : undefined}
              className={cn(
                "link-rule py-1 font-mono text-[0.6875rem] uppercase tracking-[0.16em] transition-colors",
                isActive(item.link)
                  ? "text-foreground"
                  : "text-foreground/60 hover:text-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/join"
            className="bg-pd-green px-5 py-2.5 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-pd-void transition-colors hover:bg-white"
          >
            Join now
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          className="text-foreground lg:hidden"
        >
          {isMobileMenuOpen ? <IconX /> : <IconMenu2 />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
            className="overflow-hidden border-t border-white/10 bg-pd-void lg:hidden"
          >
            <div className="rail-x flex flex-col py-2">
              {navItems.map((item) => (
                <Link
                  key={item.link}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-current={isActive(item.link) ? "page" : undefined}
                  className={cn(
                    "flex items-center gap-3 border-b border-white/5 py-4 font-mono text-xs uppercase tracking-[0.16em]",
                    isActive(item.link) ? "text-foreground" : "text-foreground/60"
                  )}
                >
                  <span
                    aria-hidden
                    className={cn(
                      "h-px w-4",
                      isActive(item.link) ? "bg-pd-green" : "bg-white/20"
                    )}
                  />
                  {item.name}
                </Link>
              ))}
              <Link
                href="/join"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 mb-3 bg-pd-green px-5 py-3.5 text-center font-mono text-xs uppercase tracking-[0.16em] text-pd-void"
              >
                Join now
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
