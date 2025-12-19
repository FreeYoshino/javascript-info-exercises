function throttle(func, ms) {
  let isThrottled = false;
  let savedArgs;
  let savedThis;

  function wrapper(...args) {
    if (isThrottled) {
      savedArgs = args;
      savedThis = this;
      return;
    }
    func.apply(this, args);
    isThrottled = true;
    setTimeout(() => {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }
  return wrapper;
}

// example usage:
let f1000 = throttle(console.log, 1000);
f1000("Hello"); // prints "Hello"
f1000("World"); // ignored but updated to "World"
f1000("Again"); // ignored but updated to "Again"
