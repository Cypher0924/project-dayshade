import { columns } from "@/components/sections/leaderboard/leaderboard-table/columns";
import { DataTable } from "@/components/sections/leaderboard/leaderboard-table/data-table";
import { getEntries } from "@/lib/data/leaderboard-queries";

export default async function LeaderboardView() {
  const leaderboard_entries = await getEntries();

  return (
    <section className="rail-x py-16 md:py-20">
      <h2 className="display-lg border-b border-white/10 pb-8">Leaderboard</h2>
      <div className="mt-10">
        <DataTable
          columns={columns}
          data={leaderboard_entries}
          dateUpdated={leaderboard_entries[0]?.date_uploaded}
        />
      </div>
    </section>
  );
}
