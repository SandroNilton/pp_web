import { IArea } from "./area";

export interface IHeadquarter {
  id: string;
  code: string;
  address: string;
  pahs: string;
  group: string;
  companyId: string;
  areas: IArea[];
}