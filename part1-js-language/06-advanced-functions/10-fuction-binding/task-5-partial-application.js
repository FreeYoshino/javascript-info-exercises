/* 
  The task is a little more complex variant of Fix a function that loses "this".
  The user object was modified. Now instead of two functions loginOk/loginFail, it has a single function user.login(true/false).
  What should we pass askPassword in the code below, so that it calls user.login(true) as ok and user.login(false) as fail?

    function askPassword(ok, fail) {
      let password = prompt("Password?", '');
      if (password == "rockstar") ok();
      else fail();
    }
    let user = {
      name: 'John',

      login(result) {
        alert( this.name + (result ? ' logged in' : ' failed to log in') );
      }
    };
    (TODO) askPassword(?, ?); // ?

  Your changes should only modify the highlighted fragment.
*/

/* 
  答案: askPassword(user.login.bind(user, true), user.login.bind(user, false));
  解釋: 使用bind綁定物件user 並傳遞參數true或false 作為login函式的第一個參數
*/
