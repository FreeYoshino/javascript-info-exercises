/* 
  There’s a ladder object that allows you to go up and down:
  let ladder = {
    step: 0,
    up() {  
      this.step++;
    },
    down(){
      this.step--;
    },
    showStep(): function {
      console.log( this.step );
    }
  };

  Now, if we need to make several calls in sequence, we can do it like this:
  ladder.up();
  ladder.up();
  ladder.down();
  ladder.showStep(); // 1
  ladder.down();
  ladder.showStep(); // 0

  Modify the code of up, down, and showStep to make the calls chainable, like this:
  ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0

  Such an approach is widely used across JavaScript libraries.
*/

// 為了實現chainable 添加 return this 到每個method中
const ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    console.log(this.step);
    return this;
  },
};

// 驗證
ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
