import { IArea } from "./area";

export interface IHeadquarter {
  id: string;
  code: string;
  address: string;
  pahs: string;
  icn: string;
  phone: string;
  email: string;
  group: string;
  companyId: string;
  areas: IArea[];
}