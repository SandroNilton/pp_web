import React, { useState } from "react";
import { ColumnDef, ExpandedState, flexRender, getCoreRowModel, getExpandedRowModel, useReactTable, Row } from "@tanstack/react-table";
import { IHeadquarter } from "../../../../models/company/headquarter";
import { EditableText, Icon, IconButton, Text } from "@vibe/core";
import { Check, CloseSmall, DropdownChevronDown, DropdownChevronRight, Open } from "@vibe/icons";
import { ISpecificObjective } from "../../../../models/board/specificObjective";

interface Props {
  specificObjectives: ISpecificObjective[];
}

export const SpecificObjectivesTable: React.FC<Props> = ({ specificObjectives }) => {

const [expanded, setExpanded] = useState<ExpandedState>({});
  const columns: ColumnDef<ISpecificObjective>[] = [
    {
      header: "Nombre",
      accessorKey: "name",
      cell: ({ row }) => (
        <div className="flex w-full gap-3 items-center align-middle px-1">
          <div className="gap-2 max-w-52 min-w-52">
            <EditableText type="text1" className="m-0" value={ row.original.name }></EditableText>
          </div>
        </div>
      )
    },
  ];

  const table = useReactTable({
    data: specificObjectives,
    columns,
    state: { expanded },
    onExpandedChange: setExpanded,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
  });

  return (
    <div className="pl-12 flex-grow w-full">
      <table className="border-separate border-spacing-0 mt-3 mb-3"  width="" style={{ borderCollapse: "collapse"}}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="border-l-[6px] border-solid border-[--primary-color]">
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="min-h-9 border border-solid border-[#d0d4e4] p-1.5 text-center">
                  <Text align="center">{flexRender(header.column.columnDef.header, header.getContext())}</Text>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row: Row<ISpecificObjective>) => (
            <React.Fragment key={row.id}>
              <tr className="border-l-[6px] border-solid border-[--primary-color]">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="min-h-9 border border-solid border-[#d0d4e4] p-1 text-left">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};