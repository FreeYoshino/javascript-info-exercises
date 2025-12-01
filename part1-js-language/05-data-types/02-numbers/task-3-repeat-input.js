/* 
  Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.
  The resulting value must be returned as a number.
  The visitor can also stop the process by entering an empty line or pressing “CANCEL”. In that case, the function should return null.
*/

import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const readNumber = async () => {
  const rl = readline.createInterface({ input, output });
  let inputValue;
  do {
    inputValue = await rl.question("Enter a number: ");
  }while(!isFinite(inputValue));
  rl.close();

  if (inputValue === "" || inputValue === null) {
    return null;  
  }
  return Number(inputValue);
};

const result = await readNumber();
console.log("Result:", result);
