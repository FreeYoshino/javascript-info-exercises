/* 
  Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:
    ucFirst("john") == "John";
*/

const ucFirst = (str) => {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}
console.log(ucFirst("john")); // "John"