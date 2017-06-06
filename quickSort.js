function partition(arr, left, right) {
  var pivotValue = arr[right], partitionIndex = left;

  for (var i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      [arr[i], arr[partitionIndex]] = [arr[partitionIndex], arr[i]];
      partitionIndex++;
    }
  }
  [arr[right], arr[partitionIndex]] = [arr[partitionIndex], arr[right]];
  return partitionIndex;
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    var correctPos = partition(arr, left, right);
    quickSort(arr, left, correctPos - 1);
    quickSort(arr, correctPos + 1, right);
  }
  return arr;
};

module.exports = quickSort;
// console.log(quickSort([9, 8, 7, 6, 5, 4, 3, 2, 1]));
// console.log(quickSort([3, 1, 6, 2, 7, 4, 5]));
// console.log(quickSort([3, -1, 6, 2, -7, 4, 5]));
