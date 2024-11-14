var summation = function (num) {
	let i = 0;
	let sum = 0;
	while (i <= num) {
		sum += i;
		i++;
	}
	return sum;
}
function summation(num) {
	return num * (num + 1) / 2
}

var summation = function f(num) {
	return num ? num + f(num-1) : 0;
}

var summation = function (num) {
	return (num > 1) ? num + summation(num - 1):num;
}

console.log(summation(1))// 1)
console.log(summation(8))// 36)