/* 
  What will the result be?
  alert( null || 2 && 3 || 4 );
*/

/* 
  AND(&&) 優先級大於 OR(||) 因此先運行 2 && 3 運算式 回傳 3 (皆為 truthy)
  接著運行 null || 3 || 4 運算式， 回傳第一個 truthy 值 3
  最終結果為 3
*/

// 驗證
console.log(null || (2 && 3) || 4);
