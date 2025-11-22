/* 
  Rewrite this if using the conditional operator '?':
  let result;
  if (a + b < 4) {
    result = 'Below';
  } else {
    result = 'Over';
  }
*/

const a = 3; // Example value
const b = 2; // Example value

// Rewritten using the conditional operator
const result = a + b < 4 ? "Below" : "Over";
console.log(result);