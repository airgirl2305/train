/*function censor(originalText, badWords) {
    let result = '';

    const arr = originalText.split(' ');

    for(let i = 0; i < arr.length; i += 1){
        if(!badWords.includes(arr[i])) {
            //result += `${arr[i]} `;
            //result = result + arr[i] + ' ';
            result += arr[i];
            result += ' ';
        }
    }

    return result.trim();//  return result.slice(0, -1); //   return result.slice(0, result.length - 1);
}

console.log(censor('mama myla XXX ramu', ['XXX', 'ass'])); // mama myla ramu */

/*function even_or_odd(number) {
    return number % 2 ? "Odd" : "Even" // тернарником number % 2 === 0
}*/

// следить за return

/*function sumOfPositive(arr) {
    let sum = 0;

    for(let i = 0; i < arr.length; i += 1) {
        if(arr[i] > 0) sum += arr[i];
    }

    return sum;
}*/
/*
function removeChar(str){
    // let result = '';

    // for(let i = 0; i < str.length; i += 1){
    //   if(!(i === 0 || i === str.length - 1)) {
    //     result += str[i];
    //   }
    // }

    //return result;

    return str.slice(1, -1) // запомни!
}


console.log(removeChar('cat')); // 'a'*/

//stroka = (string) => string.replace(/[aeiou]/g, ''); // регулярные выражения

/*function shortcut(string){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = '';
    for(let i = 0; i < string.length; i += 1){
        if(!vowels.includes(string[i])){
            result += string[i];
        }
    }
    return result;
}*/

/* function ourIncludes(arr, element){
  for(let i = 0; i < arr.length; i += 1){

    if(arr[i] === element) {
      return true; // дал нам искомый позитив
    }
  }
  return false; // вывели за цикл
}

 console.log(ourIncludes([1,10,3,6], 1)); // true
 console.log(ourIncludes([1,10,3,6], 9)); // false
 console.log(ourIncludes([1,10,9,3,6], 9)); // true*/

/*function sum(digits) {
//let digitsSum = 0;
//console.log(typeof +digits)}
//    if (typeof +digits === 'string'){
//        return ''
 //   }
    /*let forSum = Number(digits);
    forSum = forSum.join('')
      if (digits > 0) {
        for (let i = 0; i < forSum.length; i++) {
           digitsSum += forSum[i];}
      } else {
        digitsSum = '';
            };
        return digitsSum;
        }

//console.log(sum('3433')) //13
//console.log(sum(64323)) // 18
//console.log(sum(8)) // 8
//console.log(sum('hk')) // 8
function peak(arr){

    let sum = 0;
    let index = 0;

    for (let i = 1; i < arr.length; i++) {
        sum = sum + arr[i-1]; // works
          if (sum == arr[i]){index = i;}
    }
return index;} // прекратит на найденном


console.log(peak([1,2,3,5,3,2,1])) // 3*/
function peak(arr){
let sum = 0;
let index = 0;

    for (let i = 1; i < arr.length; i++) {
        sum = sum + arr[i-1]; // works
        //if (sum !== arr[i]){
        //index = i;
    return sum[i];}

}
//return index;} // прекратит на найденном


console.log(peak([1,2,3,5,3,2,1])) // 3
console.log(peak([1,12,3,3,6,3,1])) // 2
console.log(peak([10,20,30,40]))// -1
