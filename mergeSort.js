const merge = (arr1, arr2) => {
  //
  let newArr = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      newArr.push(arr1.shift());
    } else {
      newArr.push(arr2.shift());
    }
  }
  return newArr.concat(arr1, arr2);
};

const mergeSort = arr => {
  //
  if (arr.length === 1) {
    return arr;
  }
  return merge(
    mergeSort(arr.slice(0, Math.floor(arr.length / 2))),
    mergeSort(arr.slice(Math.floor(arr.length / 2)))
  );
};

module.exports = mergeSort;

// console.log(mergeSort([9, 8, 7, 4, 4, 4, 3, 2, 1]));
// console.log(mergeSort([9, 8, 7, 6, 5, 4, 3, 2, 1]));
// console.log(mergeSort([3, 1, 6, 2, 7, 4, 5]));
// console.log(mergeSort([3, -1, 6, 2, -7, 4, 5]));
