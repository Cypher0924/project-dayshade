import BackgroundSvg from "@/components/shared/red-boxes-bg-svg";
import CSCPromotion from "@/components/sections/leaderboard/csc-promotion";
import SubHeader from "@/components/sections/leaderboard/sub-header";
import LeaderboardView from "@/components/views/leaderboard-view";

export default async function LeaderboardsPage() {
  return (
    <main className="relative overflow-hidden">
      {/* Event texture, pushed well back so the standings stay the only thing
          competing for attention. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.06]"
      >
        <BackgroundSvg className="h-full w-auto min-w-full" />
      </div>

      <div className="relative z-10">
        <SubHeader />
        <LeaderboardView />
        <CSCPromotion />
      </div>
    </main>
  );
}
