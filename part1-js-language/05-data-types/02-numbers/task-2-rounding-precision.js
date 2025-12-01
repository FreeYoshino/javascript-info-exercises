/* 
  According to the documentation Math.round and toFixed both round to the nearest number: 0..4 lead down while 5..9 lead up.
*/
// In the similar example below, why is 6.35 rounded to 6.3, not 6.4?
console.log((6.35).toFixed(1)); // 6.3
// How to round 6.35 the right way?

// 答案: 由於浮點數經度問題 所以在進行四捨五入的操作前讓他更接近整數
// 先將數字乘以10 可以更精確的進行四捨五入

// 範例
console.log(Math.round(6.35 * 10) / 10); // 6.4
