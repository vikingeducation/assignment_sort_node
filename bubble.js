const bubbleSort = arr => {
	let done = true;
	do {
		done = true;
		for (let i = 0; i < arr.length - 1; i++) {
			const [left, right] = [arr[i], arr[i + 1]];
			if (left > right) {
				arr[i] = right;
				arr[i + 1] = left;
				done = false;
			}
		}
		console.log(arr);
	} while (!done);
	return arr;
};

const arr = [6, 3, 9, 8, 5, 7, 3, 2, 1];

console.log(bubbleSort(arr));
