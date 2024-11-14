
function getCount(str) {
	let vowelsCount = 0;
	
	for (let i = 0; i < str.length; i++) {
		if (str[i] === 'a') {
			vowelsCount++;
		} else if (str[i] === 'e') {
			vowelsCount++;
		} else if (str[i] === 'i') {
			vowelsCount++;
		} else if (str[i] === 'o') {
			vowelsCount++;
		} else if (str[i] === 'u') {
			vowelsCount++;
		}
	}
	return vowelsCount;
}

function getCount(str) {
	return (str.match(/[aeiou]/ig)||[]).length;
}
function getCount(str) {
	return str.replace(/[^aeiou]/gi, '').length;
}

function getCount(str) {
	var vowelsCount = 0;
	var vowels = ["a","e","i","o","u"];
	for(var i = 0;i < str.length;i++){
		for(var j=0;j<vowels.length;j++){
			if(str[i] === vowels[j]){
				vowelsCount++;
			}
		}
	}
	return vowelsCount;
}
//console.log(getCount("abracadabra"))/5
//console.log(getCount("o a kak ushakov lil vo kashu kakao"))//13
console.log(getCount("pear tree"))//4