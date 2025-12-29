/* 
  We’ve got a Clock class. As of now, it prints the time every second.
  Create a new class ExtendedClock that inherits from Clock and adds the parameter precision – the number of ms between “ticks”. Should be 1000 (1 second) by defaul
  - Your code should be in the file extended-clock.js
  - Don’t modify the original clock.js. Extend it.
*/

const Clock = require("./clock");

class extendedClock extends Clock {
  constructor({ template, precision = 1000 }) {
    super({ template });
    this.precision = precision;
  }
  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}

const clock = new extendedClock({ template: "h:m:s", precision: 2000 });
clock.start();
