const insertionSort = require("./insertionSort");
const bubbleSort = require("./bubbleSort");
const mergeSort = require("./mergeSort");
const quickSort = require("./quicksort");
const nonRecursingQuicksort = require("./quicksort2");

const tests = [
  insertionSort,
  bubbleSort,
  mergeSort,
  nonRecursingQuicksort,
  quickSort
];

const testName = [
  "insertionSort",
  "bubbleSort",
  "mergeSort",
  "nonRecursingQuicksort",
  "quicksort"
];

//helper function
const makeRandoArr = (size, range) =>
  Array(size)
    .fill(true)
    .map(() => Math.floor(Math.random() * range));

///DO THE BENCHMARKING
const benchmark = (operations, size = 2 ** 10) => {
  // const randomArr = makeRandoArr(size, 100);
  //use some different random arrays
  const randomArrs = Array(10)
    .fill(true)
    .map(empty => makeRandoArr(size, 100));

  console.log("=========  STARTING TESTS! =========\n\n");
  tests.forEach((test, index) => {
    console.log(`=========  STARTING ${testName[index]}! =========`);
    const start = Date.now();
    for (var i = 0; i < operations; i++) {
      test(randomArrs[i % randomArrs.length]);
    }
    const total = Date.now() - start;
    console.log(
      `sorted ${operations} arrays of size = ${size} (2^${Math.log2(
        size
      )})\n total time = ${total / 1000} seconds`
    );
    // console.log(`first ten of the array is ${randomArr.slice(0, 9)}`);
    console.log(`=========  FINISHED ${testName[index]}! =========\n\n`);
  });
  console.log("=========  FINISHED ALL TESTS =========");
};
benchmark(100, 2 ** 10);

const killComputer = () => {
  for (let i = 0; i < 40; i += 1) {
    benchmark(10, 2 ** i);
  }
};
