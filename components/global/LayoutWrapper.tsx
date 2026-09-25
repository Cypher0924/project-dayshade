"use client";

import { usePathname } from "next/navigation";
import { MotionConfig } from "motion/react";
import Footer from "@/components/global/footer";
import { NavbarDemo } from "@/components/global/header";
import { Spine } from "@/components/shared/spine";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isChromeless =
    pathname.startsWith("/admin") || pathname.startsWith("/login");

  // The CSS `prefers-reduced-motion` block only reaches CSS animations, not
  // the JS-driven transforms this site uses. MotionConfig makes every motion
  // component on the page honour the setting too.
  return (
    <MotionConfig reducedMotion="user">
      {isChromeless ? (
        <main className="min-h-screen">{children}</main>
      ) : (
        <>
          <Spine />
          <NavbarDemo />
          {/* Clears the fixed header, so pages never manage that offset. */}
          <main className="relative min-h-screen pt-16 md:pt-20">
            {children}
          </main>
          <Footer />
        </>
      )}
    </MotionConfig>
  );
}
