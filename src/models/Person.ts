export class Person {
  name: string;
  lastname: string;
  age: number;

  constructor(name: string, lastname: string, age: number) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }

  greet(): void {
    console.log(`Hi, my name is ${this.name} ${this.lastname} and  i have ${this.age} years.`);
  }
}

export class Employee extends Person {
  salary: number;

  constructor(name: string, lastname: string, age: number, salary: number) {
    super(name, lastname, age);
    this.salary = salary;
  }

  greet(): void {
    super.greet();
    console.log(`My salary is $${this.salary}`);
  }
}

export class Boss extends Person {
  employees: Employee[] = [];

  constructor(name: string, lastname: string, age: number) {
    super(name, lastname, age);
  }
}
