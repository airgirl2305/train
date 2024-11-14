function solution(str) {
	let result = '';
	for (let i = str.length-1; i >= 0; i-- ) {
		result+=str[i];
	}
	return result
}

//const solution = str => str.split('').reverse().join('');

console.log(solution('world'))// 'dlrow');
console.log(solution('hello'))//, 'olleh');
console.log(solution(''))// '');
console.log(solution('h'))// 'h');