import { IArea } from "./area";

export interface IHeadquarter {
  id: string;
  address: string;
  group: string;
  companyId: string;
  areas: IArea[];
}