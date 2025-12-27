/* 
  There’s an object dictionary, created as Object.create(null), to store any key/value pairs.
  Add method dictionary.toString() into it, that should return a comma-delimited list of keys. Your toString should not show up in for..in over the object.
  Here’s how it should work:
    let dictionary = Object.create(null);
    // your code to add dictionary.toString method

    // add some data
    dictionary.apple = "Apple";
    dictionary.__proto__ = "test"; // __proto__ is a regular property key here
    // only apple and __proto__ are in the loop
    for(let key in dictionary) {
      alert(key); // "apple", then "__proto__"
    }
    // your toString in action
    alert(dictionary); // "apple,__proto__"
*/

const dictionary = Object.create(null);
// 添加 toString 方法
Object.defineProperty(dictionary, "toString", {
  value() {
    return Object.keys(this).join(",");
  },
  enumerable: false, // 確保 toString不會出現在 for in中
});

// 添加一些數據
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // __proto__ 在這裡是普通的屬性鍵

// 測試for in迴圈
for (let key in dictionary) {
  console.log(key); // "apple", 然後 "__proto__"
}
// 測試 toString 方法
console.log(dictionary.toString()); // "apple,__proto__"
