"use client";

import { LeaderboardEntry } from "@/lib/validation/leaderboard-entries";
import { ColumnDef } from "@tanstack/react-table";
import { LeaderboardTableFeatures } from "./table-features";

/**
 * Standings read as a table of numbers, so rank and points are set in the
 * site's data face and the podium is carried by colour and weight rather than
 * by medal glyphs — the top three stay obvious at a glance while the column
 * stays a column.
 */
function rankClasses(rank: number) {
  if (rank === 1) return "text-pd-green";
  if (rank === 2) return "text-foreground";
  if (rank === 3) return "text-pd-purple";
  return "text-pd-light-grey";
}

export const columns: ColumnDef<
  LeaderboardTableFeatures,
  LeaderboardEntry
>[] = [
  {
    accessorKey: "rank",
    header: "Rank",
    cell: ({ getValue }) => {
      const rank = getValue<number>();
      return (
        <span
          className={`data-value text-2xl leading-none md:text-3xl ${rankClasses(rank)}`}
        >
          {String(rank).padStart(2, "0")}
        </span>
      );
    },
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ getValue }) => (
      <span className="font-display text-base font-bold uppercase tracking-tight md:text-xl">
        {getValue<string>()}
      </span>
    ),
  },
  {
    accessorKey: "points",
    header: "Points",
    cell: ({ getValue }) => (
      <span className="data-value text-xl md:text-2xl">
        {getValue<number>().toLocaleString()}
      </span>
    ),
  },
];
