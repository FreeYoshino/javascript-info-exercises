/* 
  We’d like to get an array of map.keys() in a variable and then apply array-specific methods to it, e.g. .push.
  But that doesn’t work:
    let map = new Map();
    map.set("name", "John");
    let keys = map.keys();
    // Error: keys.push is not a function
    keys.push("more");

  Why? How can we fix the code to make keys.push work?
*/

/* 
  .keys() 方法回傳 key的iterable 物件，而不是陣列
  所以無法直接使用陣列的方法 .push
  使用Array.from() 將 iterable 轉換成陣列就可以使用.push 方法了
*/

// 驗證
const map = new Map();
map.set("name", "John");
const keysIterable = map.keys();
const keysArray = Array.from(keysIterable);
keysArray.push("more");
console.log(keysArray); // ['name', 'more']
