function mergeSort(array) {
	// if the array is one element long, just return it
	const len = array.length;
	if (len === 1) return array;

	const [left, right] = [
		array.slice(0, Math.floor(len / 2)),
		array.slice(Math.ceil(len / 2))
	];

	// mergeSort() the left half of the array
	const splitLeft = mergeSort(left);

	// mergeSort() the right half of the array
	const splitRight = mergeSort(right);
	console.log(splitLeft, splitRight);

	// merge() the two halves
	return merge(splitLeft, splitRight);
}

function merge(leftArr, rightArr) {
	const arr = [];
	for (let i = 0; i < leftArr.length || rightArr.length; i++) {
		const [left, right] = [leftArr[i], rightArr[i]];
		const diff = left - right || 0;
		console.log(diff);
		if (diff < 0) {
			arr.push(left);
			rightArr[rightArr.length] = right;
		}
		if (diff > 0) {
			arr.push(right);
		}
		if (diff === 0) {
			if (left) arr.push(left);
			if (right) arr.push(right);
		}
	}

	return arr;
}

const arr = [6, 3, 9, 8, 5, 7, 3, 2, 1];

console.log(mergeSort(arr));
