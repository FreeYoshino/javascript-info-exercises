/* 
  情境：
    你在寫一個 Node.js 的 CLI 工具（命令列工具）。
    這工具支援多國語言（英文 en.js、中文 zh.js）。你不希望一開始就把所有語言檔都載入（浪費記憶體），你希望看使用者選什麼語言，再載入那個檔案。
  題目：
    請完成下面的 loadLanguage 函式。

    1.檔案結構：
      ./lang/en.js: export const hello = "Hello";

      ./lang/zh.js: export const hello = "你好";

    2.請使用 import() 動態載入對應的檔案。

    3.回傳檔案裡的 hello 字串。
*/

async function loadLanguage(langCode) {
  // 你的程式碼寫在這裡...
  // 提示：路徑可以是字串模板 `./lang/${langCode}.js`
  try {
    const module = await import(`./lang/${langCode}.js`);
    return module.hello;
  } catch (error) { 
    console.error(`載入語言檔失敗: ${error}`);
    return null;
  }
}

// 測試
loadLanguage('zh').then(msg => console.log(msg)); // 應該印出 "你好"