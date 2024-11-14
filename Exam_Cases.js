/*Написать функцию, которая принимает длину и возвращает строку чередующихся 1 и 0. Строка должна начинаться с 1
// (3) → “101”, (6) → “110010”*/

function byteLine(len){
	let  result = '';
	
	for (let i = 1; i <= len; i++){
		(i % 2 === 0) ? result += 0 : result += 1;
	}
	return result
}

// сразу работать с типом результата

console.log(byteLine(3)) // “101”
console.log( byteLine(6))// “101010”

