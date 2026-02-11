/* 
  情境： 我們有三個檔案：admin.js、guest.js 和 config.js。
  1. config.js (存放設定)
    JavaScript
    export let adminConfig = {
      name: "Default Admin"
    };
  2. admin.js (修改設定)
    JavaScript
    import { adminConfig } from './config.js';

    // 管理員把名字改掉了！
    adminConfig.name = "Super User";
  3. guest.js (讀取設定)
    JavaScript
    import { adminConfig } from './config.js';

    console.log(adminConfig.name);
  4. main.js (進入點)
    JavaScript
    import './admin.js'; // 先執行 admin
    import './guest.js'; // 再執行 guest

  請問： 當執行 main.js 時，guest.js 裡面印出來的 name 會是： A. "Default Admin" (原本的值) B. "Super User" (被 admin 改過的值)
*/

/* 
  答案: 會是B "Super User"
  原因: 在javascript 的麼組系統中 不管這個modules被誰import了 這個module都永遠只有一個實例 所以當admin.js修改了adminConfig.name的值後 guest.js讀取到的也是被修改過的值
*/
