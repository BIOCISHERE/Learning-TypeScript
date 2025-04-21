import { ITask, Level } from "./interfaces/ITask";

export class Program implements ITask {
  tittle: string;
  description?: string | undefined;
  completed: boolean;
  urgency?: Level | undefined;

  constructor(tittle: string, completed: boolean, description?: string, urgency?: Level) {
    this.tittle = tittle;
    this.completed = completed;
    this.description = description;
    this.urgency = urgency;
  }

  summary = () => {
    return `Program task: ${this.tittle} - ${this.completed}`;
  };
}
