//function isTriangle(a,b,c)
//{((a + b + c) > 0) ? true : false }
/*Реализуйте функцию capitalize(),
которая принимает непустую строку и приводит первую букву
первого слова к верхнему регистру:
function capitalize (a){
    let arr = a.split()
    a = arr[i].toUpperCase()
    return a
}*/

/*capitalize1stLetter(string) => {string[0].toUpperCase() + string.slice(1);
}
console.log(capitalize1stLetter('capital'))

const capitalize(name) => name[0].toUpperCase + name.slice(1, name[name.length - 1];
console.log(capitalize(name));*/

/*function helloWorld () {
    var str = 'Hello World!';
//    console.log(str);
    return str;
}
console.log(helloWorld())


function saleHotdogs(n){
    let price;
    if (n < 5){
        price = 100;
    } else {
        if (n >= 10){
            price =90;
        } else {
            price = 95;
        }
    }
    return price
}

console.log(saleHotdogs(11));

function bubbleSort(arr) {
    for (var i = 0, endI = arr.length - 1; i < endI; i++) {
        for (var j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] > arr[j + 1]) {
                var swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([3, 4, 8, 0, -1])) // [-1, 0, 3, 4, 8]


function arrayDiff(a, b) {
    a.filter(a => a.includes(b));
}


const result = words.filter(word => word.length > 6);
console.log(arrayDiff([1,2],[1]))
console.log(arrayDiff([1,2],[3]))
console.log(['g', 'n', 4] - ['a'])

function pickIt(arr){
    var odd=[],even=[];
    for (let i = 0; i < arr.length; i+=1){
        if (arr[i] % 2 !== 0){
            odd.push(arr[i]);
        } else {
            even.push(arr[i]);
        }
    }
    return [odd,even];

}
console.log(pickIt([1,2,6]));

function pickIt(arr){
    var odd=[],even=[];
    for(var x of arr){
        (x%2===0?even:odd).push(x)}


    return [odd,even];
}

var pushElement= arr => {arr.push(1); return arr}

var popElement= arr => {arr.pop(); return arr}*/
/*
function countSmileys(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i+=1){
        if (arr[i].includes(':'||';')){
            if (arr[i].includes('-'||'~')){
                if (arr[i].includes(')'||'D')){
                    count += 1;
                }
            }
        }
    }
}
console.log(countSmileys([':D',':~)',';~D',':)'])) */

/*function list(names){
    for (let i = 1; i < names.length; i++){
        let Names = '';
        Names = name.names[i];
        return Names}//your code here

}
console.log(list(([{name: 'Bart'},{name: 'Lisa'}])))*/
function square(data){
    return ((typeof Number(data)) !== 'number') ? 'Ошибка преобразования данных': data ** 2}
console.log(square(9))// square('3') →  9
console.log(square('Мама мыла раму'))// square('Мама мыла раму') →  'Ошибка преобразования данных'
console.log(square()) // square() →  'Ошибка преобразования данных'