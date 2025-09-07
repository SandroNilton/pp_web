import { IHeadquarter } from "./company/headquarter";

export interface ICompany {
  id: string;
  ruc: string;
  name: string;
  str_activity: string;
  leg_representative: string;
  eco_activity: string;
  headquarters?: IHeadquarter[];
}