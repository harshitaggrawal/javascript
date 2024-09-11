//const name=require("./app.js");
const chalk=require("chalk");
const {name,add}=require("./app.js"); // import from app.js

console.log('Hello World');
console.log(name);
// console.log(add(10,20));

console.log(chalk.green.bold.inverse("hello im using chalk"));


