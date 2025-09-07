import { action, makeObservable, observable, runInAction } from 'mobx';
import { IBoard } from '../models/board/board';
import { RootStore } from './rootStore';
import agent from '../api/agent';
import { IGeneralObjective } from '../models/board/generalObjective';

export default class BoardStore {
  @observable boards: IBoard[] = [];
  @observable favorites: IBoard[] = [];
  @observable board: IBoard | null = null;
  @observable global: IGeneralObjective[] = [];

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

  @action getDetail = async (id: string): Promise<IBoard> => {
    try {
      this.board = await agent.Boards.detail(id);
      return this.board;  
    } catch (error) {
      throw error;
    }
  }
  
}
