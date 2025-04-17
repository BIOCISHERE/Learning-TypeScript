import { Classes } from "./Classes";

export class Student {
  // Class properties
  name: string;
  lastname?: string;
  classes: Classes[];
  private ID: string = "1234";

  // Constructor
  constructor(name: string, classes: Classes[], lastname?: string) {
    this.name = name;
    if (lastname) {
      this.lastname = lastname;
    }
    this.classes = classes;
  }

  get studiedHours(): number {
    let studiedHours = 0;

    this.classes.forEach((classes: Classes) => {
      studiedHours += classes.hours;
    });

    return studiedHours;
  }

  set student_ID(id: string) {
    this.ID = id;
  }
}
