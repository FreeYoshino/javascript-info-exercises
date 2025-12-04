/* 
  Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
  That is: removes all dashes, each word after dash becomes uppercased.

  Examples:
    camelize("background-color") == 'backgroundColor';
    camelize("list-style-image") == 'listStyleImage';
    camelize("-webkit-transition") == 'WebkitTransition';

  P.S. Hint: use split to split the string into an array, transform it and join back.
*/

const camelize = (str) => {
  const words = str.split("-");
  const camelizedWords = words.map((word, index) => {
    if (index === 0) {
      return word;
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return camelizedWords.join("");
};

// test cases
console.log(camelize("background-color")); // 'backgroundColor'
console.log(camelize("list-style-image")); // 'listStyleImage'
console.log(camelize("-webkit-transition")); // 'WebkitTransition'
