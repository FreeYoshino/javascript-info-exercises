/* 
  Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.
  The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.
  Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.
*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Node.js 不能在迴圈內等待輸入(while 是非同步的)
// 使用遞迴的方式來解題

const askInupt = () => {
  rl.question("Enter a number greater than 100: ", (input) => {
    const number = Number(input);

    if (input === "" || input === null) {
      console.log("取消輸入");
      rl.close();
    } else if (number > 100) {
      console.log(`${number} 大於 100 結束迴圈`);
      rl.close();
    } else {
      console.log("輸入錯誤");
      askInupt();
    }
  });
};

// 啟動function
askInupt();
