function mergeSort(arr) {
  if (arr.length === 1) return arr;

  const halfSize = arr.length / 2;
  let leftArr = [];

  for (let i = 0; i < halfSize; i++) leftArr.push(arr.shift());

  leftArr = mergeSort(leftArr);
  let rightArr = mergeSort(arr);

  return merge(leftArr, rightArr);
}

function merge(leftArr, rightArr) {
  const newArr = [];

  while (leftArr.length || rightArr.length) {
    let nextSmallest;

    if (!leftArr[0]) {
      nextSmallest = rightArr.shift();
    } else if (!rightArr[0])  {
      nextSmallest = leftArr.shift();
    } else {
      nextSmallest = leftArr[0] < rightArr[0] ? leftArr.shift() : rightArr.shift();
    }

    newArr.push(nextSmallest);
  }

  return newArr;
}

const sorted = mergeSort([108, 15, 50, 4, 8, 42, 23, 16]);
console.log(sorted);
