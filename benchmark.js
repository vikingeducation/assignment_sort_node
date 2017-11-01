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
    { func: require("./insertionSort"), title: "Insertion" },
    { func: require("./bubbleSort"), title: "Bubble" },
    { func: require("./mergeSort"), title: "Merge" },
    { func: require("./quickSort"), title: "Quick" },
    { func: require("./recursiveRadix"), title: "Recursive Radix" },
    { func: require("./iterativeRadix"), title: "Iterative Radix" }
  ];

  for (let { arr, title } of versions) {
    console.log(`\n${title} Data`);
    console.log("*************************************");
    for (let { func, title } of sorts) {
      const before = Date.now();
      for (let i = 0; i < 1000; i++) {
        func([...arr]);
      }

      console.log(`${title} Sort: ${(Date.now() - before) / 1000}sec`);
    }
  }
};

benchmark();
