import { Atividade } from "./atividade";

export interface Projeto {
  id: number;
  name: string;
  startDate: Date;
  endDate: Date;
  members: string[];
  atividades: Atividade[];
  description: string;
}
