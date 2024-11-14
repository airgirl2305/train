/*День 2.

Задача 1.
Напишите функцию splitByLength, которая принимает на вход
строку string и число sliceLength,
а возвращает массив из подстрок строки string длины sliceLength.*/

// splitByLength('Мама мыла раму', 3) →  ['Мам', 'а м', 'ыла', ' ра', 'му']


function splitByLength(string, sliceLength){
    let result = [];
    for (let i = 0; i < string.length; i += sliceLength){
        result.push(string.slice(i, i + sliceLength));
    }
    return result;
}

console.log(splitByLength('Мама мыла раму', 3));

/*Задача 2.
Напишите функцию getEvenNumbers, которая принимает на вход массив чисел,
а возвращает новый массив, в котором содержатся только чётные числа исходного массива.*/

// getEvenNumbers([1, 2, 3, 228, 69, 420]) →  [2, 228, 420]

// getEvenNumbers([]) →  []

function getEvenNumbers(arr){
    let result = arr.filter(x => x % 2 === 0);
    return result;
}

console.log(getEvenNumbers([1, 2, 3, 228, 69, 420]));
console.log(getEvenNumbers([]));


