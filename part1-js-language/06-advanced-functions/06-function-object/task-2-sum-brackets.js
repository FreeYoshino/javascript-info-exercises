/* 
  Write function sum that would work like this:
    sum(1)(2) == 3; // 1 + 2
    sum(1)(2)(3) == 6; // 1 + 2 + 3
    sum(5)(-1)(2) == 6
    sum(6)(-1)(-2)(-3) == 0
    sum(0)(1)(2)(3)(4)(5) == 15
  P.S. Hint: you may need to setup custom object to primitive conversion for your function.
*/

const sum = (num) => {
  let currentSum = num;
  const f = (nextNum) => {
    currentSum += nextNum;
    return f;
  };
  f.toString = () => currentSum; // 轉換為字串時回傳 currentSum
  return f;
};

// Example usage:
console.log(+sum(1)(2)); // 3
console.log(+sum(1)(2)(3)); // 6
console.log(+sum(5)(-1)(2)); // 6
console.log(+sum(6)(-1)(-2)(-3)); // 0
console.log(+sum(0)(1)(2)(3)(4)(5)); // 15
