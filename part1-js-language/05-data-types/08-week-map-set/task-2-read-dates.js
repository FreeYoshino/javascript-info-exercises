/* 
  There’s an array of messages as in the previous task. The situation is similar.
    let messages = [
      {text: "Hello", from: "John"},
      {text: "How goes?", from: "John"},
      {text: "See you soon", from: "Alice"}
    ];
  The question now is: which data structure you’d suggest to store the information: “when the message was read?”.
  In the previous task we only needed to store the “yes/no” fact. Now we need to store the date, and it should only remain in memory until the message is garbage collected.
  P.S. Dates can be stored as objects of built-in Date class, that we’ll cover later.
*/

/* 
  解答:
  可以使用WeekMap來儲存訊息、日期的鍵值對
  當訊息被垃圾回收時，對應的日期也會自動被移除
*/

// 範例實作
let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

const readDates = new WeakMap();
readDates.set(messages[0], new Date("2025-12-09"));
readDates.set(messages[1], new Date("2025-12-09"));
console.log(readDates.get(messages[0])); // 輸出: 2025-12-09T10:00:00.000Z
console.log(readDates.get(messages[1])); // 輸出: 2025-12-09T10:05:00.000Z
// 當 messages[0] 被垃圾回收時，對應的日期也會被移除
messages[0] = null;
// 此時 readDates 中不再包含 messages[0] 的日期
console.log(readDates.get(messages[0])); // 輸出: undefined
