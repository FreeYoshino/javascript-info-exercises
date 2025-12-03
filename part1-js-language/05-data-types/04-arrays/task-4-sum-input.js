/* 
  Write the function sumInput() that:
  - Asks the user for values using prompt and stores the values in the array.
  - Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
  - Calculates and returns the sum of array items.
  P.S. A zero 0 is a valid number, please don’t stop the input on zero.
*/

import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const sumInput = async () => {
  const rl = readline.createInterface({ input, output });
  const numbers = [];
  while (true) {
    const value = await rl.question("Enter a number: ");
    if (value === "" || value === null || !isFinite(value)) {
      break;
    }
    numbers.push(Number(value));
  }

  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  rl.close();
  return sum;
};

console.log("Sum:", await sumInput());
