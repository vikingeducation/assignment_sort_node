function insert(arr) {
  for (let right = 1; right < arr.length; right++) {
    let current = arr[right];
    let index = right;
    while (index >= 0 && arr[index - 1] > current) {
      arr[index] = arr[index - 1];
      index--;
    }

    arr[index] = current;
  }
  return arr;
}

const unsorted = [2, 4, 1, 2, 3, 6, 3, 1, 7];

console.log(insert(unsorted));

// [2, 4, 1, 2, 3, 6, 3, 1, 7]
