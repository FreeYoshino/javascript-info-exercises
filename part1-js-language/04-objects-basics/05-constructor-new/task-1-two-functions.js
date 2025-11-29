/* 
  Is it possible to create functions A and B so that new A() == new B()?
    function A() { ... }
    function B() { ... }

    let a = new A();
    let b = new B();

    alert( a == b ); // true
  If it is, then provide an example of their code.
*/

/* 
  答案: 是的 可以讓A、B function 都回傳同一個物件 覆蓋掉本應回傳的個別新物件
*/
// 解答範例:
const obj = {};
function A() {
  return obj;
}
function B() {
  return obj;
}
const a = new A();
const b = new B();
console.log(a == b); // true