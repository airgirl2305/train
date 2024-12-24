function censor(originalText, badWords) {
  let result = '';

  const arr = originalText.split(' ');

  for(let i = 0; i < arr.length; i += 1){
    if(!badWords.includes(arr[i])) {
      let arr2 += (arr[i] + ' ');
      result = arr2.slice(-1);
    }
  }
  return result;
}


console.log(censor('mama myla XXX ramu', ['XXX', 'ass'])); // mama myla ramu
