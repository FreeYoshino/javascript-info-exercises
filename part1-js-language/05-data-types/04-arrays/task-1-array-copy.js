/* 
  What is this code going to show?
    let fruits = ["Apples", "Pear", "Orange"];

    // push a new value into the "copy"
    let shoppingCart = fruits;
    shoppingCart.push("Banana");

    // what's in fruits?
    alert( fruits.length ); // ?
*/

// 答案: 會輸出4 shopiingCart和fruits指向同一個陣列
// 因此在shoppingCart中加入Banana後，fruits的長度也會變成4

const fruits = ["Apples", "Pear", "Orange"];
const shoppingCart = fruits;
shoppingCart.push("Banana");
console.log(fruits.length); // 4
