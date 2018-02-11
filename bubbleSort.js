function bubbleSort(arr) {
  let swapCount = 1;

  while (swapCount > 0) {
    swapCount = 0;

    for (let i = 0; i < arr.length; i++) {
      const value = arr[i];
      if (arr[i + 1] < arr[i]) {
        arr[i] = arr[i + 1];
        arr[i + 1] = value;
        swapCount += 1;
      }
    }
  }

  console.log(arr);
}

bubbleSort([1,3,7,2,5, -44, 11]);

