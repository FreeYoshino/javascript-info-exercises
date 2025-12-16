/* 
  Look at the code. What will be the result of the call at the last line?
    let phrase = "Hello";
    if (true) {
      let user = "John";

      function sayHi() {
        alert(`${phrase}, ${user}`);
      }
    }
    sayHi();
*/

/* 
  答案: 會發生錯誤 
  解釋: 因為sayHi函式是在if的區塊內定義的 所以區塊外部的程式無法存取他
*/

// 驗證
"use strict"; // 強制開啟嚴格模式 確保實驗結果正確
let phrase = "Hello";
if (true) {
  let user = "John";
  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
}
sayHi();
