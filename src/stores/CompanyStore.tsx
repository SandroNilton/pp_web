import { action, makeObservable, observable, runInAction } from 'mobx';
import { RootStore } from './rootStore';
import agent from '../api/agent';
import { ICompany } from '../models/company';

export default class CompanyStore {
  @observable companies: ICompany[] = [];
  @observable global: ICompany[] = [];

  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeObservable(this);
    this.rootStore = rootStore;
  }

  @action createCompany = async (values: ICompany) => {
    try {
      var response = await agent.Companies.create(values);
      runInAction(() => {
        return response;
      })
    } catch (error) {
      throw error;
    }
  }

  @action loadCompanies = async () => {
    try {
      var response = await agent.Companies.list();
      runInAction(() =>
        this.companies = response,
      );
    } catch (error) {
      console.error(error);
    }
  }

  @action loadGlobal = async () => {
    try {
      var response = await agent.Companies.global();
      runInAction(() =>
        this.global = response
      );
    } catch (error) {
      console.error(error);
    }
  }

}
