function insert(arr, rightIndex, value) {
  let sortIndex = rightIndex;

  while (arr[sortIndex] > value) {
    arr[sortIndex + 1] = arr[sortIndex];
    sortIndex -= 1;
  }

  arr[sortIndex + 1] = value;
}

function insertionSort(arr) {
  if (arr.length <= 1) return arr;

  let rightIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    insert(arr, rightIndex, arr[i]);
    rightIndex += 1;
  }

  console.log(arr);
}

insertionSort([1,3,7,2,5]);
