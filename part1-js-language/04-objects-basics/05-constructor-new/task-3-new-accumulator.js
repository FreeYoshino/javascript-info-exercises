/* 
  Create a constructor function Accumulator(startingValue).
  Object that it creates should:
  - Store the “current value” in the property value. The starting value is set to the argument of the constructor
  - The read() method should use prompt to read a new number and add it to value

  In other words, the value property is the sum of all user-entered values with the initial value startingValue.
*/

const readline = require("node:readline/promises");
const { stdin: input, stdout: output } = require("node:process");

const Accumulator = function (startingValue) {
  this.value = startingValue;
  this.read = async function () {
    const rl = readline.createInterface({ input, output });
    const userInput = await rl.question("輸入一個數字: ");
    this.value += Number(userInput);
    rl.close();
  };
};

// 範例用法
const main = async () => {
  const accumulator = new Accumulator(1);
  await accumulator.read();
  await accumulator.read();
  console.log(accumulator.value); // 顯示輸入的數字總和加上起始值 1
};
main();
