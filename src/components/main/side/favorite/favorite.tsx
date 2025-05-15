import { Loader, Text } from '@vibe/core';
import { Component } from 'react';
import Item from '../item/item';
import axios from 'axios';
import { IBoard } from '../../../../models/board';
import React from 'react';

interface IState {
  boards: IBoard[];
  loading: boolean;
}

class Favorite extends Component<{}, IState> {

  state : IState = {
    boards: [],
    loading: true,
  }

  displayFavorites = (boards: IBoard[]) => {
    return (
      boards.length > 0 &&  boards.map((board) => (
        <Item route={`/board/${board.id}` } key={board.id} label={board.name} isSideOpen={false}/>
      )
    ))
  }

  componentDidMount() {
    axios.get<IBoard[]>('http://localhost:5001/api/board')
    .then((response) => {
      this.setState({ boards: response.data, loading: false }); // Setear loading a false después de la respuesta
    })
    .catch((error) => {
      console.error('Error al obtener los favoritos', error);
      this.setState({ loading: false }); // En caso de error también poner loading a false
    });
  }

  render() {

    const { boards, loading } = this.state

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
            { this.displayFavorites(boards) }
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
};

export default Favorite;