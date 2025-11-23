/* 
  Write an if condition to check that age is NOT between 14 and 90 inclusively.
  Create two variants: the first one using NOT !, the second one – without it.
*/

const age = 10; // change this value to test

// First variants using NOT
if (!(age >= 14 && age <= 90)) {
  console.log("NOT veriant: Age is NOT between 14 and 90 inclusively.");
}

// Second variant without using NOT
if (age < 14 || age > 90) {
  console.log("Without NOT veriant: Age is NOT between 14 and 90 inclusively.");
}