/* 
  The function sayHi uses an external variable name. When the function runs, which value is it going to use?
    let name = "John";
    function sayHi() {
      alert("Hi, " + name);
    }
    name = "Pete";
    sayHi(); // what will it show: "John" or "Pete"?

  Such situations are common both in browser and server-side development. A function may be scheduled to execute later than it is created, for instance after a user action or a network request.
  So, the question is: does it pick up the latest changes?
*/

/* 
  答案: 會輸出 "Pete"
  解釋: 在JS中 函式執行時會取得當前狀態的外部變數 所以會輸出更新過的value "Pete"
*/

// 驗證
let name = "John";
function sayHi() {
  console.log("Hi, " + name);
}
name = "Pete";
sayHi(); // Hi, Pete