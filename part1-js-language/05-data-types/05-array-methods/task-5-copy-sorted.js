/* 
  We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
  Create a function copySorted(arr) that returns such a copy.

  let arr = ["HTML", "JavaScript", "CSS"];
  let sorted = copySorted(arr);
  alert( sorted ); // CSS, HTML, JavaScript
  alert( arr ); // HTML, JavaScript, CSS (no changes)
*/

const copySorted = (arr) => {
  return arr.slice().sort();
};

const arr = ["HTML", "JavaScript", "CSS"];
const sorted = copySorted(arr);
console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (no changes)
