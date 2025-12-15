/* 
  Let’s say we have a single-linked list (as described in the chapter Recursion and stack):
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

  Write a function printList(list) that outputs list items one-by-one.
  Make two variants of the solution: using a loop and using recursion.
  What’s better: with recursion or without it?
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

//  Using a Loop
const printListLoop = (list) => {
  let currentNode = list;
  while (currentNode) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }
};

// Using Recursion
const printListRecursion = (list) => {
  if (list === null) return;
  console.log(list.value);
  return printListRecursion(list.next);
};

// Example usage:
console.log("Output using loop:");
printListLoop(list);
console.log("---------------");
console.log("Output using recursion:");
printListRecursion(list);
