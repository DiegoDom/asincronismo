function sum(a, b) {
  return a + b;
}

function calc(a, b, callback) {
  return callback(a, b);
}

console.log(calc(10, 20, sum));

setTimeout(() => {
  console.log("Hello JS");
}, 5000);

function greetin(name) {
  console.log(`Hello ${name}!`);
}

setTimeout(greetin, 3500, "DAB");
