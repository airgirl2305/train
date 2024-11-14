/* Напишите функцию count, которая считает количество искомых элементов в массиве и возвращает строку формата 'Элемент "X" был обнаружен в массиве N раз'

function count(arr){
    let arr = [1, 2, 7, 2, 8, 0, 2];
    let result = {};
    arr.forEach(function(a){
        if (result[a] != undefined) // если такого элемента нет
            ++result[a]; // добавляем пару с этим ключом в объект 1:0
        else
            result[a] = 1; // добавляем
    });
    for (let key in result) //
        console.log ('Элемент ' + key + ' был обнаружен в массиве ' + result[key] + ' раз(а)');
}// считает сколько раз каждый раз использован */


// Преинкременты
/* let x = 1;

console.log(x++) // 1 сначала значение переменной потом действие ++ приращение
console.log(x + 1) // сразу увеличиевает
console.log (++x) // как и верхнее
// лучше  всегда писать x += 1 как в airbnb

// Передаем ссылку
const pets = ['dog', 'cat', 'fish'];

const animals = pets; // меняем  ссылку

animals.push('wolf');
animals.push('fox');

console.log(pets); // dog cat fish wolf fox
*/
// const pets = new Array(); []
// const pets = new Array(3) // создание пустого Массива с длиной 3 Массив - это обьект -

// Как копировать значения массива
/*
function copyArray(arr){
    return arr.slice(); // slice копирует массив без действия
}

function copyArray(arr){
    const result = [];

    for(let i = 0; i < arr.length; i++){
        result.push(arr[i]);
    }
    return result;
} */

// Includes()
//console.log([1, 2, 3].includes(2));     // true
//console.log([1, 2, 3].includes(4));     // false
//console.log([1, 2, 3].includes(3, 3));  // false
//console.log([1, 2, 3].includes(3, -1)); // true
//console.log([1, 2, NaN].includes(NaN)); // true

function ourIncludes(arr, searchElement){ // Для прохода по каждому значению без остановки на первом правдивом неправильная Он не разрывает функкцию return а идет дальше нужно выходить из функции
    arr.forEach((el) => {
        if(el === searchElement) return true;
    })
    return false;
}

// console.log([1,2,3,4].includes(1)); // true
// console.log([1,2,3,4].includes(5)); // false

console.log(ourIncludes([1,1,1,1], 1)); // true
console.log(ourIncludes([1,2,3,4], 1)); // true
console.log(ourIncludes([1,2,3,4], 5)); // true

// Schrödinger's Boolean
// https://www.codewars.com/kata/5a5f9f80f5dc3f942b002309/train/javascript
// https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

// Сортировка buble sort
function sortArrOfNums(arr){
    for(let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++){
            if(arr[i] < arr[j]){
                let x = arr[i];
                arr[i] = arr[j];
                arr[j] = x;
            }
        }

    }
}


const example = [8,2,3,54,1];

sortArrOfNums(example);

console.log(example); // [1,2,3,8,54]