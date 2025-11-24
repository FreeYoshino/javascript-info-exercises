/* 
  For each loop write down which values it is going to show. Then compare with the answer.
  Both loops alert same values or not?
*/

/* 
  1.The postfix form: 
  for (let i = 0; i < 5; i++) alert(i);
*/

/* 
  2.The prefix form:
  for (let i = 0; i < 5; ++i) alert(i);
*/

/* 
  for loop 是在每次迭代操作完後再進行遞增遞減操作的
  所以兩個for loop 會顯示相同的輸出: 0, 1, 2, 3, 4
*/

// 1.The postfix form:
console.log("---- Postfix form ----");
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 2.The prefix form:
console.log("---- Prefix form ----");
for (let i = 0; i < 5; ++i) {
  console.log(i);
}
