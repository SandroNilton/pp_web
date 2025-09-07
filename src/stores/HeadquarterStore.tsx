import { action, makeObservable, observable, runInAction } from 'mobx';
import { RootStore } from './rootStore';
import agent from '../api/agent';
import { IHeadquarter } from '../models/company/headquarter';

export default class HeadquarterStore {

  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeObservable(this);
    this.rootStore = rootStore;
  }

  @action createHeadquarter = async (values: IHeadquarter) => {
    try {
      var response = await agent.Headquarters.create(values);
      runInAction(() => {
        return response;
      })
    } catch (error) {
      throw error;
    }
  }

}
