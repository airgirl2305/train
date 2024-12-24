/*1) Используя цикл for или while выведи в консоль числа от 1000 до 0 с шагом 5. Выполни это задание еще раз, но используя другой цикл. */

let i = 1000;

while (i >= 0) {
  console.log(i);
  i = i - 5;
}

for (let j = 1000; j >= 0; j = j - 5) {
  console.log(j);
}

/*2) Напиши функцию, которая в массиве чисел находит и возвращает наименьшее число. Проверь работоспособность своей функции, добавив в массив отрицательные числа.
	[94, 2, 71, 10, 22, 71] —>  2
Не используя Math.min*/

function min(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let b = arr[i];
        arr[i] = arr[j];
        b = arr[j];
      }
    }
    result = arr[0];
  }
  return result;
}

console.log(min([94, 2, 71, 10, 22, 71]));
console.log(min([94, 2, 71, -10, 22, 71]));

/*3) Напиши функцию для проверки спама, которая принимает строку и возвращает true, если в строке есть запрещенное слово "XXX".
// ('free xxx') → true
// ('Elbrus exam') → false*/

function spam(str) {
  let arr = str.toLowerCase().split(" ");

  return arr.includes("xxx") ? true : false;
}

console.log(spam("free xxx"));
console.log(spam("Elbrus exam"));

/*4) Напишите функцию, которая принимает два аргумента: первый - строка которую мы хотим проверить на наличие запрещенных слов,
второй - это массив содержащий все запрещенные слова.
Соответственно, если строка содержит хоть одно запрещенное слово из массива, возвращаем true, если же запрещенных слов нет - возвращаем false
Пример:
	("Мама мыла раму", ['ххх', 'цензура', 'плохоеслово']) -> false
("Мама мыла раму", ['ххх', 'цензура', 'плохоеслово', 'раму']) -> true*/

function censor(string, words) {
  let arr = string.toLowerCase().split(" ");

  for (let i = 0; i < words.length; i++) {
    if (arr.includes(words[i])) return false;
  }
  return true;
}
//невнимательно
console.log(censor("Мама мыла раму", ["ххх", "цензура", "плохоеслово"]));
console.log(censor("Мама мыла раму", ["ххх", "цензура", "плохоеслово", "раму"]));

/*5) Напиши функцию, принимая строку и максимальную длину, проверяет длину строки, если она больше максимальной,
заменяет конец строки на "…", так, чтобы её длина стала равна максимальной.

// ("Вот, что мне хотелось бы сказать на эту тему:", 20)  →  "Вот, что мне хотело…"
// ("Всем привет!", 20) → "Всем привет!" */

function len(str, l) {
  return str.length < l ? str : str.slice(0, l - 1) + "...";
}

console.log(len("Вот, что мне хотелось бы сказать на эту тему:", 20));
console.log(len("Всем привет!", 20));
