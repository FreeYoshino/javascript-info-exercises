/* 
  Create a script that prompts the visitor to enter two numbers and then shows their sum.
*/

import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const main = async () => {
  const rl = readline.createInterface({ input, output });
  const num1 = await rl.question("Enter the first number: ");
  const num2 = await rl.question("Enter the second number: ");
  const sum = Number(num1) + Number(num2);
  console.log(`Sum of ${num1} and ${num2} is ${sum}.`);
  rl.close();
};

main();
