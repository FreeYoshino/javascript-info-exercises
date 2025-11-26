/* 
  Replace Function Expressions with arrow functions in the code below:
*/
/* 
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
*/

// 模擬confirm function
// 假設總是OK (return true)
const confirm = (question) => {
  console.log(`System asks: ${question}`);
  return true;
};

const ask = (question, yes, no) => {
  if (confirm(question)) {
    yes();
    return;
  }
  no();
};

ask(
  "Do you agree?",
  () => {
    console.log("You agreed.");
  },
  () => {
    console.log("You canceled the executuion.");
  },
);
