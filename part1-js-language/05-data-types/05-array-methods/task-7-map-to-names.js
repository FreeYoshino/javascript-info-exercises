/* 
  You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
  For instance:
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 28 };
    let users = [ john, pete, mary ];
    let names = users.map(user => user.name);
    alert( names ); // John, Pete, Mary
*/

const john = { name: "John", age: 25 };
const pete = { name: "Pete", age: 30 };
const mary = { name: "Mary", age: 28 };
const users = [john, pete, mary];

const names = users.map((user) => user.name);
console.log(names); // John, Pete, Mary
