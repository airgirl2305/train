function generateRange(min, max, step){
	let result = [];
	
	for (let i = min; i <= max; i = i + step){
		result.push(i)
	}
	return result;
}
console.log(generateRange(2, 10, 2))// => [2,4,6,8,10]
console.log(generateRange(1, 10, 3))// => [1,4,7,10])

/*
2. Реализуйте функцию, которая принимает строку и удаляет все пробелы из нее//

ПРИМЕР

("8 j 8   mBliB8g  imjB8B8  jl  B") => "8j8mBliB8gimjB8B8jlB"
("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd") => ‘88Bifk8hB8BB8BBBB888chl8BhBfd'*/
function solidString(str){
	let arr = str.split('');
	for (let i = 0; i < arr.length; i++){
		arr[i] = arr[i].trim();
		}
		return arr.join('')
}

console.log(solidString("8 j 8   mBliB8g  imjB8B8  jl  B")) // => "8j8mBliB8gimjB8B8jlB"
console.log(solidString("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd")) //=> ‘88Bifk8hB8BB8BBBB888chl8BhBfd'*/