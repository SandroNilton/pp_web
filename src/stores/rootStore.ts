import SessionStore from "./sessionStore";
import BoardStore from "./BoardStore";
import { createContext } from "react";
import { configure } from "mobx";
import CommonStore from "./commonStore";
import CompanyStore from "./CompanyStore";
import BoardViewStore from "./BoardViewStore";
import GeneralObjectiveStore from "./GeneralObjectiveStore";
import HeadquarterStore from "./HeadquarterStore";

configure({ enforceActions: 'always' });

export class RootStore {
  sessionStore : SessionStore;
  boardStore : BoardStore;
  companyStore : CompanyStore;
  headquarterStore : HeadquarterStore;
  boardViewStore : BoardViewStore;
  generalObjectiveStore : GeneralObjectiveStore;
  commonStore : CommonStore;

  constructor() {
    this.sessionStore = new SessionStore(this);
    this.boardStore = new BoardStore(this);
    this.companyStore = new CompanyStore(this);
    this.headquarterStore = new HeadquarterStore(this);
    this.boardViewStore = new BoardViewStore(this);
    this.generalObjectiveStore = new GeneralObjectiveStore(this);
    this.commonStore = new CommonStore(this);
  }
}

export const RootStoreContext = createContext(new RootStore());