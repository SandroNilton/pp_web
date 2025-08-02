import { action, makeObservable, observable, runInAction } from 'mobx';
import { IBoard } from '../models/board/board';
import { RootStore } from './rootStore';
import agent from '../api/agent';

export default class BoardStore {
  @observable boards: IBoard[] = [];
  @observable favorites: IBoard[] = [];

  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeObservable(this);
    this.rootStore = rootStore;
  }

  @action loadBoards = async () => {
    try {
      var response = await agent.Boards.list();
      runInAction(() => { 
        //response.forEach((board) => this.boards.push(board))
        this.boards = response;
      });
    } catch (error) {
      throw error;
    }
  }

  @action createBoard = async (values: IBoard) => {
    try {
      var response = await agent.Boards.create(values);
      runInAction(() => {
        return response;
      })
    } catch (error) {
      throw error;
    }
  }

  @action loadFavorites = async () => {
    try {
      var response = await agent.Boards.favorite();
      runInAction(() =>
        this.favorites = response
      );
    } catch (error) {
      throw error;
    }
  }

  @action getDetailsBoard = async (id: string): Promise<IBoard> => {
    try {
      return await agent.Boards.details(id); 
    } catch (error) {
      throw error;
    }
  }

}
