import { action, computed, makeObservable, observable, runInAction } from 'mobx';
import type { ISession, ISessionFormValues } from "../models/auth/session";
import agent from "../api/agent";
import { RootStore } from "./rootStore";
import { history } from '../App';

export default class SessionStore {
  @observable session: ISession | null = null;
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeObservable(this)
    this.rootStore = rootStore;
  }

  @computed get isLoggedIn() {
    return !!this.session;
  }

  @action login = async (values: ISessionFormValues) => {
    try {
      var session = await agent.Auth.login(values);
      runInAction(() => {
        this.session = session;
        history.push('/');
        this.rootStore.commonStore.setToken(session.token);
      })       
    } catch (error) {
      throw error;
    }
  }

  /*@action register = async (values: IUserFormValues) => {
    try {
      values.avatar = `http://gravatar.com/avatar/${md5(values.email)}?d=identicon`
      var user = await agent.User.register(values)
      
      runInAction(() => {
        this.user = user
        history.push('/')
        this.rootStore.commonStore.setToken(user.token)
      })
    } catch (error) {
      console.log(error)
      throw error
    }
  }*/

  @action logout = () => {
    this.rootStore.commonStore.setToken(null);
    this.session = null;
    history.push('/auth');
  }

  @action getUser = async () => {
    try {
      const session = await agent.Auth.current(); 
      runInAction(() => {
        this.session = session;
      });
    } catch (error) {
      throw error;
    }
  }
  
}