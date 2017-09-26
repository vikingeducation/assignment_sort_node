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

const benchmark = (arr = []) => {
  if (!arr.length) {
    for (let _ = 0; _ < 1000; _++) {
      arr.push(Math.floor(Math.random() * 1000));
    }
  }
  arr.sort((a, b) => a - b);
  const sorts = [
    { func: insertionSort, title: "Insertion" },
    { func: bubbleSort, title: "Bubble" },
    { func: mergeSort, title: "Merge" }
  ];

  for (let { func, title } of sorts) {
    const before = Date.now();
    for (let i = 0; i < 100; i++) {
      func([...arr]);
    }
    console.log(`${title} Sort: ${(Date.now() - before) / 1000}sec`);
  }
};

const unsorted = [2, 4, 1, 2, 3, 6, 3, 1, 7];
// console.log("Insertion: ", insertionSort(unsorted));
// console.log("Bubble: ", bubbleSort(unsorted));
// console.log("Merge: ", mergeSort(unsorted));

benchmark();
