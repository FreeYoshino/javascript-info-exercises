/* 
  Let’s create a new rabbit object:
    function Rabbit(name) {
      this.name = name;
    }
    Rabbit.prototype.sayHi = function() {
      alert(this.name);
    };

    let rabbit = new Rabbit("Rabbit");

  These calls do the same thing or not?
    rabbit.sayHi();
    Rabbit.prototype.sayHi();
    Object.getPrototypeOf(rabbit).sayHi();
    rabbit.__proto__.sayHi();
*/

function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function () {
  console.log(this.name);
};
const rabbit = new Rabbit("Rabbit");

rabbit.sayHi(); // 輸出Rabbit 因為this 指向rabbit物件
Rabbit.prototype.sayHi(); // 輸出undefined 因為this 指向Rabbit.prototype
Object.getPrototypeOf(rabbit).sayHi(); // 輸出undefined 因為this 指向Rabbit.prototype
rabbit.__proto__.sayHi(); // 輸出undefined 因為this 指向Rabbit.prototype
