"use client";

import { JoinCta } from "@/components/shared/join-cta";

function PerksMember() {
  return (
    <JoinCta
      heading="Become a member today"
      secondary={{ label: "About us", href: "/about" }}
    />
  );
}

export default PerksMember;
