import { useContext, useEffect, useState } from 'react';
import Item from '../item/item';
import { Loader, Text } from '@vibe/core';
import { IBoard } from '../../../../models/board';
import { RootStoreContext } from '../../../../stores/rootStore';
import React from 'react';

const Board = () => {

  const rootStore = useContext(RootStoreContext);
  const { boards, loadBoards } = rootStore.boardStore;
  const [ loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadBoards();
    setLoading(false);
  }, [loadBoards]);

  const displayBoards = (boards: IBoard[]) => {
    return (
      boards.length > 0 &&  boards.map((board) => (
        <Item route={`/board/${board.id}` } key={board.id} label={board.name} isSideOpen={false}/>
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

  if (boards.length != 0) {
    return (
      <div className='flex flex-1 opacity-100 transition-opacity py-1 h-full'>
        <div className='flex flex-col gap-1 grow w-full'>
          { displayBoards(boards) }
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
      </div>
    </div>
  );
};

export default Board;