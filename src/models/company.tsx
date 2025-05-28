import { IHeadquarter } from "./headquarter";

export interface ICompany {
  id: string;
  name: string;
  group: string;
  headquarters?: IHeadquarter[];
}