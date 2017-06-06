const mergeSort = require("./mergeSort");
const insertSort = require("./insertSort");
const bubbleSort = require("./bubbleSort");
const quickSort = require("./quickSort");

const benchmark = (arr, description) => {
  let start, end, time;
  console.log("Initial array: ", description);

  console.log("Benchmarking mergeSort...");
  start = Date.now();
  for (let i = 0; i < 1000; i++) {
    mergeSort([...arr]);
  }
  end = Date.now();
  time = end - start;
  console.log("mergeSort took", time, "ms");

  console.log();

  console.log("Benchmarking quickSort...");
  start = Date.now();
  for (let i = 0; i < 1000; i++) {
    quickSort([...arr]);
  }
  end = Date.now();
  time = end - start;
  console.log("quickSort took", time, "ms");

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

let longRandom = [];
for (let i = 0; i < 1000; i++) {
  longRandom.push(Math.floor(Math.random() * 10000));
}
let longNearlySorted = [];
for (let i = 0; i < 1000; i++) {
  longNearlySorted.push(i);
}
for (let i = 0; i < 20; i++) {
  longNearlySorted[Math.floor(Math.random() * 1000)] = Math.floor(
    Math.random() * 1000
  );
}

benchmark(longNearlySorted, "long nearly sorted array");

// benchmark(longRandom, "long Random array");
//
// benchmark([9, 8, 7, 4, 4, 4, 3, 2, 1], "short reversed array");
