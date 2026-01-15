/* 
  Are these code fragments equal? In other words, do they behave the same way in any circumstances, for any handler functions?

    promise.then(f1).catch(f2);
  Versus:
    promise.then(f1, f2);
*/

/* 
  兩段代碼並不完全相等
  第一個代碼片段 使用了chain的方式來處理promise 代表.then產生的result/error 會被後續的.catch來處理
  第二個代碼片段 則是將兩個handler都放在.then中 代表只有原始promise的result/error會被處理
*/
