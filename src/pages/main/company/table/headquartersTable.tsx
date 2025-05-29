import React, { useState } from "react";
import { ColumnDef, ExpandedState, flexRender, getCoreRowModel, getExpandedRowModel, useReactTable, Row } from "@tanstack/react-table";
import { IHeadquarter } from "../../../../models/headquarter";

interface Props {
  headquarter: IHeadquarter[];
}

export const HeadquartersTable: React.FC<Props> = ({ headquarter }) => {

  console.log("esto:" + headquarter[0].areas[0]);
const [expanded, setExpanded] = useState<ExpandedState>({});
  const columns: ColumnDef<IHeadquarter>[] = [
    {
      header: "Dirección",
      accessorKey: "address",
    },
    {
      header: "Áreas",
      id: "areas",
      cell: ({ row }) => (
        <button onClick={() => row.toggleExpanded()}>
          {row.getIsExpanded() ? "Ocultar" : "Ver Áreas"}
        </button>
      ),
    },
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
    <div>
      <table cellPadding={5} style={{ width: "100%", background: "#fff" }}>
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
                    {row.original.areas && row.original.areas.length > 0 ? (
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