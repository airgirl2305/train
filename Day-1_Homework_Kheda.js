/*День 1.

Задача 1. Напишите цикл, который поочерёдно выводит в консоль числа от 0 до 10,
чередуя отрицательные и положительные:

   0
 - 1
   2
  -3
   4
   …
 */

for (let n = 0; n <= 10; n++) {
  console.log(n % 2 === 0 ? n : n * -1);
}

/*    Задача 2. Напишите функцию square, которая принимает на вход значение
произвольного типа данных,
преобразует его в число и возвращает квадрат этого числа.
Если значение невозможно преобразовать в число,
функция должна вернуть строку «Ошибка преобразования данных».*/

// несмотря  на условие  мы хотим  при пустом массиве получать ошибку
let square0 = (data) => {
  return Number.isNaN(Number(data)) ? "Ошибка преобразования данных" : data ** 2;
};

function square(data) {
  if (Number.isNaN(Number(data)) || typeof val === "object") {
    //  if(Number.isNaN(num) || Array.isArray(val) || typeof val === 'boolean' || typeof val === 'object')
    return "Ошибка преобразования данных";
  }
  return data ** 2;
}

/* isNaN проверяет, не является ли переданное значение числом или
не может быть преобразовано в число.
А Number.isNaN проверяет, равно ли значение NaN*/

console.log(square(9)); // square('3') →  9
console.log(square("Мама мыла раму")); // square('Мама мыла раму') →  'Ошибка преобразования данных'
console.log(square()); /// square() →  'Ошибка преобразования данных'
// дополнительные проверки
console.log(square({})); // 'Ошибка преобразования данных'
console.log(square([])); // 'Ошибка преобразования данных' а у нас 0 Поставим условие
console.log(square(12)); //144

function square2(data) {
  let validData = Number(data);
  if (typeof validData === "number" && validData === validData) {
    return validData ** 2;
  }
  return "Ошибка преобразования данных";
}
//NaN никогда не равен себе.

console.log(square2(9)); // square('3') →  9
console.log(square2("Мама мыла раму")); /// square('Мама мыла раму') →  'Ошибка преобразования данных'
console.log(square2()); /// square() →  'Ошибка преобразования данных'*/

// Тип NaN - это number
let validData = Number("JK");
console.log(typeof validData); // number
console.log(validData ** 2); // NaN*/
