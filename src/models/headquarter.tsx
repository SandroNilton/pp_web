import { IArea } from "./area";

export interface IHeadquarter {
  id: string;
  name: string;
  group: string;
  companyId: string;
  areas: IArea[];
}