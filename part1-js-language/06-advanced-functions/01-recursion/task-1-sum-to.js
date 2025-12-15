/* 
  Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.
  For instance: 
    sumTo(1) = 1
    sumTo(2) = 2 + 1 = 3
    sumTo(3) = 3 + 2 + 1 = 6
    sumTo(4) = 4 + 3 + 2 + 1 = 10
    ...
    sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

  Make 3 solution variants:
    1. Using a for loop.
    2. Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
    3. Using the arithmetic progression formula.

  P.S. Which solution variant is the fastest? The slowest? Why?
  P.P.S. Can we use recursion to count sumTo(100000)?
*/

// 1. Using a for loop
const sumToFor = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

// 2. Using recursion
const sumToRecursion = (n) => {
  if (n === 1) {
    return 1;
  }
  return n + sumToRecursion(n - 1);
};

// 3. Using the arithmetic progression formula
const sumToFormula = (n) => {
  return (n * (n + 1)) / 2;
};

// Example usage:
console.log(sumToFor(100)); // 5050
console.log(sumToRecursion(100)); // 5050
console.log(sumToFormula(100)); // 5050

/* 
  Preformance Analysis:
  - 使用公式的解法是最快的 因為它只需要進行常數次的計算
  - 使用迴圈的解法第二快 因為它只需要n次的加法運算
  - 使用遞迴的解法是最慢的 它會進行n次的函式呼叫 每次呼叫都需要額外的記憶體空間來存放呼叫堆疊 效能較差

  sumTo(100000) 使用遞迴方法 可能會因為超過最大呼叫堆疊深度而導致錯誤
*/
