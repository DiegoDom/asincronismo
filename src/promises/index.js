/* const promise = new Promise((resolve, reject) => {}); */

const cows = 9;
const countCows = new Promise((resolve, reject) => {
  if (cows >= 10) {
    resolve("Awemose we can take your order 😁");
  } else {
    reject("We sorry, we cannot take your order 😥");
  }
});

countCows
  .then(console.log)
  .catch(console.error)
  .finally(() => console.info("¡Comeback soon!"));
