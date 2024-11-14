/*function yes(arr){

    let counter = 0;

    for (let i = 0; i < arr.length; i += 1) {
        if(arr[i].toLowerCase() === 'yes'){
            counter++;
        }
    }
    return counter;
}

console.log(yes(['Yes', 'No', 'yes', 'No', 'YES'])) // 3 */

/*function yes(string){
    let arr = string.split(', '); // почему только первое
    console.log(arr)

    let counter = 0;
    for (let i = 0; i < arr.length; i += 1) {
        if(arr[i].toLowerCase() === 'yes'){
            counter++;
        }
    }
    return counter;
}

console.log(yes("Yes, No, yes, No, YES")) // 3*/

/*
function initials(Name){
    let result = [];
    let data = Name.split(' ');

    for (let i = 0; i < data.length; i++){
        result.push(data[i].slice(0,1) + '. ');
    }
    return result.join('').slice(0,-1);
}

console.log(initials('Adam Smith')) // -> A. S.*/
/*
function initials(Name){
    let result = Name.split(' ');
    return `${result[0][0]}. ${result[1][0]}.`; // Первое слово Первая буква интерполяция Посмотреть https://ru.code-basics.com/languages/javascript/lessons/interpolation
}

console.log(initials('Adam Smith')) // -> A. S.*/

/*function toMirror(num){
  let result = [];

  let data = (String(num)).split('');

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
      if (data[i] > data[j]) {// от большего < от меньшего
        let box = data[i];
        data[i] = data[j];
        data[j] = box;
      }
    }
  }

  if (data[data.length - 1] === '-') {//true
      data = data.slice(0,-1);// true
      return result = - data.join('');
  }
  return result = data.join('');
}
console.log(toMirror(-123));
console.log(toMirror(123));
console.log(toMirror(1000));*/

/*function toMirrorWithSort(num){
    let result = [];

    let number = (String(num)).split('');

    result = number.sort((a, b) => b - a);

    return result.join('');
}
console.log(toMirrorWithSort(-123));
console.log(toMirrorWithSort(123));
console.log(toMirrorWithSort(1000));

let  i = 0
for (i = 1; i <= 6; i+= 1){// обязательно слитно сначала <>
  if (i%5 === 0){
    console.log(i)
  }
}*/

/*
function padIt(str,n){
  let count = 0; // 1 action anyway
  do {
    str = (count % 2 === 0) ?  '*' + str : str + '*';
       count = count + 1;
      }
  while (count < n)
    return str;
  }

console.log(padIt("a",1))//,"*a");
console.log(padIt("a",2))//,"*a*");
console.log(padIt("a",3))//,"**a*");
console.log(padIt("a",4))//,"**a**");
console.log(padIt("a",5))//,"***a**"); */


/*function whatNumberIsIt(n){

  switch(Number(n)){
    case Infinity: return "Input number is Number.POSITIVE_INFINITY";
    case 1.7976931348623157e+308: return "Input number is Number.MAX_VALUE";
    case 5e-324: return "Input number is Number.MIN_VALUE";
    case -Infinity: return "Input number is Number.NEGATIVE_INFINITY";
    case NaN: return `Input number is (Number.isNAN == Nan)`;
    case Infinity: return "Input number is Number.POSITIVE_INFINITY";
    default:  return `Input number is ${n}`
  }
}
console.log(whatNumberIsIt(100)) // "Input number is 100");
console.log(whatNumberIsIt(1.7976931348623157e+308)) // "Input number is Number.MAX_VALUE");
console.log(whatNumberIsIt(5e-324)) // "Input number is Number.MIN_VALUE");
console.log(whatNumberIsIt(-Number.MAX_VALUE*2)) // "Input number is Number.NEGATIVE_INFINITY");
console.log(whatNumberIsIt(NaN)) // "Input number is Number.NaN");
console.log(whatNumberIsIt(Infinity+1)) // "Input number is Number.POSITIVE_INFINITY"); */

/*for (let g = 2; g <= 10; g  += 2) {
  console.log(g)
}*/

/*
for (let i = 0; i < 3; i++) { // (Счётчик; Условие; Шаг)
  console.log( `number ${i}!` );
}

let k = 0; // счётчик
while (k < 3) { // условие
  console.log( `number ${k}!` );
  k++; // шаг
}*/

/*  let n =10;
  let result = [];
  
nextPrime: // флаг
for (let g = 2; g <= n; g  += 1) {
  for (let h = 2; h < g; h += 1) {
    if (g % h == 0) continue nextPrime; // условие для выхода к флагу заново
  }//не дал добраться до действия
      console.log(g)
}*/

/*for (let i = 0; i < 10; i++) {
  
  // если true, пропустить оставшуюся часть тела цикла
  if (i % 2 == 0) continue; // условие пропуска действия
  
  alert(i); // 1, затем 3, 5, 7, 9
}*/

