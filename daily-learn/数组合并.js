/**
 * 数组1：['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2']；
数组2：['A', 'B', 'C', 'D']；
写一个合并方法，输出：['A1', 'A2', 'A', 'B1', 'B2', 'B', 'C1', 'C2', 'C', 'D1', 'D2', 'D']
 */

// 字符串是否含有某个元素

function fn(arr1, arr2) {
	const newArr = [];
	let i = 0;
	arr1.forEach(item => {
		if (item.indexOf(arr2[i]) === -1) {
			newArr.push(arr2[i]);
			newArr.push(item);
			i++;
		} else {
			newArr.push(item);
		}
	});
	newArr.push(arr2[i]);
	return newArr;
}

const a1 = ['B1', 'B2', 'A1', 'A2', 'C1', 'C2', 'C3', 'D1', 'D2'];
const a2 = ['A', 'B', 'C', 'D'];
// console.log(fn(a1, a2));
const a3 = a1.concat(a2);
a3.sort(function (x, y) {
	// if (!x[1]) {
	// 	return x[1] < y[1]
	// }
	return x < y;
})
console.log(a3)