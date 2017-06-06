const bubbleSort = arr => {
  do {
    var notSorted = false;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        notSorted = true;
      }
    }
  } while (notSorted);
  return arr;
};

console.log(bubbleSort([9, 8, 7, 4, 4, 4, 3, 2, 1]));
console.log(bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(bubbleSort([3, 1, 6, 2, 7, 4, 5]));
console.log(bubbleSort([3, -1, 6, 2, -7, 4, 5]));
