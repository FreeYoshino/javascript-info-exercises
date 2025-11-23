/* 
  Which of these alerts are going to execute?
  What will the results of the expressions be inside if(...)?

  if (-1 || 0) alert( 'first' );
  if (-1 && 0) alert( 'second' );
  if (null || -1 && 1) alert( 'third' );
*/

/* 
  第一個和第三個會執行 第二個不會執行
  第一個表達式結果為 -1 (true)
  第二個表達式結果為 0 (false)
  第三個表達式結果為 1 (true)
*/
