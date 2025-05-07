import SessionStore from "./sessionStore";
import BoardStore from "./BoardStore";
import { createContext } from "react";

export class RootStore {
  sessionStore : SessionStore;
  boardStore : BoardStore;

  constructor() {
    this.sessionStore = new SessionStore(this);
    this.boardStore = new BoardStore(this);
  }
}

export const RootStoreContext = createContext(new RootStore());