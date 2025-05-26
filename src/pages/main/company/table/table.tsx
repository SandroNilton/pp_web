import { Loader, Text } from "@vibe/core";
import React, { useContext, useEffect, useState } from 'react';
import { RootStoreContext } from '../../../../stores/rootStore';

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
        <div className='flex flex-col gap-1 grow w-full'>
          casa
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

  return (
    <div className='flex flex-1 opacity-100 transition-opacity py-1 items-center h-full justify-center'>
      <div className='flex flex-col gap-1 grow'>

        <div className='flex flex-col gap-y-1 items-center'>
          <Text align='center' type='text2' className='whitespace-normal'>Este espacio de trabajo está vacío.</Text>
          <Text align='center' type='text2'  className='whitespace-normal'>Agrega tableros, docs, formularios o paneles para empezar ahora.</Text>
          
        </div> 
        <div className='flex flex-col gap-y-1 items-center'>
          
          
        </div> 
        <div className='flex flex-col gap-y-1 items-center'>
          <Text align='center' type='text2' className='whitespace-normal'>Este espacio de trabajo está vacío.</Text>
          <Text align='center' type='text2'  className='whitespace-normal'>Agrega tableros, docs, formularios o paneles para empezar ahora.</Text>
          
        </div> 
        <div className='flex flex-col gap-y-1 items-center'>
          <Text align='center' type='text2' className='whitespace-normal'>Este espacio de trabajo está vacío.</Text>
          <Text align='center' type='text2'  className='whitespace-normal'>Agrega tableros, docs, formularios o paneles para empezar ahora.</Text>
          
        </div> 
        <div className='flex flex-col gap-y-1 items-center'>
          <Text align='center' type='text2' className='whitespace-normal'>Este espacio de trabajo está vacío.</Text>
          <Text align='center' type='text2'  className='whitespace-normal'>Agrega tableros, docs, formularios o paneles para empezar ahora.</Text>
          
        </div> 
        <div className='flex flex-col gap-y-1 items-center'>
          <Text align='center' type='text2' className='whitespace-normal'>Este espacio de trabajo está vacío.</Text>
          <Text align='center' type='text2'  className='whitespace-normal'>Agrega tableros, docs, formularios o paneles para empezar ahora.</Text>
          
        </div> 
        <div className='flex flex-col gap-y-1 items-center'>
          <Text align='center' type='text2' className='whitespace-normal'>Este espacio de trabajo está vacío.</Text>
          <Text align='center' type='text2'  className='whitespace-normal'>Agrega tableros, docs, formularios o paneles para empezar ahora.</Text>
          
        </div> 
        <div className='flex flex-col gap-y-1 items-center'>
          <Text align='center' type='text2' className='whitespace-normal'>Este espacio de trabajo está vacío.</Text>
          <Text align='center' type='text2'  className='whitespace-normal'>Agrega tableros, docs, formularios o paneles para empezar ahora.</Text>
          
        </div> 
        <div className='flex flex-col gap-y-1 items-center'>
          <Text align='center' type='text2' className='whitespace-normal'>Este espacio de trabajo está vacío.</Text>
          <Text align='center' type='text2'  className='whitespace-normal'>Agrega tableros, docs, formularios o paneles para empezar ahora.</Text>
          
        </div> 
        <div className='flex flex-col gap-y-1 items-center'>
          <Text align='center' type='text2' className='whitespace-normal'>Este espacio de trabajo está vacío.</Text>
          <Text align='center' type='text2'  className='whitespace-normal'>Agrega tableros, docs, formularios o paneles para empezar ahora.</Text>
          
        </div> 
        <div className='flex flex-col gap-y-1 items-center'>
          <Text align='center' type='text2' className='whitespace-normal'>Este espacio de trabajo está vacío.</Text>
          <Text align='center' type='text2'  className='whitespace-normal'>Agrega tableros, docs, formularios o paneles para empezar ahora.</Text>
          
        </div> 
        <div className='flex flex-col gap-y-1 items-center'>
          <Text align='center' type='text2' className='whitespace-normal'>Este espacio de trabajo está vacío.</Text>
          <Text align='center' type='text2'  className='whitespace-normal'>Agrega tableros, docs, formularios o paneles para empezar ahora.</Text>
          
        </div> 
        <div className='flex flex-col gap-y-1 items-center'>
          <Text align='center' type='text2' className='whitespace-normal'>Este espacio de trabajo está vacío.</Text>
          <Text align='center' type='text2'  className='whitespace-normal'>Agrega tableros, docs, formularios o paneles para empezar ahora.</Text>
          
        </div> 
        <div className='flex flex-col gap-y-1 items-center'>
          <Text align='center' type='text2' className='whitespace-normal'>Este espacio de trabajo está vacío.</Text>
          <Text align='center' type='text2'  className='whitespace-normal'>Agrega tableros, docs, formularios o paneles para empezar ahora.</Text>
          
        </div> 
        <div className='flex flex-col gap-y-1 items-center'>
          <Text align='center' type='text2' className='whitespace-normal'>Este espacio de trabajo está vacío.</Text>
          <Text align='center' type='text2'  className='whitespace-normal'>Agrega tableros, docs, formularios o paneles para empezar ahora.</Text>
          
        </div> 
        <div className='flex flex-col gap-y-1 items-center'>
          <Text align='center' type='text2' className='whitespace-normal'>Este espacio de trabajo está vacío.</Text>
          <Text align='center' type='text2'  className='whitespace-normal'>Agrega tableros, docs, formularios o paneles para empezar ahora.</Text>
          
        </div> 
        <div className='flex flex-col gap-y-1 items-center'>
          <Text align='center' type='text2' className='whitespace-normal'>Este espacio de trabajo está vacío.</Text>
          <Text align='center' type='text2'  className='whitespace-normal'>Agrega tableros, docs, formularios o paneles para empezar ahora.</Text>
          
        </div> 
      </div>
    </div>*/
 



{/*


  return (

    <div>
      <div className="top-0 sticky w-full flex h-full overflow-auto">













        <Table dataState={{ isLoading: loading}} errorState={<TableErrorState />} emptyState={<TableEmptyState />} columns={companyColumns}>
        <TableHeader>
          {companyColumns.map((headerCell, index) => (
            <TableHeaderCell key={index} title={headerCell.title} />
          ))}
        </TableHeader>
        <TableBody>
          {companies.map(rowItem => (
            <TableRow key={rowItem.id}>
              <TableCell>{rowItem.id}</TableCell>
              <TableCell className="flex">
                <Text>{rowItem.name}</Text>
                <TableCell className="flex">
                  <Button size="small" >Editar</Button>
                  <Button size="small" >Eliminar</Button>
                  </TableCell>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
    </div>
  );*/}
};

export default TableView

