/* 
  What will be the result of this code?
    let x = 1;
    function func() {
      console.log(x); // ?

      let x = 2;
    }
    func();

  P.S. There’s a pitfall in this task. The solution is not obvious.
*/

/* 
  答案: 會發生錯誤
  解釋: func函式內部的x變數在宣告前被使用 會發生錯誤
*/

// 驗證
let x = 1;
function func() {
  console.log(x); // ReferenceError: Cannot access 'x' before initialization
  let x = 2;
}
func();
