function foo(str){
    let result = [];
    let arr = str.split('. ')

    for (let i = 0; i<arr.length; i++){
        result.push(arr[i].split(' ')[0]) // Массив[его 1 значение]
    }
    return result
}

console.log(foo('str')); // 1, затем 3, 5, 7, 9
}


function pickIt(arr){
  var odd=[],even=[];
  for (let i = 0; i < arr.lenght; i+=1){
    if (arr[i] % 2 !== 0){
      odd.push(arr[i]);
    } else {
      even.push(arr[i]);
    }
  }
  return [odd,even];

}
  console.log(odd);
  console.log(even);
