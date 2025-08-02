import { action, makeObservable, observable, runInAction } from 'mobx';
import { IBoardView } from '../models/board/boardView';
import { RootStore } from './rootStore';
import agent from '../api/agent';

export default class BoardViewStore {
  @observable views: IBoardView[] = [];

  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeObservable(this);
    this.rootStore = rootStore;
  }

  @action loadViewBoard = async (id: string) => {
    try {
      var response = await agent.Boards.details(id);
      runInAction(() => { 
        response.views.forEach((view: IBoardView) => this.views.push(view));
      });
    } catch (error) {
      throw error;
    }
  }

}