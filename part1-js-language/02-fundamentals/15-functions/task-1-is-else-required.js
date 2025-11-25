/* 
  The following function returns true if the parameter age is greater than 18.
  Otherwise it asks for a confirmation and returns its result:
  function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
    // ...
     return confirm('Did parents allow you?');
    }
  }
*/

/* 
  Will the function work differently if else is removed?
  function checkAge(age) {
    if (age > 18) {
      return true;
    }
    // ...
    return confirm('Did parents allow you?');
  }
*/

// 兩種function的寫法的功用是相同的
// 因為在判斷完age > 18 後如果為真那麼就會return function會stop
// 因此在後面有無使用else 的效果都是一樣的
