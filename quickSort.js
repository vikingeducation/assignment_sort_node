const partition = (arr, pivot, rightMost) => {
  for (let i = 0; i < rightMost; i++) {
    if (arr[i] > arr[pivot] && i < pivot) {
      //
    }
  }
};

const quickSort = (arr, pivot = arr.length - 1, rightMost = arr.length - 1) => {
  //
  if (pivot < rightMost) {
    var q = partition(arr, pivot, rightMost);
    quickSort(arr, pivot, q - 1);
    quickSort(arr, q, rightMost);
  }
};

console.log(quickSort([9, 8, 7, 4, 4, 4, 3, 2, 1]));
console.log(quickSort([9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(quickSort([3, 1, 6, 2, 7, 4, 5]));
console.log(quickSort([3, -1, 6, 2, -7, 4, 5]));
