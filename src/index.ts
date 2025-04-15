// This is a comment in TypeScript

import { deleteAllCookies, deleteCookie, getCookieValue, setCookie } from "cookies-utils";

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

// Functions

/**
 * Function that displays a greeting on the console
 */
function greetings() {
  let name = "Martin";
  console.log(`Hi ${name}!`);
}

// Function invocation
greetings();

/**
 * Function that displays a console greeting to a person
 * @param name Name of the person
 */
function greetingsPerson(name: string) {
  console.log(`Hi ${name}!`);
}

greetingsPerson("Martin");

/**
 * Function that displays a console that says goodbye to a person
 * @param name Name of the person, by default will be "James"
 */
function goodbyePerson(name: string = "James") {
  console.log(`Goodbye ${name}!`);
}

goodbyePerson(); // Goodbye James!
goodbyePerson("Larry"); // Goodbye Larry!

/**
 * Function that displays a console that says goodbye to a person
 * @param name (Optional) Name of the person to say goodbye to
 */
function optionalGoodbye(name?: string) {
  if (name) {
    console.log(`Goodbye ${name}!`);
  } else {
    console.log("Goodbye!");
  }
}

optionalGoodbye(); // Goodbye!
optionalGoodbye("Larry"); // Goodbye Larry!

function multipleParams(name: string, lastname?: string, age: number = 18) {
  if (lastname) {
    console.log(`${name} ${lastname} is ${age} years old`);
  } else {
    console.log(`${name} is ${age} years old`);
  }
}

multipleParams("Larry"); // Larry is 18 years old
multipleParams("Larry", "Evil"); // Larry Evil is 18 years old
multipleParams("Larry", undefined, 30); // Larry is 30 years old
multipleParams("Larry", "Evil", 30); // Larry Evil is 30 years old

function multipleTypeExample(a: string | number) {
  if (typeof a === "string") {
    console.log("A is a string");
  } else if (typeof a === "number") {
    console.log("A is a number");
  } else {
    console.log("A is neither a string nor a number");
    throw Error("A is neither a string nor a number");
  }
}

multipleTypeExample("Hello");
multipleTypeExample(3);

/**
 * Function that returns a persons fullname
 * @param name Name of the person
 * @param lastname Lastname of the person
 * @returns Returns fullname
 */
function returnExample(name: string, lastname: string): string {
  return `${name} ${lastname}`;
}

const fullName = returnExample("Larry", "Evil");
console.log(fullName); // Larry Evil
console.log(returnExample("Larry", "Evil")); // Larry Evil

/**
 * Function that recives an array of names and prints them in the console
 * @param names Array of string names
 */
function multipleParamsExample(...names: string[]): void {
  names.forEach((name) => {
    console.log(name);
  });
}

multipleParamsExample("Martin");
multipleParamsExample("Martin", "Larry", "James");

const list = ["Martin", "Larry", "James"];
multipleParamsExample(...list);

function paramListExample(names: string[]) {
  names.forEach((name) => {
    console.log(name);
  });
}

paramListExample(list);

// ARROW Functions

type Worker = {
  name: string;
  lastname: string;
  age: number;
};

let workerLarry: Worker = {
  name: "Larry",
  lastname: "Evil",
  age: 30,
};

const showWorker = (worker: Worker) => `${worker.name} has ${worker.age} years old`;

showWorker(workerLarry);

const workerData = (worker: Worker): string => {
  if (worker.age > 70) {
    return `Worker ${worker.name} is about to retire`;
  } else {
    return `Worker ${worker.name} is in working age`;
  }
};

workerData(workerLarry);

const getSalary = (worker: Worker, charge: () => string) => {
  if (worker.age > 70) {
    return;
  } else {
    charge(); // Callback
  }
};

getSalary(workerLarry, () => "Charge Larry salary");

// Async Functions

async function exampleAsync(): Promise<string> {
  // Await
  await console.log("Task before going foward with the sequence");
  console.log("Task done");
  return "Completed";
}

exampleAsync()
  .then((response) => {
    console.log("Response", response);
  })
  .catch((error) => {
    console.log("Theres been an error", error);
  })
  .finally(() => "Everything is completed");

// Generators

function* exampleGenerator() {
  // Yield --> to generate values

  let index = 0;

  while (index < 5) {
    // We emit an incremented value
    yield index++;
  }
}
// We save the generator func in a variable
let generator = exampleGenerator();
// We access the emmited values
console.log(generator.next().value); // 0
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3
console.log(generator.next().value); // 4

// Worker

function* watcher(value: number) {
  yield value; // We yield the initial value
  yield* worker(value); // We call worker yield to emit other values
  yield value + 4; // We yield the final value + 4
}

function* worker(value: number) {
  yield value + 1;
  yield value + 2;
  yield value + 3;
}

let generatorSaga = watcher(0);

console.log(generatorSaga.next().value); // 0 (Done by watcher)
console.log(generatorSaga.next().value); // 1 (Done by worker)
console.log(generatorSaga.next().value); // 2 (Done by worker)
console.log(generatorSaga.next().value); // 3 (Done by worker)
console.log(generatorSaga.next().value); // 4 (Done by watcher)

// Cookies

const cookieOptions = {
  name: "user",
  value: "Larry",
  maxAge: 10 * 60,
  expires: new Date(2099, 10, 1),
  path: "/",
};

// We set the cookie
setCookie(cookieOptions);

// Read a cookie
let readCookie = getCookieValue("user");

// Delete
deleteCookie("user");

// Delete all cookies
deleteAllCookies();

// Tempo class
class Tempo {
  public finish?: (time: number) => void;

  public start(): void {
    setTimeout(() => {
      if (!this.finish) return;
      this.finish(Date.now());
    }, 10000);
  }
}

const myTempo: Tempo = new Tempo();

myTempo.finish = (time: number) => {
  console.log("Finished event at: ", time);
};

myTempo.start();

delete myTempo.finish;
