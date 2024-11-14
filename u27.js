//let count = 0
//while(count<=10){console.log((count%2!==0)?-count: count);count++;}




/*function square(data){
    if (!isNaN(data)) {
        console.log(data ** 2)}
     else {
        console.log('Ошибка преобразования данных')
    }
}
square(5)
square('y')/!**!/
//console.log(Number.isNaN('h'))
//console.log(Number.isNaN('8'))
console.log(isNaN('8'))
console.log(isNaN(8))
console.log(isNaN('h'))*/
/*Итак, isNaN просто проверяет, не является ли переданное значение числом или не может быть преобразовано в число.
Number.isNaN, с другой стороны, проверяет, равно ли значение NaN (он использует другой алгоритм, чем === хотя).*/

//console.log('привет' && 0 || 'мир')


/*
function digitsLine(a,b){
    let result = [];
    for (let i = a; i<=b; i++){
        result.push(i);
    }
    return result;
}
console.log(digitsLine(1,10))
*/


/*function reverseArray(arr){
    let result = [];
for (let i=0; i<arr.length; i++){
    result.push(arr[i].split('').reverse().join(''))
}
    return result
}

console.log(reverseArray(['seY', 'No']))*/

/*function f1(n){
    let result = '';
    for (i = 0; i < n; i++){
        result += 'hello'; // запоминай, что строки нужно ставить в кавычки
    }
    return result
}
console.log(f1(4))*/


/*
function getEvenNumbers(arr){
    return arr.filter(x=>x%2===0);
}

console.log(getEvenNumbers([1, 2, 3, 228, 69, 420]));
console.log(getEvenNumbers([]));*/


/*
function alienLanguage(str){
    let result = [];
    arr = str.split(' ')
    for (let i = 0; i < arr.length; i++){
      result.push(arr[i].slice(0, -1).toUpperCase() + arr[i].slice(-1).toLowerCase())
        }
return result.join(' ')
}

console.log(alienLanguage('DESGV мавимва Рма fsdbP'))*/


/*function minName (arr){

  let minWord = arr[0]
  let result = [];

  for (let i = 0; i<arr.length; i++){// находим минимальную длину 1 циклом

    if (minWord.length>arr[i].length){
      minWord = arr[i]
      }
  }

  for (let i = 0; i<arr.length; i++){// всё минимальной длины добавляем
    if (minWord.length === arr[i].length){
      result.push(arr[i])
    }
  }
    return result
}*/

/*function minName (arr){

    let result = [];

    arr.sort((a,b) => b.length-a.length)// всё минимальной длины добавляем

    for (let i = 0; i < arr.length-1; i++){
        console.log(arr[i+1])
        if (arr[0].length === arr[i].length){
            result.push(arr[i])
        }
    }
    return result
}

console.log(minName(["Kate", 'Bob', 'Jaden', 'Max', 'Angelina']))*/

/*
function getImage (str,num){
    let result = '';

    for (let i = 0; i<num; i++){
        result += str
    console.log(result)
    }
    return result
}
getImage('*', 6) // поскольку нам нужна не строка а вся ёлка выводится с console.log в цикле*/
/*
function getImage (str,num){
    let result = '';
    let counter = 0;
    while (counter < num){
        result += str
        console.log(result)
        counter++
    }
    return result
}
getImage('*', 6)*/
/*function getImage (str,num){
    let result = ` // когда строки, можно `обратными задавать`
    *
    **
    ***
    ****
    *****
    ******`

    return console.log(result)
}
getImage('*', 6)*/

/*
function foo(str){
    let result = [];
    let arr = str.split('. ')

    for (let i = 0; i<arr.length; i++){
        result.push(arr[i].split(' ')[0])
    }
    return result
}

console.log(foo('undefined is not a function: это та самая часть про ошибку. В случае с сообщениями об ошибках, читать их нужно прямо буквально. Например, в этом случае, она значит то, что код попытался использовать значение undefined как функцию.'))
*/
/*
function solution(string) {
    let result = [];
    let arr = string.split('')


    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i].toUpperCase()) {
            arr[i] = ' ' + arr[i];
        }
        result.push(arr[i]);
    }
    return result.join('');
}

console.log(solution("camelCasing")) //  =>  "camel Casing"
console.log(solution("identifier")) //   =>  "identifier"
console.log(solution("")) //             =>  ""*/

var arr = [ 3, 24, 11, 56, 7 ];
arr.sort((a,b) => a - b);
console.log(arr);

var arr = [ "Паша", "Яна", "Аня", "Нина" ];
arr.sort();
console.log(arr.reverse());

let i = 0;
console.log(i++); // 0
let k = 0;
console.log(++k); // 1

let a =1, b=5
console.log(a || b)

