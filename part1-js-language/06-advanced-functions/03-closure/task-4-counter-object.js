/* 
  Here a counter object is made with the help of the constructor function.
  Will it work? What will it show?
    function Counter() {
      let count = 0;
      this.up = function() {
        return ++count;
      };
      this.down = function() {
        return --count;
      };
    }
    let counter = new Counter();
    alert( counter.up() ); // ?
    alert( counter.up() ); // ?
*/

/* 
  答案: 會成功 並輸出 1 2
  解釋: 建立Counter物件時 count變數會做為私有變數被保存在Counter作用域內
        當呼叫up或down方法時 會存取並修改該私有變數 
        因此每次呼叫up方法時 count會遞增1 並回傳新的值
*/

// 驗證
function Counter() {
  let count = 0;
  this.up = function () {
    return ++count;
  };
  this.down = function () {
    return --count;
  };
}
let counter = new Counter();
console.log(counter.up()); // 1
console.log(counter.up()); // 2
console.log(counter.down()); // 1
