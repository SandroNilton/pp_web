import React, { useState } from "react";
import { ColumnDef, ExpandedState, flexRender, getCoreRowModel, getExpandedRowModel, useReactTable, Row } from "@tanstack/react-table";
import { IHeadquarter } from "../../../../models/headquarter";
import { EditableHeading, EditableText, Icon, IconButton, Text } from "@vibe/core";
import { Check, CloseSmall, DropdownChevronDown, DropdownChevronRight, Open } from "@vibe/icons";

interface Props {
  headquarter: IHeadquarter[];
}

export const HeadquartersTable: React.FC<Props> = ({ headquarter }) => {

const [expanded, setExpanded] = useState<ExpandedState>({});
  const columns: ColumnDef<IHeadquarter>[] = [
    {
      header: "Sede",
      accessorKey: "address",
      cell: ({ row }) => (
        <div className="flex w-full gap-3 items-center align-middle px-1">
          <IconButton className="" size="xs" icon={ row.getIsExpanded() ? DropdownChevronDown : DropdownChevronRight } onClick={() => row.toggleExpanded()} tooltipContent="Expandir este elemento"></IconButton>
          <div className="gap-2 max-w-52 min-w-52">
            <EditableText type="text1" className="m-0" value={ row.original.address }></EditableText>
          </div>
          <Text className="text-[--secondary-text-color]">{ row.original.areas.length }</Text>
          <IconButton size="xs" icon={ Open } onClick={() => row.toggleExpanded()} tooltipContent="Abrir pagína de Sede"></IconButton>
        </div>
      )
    },
    {
      header: "Código",
      accessorKey: "code",
      cell: ({ row }) => (
        <div className="flex w-full items-center align-middle justify-center px-1 max-w-20 min-w-20">
            <EditableText type="text1" className="m-0 pb-0.5" value={ row.original.code }></EditableText>
        </div>
      )
    },
    {
      header: "PAHS",
      accessorKey: "pahs",
      cell: ({ row }) => (
        <div>
          <Icon icon={ row.original.pahs ? Check : CloseSmall } style={{ color:  row.original.pahs ? "#0073ea" : "#ff7777" }}></Icon>
        </div>
      )
    },
    /*{
      header: "Áreas",
      id: "areas",
      cell: ({ row }) => (
        <button onClick={() => row.toggleExpanded()}>
          {row.getIsExpanded() ? "Ocultar" : "Ver Áreas"}
        </button>
      ),
    },*/
  ];

  const table = useReactTable({
    data: headquarter,
    columns,
    state: { expanded },
    onExpandedChange: setExpanded,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
  });

  return (
    <div className="pl-12">
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
          {table.getRowModel().rows.map((row: Row<IHeadquarter>) => (
            <React.Fragment key={row.id}>
              <tr className="border-l-[6px] border-solid border-[--primary-color]">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="min-h-9 border border-solid border-[#d0d4e4] p-1 text-left">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
              {row.getIsExpanded() && (
                <tr>
                  <td colSpan={columns.length}>
                    {row.original.areas && row.original.areas.length > 0 ? (
                      <ul style={{ margin: 0, paddingLeft: 20 }}>
                        {row.original.areas.map((area) => (
                          <li key={area.id}>
                            {area.name}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <em>Sin áreas</em>
                    )}
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};


/*<table cellPadding={5} style={{ width: "100%", background: "#fff" }}>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody>
        {table.getRowModel().rows.map((row: Row<IHeadquarter>) => (
          <React.Fragment key={row.id}>
            <tr>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
            {row.getIsExpanded() && (
              <tr>
                <td colSpan={columns.length}>
                  {row.original.areas.length > 0 ? (
                    <ul style={{ margin: 0, paddingLeft: 20 }}>
                      {row.original.areas.map((area) => (
                        <li key={area.id}>{area.name}</li>
                      ))}
                    </ul>
                  ) : (
                    <em>Sin áreas</em>
                  )}
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>*/