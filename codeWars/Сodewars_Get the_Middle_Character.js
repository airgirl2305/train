/*Get the Middle Character*/
function getMiddle(word) {
	let result;
	let letters = word.split('');
	let i = Math.ceil(word.length / 2);
	
	if (word.length % 2) {
		result = letters[i - 1];
	} else {
		result = letters[i - 1] + letters[i];
	}
	return result;
}

/*function getMiddle(s) {
	return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}//  округление более правильное к большему substr не поддерживается*/

/*function getMiddle(s) {
	var middle = s.length / 2;
	return (s.length % 2)
		? s.charAt(Math.floor(middle))
		: s.slice(middle - 1, middle + 1);
}*/

console.log(getMiddle("test"));// "es"
console.log(getMiddle("testing")); // return "t"
console.log(getMiddle("middle")); // return "dd"
console.log(getMiddle("A"));// return "A"
