function fn(arr) {
	const res = [];
	function flatArr(item) {
		item.forEach(i => {
			if (Object.prototype.toString.call(i).includes('Array')) {
				flatArr(i);
				return;
			}
			res.push(i);
		});
	}
	flatArr(arr);
	return res;
}

const arr = [{ 1: 1 }, 2, 2, [2, 3, 3, [5, 8, 4, [8, 0, 1]]]];

console.log(fn(arr));