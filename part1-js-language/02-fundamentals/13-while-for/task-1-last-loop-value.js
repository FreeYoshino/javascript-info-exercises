/* 
  What is the last value alerted by this code? Why?
*/
/* 
  let i = 3;
  while (i) {
    alert( i-- );
  }
*/

/* 
  while 的條件判斷 (i) 會在false時停止迴圈 也就是說當 i 減到 0 時 迴圈會停止
  因此最後一次 alert 的值是 1 因為當 i 為 1 時 會進入迴圈並 alert(1) 然後 i-- 變成 0
*/

// 驗證
let i = 3;
while (i) {
  console.log(i--);
}
