import AnimatedBackground from "@/components/sections/home/animated-background";
import HomeHero from "@/components/sections/home/home-hero";
import { MonthlyShowcase } from "@/components/sections/home/monthly-showcase";
import { FeaturedProjects } from "@/components/sections/home/featured-projects";
import ConnectWithUsSection from "@/components/sections/home/work-with-us";

export default function Page() {
  return (
    <div className="relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <HomeHero />
        <MonthlyShowcase />
        <FeaturedProjects />
        <ConnectWithUsSection />
      </div>
    </div>
  );
}
