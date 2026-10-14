const userName = "Dhaneshwar Kumar";
const age = 42;
console.log(`Hello ${userName}, you are ${age} years old.`);
let name = "John"; //type Inference
// name=120;
const address = "Ghaziabad"; //Type Annotations
const greet = (name) => {
    return `Hello, ${name}`;
};
const add = (a, b) => {
    return a + b;
};
// add("Hello","Bye");
const scores = [10, 20, 30];
const names = ["John", "Jane", "Alex"]; //Infer Automatically
// const x; //throw error because of const
let y;
console.log("type of y:", typeof y); //undefined
// regular Inference = Right => Left
// Contextual Typing = Left => Right
const user = {
    name: "John",
    age: 30,
    isLogin: false,
};
console.log(user);
const users = ["Alice", "Bob", "Cahrlie"];
users.forEach((user) => console.log(user));
export {};
//# sourceMappingURL=index.js.map