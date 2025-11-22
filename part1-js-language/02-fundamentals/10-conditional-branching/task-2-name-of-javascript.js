/* 
  Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript ?’
  If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!” 
*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is the “official” name of JavaScript: ", (answer) => {
  if (answer === "ECMAScript") {
    console.log("Righit!");
  } else {
    console.log("You don't know? ECMAScript!");
  }
  rl.close();
});
