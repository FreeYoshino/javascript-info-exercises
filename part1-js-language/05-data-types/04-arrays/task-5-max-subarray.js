/* 
  The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].
  The task is: find the contiguous subarray of arr with the maximal sum of items.
  Write the function getMaxSubSum(arr) that will return that sum.
  If all items are negative, it means that we take none (the subarray is empty), so the sum is zero:
*/

// 回傳最大連續子陣列的和
const getMaxSubSum = (arr) => {
  let maxSum = 0; // 儲存最大和
  let currentSum = 0; // 儲存當前和

  for (let num of arr) {
    currentSum += num;
    maxSum = Math.max(maxSum, currentSum);
    if (currentSum < 0) {
      // 如果當前和為負，重置為0
      currentSum = 0;
    }
  }
  return maxSum;
};

console.log(getMaxSubSum([-1, 2, 3, -9])); // 5
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100
console.log(getMaxSubSum([1, 2, 3])); // 6
console.log(getMaxSubSum([-1, -2, -3])); // 0
