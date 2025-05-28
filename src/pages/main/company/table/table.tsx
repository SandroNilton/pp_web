import { IconButton, Loader, Text } from "@vibe/core";
import React, { useContext, useEffect, useState } from 'react';
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { RootStoreContext } from '../../../../stores/rootStore';
import { ICompany } from "../../../../models/company";
import { Menu } from "@vibe/icons";
import { IHeadquarter } from "../../../../models/headquarter";
import { IArea } from "../../../../models/area";

interface RowData {
  sede: string;
  area: string;
}

const columnHelper = createColumnHelper<RowData>();

const columns = [
  columnHelper.accessor('sede', {
    header: 'Sede',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('area', {
    header: 'Área',
    cell: info => info.getValue(),
  }),
];

type Props = {
  sedeNombre: string;
  areas: { name: string }[];
};

const TableView = () => {

  const rootStore = useContext(RootStoreContext);
  const { global, loadGlobal } = rootStore.companyStore;
  const [ loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await loadGlobal();
      setLoading(false);
    };
    fetchData();
  }, [loadGlobal]);

  const displayCompanies = (companies: ICompany[]) => {
    return (
      companies.length > 0 &&  companies.map((company) => (
        <div className="mb-6" key={company.id}>
          <div className="flex items-center align-middle h-11 gap-2">
            <IconButton size="xs" icon={Menu} active color="inverted" className=""></IconButton>
            <h2 className="text-md font-semibold">{company.name}</h2>
          </div>
          <div>
            {(company.headquarters ?? []).map((headquarter : IHeadquarter) => {
              const data = (headquarter.areas ?? []).map((area : IArea) => ({
                sede: headquarter.name,
                area: area.name,
              }));

              const table = useReactTable({
                data,
                columns,
                getCoreRowModel: getCoreRowModel(),
              });

              <table key={headquarter.id} className="w-full border border-gray-300 mb-4">
                <thead className="bg-gray-100">
                  {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map(header => (
                        <th key={header.id} className="p-2 border">
                          {flexRender(header.column.columnDef.header, header.getContext())}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody>
                  {table.getRowModel().rows.map(row => (
                    <tr key={row.id}>
                      {row.getVisibleCells().map(cell => (
                        <td key={cell.id} className="p-2 border">
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            })}
          </div>
        </div>
      )
    ))
  }

  if (loading) {
    return (
      <div className="flex flex-1 items-center justify-center h-full">
        <Loader hasBackground size="small" color="primary" />
      </div>
    );
  }

  if (global.length != 0) {
    return (
      <div className='flex flex-1 opacity-100 transition-opacity py-1 h-full'>
        <div className='flex flex-col gap-1 grow w-full px-4'>
          <div>
            { displayCompanies(global) }
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='flex flex-1 opacity-100 transition-opacity py-1 h-full'>
      <div className='flex flex-col gap-1 grow w-full'>
        <Text align='center' type='text2' className='whitespace-normal'>Este espacio de trabajo está vacío.</Text>
        <Text align='center' type='text2'  className='whitespace-normal'>Agrega tableros, docs, formularios o paneles para empezar ahora.</Text>
      </div>
    </div>
  )

 /* const { companies, headquartersCompany, areasHeadquarter, loading, loadHeadquarters, loadAreas } = useDataLoader();*/

 /*const companies = [];

/*
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  }, useExpanded);*/

 /* return (
    <div>
      <h2>Empresas, Sedes y Áreas</h2>
      {loading ? <p>Cargando...</p> : (
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
              return (
                <React.Fragment key={row.id}>
                  <ExpandableRow row={row} onExpand={() => handleRowExpand(row)} />
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );*/


  /*if (loading) {
    return (
      <div className="flex flex-1 items-center justify-center h-full">
        <Loader hasBackground size="small" color="primary" />
      </div>
    );
  }

  if (companies.length != 0) {
    return (
      <div className='flex flex-1 opacity-100 transition-opacity py-1 h-full'>
        <div className='flex flex-col gap-1 grow w-full'>
          <Text align='center' type='text2' className='whitespace-normal'>Este espacio de trabajo está vacío.</Text>
          <Text align='center' type='text2'  className='whitespace-normal'>Agrega tableros, docs, formularios o paneles para empezar ahora.</Text>
        </div>
      </div>
    )
  }

 */
 
};

export default TableView

