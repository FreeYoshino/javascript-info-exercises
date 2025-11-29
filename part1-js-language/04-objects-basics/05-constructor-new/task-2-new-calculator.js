/* 
  Create a constructor function Calculator that creates objects with 3 methods:
  - read() prompts for two values and saves them as object properties with names a and b    respectively.
  - sum() returns the sum of these properties.
  - mul() returns the multiplication product of these properties.
*/

function Calculator() {
  this.read = function () {
    // 用magic number 代替prompt
    this.a = 5; 
    this.b = 10;
  }
  this.sum = function () {
    return this.a + this.b;
  }
  this.mul = function () {
    return this.a * this.b;
  }
}

const calculator = new Calculator();
calculator.read();
console.log( "Sum=" + calculator.sum() );
console.log( "Mul=" + calculator.mul() );