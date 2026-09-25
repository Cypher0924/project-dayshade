import {
  createPaginatedRowModel,
  rowPaginationFeature,
  tableFeatures,
} from "@tanstack/react-table";

/**
 * TanStack Table v9 requires features to be registered explicitly so unused
 * ones are tree-shaken. This table only paginates.
 */
export const leaderboardTableFeatures = tableFeatures({
  rowPaginationFeature,
  paginatedRowModel: createPaginatedRowModel(),
});

export type LeaderboardTableFeatures = typeof leaderboardTableFeatures;
