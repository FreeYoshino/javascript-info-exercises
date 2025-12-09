/* 
  There’s an array of messages:
    let messages = [
      {text: "Hello", from: "John"},
      {text: "How goes?", from: "John"},
      {text: "See you soon", from: "Alice"}
    ];
  
  Your code can access it, but the messages are managed by someone else’s code. New messages are added, old ones are removed regularly by that code, and you don’t know the exact moments when it happens.
  Now, which data structure could you use to store information about whether the message “has been read”? The structure must be well-suited to give the answer “was it read?” for the given message object.
  P.S. When a message is removed from messages, it should disappear from your structure as well.
  P.P.S. We shouldn’t modify message objects, add our properties to them. As they are managed by someone else’s code, that may lead to bad consequences.
*/

/*
  解答:
  可以使用WeekSet來儲存已讀的訊息物件
  WeekSet在原始物件被垃圾回收時會自動清除對應的引用
  這樣當訊息從messages陣列中移除時，對應的已讀狀態也會自動消失
 */

// 範例實作
let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

const readMessages = new WeakSet();
// 標記訊息為已讀
readMessages.add(messages[0]);
readMessages.add(messages[1]);
// 檢查訊息是否已讀
console.log(readMessages.has(messages[0])); // true
console.log(readMessages.has(messages[2])); // false
// 移除訊息
messages[0] = null;
// 此時 messages[0] 已被移除，對應的已讀狀態也會自動消失
console.log(readMessages.has(messages[0])); // false
