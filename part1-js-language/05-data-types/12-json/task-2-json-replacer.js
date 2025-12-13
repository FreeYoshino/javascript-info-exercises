/* 
  In simple cases of circular references, we can exclude an offending property from serialization by its name.
  But sometimes we can’t just use the name, as it may be used both in circular references and normal properties. So we can check the property by its value.
  Write replacer function to stringify everything, but remove properties that reference meetup:
*/
/* 
  let room = {
    number: 23
  };

  let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
  };

  // circular references
  room.occupiedBy = meetup;
  meetup.self = meetup;

  alert( JSON.stringify(meetup, function replacer(key, value) {
    your code 
  }));
*/
/*
  result should be:
  {
    "title":"Conference",
    "occupiedBy":[{"name":"John"},{"name":"Alice"}],
    "place":{"number":23}
  }
*/

let room = {
  number: 23,
};
let meetup = {
  title: "Conference",
  occupiedBy: [{ name: "John" }, { name: "Alice" }],
  place: room,
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

// solution
console.log(
  JSON.stringify(meetup, (key, value) => {
    // 檢查value是否等於meetup本身(circular reference)
    if (key != "" && value === meetup) {
      return undefined; // 排除該屬性
    }
    return value; // 保留其他屬性
  }),
);
