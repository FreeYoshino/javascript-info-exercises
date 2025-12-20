/* 
  Can we change this by additional binding?
  What will be the output?
    function f() {
      alert(this.name);
    }
    f = f.bind( {name: "John"} ).bind( {name: "Ann" } );
    f();
*/

/* 
  答案: 會輸出 "John"
  解釋: bind一旦綁訂了一個context 就無法再改變
*/

// 驗證
function f() {
  console.log(this.name);
}
f = f.bind({ name: "John" }).bind({ name: "Ann" });
f(); // John
