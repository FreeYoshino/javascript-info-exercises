/* 
  請問： 如果 math.js 的內容是這樣：
    export default function add(a, b) { return a + b; }
    export const PI = 3.14; 
  我在 main.js 想要同時使用 add 和 PI，哪一種寫法是 正確 的？
  A:
    import { add, PI } from './math.js';
  B:
    import add, { PI } from './math.js';
*/

/* 
  答案:B
  原因:因為main.js中的add 是math.js中的default export 所以在main.js中import default 的寫法是不需要使用大括號的 而PI是math.js中的named export 所以需要使用大括號的寫法
*/
