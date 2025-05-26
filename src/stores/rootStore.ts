import SessionStore from "./sessionStore";
import BoardStore from "./BoardStore";
import { createContext } from "react";
import { configure } from "mobx";
import CommonStore from "./commonStore";
import CompanyStore from "./CompanyStore";

configure({ enforceActions: 'always' });

export class RootStore {
  sessionStore : SessionStore;
  boardStore : BoardStore;
  companyStore : CompanyStore;
  commonStore : CommonStore;

  constructor() {
    this.sessionStore = new SessionStore(this);
    this.boardStore = new BoardStore(this);
    this.companyStore = new CompanyStore(this);
    this.commonStore = new CommonStore(this);
  }
}

export const RootStoreContext = createContext(new RootStore());