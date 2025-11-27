// task-1-reference-check.js

// 1. 建立一個預設設定檔 (電視)
const defaultConfig = {
  theme: "dark",
  fontSize: 14,
  user: {
    name: "Guest", // 注意這裡有個巢狀物件 (Nested Object)
  },
};

// 2. 我們想要建立一個新的使用者設定
// 錯誤示範：直接用等號
const userConfig = defaultConfig;

// 嘗試修改 userConfig
userConfig.theme = "light";

// 請問：defaultConfig.theme 變成了什麼？
console.log("Default Config Theme:", defaultConfig.theme);
// 你的預測是:light
/* 
  只接使用assign 會將原object 的reference複製給新的object
  所以在更改新物件的property時也會更改到原物件property的內容
*/

// -------------------------------------------------

// 3. 使用 Object.assign 複製 (淺拷貝 Shallow Copy)
const configA = { width: 100, size: { h: 50, w: 50 } };
const configB = Object.assign({}, configA);

configB.width = 200; // 改第一層
configB.size.h = 100; // 改第二層 (巢狀物件)

// 請問：configA 的值變了嗎？
console.log("ConfigA Width:", configA.width); // 預測: 100 (100 還是 200?)
console.log("ConfigA Size H:", configA.size.h); // 預測: 100 (50 還是 100?)
/* 
  Object.assign 會複製每個property對應的value到新物件中
  但當其中的某個property也同樣是物件，還是會複製到該物件的reference 因為這就是該屬性的value
*/
