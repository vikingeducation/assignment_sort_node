const mergeSort = require("./mergeSort");
const insertSort = require("./insertSort");
const bubbleSort = require("./bubbleSort");

const benchmark = arr => {
  let start, end, time;
  console.log("Initial array: ", arr);
  console.log("Benchmarking mergeSort...");
  start = Date.now();
  for (let i = 0; i < 1000; i++) {
    mergeSort([...arr]);
  }
  end = Date.now();
  time = end - start;
  console.log("mergeSort took", time, "ms");

  console.log();

  console.log("Benchmarking insertSort...");
  start = Date.now();
  for (let i = 0; i < 1000; i++) {
    insertSort([...arr]);
  }
  end = Date.now();
  time = end - start;
  console.log("insertSort took", time, "ms");

  console.log();

  console.log("Benchmarking bubbleSort...");
  start = Date.now();
  for (let i = 0; i < 1000; i++) {
    bubbleSort([...arr]);
  }
  end = Date.now();
  time = end - start;
  console.log("bubbleSort took", time, "ms");

  console.log();
};

benchmark([9, 8, 7, 4, 4, 4, 3, 2, 1]);

let newArr = [];
for (let i = 0; i < 1000; i++) {
  newArr.push(Math.floor(Math.random() * 10000));
}
benchmark(newArr);
