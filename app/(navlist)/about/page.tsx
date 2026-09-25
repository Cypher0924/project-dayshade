import { ImageCarousel } from "@/components/ui/ImageCarousel";
import HeroSection from "@/components/sections/about/HeroSection";
import ProgdenStory from "@/components/sections/about/ProgdenStory";
import TeamSection from "@/components/sections/about/TeamSection";
import ProgdenStats from "@/components/sections/about/ProgdenStats";
import SignUp from "@/components/sections/about/SignUp";

export default function About() {
  return (
    <div className="relative">
      <HeroSection />

      {/* The org's own photographs behind the org's own words. Full bleed, so
          it breaks the page's left alignment exactly once. */}
      <section className="relative flex h-[75vh] min-h-[24rem] items-end overflow-hidden border-y border-white/10">
        <ImageCarousel />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/25"
        />
        <div className="rail-x relative w-full pb-10 md:pb-16">
          <h2 className="display-xl">
            Together,
            <br />
            forever
          </h2>
        </div>
      </section>

      <ProgdenStory />
      <TeamSection />
      <ProgdenStats />
      <SignUp />
    </div>
  );
}
