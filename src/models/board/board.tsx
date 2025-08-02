import { IBoardView } from "./boardView";

export interface IBoard {
  id: string;
  name: string;
  order: number;
  views: IBoardView[];
}