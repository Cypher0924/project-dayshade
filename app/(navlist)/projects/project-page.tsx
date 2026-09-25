import MonthlyProjectShowcase from "@/components/sections/projects/MonthlyProjectShowcase";
import FeaturedProjectsView from "@/components/sections/projects/FeaturedProjectView";
import { SectionLabel } from "@/components/shared/section";

export default function Projects() {
  return (
    <div className="relative">
      <section className="rail-x pt-16 pb-4 md:pt-24">
        <SectionLabel>The work</SectionLabel>
        <h1 className="display-xl mt-8">Our projects</h1>
        <p className="prose-lead mt-8">
          Discover innovative solutions crafted by our talented community
        </p>
      </section>

      <MonthlyProjectShowcase />
      <FeaturedProjectsView />
    </div>
  );
}
