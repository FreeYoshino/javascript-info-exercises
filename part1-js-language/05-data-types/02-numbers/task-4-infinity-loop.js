// This loop is infinite. It never ends. Why?
let i = 0;
while (i != 10) {
  i += 0.2;
}

// 答案: 浮點數有精度問題 變數i累加0.2後不會精確等於10 所以會無窮迴圈
