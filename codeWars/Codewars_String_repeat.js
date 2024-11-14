function repeatStr(n, s) {
	let result='';
	let i = 0;
	while (i < n) {
		result += s;
		i++;
	}
	return result;
}

const repeatStr = (n,s) => s.repeat(n) ;

console.log(repeatStr(6, "I")); // "IIIIII"
console.log(repeatStr(5, "Hello")); // "HelloHelloHelloHelloHello"