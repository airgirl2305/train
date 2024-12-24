//let myName = "Kheda";
//let age = 30;
//let haveJob = false;
//let trash = null;
//let color;
//let mobile = {
//  brand: "Apple",
//  color: "White",
// contacts: null,
//  gd: 4,
//  shop: {
//    location: "ТЦ Европейский",
//    metro: "Киевская"
//  }
//}

//console.log(mobile.shop.metro)

// выучить bigInt, symbol

// 2. Массивы Array

//let colors = ["Red","Blue","Green"] // object

// colors[0]  индексы значений массива с 0
//colors.length)
// около 20 методов с взаилодействием с массивами
// js array metods https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array#

//Array.prototype.push()

//let newLen = colors.push("White", "Orange")

//console.log(colors)

// многие методы иттерируют массив заменяют циклы

// 3. If else
// > < >= <= == === != !==
// = символ зарезервирован для присвоения значений, не математика
// == проверка значения
// === проверка значения и типа JS может неявно менять тип данных
// != отрицание без проверки на тип !== с проверкой

//if (2 > 3) {
//  console.log("Какой-то код 1")
//} else if (2 === "2") {
//   console.log("Какой-то код 2")
//} else {
//  console.log("ELSE")
//}

// 4. Цикл for
// Счётчик, условие и шаг
// i - iteration
// + - / * ** %
// i + 1 i += 1 i++

//for (let i = 0; i < 10; i = i + 2) {
//  console.log(i)
//}

//let colors = ["Red","Blue","Green"] ;

//for (let i = 0; i < colors.length; i++) {
//  console.log(colors[i])
//}

// 5. Функции

function hello(name, age) {
  return "Привет " + name + ". " + "Возраст: " + age;
}

console.log(hello());
console.log(hello("Дима", 20));
console.log(hello("Руслаг", 20));
