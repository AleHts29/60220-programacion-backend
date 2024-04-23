

const SingletonClass = require("./singlenton.js")

let clase1 = SingletonClass.getInstance();
let clase2 = SingletonClass.getInstance();
let clase3 = SingletonClass.getInstance();
let clase4 = SingletonClass.getInstance();

console.log(clase1);
console.log(clase2);
console.log(clase3);
console.log(clase4);