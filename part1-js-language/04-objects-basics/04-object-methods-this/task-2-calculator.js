/* 
  Create an object calculator with three methods:
  - read() prompts for two values and saves them as object properties with names a and b respectively.
  - sum() returns the sum of saved values.
  - mul() multiplies saved values and returns the result.
*/

const calculator = {
  read() {
    // 直接設定 a 和 b 屬性 代替 prompt 輸入
    this.a = 6;
    this.b = 5;
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

// 驗證
calculator.read();
console.log(calculator.sum()); // 預測輸出: 11
console.log(calculator.mul()); // 預測輸出: 30
