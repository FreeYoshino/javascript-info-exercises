/* 
  What will the code below output?
  alert( alert(1) || 2 || alert(3) );
*/

/* 
  OR(||) 運算子 回傳第1個truthy值，若無則回傳最後一個值
  alert(1) 會先執行(輸出 1 ) 並且沒有回傳值(undefined) 
  繼續執行 遇到2 為 truthy 回傳 2 
  因此這題會輸出 1 然後 2
*/

// 驗證
console.log(console.log(1) || 2 || console.log(3));
