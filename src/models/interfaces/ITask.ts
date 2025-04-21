export enum Level {
  "Informative",
  "Urgent",
  "Blocking",
}

// Interface it is used to define the signature and the points necessary to implemented by whoever uses it
export interface ITask {
  tittle: string;
  description?: string;
  completed: boolean;
  urgency?: Level;
  summary: () => string;
}
