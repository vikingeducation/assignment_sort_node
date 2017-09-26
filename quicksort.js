//algo
//pick a pivot point (the rightmost element)
//loop through arr,
//if arr[i] >  pivot put after pivot
//else arr[i] is less than pivot, put before pivot
//now break it into sub arrs, and recurse on those

//[less than pivot | pivot | greater than pivot | unsorted ]

//not doing things in place
const quicksort = arr => {
  if (arr.length <= 1) return arr;

  let pivotIdx = 0;
  let pivot = arr[arr.length - 1];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= pivot) {
      //do nothing since it's already in the current part
    } else if (arr[i] < pivot) {
      //throw it in the sorted-lowerside
      let tmp = arr[pivotIdx];
      arr[pivotIdx] = arr[i];
      arr[i] = tmp;
      pivotIdx++;
    }
  }
  //move pivot into appropriate location
  arr[arr.length - 1] = arr[pivotIdx];
  arr[pivotIdx] = pivot;
  //split, slicin for the moment, don't judge me
  let left = quicksort(arr.slice(0, pivotIdx));
  let right = quicksort(arr.slice(pivotIdx));

  return left.concat(right);
};

const test = () => {
  console.log("qsort of [1] = ", quicksort([1]));
  console.log("qsort of [1, 3] = ", quicksort([1, 3]));
  console.log("qsort of [1, 2, 4] = ", quicksort([1, 2, 4]));
  console.log("qsort of [1, 3, 2] = ", quicksort([1, 3, 2]));
  console.log("qsort of [5, 7] = ", quicksort([5, 7]));
  console.log("qsort of [1, 3, 7, 2, 5] = ", quicksort([1, 3, 7, 2, 5]));
};
// test();
module.exports = quicksort;
