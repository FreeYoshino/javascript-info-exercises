/* 
  What will be the output?
    function f() {
      alert( this ); // ?
    }
    let user = {
      g: f.bind(null)
    };
    user.g();
*/

/* 
  答案: 會輸出null
  解釋: 函式f 被bind到null 因此當呼叫user.g()時 this會指向null
*/

// 驗證
"use strict";
function f() {
  console.log(this);
}
const user = {
  g: f.bind(null),
};
user.g(); // 輸出: null
