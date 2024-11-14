

// Задача 1.
// Напишите функцию evaluate, которая принимает на вход строку операции, записанной в префиксной нотации, и возвращает результат выполнения операции:

// evaluate('(* 3 3)') → 9;
// evaluate('(- 420 69)') → 351;

    function evaluate(str) {
        let arr = str.slice(1, -1).split(' ');

        let val1 = Number(arr[1]);
        let val2 = Number(arr[2]);

        if(!(Number.isNaN(val1) && Number.isNaN(val2))){
            switch (arr[0]) {
                case '*':
                    return val1 * val2;
                case '-':
                    return val1 - val2;
                case '+':
                    return val1 + val2;
                default:
                    return 'Error';
            }
        }
    }

    console.log(evaluate('(+ [] 3)'));
//console.log(evaluate('(- 420 69)'));

// Задача 1.
// Напишите функцию evaluate, которая принимает на вход строку операции, записанной в префиксной нотации, и возвращает результат выполнения операции:

// evaluate('(* 3 3)') → 9;
// evaluate('(- 420 69)') → 351;

    function evaluate(str) {
        let arr = str.slice(1, -1).split(' ');

        let val1 = Number(arr[1]);
        let val2 = Number(arr[2]);

        if(!(Number.isNaN(val1) || Number.isNaN(val2))){
            switch (arr[0]) {
                case '*':
                    return val1 * val2;
                case '-':
                    return val1 - val2;
                case '+':
                    return val1 + val2;
                default:
                    return 'Error';
            }
        }
        return 'по крайней мере один из операндов имеет не верный формат'
    }

    console.log(evaluate('(+ [] 3)'));
    console.log(evaluate('(- 420 69)'));

function evaluate(string) {
    let result = 0;
    let newArr = [];
    let strToArr = string.split('');

    strToArr.filter(function(el){
        if(el >= 0) {
            newArr.push(el);
            return newArr;
        }
    });
    let newArrToStr = newArr.join('');
    let strWithoutSpaces = newArrToStr.trim();
    let newStrToArr = strWithoutSpaces.split(' ');
    for(let i = 0; i < strToArr.length; i += 1){
        if (strToArr[i] === '*' && strToArr[i + 1] === '*') {
            newArr = newStrToArr.reduce(function(a, b) {
                return a ** b;
            }); result = newArr;
        } else if (strToArr[i] === '-'){
            newArr = newStrToArr.reduce(function(a, b) {
                return a - b;
            }); result = newArr;
        }  else if (strToArr[i] === '/'){
            newArr = newStrToArr.reduce(function(a, b) {
                return a / b;
            }); result = newArr;
        } else if (strToArr[i] === '*') {
            newArr = newStrToArr.reduce(function(a, b) {
                return a * b;
            }); result = newArr;
        }else if (strToArr[i] === '%') {
            newArr = newStrToArr.reduce(function(a, b) {
                return a % b;
            }); result = newArr;
        }else if (strToArr[i] === '+') {
            newArr = newStrToArr.reduce(function(a, b) {
                let c = Number(a);
                let d = Number(b);
                return c + d;
            }); result = newArr;
        }

    }  return result;
}

//Тесты
console.log(evaluate(`(** 3 3)`)); // 27 (но вычисляется 12)
console.log(evaluate(`(- 420 69)`)); // 351
console.log(evaluate(`(/ 10 2)`)); // 5
console.log(evaluate(`(* 3 4)`)); // 12
console.log(evaluate(`(% 3 2)`)); // 1
console.log(evaluate(`(+ 3 2)`)); // 5

