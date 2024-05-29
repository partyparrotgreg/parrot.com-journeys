"use client";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
  type ColumnFiltersState,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { journeys, statuses, type JourneyType } from "../_data";
import { JourneyItem } from "./journey-item";
import { TagsBox } from "./tags-box";
import { UseCasesBox } from "./use-cases";

export const JourneysTable = () => {
  console.log(journeys);
  const [currentTab, setCurrentTab] = useState<string>("all");
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [data, setData] = useState<JourneyType[]>([...journeys]);
  const columnHelper = createColumnHelper<JourneyType>();

  const columns = useMemo(
    () => [
      columnHelper.accessor((row) => row.status, {
        id: "status",
        header: () => <span>Status</span>,
      }),
      columnHelper.accessor((row) => row.title, {
        id: "title",
        header: () => <span>Name</span>,
      }),
      columnHelper.accessor((row) => row.channels, {
        id: "channels",
        header: () => <span>Channels</span>,
      }),
      columnHelper.accessor((row) => row.tags, {
        id: "tags",
        header: () => <span>Tags</span>,
      }),

      columnHelper.accessor((row) => row.updated, {
        id: "updated",
        header: () => <span>Last updated</span>,
      }),
    ],
    [columnHelper],
  );

  const table = useReactTable({
    columns,
    data,
    state: {
      columnFilters,
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-row gap-4">
        <Tabs defaultValue={currentTab}>
          <TabsList>
            {statuses.map((status) => (
              <TabsTrigger
                value={status}
                key={`tab-${status}`}
                onClick={() => {
                  setCurrentTab(status);
                  if (status === "all") return setData(journeys);
                  setData(
                    journeys.filter((journey) => journey.status === status),
                  );
                }}
              >
                {status}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <Input type="text" placeholder="Search..." />
        <UseCasesBox />
        <TagsBox />
      </div>
      <div className="flex grow flex-col gap-2">
        <div className="overflow-hidden rounded-xl border border-slate-200">
          {table.getHeaderGroups().map((headerGroup) => (
            <div
              key={headerGroup.id}
              className="flex flex-row justify-between border-b border-slate-200 bg-slate-100  text-xs font-semibold uppercase text-slate-500"
            >
              {headerGroup.headers.map((header) => (
                <div key={header.id} className="px-4 py-3">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </div>
              ))}
            </div>
          ))}
          {table.getRowModel().rows.map((row, index) => (
            <JourneyItem
              key={row.id}
              item={row}
              isLast={index === table.getRowModel().rows.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};


