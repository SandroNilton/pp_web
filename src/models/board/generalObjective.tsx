import { IJob } from "./job";
import { ISpecificObjective } from "./specificObjective";

export interface IGeneralObjective {
  id: string;
  name: string;
  boardId: string;
  order: number;
  specificObjectives: ISpecificObjective[];
  jobs: IJob[];
}