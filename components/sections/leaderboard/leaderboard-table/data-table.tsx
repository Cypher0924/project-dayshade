"use client";

import {
  ColumnDef,
  RowData,
  flexRender,
  useTable,
} from "@tanstack/react-table";
import {
  LeaderboardTableFeatures,
  leaderboardTableFeatures,
} from "./table-features";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface DataTableProps<TData extends RowData> {
  columns: ColumnDef<LeaderboardTableFeatures, TData>[];
  data: TData[];
  dateUpdated: string | undefined;
}

export function DataTable<TData extends RowData>({
  columns,
  data,
  dateUpdated,
}: DataTableProps<TData>) {
  const table = useTable({
    features: leaderboardTableFeatures,
    data,
    columns,
  });

  const formattedDate = dateUpdated
    ? new Date(dateUpdated).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "-";

  const pageIndex = table.state.pagination?.pageIndex ?? 0;
  const pageCount = table.getPageCount();
  const rows = table.getRowModel().rows;

  return (
    <div>
      <div className="panel overflow-hidden">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="border-white/15 hover:bg-transparent"
              >
                {headerGroup.headers.map((header, index) => (
                  <TableHead
                    key={header.id}
                    className={`data-label h-12 px-4 md:px-6 ${
                      index === headerGroup.headers.length - 1
                        ? "text-right"
                        : ""
                    }`}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {rows?.length ? (
              rows.map((row) => {
                const cells = row.getAllCells();
                return (
                  <TableRow
                    key={row.id}
                    className="border-white/10 transition-colors last:border-b-0 hover:bg-white/[0.04]"
                  >
                    {cells.map((cell, index) => (
                      <TableCell
                        key={cell.id}
                        className={`px-4 py-5 md:px-6 ${
                          index === 0 ? "w-20 md:w-28" : ""
                        } ${index === cells.length - 1 ? "text-right" : ""}`}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })
            ) : (
              <TableRow className="hover:bg-transparent">
                <TableCell colSpan={columns.length}>
                  <div className="px-6 py-20 text-center">
                    <p className="display-md">
                      Stay tuned! Rankings will be announced soon.
                    </p>
                    <p className="data-label mt-6">
                      Follow CSC announcements for updates
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="data-label">Last updated — {formattedDate}</p>

        {pageCount > 1 ? (
          <div className="flex items-center gap-5">
            <span className="data-value text-xs text-foreground/60">
              {String(pageIndex + 1).padStart(2, "0")}
              <span className="mx-1 text-white/25">/</span>
              {String(pageCount).padStart(2, "0")}
            </span>
            <div className="flex">
              <button
                type="button"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
                className="border border-white/15 px-4 py-2.5 font-mono text-[0.6875rem] uppercase tracking-[0.16em] transition-colors hover:border-pd-green hover:text-pd-green disabled:pointer-events-none disabled:opacity-35"
              >
                Prev
              </button>
              <button
                type="button"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
                className="-ml-px border border-white/15 px-4 py-2.5 font-mono text-[0.6875rem] uppercase tracking-[0.16em] transition-colors hover:border-pd-green hover:text-pd-green disabled:pointer-events-none disabled:opacity-35"
              >
                Next
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
