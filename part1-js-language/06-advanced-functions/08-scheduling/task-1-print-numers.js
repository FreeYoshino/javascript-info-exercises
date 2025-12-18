/* 
  Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.
  Make two variants of the solution.
  1. Using setInterval.
  2. Using nested setTimeout.
*/

const printNumbersInterval = (from, to) => {
  let currentNum = from;
  const intervalId = setInterval(() => {
    console.log(currentNum);
    if (currentNum === to) {
      clearInterval(intervalId);
    }
    currentNum++;
  }, 1000);
};

const printNumbersTimeout = (from, to) => {
  let currentNum = from;
  setTimeout(function print() {
    console.log(currentNum);
    if (currentNum < to) {
      currentNum++;
      setTimeout(print, 1000);
    }
  }, 1000);
};

// Example usage:
printNumbersInterval(5, 10);
printNumbersTimeout(5, 10);
