/*День 4.

Задача 1.
Напишите функцию evaluate, которая принимает на вход строку операции,
записанной в префиксной нотации, и возвращает результат выполнения операции:

// evaluate('(* 3 3)') → 9;
// evaluate('(- 420 69)') → 351;*/

/*function evaluate (expressionString){

    let expressionArray = expressionString.slice(1,-1).split(' ');

    let expression = [expressionArray[1],
        expressionArray[0],
        expressionArray[2]];
    return eval(expression.join(''));//В современной разработке на JavaScript eval используется весьма редко.
Есть даже известное выражение – «eval is evil» ДУМАЮ
}

console.log(evaluate('(* 3 3)')) // → 9;
console.log(evaluate('(- 420 69)')) // → 351;*/

function evaluate (expressionString){

    let expressionArray = expressionString.slice(1,-1).split(' ');
    let val1 = Number(expressionArray[1]);
    let val2 = Number(expressionArray[2]);

    if(!(Number.isNaN(val1) || Number.isNaN(val2))){
        switch (expressionArray[0]) {
            case '*':
                return val1 * val2;
            case '-':
                return val1 - val2;
            case '+':
                return val1 + val2;
            case '**':
                return val1 ** val2;
            case '%':
                return val1 % val2;
            default:
                return 'Error';
        }
    }
    return 'по крайней мере один из операндов имеет не верный формат'
}

console.log(evaluate('(** 2 3)')) // → 8;
console.log(evaluate('(* 3 3)')) // → 9;
console.log(evaluate('(- 420 69)')) // → 351;


/*    Задача 2.
Напишите функцию countOverlap, которая считает и возвращает количество
совпадений i-ыx элементов в массиве a c i-ми элементами массива b

// countOverlap([1, 2, 7, 3, 8], [7, 2, 10, 3, 8]) → 3
// countOverlap([11, 9, 5, 3, 10], [8, 8, 40, 1, 12]) → 0*/

function countOverlap(a, b){
    let counter = 0;
    for (let i = 0; i < a.length; i++){
        if (a[i] === b[i]){
            counter += 1;
        }
    }
    return counter;
}

console.log(countOverlap([1, 1, 1, 1, 1], [1, 1, 1, 1, 1])) // → 0
console.log(countOverlap([1, 2, 7, 3, 8], [7, 2, 10, 3, 8])) // → 3
console.log(countOverlap([11, 9, 5, 3, 10], [8, 8, 40, 1, 12])) // → 0