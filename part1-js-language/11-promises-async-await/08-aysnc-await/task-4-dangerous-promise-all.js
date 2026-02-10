/* 
  因為promise.all 在其中一個promise失敗後就會直接reject 且不會取消其他的promise
  所以要解決這個錯誤 可以取消其他的promise 也可以為每個promise加上catch來處理錯誤
*/
