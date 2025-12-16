/* 
  The function makeWorker below makes another function and returns it. That new function can be called from somewhere else.
  Will it have access to the outer variables from its creation place, or the invocation place, or both?
    function makeWorker() {
      let name = "Pete";
      return function() {
        alert(name);
      };
    }
    let name = "John";
    // create a function
    let work = makeWorker();
    // call it
    work(); // what will it show?  

  Which value it will show? “Pete” or “John”?
*/

/* 
  答案: 會輸出 "Pete"
  解釋: 函式會先搜索本地變數 找不到才會往外層尋找 所以會找到 makeWorker 裡的 name 變數
*/

// 驗證
function makeWorker() {
  let name = "Pete";
  return function () {
    console.log(name);
  };
}
let name = "John";
// create a function
let work = makeWorker();
// call it
work(); // Pete