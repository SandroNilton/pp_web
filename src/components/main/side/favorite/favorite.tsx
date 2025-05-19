import { Loader, Text } from '@vibe/core';
import Item from '../item/item';
import { IBoard } from '../../../../models/board';
import React, { useContext, useEffect, useState } from 'react';
import { RootStoreContext } from '../../../../stores/rootStore';

const Favorite = () => {

  const rootStore = useContext(RootStoreContext);
  const { favorites, loadFavorites } = rootStore.boardStore;
  const [ loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await loadFavorites();
      setLoading(false);
    };
    fetchData();
  }, [loadFavorites]);

  const displayFavorites = (favorites: IBoard[]) => {
    return (
      favorites.length > 0 &&  favorites.map((board) => (
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

  if (favorites.length != 0) {
    return (
      <div className='flex flex-1 opacity-100 transition-opacity py-1 h-full'>
        <div className='flex flex-col gap-1 grow w-full'>
          { displayFavorites(favorites) }
        </div>
      </div>
    )
  }
  
  return (
    <div className='flex flex-1 opacity-100 transition-opacity py-1 items-center h-full justify-center'>
      <div className='flex flex-col gap-1 grow'>
        <div className='flex flex-col gap-y-1 items-center'>
          <img src="https://microfrontends.monday.com/mf-leftpane/latest/static/media/favorites-empty-.99fa5473.svg" alt="" />
          <div>
            <Text align='center' type='text1' className='whitespace-normal'>No hay nada en tus favoritos</Text>
          </div>
          <div>
            <Text align='center' type='text2' className='whitespace-normal'>Agrega tus tableros, docs o paneles para tener acceso rápido.</Text>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default Favorite;