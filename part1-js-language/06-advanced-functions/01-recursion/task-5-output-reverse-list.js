/* 
  Output a single-linked list from the previous task Output a single-linked list in the reverse order.
     let list = {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            value: 4,
            next: null
          }
        }
      }
    };

  Make two solutions: using a loop and using a recursion.
*/

const list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

// Using a Loop
const printReverseListLoop = (list) => {
  const values = [];
  let currentNode = list;
  while (currentNode) {
    values.push(currentNode.value);
    currentNode = currentNode.next;
  }
  for (let i = values.length - 1; i >= 0; i--) {
    console.log(values[i]);
  }
};

// Using Recursion
const printReverseListRecursion = (list) => {
  if (list === null) return;
  printReverseListRecursion(list.next);
  console.log(list.value);
};

// Example usage:
console.log("Output in reverse order using loop:");
printReverseListLoop(list);
console.log("---------------");
console.log("Output in reverse order using recursion:");
printReverseListRecursion(list);
