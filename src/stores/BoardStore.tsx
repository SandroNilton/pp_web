import { action, makeObservable, observable, runInAction } from 'mobx';
import { IBoard } from '../models/board';
import { RootStore } from './rootStore';
import agent from '../api/agent';

export default class BoardStore {
  @observable boards: IBoard[] = [];
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeObservable(this);
    this.rootStore = rootStore;
  }

  @action loadBoards = async () => {
    try {
      var response = await agent.Boards.list();
      runInAction(() =>
        response.forEach((board) => this.boards.push(board)), 
      );
    } catch (error) {
      console.error(error);
    }
  }

}
