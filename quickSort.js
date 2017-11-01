const quickSort = arr => {
  if (arr.length < 2) return arr.slice();

  let pivot = arr[Math.floor(Math.random() * arr.length)];

  let left = [];
  let equal = [];
  let right = [];

  for (let ele of arr) {
    if (ele > pivot) {
      right.push(ele);
    } else if (ele < pivot) {
      left.push(ele);
    } else {
      equal.push(ele);
    }
  }

  return quickSort(left)
    .concat(equal)
    .concat(quickSort(right));
};

module.exports = quickSort;
