import PerksHero from "@/components/sections/perks/perks-hero";
import PerksBento from "@/components/sections/perks/perks-bento";
import PerksWorkHard from "@/components/sections/perks/perks-work-hard";
import PerksMember from "@/components/sections/perks/perks-member";

export default function PerksPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Two brand shapes, pushed far back. The page's density comes from the
          bento grid and the photographs, not from the backdrop. */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-24 h-[32rem] w-[32rem] bg-[url('/assets/star-1.png')] bg-contain bg-center bg-no-repeat opacity-[0.12] blur-2xl" />
        <div className="absolute -left-52 top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 bg-[url('/assets/star-2.png')] bg-contain bg-center bg-no-repeat opacity-[0.1] blur-2xl" />
      </div>

      <div className="relative z-10">
        <PerksHero />
        <PerksBento />
        <PerksWorkHard />
        <PerksMember />
      </div>
    </div>
  );
}
