const mergeSort = arr => {
  if (arr.length < 2) return arr.slice();
  const pivot = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, pivot));
  const right = mergeSort(arr.slice(pivot));

  let [l, r] = new Array(2).fill(0);

  let mergedArr = [];
  while (l < left.length && r < right.length) {
    if (left[l] > right[r]) {
      mergedArr.push(right[r]);
      r++;
    } else {
      mergedArr.push(left[l]);
      l++;
    }
  }

  if (l < left.length) {
    mergedArr = mergedArr.concat(left.slice(l));
  } else if (r < right.length) {
    mergedArr = mergedArr.concat(right.slice(r));
  }

  return mergedArr;
};

module.exports = mergeSort;
