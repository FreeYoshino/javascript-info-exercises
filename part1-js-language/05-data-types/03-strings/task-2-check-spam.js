/* 
  Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.
  The function must be case-insensitive:
    checkSpam('buy ViAgRA now') == true
    checkSpam('free xxxxx') == true 
    checkSpam("innocent rabbit") == false
*/

const checkSpam = (str) => {
  const lowerStr = str.toLowerCase();
  if(lowerStr.includes("viagra") || lowerStr.includes("xxx")) {
    return true;
  }
  return false;
}

// Test cases
console.log(checkSpam("buy ViAgRA now"))// true;
console.log(checkSpam("free xxxxx")) // true;
console.log(checkSpam("innocent rabbit")) // false;