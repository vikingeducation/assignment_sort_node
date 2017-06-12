function factorialRecursive(num) {
  if (num <= 1) {
    return 1;
  } else {
    return factorialRecursive(num - 1) * num;
  }
}

function factorialDynamic(num) {
  return factorial(num, []);
}

function factorial(num, memo) {
  if (num <= 1) {
    return 1;
  }
  if (!memo[num]) {
    memo[num] = factorial(num - 1, memo) * num;
  }
  return memo[num];
}

//
//
//

let start, end, time;

console.log("Benchmarking fast...");

start = Date.now();
console.log(factorialDynamic(400));
end = Date.now();
time = end - start;
console.log("fast took", time, "ms");

console.log();

console.log("Benchmarking slow...");

start = Date.now();
console.log(factorialRecursive(400));
end = Date.now();
time = end - start;
console.log("slow took", time, "ms");

console.log();
