/* 
  Write the code which asks for a login with prompt.
  If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

  The password is checked as follows:
  - If it equals “TheMaster”, then show “Welcome!”,
  - Another string – show “Wrong password”,
  - For an empty string or cancelled input, show “Canceled”

  Please use nested if blocks. Mind the overall readability of the code.
*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your User name:", (username) => {
  if (username === "Admin") {
    // Prompt for password
    rl.question("Enter your password:", (password) => {
      if (password === "TheMaster") {
        console.log("Welcome!");
        rl.close();
      } else if (password === "" || password === null) {
        console.log("Canceled.");
        rl.close();
      } else {
        console.log("Wrong password.");
        rl.close();
      }
    });
  } else if (username === "" || username === null) {
    console.log("Canceled.");
    rl.close();
  } else {
    console.log("I don't know you.");
    rl.close();
  }
});
