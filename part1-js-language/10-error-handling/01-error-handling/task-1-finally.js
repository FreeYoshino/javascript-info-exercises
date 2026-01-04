/* 
  Compare the two code fragments.
    1. The first one uses finally to execute the code after try...catch:
      try {
        work work
      } catch (err) {
        handle errors
      } finally {
        cleanup the working space
      }    
    2. The second fragment puts the cleaning right after try...catch:
      try {
        work work
      } catch (err) {
        handle errors
      }
      cleanup the working space

  We definitely need the cleanup after the work, doesn’t matter if there was an error or not.
  Is there an advantage here in using finally or both code fragments are equal? If there is such an advantage, then give an example when it matters.
*/

/* 
  答案: 使用finally 能確保cleanup的部分會被執行 即使在try_catch區塊內有return等語句
*/

// 範例
function f() {
  try {
    console.log("work");
    return;
  } catch (err) {
    console.log("handle errors");
  } finally {
    console.log("cleanup the working space");
  }
  console.log("This will never run");
}

f(); // "work" "cleanup the working space"
