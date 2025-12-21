/* 
  We have two hamsters: speedy and lazy inheriting from the general hamster object.
  When we feed one of them, the other one is also full. Why? How can we fix it?
    let hamster = {
      stomach: [],
      eat(food) {
        this.stomach.push(food);
      }
    };
    let speedy = {
      __proto__: hamster
    };
    let lazy = {
      __proto__: hamster
    };
    // This one found the food
    speedy.eat("apple");
    alert( speedy.stomach ); // apple
    // This one also has it, why? fix please.
    alert( lazy.stomach ); // apple
*/

/* 
  解釋: 因為 speedy 、 lazy都繼承自hamster 而eat方法中使用了this.stomach
  所以當speedy呼叫 eat時 實際上是把food加入到hamster的stomach中 導致lazy也能看到相同的stomach內容
*/

// 驗證:
const hamster = {
  stomach: [],
  eat(food) {
    this.stomach.push(food);
  },
};
const speedy = {
  __proto__: hamster,
};
const lazy = {
  __proto__: hamster,
};
speedy.eat("apple");
console.log("speedy.stomach:", speedy.stomach); // apple
console.log("lazy.stomach:", lazy.stomach); // apple

// 解決辦法: 將stomach屬性移到各自的物件中
