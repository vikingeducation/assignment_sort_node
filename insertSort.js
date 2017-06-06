const insert = (arr, rightIndex, value) => {
  let i = rightIndex;
  while (i >= 0 && arr[i] > value) {
    arr[i + 1] = arr[i];
    i -= 1;
  }
  arr[i + 1] = value;
};

const insertSort = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    insert(arr, i, arr[i + 1]);
  }
  return arr;
};

console.log(insertSort([9, 8, 7, 4, 4, 4, 3, 2, 1]));
console.log(insertSort([9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(insertSort([3, 1, 6, 2, 7, 4, 5]));
console.log(insertSort([3, -1, 6, 2, -7, 4, 5]));
