/* 
  Imagine, we have an arbitrary object obj, created by a constructor function – we don’t know which one, but we’d like to create a new object using it.
  Can we do it like that?
    let obj2 = new obj.constructor();
  Give an example of a constructor function for obj which lets such code work right. And an example that makes it work wrong.
*/

/* 
  答案: 如果obj的constructor 屬性指向的function位置正確 那麼就能正常工作 否則會出錯
*/

// 正確範例
function User(name) {
  this.name = name;
}
let obj = new User("John");
const obj2 = new obj.constructor("Doe");
console.log(obj2.name); // Doe

// 錯誤範例
User.prototype = {}; // 改變了 prototype 導致 constructor 指向錯誤
obj = new User("John");
const objWrong = new obj.constructor("Wrong");
console.log(objWrong.name); // undefined
