// This is a comment in TypeScript

/**
 * * This is a multi-line comment in TypeScript
 */

console.log("Hello typeScript");

// **Variable declaration:
var user: string = "Martin";

console.log("hi, " + user);
console.log("hi ", user, ", how are you?");
console.log(`hi ${user}, how are you?`);

let email = "martin@gmail.com"; // Local variable
console.log(`Email of ${user} is ${email}`);

const PI: number = 3.14; // Constant variable

var lastname: any = "Smith"; // Any type variable
lastname = 123; // Can be changed to any type

var error: boolean; // Boolean variable
error = false;

console.log(`¿is theere an error?: ${error}`);

// **Multiple variable declaration
let a: string, b: boolean, c: number;
a = "TypeScript";
b = true;
c = 8.9;

// Built in types: number, string, boolean, any, void, null, undefined

// **Complex types

// Array of strings
let todolist: string[] = ["todo 1", "todo 2", "todo 3"];

// Array of mixed types
let values: (boolean | string | number)[] = [false, "hi", true, 56];

// **Enum type
enum States {
  "completed" = "C",
  "incomplete" = "I",
  "inprogress" = "IP",
}

enum RacePlaces {
  "first" = 1,
  "second",
  "third",
}

let todoStates: States = States.completed;
let marathonPlace: RacePlaces = RacePlaces.second;

// **Interfaces
interface Task {
  name: string;
  state: States;
  emergency: number;
}

// We can create a variavle that follows the Task interface
let task1: Task = {
  name: "Tarea 1",
  state: States.inprogress,
  emergency: 10,
};

console.log(`Task: ${task1.name}`);

// **Multiple variable assignment
let myTask = {
  name: "My task",
  state: States.completed,
  emergency: 1,
};

// One-to-one statement
let myName = myTask.name;
let myState = myTask.state;
let myEmergency = myTask.emergency;

// Declaration with spread factor
let { name, state, emergency } = myTask;

let mondayList: string[] = ["Milk", "Potatoes"];
let tuesdayList: string[] = [...mondayList, "Bread", "Eggs"];
let wednesdayList: string[] = ["Meat", "Fish"];
let weekendList = [...mondayList, ...wednesdayList];

let appState = {
  user: "admin",
  session: 3,
  jwt: "bearer123456789",
};

let newAppState = {
  ...appState,
  session: 4,
};
// **Types of TypeScript
type Product = {
  name: string;
  price: number;
  year: number;
};

let car: Product = {
  name: "Audi",
  price: 45000,
  year: 2010,
};
// **Conditionals

// Ternary operator
console.log(car.year < 2010 ? `Car: ${car.name} is old` : `Car: ${car.name} is new`);

// if - else
if (error) {
  console.log("Theres an error");
} else {
  console.log("Theres no error");
}

// if - else if - else
if (car.year > 2010) {
  console.log(`car: ${car.name} is old`);
} else if (car.year === 2010) {
  console.log(`car: ${car.name} is from the year 2010`);
} else {
  console.log(`Car: ${car.name} is new`);
}

// Switch
switch (task1.state) {
  case States.completed:
    console.log("Task is completed");
    break;
  case States.incomplete:
    console.log("Task is not completed");
    break;
  case States.inprogress:
    console.log("Task is in progress");
    break;
  default:
    break;
}

// ** Loops

let newTaskList: Task[] = [
  { name: "Task1", state: States.completed, emergency: 2 },
  { name: "Task2", state: States.inprogress, emergency: 0 },
  { name: "Task3", state: States.incomplete, emergency: 15 },
];

// Classic loop
for (let index = 0; index < newTaskList.length; index++) {
  const task = newTaskList[index];
  console.log(`${index} - ${task.name}}`);
}

// Foreach
newTaskList.forEach((task: Task, index: number) => {
  console.log(`${index} - ${task.name}`);
});

// While loops
while (task1.state !== States.completed) {
  if (task1.emergency == 50) {
    task1.state = States.completed;
    break;
  } else {
    task1.emergency++;
  }
}

// Do While (executes al least once)
do {
  task1.emergency++;
  task1.state = States.completed;
} while (task1.state !== States.completed);
