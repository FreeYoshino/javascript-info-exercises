// What is the output of the script?

let name = "Ilya";

alert(`hello ${1}`); // ?
// Answer: hello 1

alert(`hello ${"name"}`); // ?
// Answer: hello name

alert(`hello ${name}`); // ?
// Answer: hello Ilya


// Explanation:
// In the first alert, the expression ${1} evaluates to the number 1.
// In the second alert, the expression ${"name"} evaluates to the string "name".
// In the third alert, the expression ${name} evaluates to the value of the variable name, which is "Ilya".

