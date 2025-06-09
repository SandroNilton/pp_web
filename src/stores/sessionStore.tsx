import { action, computed, makeObservable, observable, runInAction } from 'mobx';
import { AxiosError } from 'axios';
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

  @computed get isTokenExpired() {
    const token = localStorage.getItem('jwt');
    if (!token) return true;
    const tokenExp = JSON.parse(atob(token.split('.')[1])).exp; 
    return Date.now() >= tokenExp * 1000; 
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
    localStorage.removeItem('jwt');
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
    } catch (error: unknown) {
      // Manejo de errores más detallado
      if (isAxiosError(error)) {
        const axiosError = error as AxiosError;

        if (axiosError.response?.status === 401) {
          // Si el token ha expirado, hacer logout
          this.logout();
        } else {
          // Para otros errores de Axios
          console.error("Error de Axios:", axiosError.message);
        }
      } else {
        // Si el error no es un AxiosError
        console.error("Error desconocido:", error);
      }
      throw error;
    }
  }

  /*@action refreshSession = async () => {
    // Intentar renovar la sesión si el token ha expirado
    if (this.isTokenExpired) {
      try {
        // Suponiendo que tienes una API para refrescar el token
        const session = await agent.Auth.refreshToken();
        runInAction(() => {
          this.session = session;
          this.rootStore.commonStore.setToken(session.token);
        });
      } catch (error) {
        console.error("No se pudo renovar el token:", error);
        this.logout();
      }
    }
  }*/
  
}

// Type guard para verificar que el error es de tipo AxiosError
function isAxiosError(error: unknown): error is AxiosError {
  return (error as AxiosError).isAxiosError !== undefined;
}