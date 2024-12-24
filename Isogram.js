function isIsogram(str) {
  let arr = str.split("");
  if (str !== "") {
    for (let i = 0; i < arr.length - 2; i++) {
      console.log(arr[i]);
      for (let j = 1; j < arr.length; j++) {
        console.log(arr[i], arr[j]);
        if (arr[i] == arr[j]) {
          return false;
        }
      }
    }
  }
  return true;
}

//console.log(isIsogram('aba'));
//console.log(isIsogram('moOse'));
//console.log(isIsogram('isIsogram'));
//console.log(isIsogram(''));
console.log(isIsogram("Dermatoglyphics"));
