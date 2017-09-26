//algo
//pick a pivot point
//loop through arr,
//if arr[i] >  pivot put after pivot
//else arr[i] is less than pivot, put before pivot
//now break it into sub arrs, and recurse on those

//not doing things in place
const quicksort = arr => {
  if (arr.length <= 1) return arr;
  let left = [];
  let right = [];
  let pivotIdx = Math.floor(arr.length / 2);
  let pivot = arr[pivotIdx];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= pivot) right.push(arr[i]);
    if (arr[i] < pivot) left.push(arr[i]);
  }

  //split
  left = quicksort(left);
  right = quicksort(right);

  return left.concat(right);
};

const test = () => {
  // console.log("qsort of [1] = ", quicksort([1]));
  // console.log("qsort of [1, 3] = ", quicksort([1, 3]));
  // console.log("qsort of [1, 2, 4] = ", quicksort([1, 2, 4]));
  console.log("qsort of [1, 3, 7, 2, 5] = ", quicksort([1, 3, 7, 2, 5]));
};
test();
