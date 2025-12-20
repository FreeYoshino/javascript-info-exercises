/* 
  There’s a value in the property of a function. Will it change after bind? Why, or why not?
    function sayHi() {
      alert( this.name );
    }
    sayHi.test = 5;
    let bound = sayHi.bind({
      name: "John"
    });
    alert( bound.test ); // what will be the output? why?
*/

/* 
  答案: 會輸出 undefined
  解釋: 綁定函數 (bound function) 並不會繼承原始函數的屬性 因此，bound.test 是未定義的
*/

// 驗證
function sayHi() {
  console.log(this.name);
}
sayHi.test = 5;
const bound = sayHi.bind({
  name: "John",
});
console.log(bound.test); // 輸出: undefined
