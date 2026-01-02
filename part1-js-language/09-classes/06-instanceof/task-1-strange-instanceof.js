/* 
  In the code below, why does instanceof return true? We can easily see that a is not created by B().
    function A() {}
    function B() {}

    A.prototype = B.prototype = {};

    let a = new A();

    alert( a instanceof B ); // true
*/

/* 
  答案: 因為 instanceof的演算法 是去檢查物件的原型鏈的Prototype屬性是否等於B.prototype
        而在這個例子中 A、B的原型都指向同一個物件 {}
        所以a的原型鏈上會有一個物件等於B.prototype
        因此 a instanceof B 會回傳 true
*/
