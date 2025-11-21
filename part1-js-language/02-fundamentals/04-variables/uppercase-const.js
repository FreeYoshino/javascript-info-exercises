// Examine the following code:

// birthday 適合使用大寫常數命名法 因為它的內容是被硬編碼的固定值
const BIRTHDAY = "18.04.1982";

// age 不適合使用大寫常數命名法 因為他是在程式執行時期才會被計算出來的值 而非像birthday那樣在程式執行前就已知的值
const AGE = someCode(BIRTHDAY);
