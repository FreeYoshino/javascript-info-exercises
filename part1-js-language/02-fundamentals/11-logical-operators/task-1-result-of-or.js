/* 
  What is the code below going to output?
  alert( null || 2 || undefined );
*/

/* 
  OR(||) 運算子 回傳第1個truthy值，若無則回傳最後一個值
  因此這題會輸出 2
*/

// 驗證
console.log(null || 2 || undefined);
