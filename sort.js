const insertionSort = arr => {
  for (let right = 1; right < arr.length; right++) {
    let current = arr[right];
    let index = right;
    while (index >= 0 && arr[index - 1] > current) {
      [arr[index], arr[index - 1]] = [arr[index - 1], arr[index]];
      index--;
    }
  }
  return arr;
};

const bubbleSort = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    let change = false;
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        change = true;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    if (!change) break;
  }
  return arr;
};

const mergeSort = arr => {
  if (arr.length < 2) return arr;
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

const quickSort = arr => {
  if (arr.length < 2) return arr;

  let pivot = arr[Math.floor(Math.random() * arr.length)];

  let left = [];
  let equal = [];
  let right = [];

  for (let ele of arr) {
    if (ele > pivot) {
      right.push(ele);
    } else if (ele < pivot) {
      left.push(ele);
    } else {
      equal.push(ele);
    }
  }

  return quickSort(left).concat(equal).concat(quickSort(right));
};

const radixSort = (arr, divisor, maxNum) => {
  if (maxNum === undefined) {
    maxNum = arr.reduce(
      (max, value) => (max === undefined || value > max ? value : max)
    );
  }

  divisor = divisor !== undefined ? divisor : 10;

  if (Math.log10(maxNum * 10) < Math.log10(divisor)) return arr;

  let bucketsArr = [...Array(10)].map(() => []);
  arr.forEach(ele =>
    bucketsArr[Math.floor(ele % divisor / (divisor / 10))].push(ele)
  );

  return radixSort([].concat.apply([], bucketsArr), divisor * 10, maxNum);
};

const benchmark = (arr = []) => {
  if (!arr.length) {
    for (let _ = 0; _ < 1000; _++) {
      arr.push(Math.floor(Math.random() * 1000));
    }
  }

  const versions = [
    { arr: [...arr], title: "Random" },
    { arr: [...arr.sort((a, b) => a - b)], title: "Sorted" },
    { arr: [...arr.reverse()], title: "Reversed" }
  ];

  const sorts = [
    { func: insertionSort, title: "Insertion" },
    { func: bubbleSort, title: "Bubble" },
    { func: mergeSort, title: "Merge" },
    { func: quickSort, title: "Quick" },
    { func: radixSort, title: "Radix" }
  ];

  for (let { arr, title } of versions) {
    console.log(`\n${title} Data`);
    console.log("*************************************");
    for (let { func, title } of sorts) {
      const before = Date.now();
      for (let i = 0; i < 2000; i++) {
        func([...arr]);
      }

      console.log(`${title} Sort: ${(Date.now() - before) / 1000}sec`);
    }
  }
};

// const unsorted = [2, 4, 1, 2, 3, 6, 3, 1, 7];

// console.log("Insertion: ", insertionSort(unsorted));
// console.log("Bubble: ", bubbleSort(unsorted));
// console.log("Merge: ", mergeSort(unsorted));
// console.log("Quick: ", quickSort(unsorted));

benchmark();
