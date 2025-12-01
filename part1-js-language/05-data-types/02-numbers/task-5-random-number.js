/* 
  The built-in function Math.random() creates a random value from 0 to 1 (not including 1).
  Write the function random(min, max) to generate a random floating-point number from min to max (not including max).

  Examples of its work:
    alert( random(1, 5) );
    alert( random(2, 5) ); 
    alert( random(3, 5) ); 
*/

const random = (min, max) => {
  return Math.random() * (max - min) + min;
};

console.log(random(1, 5));
console.log(random(2, 5));
console.log(random(3, 5));
