//Highest and Lowest
function highAndLow(numbers) {
	let arr = numbers.split(' ');
	let high = arr[0];
	let low = arr[0];

	for (let i = 1; i < arr.length; i++) {
		if (Number(arr[i]) > high) {
			high = arr[i];
		} else if (Number(arr[i]) < low) {
			low = arr[i];
		}
		
	}
	return high + ' ' + low;
}

/*function highAndLow(numbers){
	numbers = numbers.split(' ').map(Number);
	return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}*/

/*function getMiddle(s)
{
	return s.slice((s.length-1)/2, s.length/2+1);
}*/
console.log(highAndLow("3346 3075 2650 4627 3520 2275 5007 3010 1990 4171 3683 3330 2877 3591 3871 1938 4860 2021 3497 2803 3620")); // 5007 1938
/*console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); // "42 -9"
console.log(highAndLow("3 9 2"));
console.log(highAndLow("1 2 3 4 5"));// return "5 1"
console.log(highAndLow("1 2 -3 4 5"));// return "5 -3"
console.log(highAndLow("1 9 3 4 -5"));// return "9 -5"*!/*/
