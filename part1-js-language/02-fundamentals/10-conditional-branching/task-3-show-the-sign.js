/* 
  Using if..else, write the code which gets a number via prompt and then shows in alert:
  - 1, if the value is greater than zero,
  - -1, if less than zero,
  - 0, if equals zero.
  In this task we assume that the input is always a number.
*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a number: ", (input) => {
  // Convert the input to a number data type
  const number = Number(input);

  if (number > 0) {
    console.log(1);
  } else if (number < 0) {
    console.log(-1);
  } else {
    console.log(0);
  }
  rl.close();
});
