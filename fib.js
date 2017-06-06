const fibInit = num => {
  return fibonacci(num, []);
};

const fibonacci = (num, memo) => {
  if (num === 0 || num === 1) {
    return num;
  }
  if (!memo[num]) {
    memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
  }
  return memo[num];
};

const fibClassic = num => {
  if (num === 0 || num === 1) {
    return num;
  }
  return fibClassic(num - 1) + fibClassic(num - 2);
};

let start, end, time;
//
//
//
console.log("Benchmarking fast...");
start = Date.now();
console.log(fibInit(10000));
end = Date.now();
time = end - start;
console.log("fast took", time, "ms");

console.log();

console.log("Benchmarking slow...");

start = Date.now();
console.log(fibClassic(40));
end = Date.now();
time = end - start;
console.log("slow took", time, "ms");

console.log();
