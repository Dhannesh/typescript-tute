// Basic types are
// number, string, boolean
let firstName = "Dhanesh";
console.log(firstName.toLocaleUpperCase());
let count = 10;
let price = 999.99;
let temperature = -5;
let score = 95.5;
console.log(price.toFixed(1));
// boolean
let isAdmin = true;
let hasPermission = false;
//string -> premitive type (always use)
//String -> class (Should not use)
let name1 = new String("Hello");
// null and undefined -> both are type of value
let resul = undefined;
let username = "Alice";
// username = null; //null not assigned to string type
let uname = "Happy"; //union
uname = null;
const getSavedUser = () => {
    return "ramesh";
    return null;
};
let uname2 = getSavedUser();
if (username !== null)
    uname2?.toUpperCase();
const chars = ["A", "B"];
const cuser = chars.find((c) => c === "C");
console.log(cuser);
const hugeNumber = 4564654644841665466464161n;
const id1 = Symbol("id");
const id2 = Symbol("id");
// console.log(id1 === id2); //false
// console.log(id1 == id2); //false
// Special Type: any, void, never, unknown
// any -> don't check the type of value
let someValue = "hello";
someValue.toUpperCase();
someValue.notAReadMethod();
someValue.foo.bar.baz;
// unknown -> type safe alternative of any
// perform typecheck before you interact with value
let dynamicValue = "Hello World";
dynamicValue.calculateTotal();
dynamicValue.foo.bar;
let dynamicValue2 = "Hello World";
if (typeof dynamicValue2 === "string")
    dynamicValue2.toUpperCase();
// dynamicValue2.foo.bar;
// void -> function doen't have any return type
const logMessage = (message) => {
    console.log(message);
};
// never -> function return never means it failed to complete the execution
// if function only crete exception
const keepAlive = () => {
    while (true) {
        console.log("Hearbeat...");
    }
};
export {};
//# sourceMappingURL=2.base-type.js.map