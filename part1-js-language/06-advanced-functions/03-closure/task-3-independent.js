/* 
  Here we make two counters: counter and counter2 using the same makeCounter function.
  Are they independent? What is the second counter going to show? 0,1 or 2,3 or something else?
    function makeCounter() {
      let count = 0;
      return function() {
        return count++;
      };
    }
    let counter = makeCounter();
    let counter2 = makeCounter();
    alert( counter() ); // 0
    alert( counter() ); // 1
    alert( counter2() ); // ?
    alert( counter2() ); // ?
*/

/* 
  答案: 也是輸出 0,1
  解釋: 呼叫的makeCounter 會各自建立獨立的Lexical Environments 所以 counter 和 counter2 會有各自的 count 變數
*/

// 驗證
function makeCounter() {
  let count = 0;
  return function () {
    return count++;
  };
}
let counter = makeCounter();
let counter2 = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter2());
console.log(counter2());
