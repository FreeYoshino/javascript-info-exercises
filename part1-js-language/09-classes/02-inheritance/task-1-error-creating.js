/* 
  Here’s the code with Rabbit extending Animal.
  Unfortunately, Rabbit objects can’t be created. What’s wrong? Fix it.
    class Animal {
      constructor(name) {
        this.name = name;
      }

    }

    class Rabbit extends Animal {
      constructor(name) {
        this.name = name;
        this.created = Date.now();
      }
    }

    let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
    alert(rabbit.name);
*/

// 無法建立Rabbit 物件的原因 在於Rabbit 的constructor 沒有先呼叫super 來初始化繼承自Animal 的屬性
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name) {
    super(name); // 呼叫super 來初始化繼承自Animal 的屬性
    this.created = Date.now();
  }
}

const rabbit = new Rabbit("White Rabbit"); // 現在可以正確建立Rabbit 物件
console.log(rabbit.name);
