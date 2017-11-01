const insertionSort = arr => {
  arr = arr.slice();
  for (let right = 1; right < arr.length; right++) {
    let current = arr[right];
    let index = right;
    while (index >= 0 && arr[index - 1] > current) {
      [arr[index], arr[index - 1]] = [arr[index - 1], arr[index]];
      index--;
    }
  }
  return arr;
};

module.exports = insertionSort;
