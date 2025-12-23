/* 
  In the code below we create new Rabbit, and then try to modify its prototype.
  In the start, we have this code:
    function Rabbit() {}
    Rabbit.prototype = {
      eats: true
    };

    let rabbit = new Rabbit();

    alert( rabbit.eats ); // true  
  
  1. We added one more string (emphasized). What will alert show now?
    Rabbit.prototype = {};
  2. …And if the code is like this (replaced one line)?'
    Rabbit.prototype.eats = false;
  3. And like this (replaced one line)?
    delete rabbit.eats;
  4. The last variant:
    delete Rabbit.prototype.eats;
*/

/* 
  答案:
    1. alert 會顯示true 因為F.prototype在建立rabbit實例時已經被設定為{eats: true} 之後修改F.prototype不會影響已存在的實例
    2. alert 會顯示false 因為我們修改了F.prototype.eats(透過reference)的值 這會影響所有從F.prototype繼承eats屬性的實例
    3. true 因為delete rabbit.eats只會刪除rabbit實例本身的eats屬性 但rabbit本身沒有eats屬性 它是從F.prototype繼承而來的
    4. undefined 因為我們刪除了F.prototype.eats屬性 這會影響所有從F.prototype繼承eats屬性的實例 包括rabbit
*/
