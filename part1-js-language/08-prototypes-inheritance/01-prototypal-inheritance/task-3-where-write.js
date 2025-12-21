/* 
  We have rabbit inheriting from animal.
  If we call rabbit.eat(), which object receives the full property: animal or rabbit?
    let animal = {
      eat() {
        this.full = true;
      }
    };
    let rabbit = {
      __proto__: animal
    };
    rabbit.eat();
*/

/* 
  答案: rabbit 
  解釋: 因為是rabbit 呼叫eat()方法 所以this 指向的是 rabbit 物件 因此full property 會是寫在 rabbit 物件上
*/

// 驗證
const animal = {
  eat() {
    this.full = true;
  },
};
const rabbit = {
  __proto__: animal,
};
rabbit.eat();
console.log(rabbit.full); // true
console.log(animal.full); // undefined
