const fnAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => {
          resolve("Async!!");
        }, 2000)
      : reject(new Error("Error!"));
  });
};

const anotherFn = async () => {
  const some = await fnAsync();
  console.log(some);

  console.log("Continue...");
};

console.log("Before...");
anotherFn();
console.log("After...");
