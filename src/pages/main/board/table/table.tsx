import { Avatar, Button, Label, Loader, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow, Text } from "@vibe/core";
import React, { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { RootStoreContext } from '../../../../stores/rootStore';
import { IGeneralObjective } from "../../../../models/board/generalObjective";
import { GeneralObjectiveSection } from "./generalObjectiveSection";

interface TableViewProps {
  board: string;
}

const TableView: React.FC<TableViewProps> = ({ board }) => {
const rootStore = useContext(RootStoreContext);
  const { generalObjectives, list } = rootStore.generalObjectiveStore;
  const [ loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await list(board);
      setLoading(false);
      console.log('global', generalObjectives);
    };
    fetchData();
  }, [list, board]);

  const displayGeneralObjectives = (generalObjectives: IGeneralObjective[]) => {
    return (
      <div className="pb-8">
        { generalObjectives.map((generalObjective) => (
          <GeneralObjectiveSection key={generalObjective.id } generalObjective={generalObjective} />
        )) }
      </div>
    )
  }

  if (loading) {
    return (
      <div className="flex flex-1 items-center justify-center h-full">
        <Loader hasBackground size="small" color="primary" />
      </div>
    );
  }

  if (generalObjectives?.length != 0) {
    return (
      <div className='flex flex-1 opacity-100 transition-opacity py-1 h-full'>
        <div className='flex flex-col gap-1 grow w-full px-4'>
          <div>
            { displayGeneralObjectives(generalObjectives) }
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex justify-center w-full px-4">
      <div className="text-center">
        <Text align="center" type="text2" className="whitespace-normal">
          Este espacio de trabajo está vacío.
        </Text>
        <Text align="center" type="text2" className="whitespace-normal">
          Agrega tableros, docs, formularios o paneles para empezar ahora.
        </Text>
      </div>
    </div>
  )

};

export default observer(TableView)