/* 
  Turn the user into JSON and then read it back into another variable.
    let user = {
      name: "John Smith",
      age: 35
    };
*/

let user = {
  name: "John Smith",
  age: 35,
};

const jsonString = JSON.stringify(user);
const userCopy = JSON.parse(jsonString);

// Testing the result
console.log(userCopy); // { name: 'John Smith', age: 35 }
