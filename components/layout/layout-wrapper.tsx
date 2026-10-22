"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/layout/footer";
import { NavbarDemo } from "@/components/layout/header";
import SmoothScroll from "@/components/providers/smooth-scroll";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideNavAndFooter =
    pathname.startsWith("/admin") || pathname.startsWith("/login");

  if (hideNavAndFooter) {
    return <main className="min-h-screen">{children}</main>;
  }

  return (
    <SmoothScroll>
      <NavbarDemo />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </SmoothScroll>
  );
}
