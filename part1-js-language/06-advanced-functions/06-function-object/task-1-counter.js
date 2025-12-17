/* 
  Modify the code of makeCounter() so that the counter can also decrease and set the number:
  - counter() should return the next number (as before).
  - counter.set(value) should set the counter to value.
  - counter.decrease() should decrease the counter by 1.

  P.S. You can use either a closure or the function property to keep the current count. Or write both variants.
*/

const makeCounter = () => {
  let count = 0;
  const counter = () => count++;
  counter.set = (value) => {
    count = value;
  };
  counter.decrease = () => {
    count--;
  };
  return counter;
};

// Example usage:
const counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1
counter.set(10);
console.log(counter()); // 10
counter.decrease();
console.log(counter()); // 10
