// Basic types are
// number, string, boolean

let firstName: string = "Dhanesh";

console.log(firstName.toLocaleUpperCase());

let count: number = 10;
let price: number = 999.99;
let temperature: number = -5;
let score: number = 95.5;
console.log(price.toFixed(1));

// boolean
let isAdmin: boolean = true;
let hasPermission: boolean = false;

//string -> premitive type (always use)
//String -> class (Should not use)
let name1: String = new String("Hello");

// null and undefined -> both are type of value
let resul: undefined = undefined;

let username: string = "Alice";
// username = null; //null not assigned to string type

let uname: string | null = "Happy"; //union
uname = null;

const getSavedUser = () => {
  return "ramesh";
  return null;
};

let uname2: string | null = getSavedUser();
if (username !== null) uname2?.toUpperCase();

const chars = ["A", "B"];
const cuser: string | undefined = chars.find((c) => c === "C");

console.log(cuser);

const hugeNumber: bigint = 4564654644841665466464161n;

const id1 = Symbol("id");
const id2 = Symbol("id");
// console.log(id1 === id2); //false
// console.log(id1 == id2); //false

// Special Type: any, void, never, unknown
// any -> don't check the type of value

let someValue: any = "hello";
someValue.toUpperCase();
someValue.notAReadMethod();
someValue.foo.bar.baz;

// unknown -> type safe alternative of any
// perform typecheck before you interact with value
let dynamicValue: any = "Hello World";
dynamicValue.calculateTotal();
dynamicValue.foo.bar;

let dynamicValue2: unknown = "Hello World";
if (typeof dynamicValue2 === "string") dynamicValue2.toUpperCase();
// dynamicValue2.foo.bar;

// void -> function doen't have any return type
const logMessage = (message: string): void => {
  console.log(message);
};

// never -> function return never means it failed to complete the execution
// if function only crete exception

const keepAlive = (): never => {
  while (true) {
    console.log("Hearbeat...");
  }
};
