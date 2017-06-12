const heapSort = array => {
  heapify(array, array.length);

  for (let i = array.length - 1; i > 0; i--) {
    [array[0], array[i]] = [array[i], array[0]];
    maxHeap(array, 0, i);
  }
  return array;
};

const heapify = (array, length) => {
  for (let i = Math.floor((length - 1) / 2); i >= 0; i--) {
    maxHeap(array, i, length);
  }
};

const maxHeap = (array, i, length) => {
  while (true) {
    let left = i * 2 + 1;
    let right = left + 1;
    let largest = i;

    if (left < length && array[left] > array[largest]) {
      largest = left;
    }
    if (right < length && array[right] > array[largest]) {
      largest = right;
    }
    if (largest === i) {
      break;
    }
    [array[i], array[largest]] = [array[largest], array[i]];
    i = largest;
  }
};
module.exports = heapSort;
// console.log(heapSort([9, 8, 7, 4, 4, 4, 3, 2, 1]));
// console.log(heapSort([9, 8, 7, 6, 5, 4, 3, 2, 1]));
// console.log(heapSort([3, 1, 6, 2, 7, 4, 5]));
// console.log(heapSort([3, -1, 6, 2, -7, 4, 5]));
