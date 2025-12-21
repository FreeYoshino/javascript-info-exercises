/* 
  The task has two parts.
  Given the following objects:
    let head = {
      glasses: 1
    };
    let table = {
      pen: 3
    };
    let bed = {
      sheet: 1,
      pillow: 2
    };
    let pockets = {
      money: 2000
    };

    1. Use __proto__ to assign prototypes in a way that any property lookup will follow the path: pockets → bed → table → head. For instance, pockets.pen should be 3 (found in table), and bed.glasses should be 1 (found in head).
    2. Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed.
*/

const head = {
  glasses: 1,
};
const table = {
  pen: 3,
};
const bed = {
  sheet: 1,
  pillow: 2,
};
const pockets = {
  money: 2000,
};

// part 1
pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;
console.log(pockets.pen); // 3
console.log(bed.glasses); // 1

// part 2
console.time("pockets.glasses");
const glassesFromPockets = pockets.glasses;
console.timeEnd("pockets.glasses");

console.time("head.glasses");
const glassesFromHead = head.glasses;
console.timeEnd("head.glasses");

// 結論: head.glasses 的存取速度表較快 因為不須經過原型鏈的查找
