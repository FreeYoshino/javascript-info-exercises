/* 
  You have an array of user objects, each one has name, surname and id.
  Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

  for instance:
    let john = { name: "John", surname: "Smith", id: 1 };
    let pete = { name: "Pete", surname: "Hunt", id: 2 };
    let mary = { name: "Mary", surname: "Key", id: 3 };

    let users = [ john, pete, mary ];
    let usersMapped = /* ... your code ... 
    usersMapped = [
      { fullName: "John Smith", id: 1 },
      { fullName: "Pete Hunt", id: 2 },
      { fullName: "Mary Key", id: 3 }
    ]
    alert( usersMapped[0].id ) // 1
    alert(usersMapped[0].fullName) // John Smith
      
*/

const john = { name: "John", surname: "Smith", id: 1 };
const pete = { name: "Pete", surname: "Hunt", id: 2 };
const mary = { name: "Mary", surname: "Key", id: 3 };
const users = [john, pete, mary];

const usersMapped = users.map((user) => {
  const fullName = `${user.name} ${user.surname}`;
  return { fullName: fullName, id: user.id };
});

console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // John Smith
