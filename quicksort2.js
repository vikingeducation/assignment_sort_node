const Stack = require("./Stack");

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

  // let pivotIdx = 0;
  // let pivot = arr[arr.length - 1];
  let stack = new Stack();
  stack.push({
    beginning: 0,
    end: arr.length - 1,
    pivot: arr[arr.length - 1],
    pivotIdx: 0
  });
  while (stack.length) {
    let current = stack.peek();
    // console.log("current = ", current);
    // console.log(
    //   "arr you current worked on = ",
    //   arr.slice(current.beginning, current.end + 1)
    // );
    //check our base case
    if (current.end - current.beginning <= 0) {
      stack.pop();
    } else {
      for (let i = current.beginning; i < current.end; i++) {
        if (arr[i] >= current.pivot) {
          //do nothing since it's already in the current part
        } else if (arr[i] < current.pivot) {
          //throw it in the sorted-lowerside
          let tmp = arr[current.pivotIdx];
          arr[current.pivotIdx] = arr[i];
          arr[i] = tmp;
          current.pivotIdx++;
        }
      }
      //move pivot into appropriate location
      arr[current.end] = arr[current.pivotIdx];
      arr[current.pivotIdx] = current.pivot;
      // console.log("arr is now ", arr);
      stack.pop();

      //if we're are looking at a section that has length two
      //then we've already sorted them
      if (current.end - current.beginning === 1) {
        //do nothing
      } else {
        //left half
        stack.push({
          beginning: current.beginning,
          end: current.pivotIdx - 1,
          pivot: arr[current.pivotIdx - 1],
          pivotIdx: current.beginning
        });
        //right half
        stack.push({
          beginning: current.pivotIdx,
          end: current.end,
          pivot: arr[current.end],
          pivotIdx: current.pivotIdx
        });
      }
    }
  }

  //split, slicin for the moment, don't judge me
  // let left = quicksort(arr.slice(0, pivotIdx));
  // let right = quicksort(arr.slice(pivotIdx));

  return arr;
};

const test = () => {
  console.log("qsort of [1] = ", quicksort([1]));
  console.log("qsort of [1, 3] = ", quicksort([1, 3]));
  console.log("qsort of [3, 1] = ", quicksort([3, 1]));
  console.log("qsort of [1, 2, 4] = ", quicksort([1, 2, 4]));
  console.log("qsort of [1, 3, 2] = ", quicksort([1, 3, 2]));
  console.log("qsort of [5, 7] = ", quicksort([5, 7]));
  console.log("qsort of [1, 3, 7, 2, 5] = ", quicksort([1, 3, 7, 2, 5]));
};
// test();
module.exports = quicksort;
