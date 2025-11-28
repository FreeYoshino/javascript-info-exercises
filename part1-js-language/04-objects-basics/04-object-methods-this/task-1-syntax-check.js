/* 
  Here the function makeUser returns an object.
  What is the result of accessing its ref? Why?
*/
function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();

console.log(user.ref.name); // What's the result?
// 會輸出 undefined 因為在makeUser函式中 this指向的不是物件本身
// 而是全域物件 (在瀏覽器中是 window 在嚴格模式下則是 undefined)
// 因此 user.ref 指向的不是 user 物件，而是全域物件
