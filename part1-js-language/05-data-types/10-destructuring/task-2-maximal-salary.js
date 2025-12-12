/* 
  There is a salaries object:
    let salaries = {
      "John": 100,
      "Pete": 300,
      "Mary": 250
    };

  Create the function topSalary(salaries) that returns the name of the top-paid person.
    If salaries is empty, it should return null.
    If there are multiple top-paid persons, return any of them.
  
  P.S. Use Object.entries and destructuring to iterate over key/value pairs.
*/

const topSalary = (salaries) => {
  let maxSalary = 0;
  for (const [name, salary] of Object.entries(salaries)) {
    if (salary > maxSalary) {
      maxSalary = salary;
    }
  }
  return maxSalary === 0
    ? null
    : Object.keys(salaries).find((name) => salaries[name] === maxSalary);
};

// Example usage:
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
console.log(topSalary(salaries)); // Pete

let emptySalaries = {};
console.log(topSalary(emptySalaries)); // null
