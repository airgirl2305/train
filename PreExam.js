/*ЗАДАЧА 1
Напишите функцию, которая принимает на вход один аргумент ‘num’.
Функция возвращает значение типа boolean, true если число больше 100,
и false в противном случае
function num*/

function checkNum(num){
    return num > 100
}
console.log(checkNum(101))

/*ЗАДАЧА 2
Напишите функцию, которая принимает массив чисел и возвращает их сумму*/

function summ(arr){
    let arrSum = 0;
    for (i = 0; i < arr.length; i++) {
        arrSum += arr[i];
    }
    return arrSum;
}

console.log(summ([3, 1, 2]));

/*ЗАДАЧА 3
Напишите функцию, которая принимает на вход ‘name’ в виде строки, а в качестве ответа возвращает ‘Привет, ’
(Например, если на вход подаётся имя ‘Маша’, то ответом будет ‘Привет, Маша’)*/
function hello(name){
    return 'Привет, ' + name;
}
console.log(hello("Маша"))

