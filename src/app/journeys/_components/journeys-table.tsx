"use client";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { journeys, type JourneyType } from "../_data";

export const JourneysTable = () => {
  const [data, setData] = useState<JourneyType[]>([...journeys]);
  const fallbackData = useMemo(() => [], []);
  const columnHelper = createColumnHelper<JourneyType>();

  const columns = useMemo(
    () => [
      columnHelper.accessor((row) => row.title, {
        id: "title",
        cell: (cell) => <div>{cell.getValue()}</div>,
        header: () => <span>Name</span>,
      }),
      columnHelper.accessor((row) => row.type, {
        id: "type",
        cell: (cell) => <div>{cell.getValue()}</div>,
        header: () => <span>Type</span>,
      }),
      columnHelper.accessor((row) => row.updated, {
        id: "updated",
        cell: (cell) => <div>Date</div>,
        header: () => <span>Description</span>,
      }),
      columnHelper.accessor((row) => row.channels, {
        id: "channels",
        cell: (cell) => <div>{cell.getValue()}</div>,
        header: () => <span>Channels</span>,
      }),
      columnHelper.accessor((row) => row.status, {
        id: "status",
        cell: (cell) => <div>{cell.getValue()}</div>,
        header: () => <span>Channels</span>,
      }),
    ],
    [columnHelper],
  );

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <div>Bar</div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
