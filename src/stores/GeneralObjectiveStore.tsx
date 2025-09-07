import { action, makeObservable, observable, runInAction } from 'mobx';
import { RootStore } from './rootStore';
import agent from '../api/agent';
import { IGeneralObjective } from '../models/board/generalObjective';

export default class GeneralObjectiveStore {
  @observable generalObjectives: IGeneralObjective[] = [];

  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeObservable(this);
    this.rootStore = rootStore;
  }

  @action list = async (id: string) => {
    try {
      var response = await agent.GeneralObjectives.list(id);
      runInAction(() => {
        this.generalObjectives = response;
      });
    } catch (error) {
      throw error;
    }
  }

  @action createGeneralObjective = async (values: IGeneralObjective) => {
    try {
      var response = await agent.GeneralObjectives.create(values);
      runInAction(() => {
        return response;
      })
    } catch (error) {
      throw error;
    }
  }

}

