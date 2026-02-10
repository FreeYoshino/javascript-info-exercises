/* 
  We have a “regular” function called f. How can you call the async function wait() and use its result inside of f?
    async function wait() {
      await new Promise(resolve => setTimeout(resolve, 1000));

      return 10;
    }

    function f() {
      // ...what should you write here?
      // we need to call async wait() and wait to get 10
      // remember, we can't use "await"
    }
  P.S. The task is technically very simple, but the question is quite common for developers new to async/await.
*/

async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return 10;
}

function f() {
  // 可以直接調用 wait() 他會回傳一個 Promise
  wait().then((result) => {
    console.log(result); // 10
  });
}

f();
