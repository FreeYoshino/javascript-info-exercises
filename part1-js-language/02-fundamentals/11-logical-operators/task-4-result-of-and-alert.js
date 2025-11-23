/* 
  What will this code show?
  alert( alert(1) && alert(2) );
*/

/* 
  AND(&&) 運算子 回傳第1個falsy值，若無則回傳最後一個值
  alert(1) 會先執行並輸出 1， 但 alert 函式沒有回傳值，因此回傳 undefined (falsy)
  接著 AND 運算子 會回傳 undefined，並結束整個運算式
  因此這題最終出 1 接著是 undefined
*/

// 驗證
console.log(console.log(1) && console.log(2));
