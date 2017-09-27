// const radixSort = (arr, mod, digits = null) => {
//   if (Math.log10(maxNum * 10) < Math.log10(mod)) return arr;
//
//   let bucketsArr = [...Array(10)].map(() => []);
//   arr.forEach(ele => bucketsArr[Math.floor(ele % mod / (mod / 10))].push(ele));
//
//   return radixSort([].concat.apply([], bucketsArr), mod * 10, --digits);
// };

const radixSort = (arr, divisor, maxNum) => {
  if (maxNum === undefined) {
    maxNum = arr.reduce(
      (max, value) => (max === undefined || value > max ? value : max)
    );
  }

  divisor = divisor !== undefined ? divisor : 10;

  if (Math.log10(maxNum * 10) < Math.log10(divisor)) return arr;

  let bucketsArr = [...Array(10)].map(() => []);
  arr.forEach(ele =>
    bucketsArr[Math.floor(ele % divisor / (divisor / 10))].push(ele)
  );

  return radixSort([].concat.apply([], bucketsArr), divisor * 10, maxNum);
};

const unsorted = [2, 4, 1, 2, 3, 6, 3, 1, 7, 89, 34, 332];

console.log(radixSort(unsorted));
