/* 
  The call to askPassword() in the code below should check the password and then call user.loginOk/loginFail depending on the answer.
  But it leads to an error. Why?
  Fix the highlighted line for everything to start working right (other lines are not to be changed).
    function askPassword(ok, fail) {
      let password = prompt("Password?", '');
      if (password == "rockstar") ok();
      else fail();
    }
    let user = {
      name: 'John',

      loginOk() {
        alert(`${this.name} logged in`);
      },
      loginFail() {
        alert(`${this.name} failed to log in`);
      },
    };
   (TODO) askPassword(user.loginOk, user.loginFail);
*/
/* 
  答案: askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
  解釋: 因為直接呼叫askPassword(user.loginOk, user.loginFail)時 函式內部的this會指向undefined(嚴格模式下)或全域物件(window) 而不是user物件
*/
