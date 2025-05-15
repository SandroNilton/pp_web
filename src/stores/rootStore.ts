import SessionStore from "./sessionStore";
import BoardStore from "./BoardStore";
import { createContext } from "react";
import { configure } from "mobx";
import CommonStore from "./commonStore";

configure({ enforceActions: 'always' });

export class RootStore {
  sessionStore : SessionStore;
  boardStore : BoardStore;
  commonStore : CommonStore;

  constructor() {
    this.sessionStore = new SessionStore(this);
    this.boardStore = new BoardStore(this);
    this.commonStore = new CommonStore(this);
  }
}

export const RootStoreContext = createContext(new RootStore());