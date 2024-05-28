"use client";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { campaingTemplates, type CampaignType } from "../_data";

export const JourneysTable = () => {
  const [data, setData] = useState<CampaignType[]>([...campaingTemplates]);
  const fallbackData = useMemo(() => [], []);
  const columnHelper = createColumnHelper<CampaignType>();

  const columns = useMemo(
    () => [
      columnHelper.accessor((row) => row.title, {
        id: "title",
        cell: (info) => <i>{info.getValue()}</i>,
        header: () => <span>Title</span>,
      }),
      columnHelper.accessor((row) => row.type, {
        id: "type",
        cell: (info) => <i>{info.getValue()}</i>,
        header: () => <span>Type</span>,
      }),
      columnHelper.accessor((row) => row.description, {
        id: "description",
        cell: (info) => <i>{info.getValue()}</i>,
        header: () => <span>Description</span>,
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
