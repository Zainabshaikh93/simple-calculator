#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter your first number", type: "number", name: "firstNumber" },
  { message: "Enter your second number", type: "number", name: "secondNumber" },
  { message: "Select one of each operator to perform action", type:"list", name: "operator", choices:["+","-","/","*"] },
]);

if(answer.operator === "+"){
console.log(answer.firstNumber + answer.secondNumber);
}else if (answer.operator === "-"){
  console.log(answer.firstNumber - answer.secondNumber);
}else if (answer.operator === "*"){
  console.log(answer.firstNumber * answer.secondNumber);
}else if (answer.operator === "/"){
  console.log(answer.firstNumber / answer.secondNumber);
}else(console.log("invalid value"));
