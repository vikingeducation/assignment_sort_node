const partition = (arr, pivot, rightMost) => {
  let resultArr = [arr[pivot]];
  let pivotPos = 0;
  for (let i = 0; i < rightMost; i++) {
    if (arr[i] > arr[pivot]) {
      //
      resultArr.push(arr[i]);
    } else {
      resultArr.unshift(arr[i]);
      pivotPos++;
    }
  }
  return pivotPos;
};

const quickSort = (arr, pivot = arr.length - 1, rightMost = arr.length - 1) => {
  //
  if (pivot < rightMost) {
    var correctPos = partition(arr, pivot, rightMost);
    quickSort(arr, pivot, correctPos - 1);
    quickSort(arr, correctPos + 1, rightMost);
  }
  return arr;
};
let arr = [9, 8, 7, 4, 4, 4, 3, 2, 1];
quickSort(arr);
console.log(arr);
console.log(quickSort([9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(quickSort([3, 1, 6, 2, 7, 4, 5]));
console.log(quickSort([3, -1, 6, 2, -7, 4, 5]));
