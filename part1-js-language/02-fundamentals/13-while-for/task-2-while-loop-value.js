/* 
  For every loop iteration, write down which value it outputs and then compare it with the solution.
  Both loops alert the same values, or not?
*/

/* 
  1.The prefix form ++i:
  let i = 0;
  while (++i < 5) alert( i );
*/

/* 
  2.The postfix form i++:
  let i = 0;
  while (i++ < 5) alert( i );
*/

/* 
  前綴式 ++i 會先將i增加1 然後再進行比較 所以當i從0開始時 會依次輸出1 2 3 4
  後綴式 i++ 會先進行比較 然後再將i增加1 所以當i從0開始時 會依次輸出1 2 3 4 5
  兩個迴圈輸出的值不完全相同
*/

// 1.The prefix form ++i:
console.log("---- Prefix form ++i ----");
let i = 0;
while (++i < 5) {
  console.log(i);
}

// 2.The postfix form i++:
console.log("----P Postfix form i++ ----");
i = 0;
while (i++ < 5) {
  console.log(i);
}
