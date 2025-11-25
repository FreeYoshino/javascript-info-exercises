/* 
  Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
  P.S. In this task the function should support only natural values of n: integers up from 1.
*/

function pow(x, n) {
  if (n < 1) {
    return `error`;
  }

  let result = 1;
  for (let i = 0; i < n; i++) {
    result = result * x;
  }
  return result;
}

// 驗證
console.log(pow(3, 2)); // 9
console.log(pow(3, 3)); // 27
console.log(pow(10, 3)); // 1000
console.log(pow(2, -1)); // 錯誤
