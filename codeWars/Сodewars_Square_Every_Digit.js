function squareDigits(num){
	let result = '';
	let arr = (""+num).split("").map(Number)

	for (let i = 0; i < arr.length; i++) {
		console.log(Math.pow(arr[i],2));
		result += Math.pow(arr[i],2);
	}
	return Number(result);
}

/*function squareDigits(num){
	return +String(num).split('').map(function(num){return +num * +num;}).join('');

	*/
console.log(squareDigits(3212))// 9414;
console.log(squareDigits(2112))//4114
console.log(squareDigits(0)); //0;
