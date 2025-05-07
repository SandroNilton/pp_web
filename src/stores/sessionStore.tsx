import { action, computed, makeObservable, observable } from 'mobx';
import type { ISession, ISessionFormValues } from "../models/auth/session";
import agent from "../api/agent";
import { RootStore } from "./rootStore";

export default class SessionStore {
  @observable session: ISession = null!;
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeObservable(this)
    this.rootStore = rootStore;
  }

  @computed get isLoggedIn() {
    return !!this.session;
  }

  @action setSession = async (values: ISessionFormValues) => {
    try {
      var session = await agent.Auth.login(values);
      this.session = session;
    } catch (error) {
      console.error("Login failed", error);
    }
  }
}