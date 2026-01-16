/*  
  What do you think? Will the .catch trigger? Explain your answer.
    new Promise(function(resolve, reject) {
      setTimeout(() => {
        throw new Error("Whoops!");
      }, 1000);
    }).catch(alert);
*/

/* 
  .catch不會觸發 因為setTimeout內拋出的error 是在Executor function之外發生的
  因此.catch無法捕捉到這個錯誤
  要捕捉這個錯誤 可以在setTimeout內使用try...catch block
*/
