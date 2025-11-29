// 模擬從後端撈回來的兩個使用者資料
const user1 = {
  name: "Alice",
  address: {
    city: "Taipei",
    street: "Xinyi Rd.",
  },
};

const user2 = {
  name: "Bob",
  // Bob 沒有填寫 address，甚至連這個屬性都沒有
};

function printStreet(user) {
  // ❌ 錯誤寫法：這裡很危險！如果 user.address 是 undefined，再接 .street 就會崩潰
  // 請用 ?. 改寫下面這一行，讓它變得安全
  const street = user.address?.street;

  console.log(`User ${user.name} lives in ${street}`);
}

// 測試
console.log("--- Processing User 1 ---");
printStreet(user1); // 這裡正常

console.log("\n--- Processing User 2 ---");
printStreet(user2); // 💥 這裡會報錯！請修好它！
