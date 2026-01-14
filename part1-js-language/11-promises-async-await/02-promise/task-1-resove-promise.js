/* 
  What’s the output of the code below?
    let promise = new Promise(function(resolve, reject) {
      resolve(1);
      setTimeout(() => resolve(2), 1000);
    });
    promise.then(alert);
*/

// 會輸出 1 因為promise 一旦被 resolve or reject後狀態就不不會再改變

// example run
let promise = new Promise(function (resolve, reject) {
  resolve(1);
  setTimeout(() => resolve(2), 1000);
});
promise.then(console.log);
