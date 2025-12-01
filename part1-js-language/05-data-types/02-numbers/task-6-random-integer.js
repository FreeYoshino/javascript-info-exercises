/* 
  Create a function randomInteger(min, max) that generates a random integer number from min to max including both min and max as possible values.
  Any number from the interval min..max must appear with the same probability.

  Examples of its work:
    alert( randomInteger(1, 5) ); 
    alert( randomInteger(2, 5) ); 
    alert( randomInteger(3, 5) ); 
*/

const randomInteger = (min, max) => {
  const floatValue = Math.random() * (max + 1 - min) + min;
  return Math.floor(floatValue);
};

console.log(randomInteger(1, 5));
console.log(randomInteger(2, 5));
console.log(randomInteger(3, 5));