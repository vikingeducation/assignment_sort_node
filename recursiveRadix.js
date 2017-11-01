const recursiveRadix = (arr, divisor, maxNum) => {
  if (arr.length < 2) return arr.slice();

  maxNum = maxNum === undefined ? Math.max(...arr) * 10 : maxNum;
  divisor = divisor !== undefined ? divisor : 10;

  if (divisor > maxNum) return arr;

  let bucketsArr = [...Array(10)].map(() => []);
  arr.forEach(ele =>
    bucketsArr[Math.floor((ele % divisor) / (divisor / 10))].push(ele)
  );

  return recursiveRadix([].concat.apply([], bucketsArr), divisor * 10, maxNum);
};

module.exports = recursiveRadix;
