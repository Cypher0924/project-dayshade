import React from "react";
import { ImageCarousel } from "@/components/shared/image-carousel";
import Image from "next/image";
import HeroSection from "@/components/sections/about/hero-section";
import ProgdenStory from "@/components/sections/about/progden-story";
import TeamSection from "@/components/sections/about/team-section";
import ProgdenStats from "@/components/sections/about/progden-stats";
import JoinCta from "@/components/sections/home/join-cta";
import FormerOfficersSection from "@/components/sections/about/former-officers-section";
import FormerMembersSection from "@/components/sections/about/former-members-section";

export default function About() {
  return (
    <div className="relative text-pd-bone">
      <HeroSection />

      {/* Panel 2 */}
      <div className="min-h-screen flex flex-col items-center justify-center relative">
        <ImageCarousel />
        <Image
          src="/assets/about-pics/about-pd-logo-3.png"
          alt="pd logo"
          className="sm:size-128"
          width={512}
          height={512}
        />
        <h2 className="z-10 text-center text-display uppercase">
          Together, forever
        </h2>
      </div>

      <ProgdenStory />
      
      <TeamSection />

      {/* Former PD Officers & Former Members */}
      <FormerOfficersSection />

      <FormerMembersSection />

      <div className="border-t border-white/10 px-5 pt-24 text-center md:px-12">
        <h2 className="text-display">Our impact</h2>
        <p className="mt-4 text-lg text-pd-bone/65">Growing stronger every year</p>
      </div>

      <ProgdenStats />

      <JoinCta />
    </div>
  );
}
