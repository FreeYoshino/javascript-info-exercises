/* 
  What is the result? Why?
    let arr = ["a", "b"];
    arr.push(function() {
      alert( this );
    });
    arr[2](); // ?
*/

// 答案:
// 對arr添加了一個function 到末尾並呼叫它
// 結果會輸出 "a,b,function() { alert( this ); }" 代表陣列的內容

// 驗證
const arr = ["a", "b"];
arr.push(function () {
  console.log(this);
});
arr[2](); // "a,b,function() { alert( this ); }"
