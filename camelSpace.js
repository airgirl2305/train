function solution(string) {
  let result = [];
  let arr = string.split("");
  console.log(arr);

  //  mark:
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toUpperCase) {
      // continue mark
      arr[i] = " " + arr[i];
      console.log(arr[i]);
    }
    result.push(arr[i]);
  }
  return result.join("");
}

console.log(solution("camelCasing")); //  =>  "camel Casing"
//console.log(solution("identifier")) //   =>  "identifier"
//console.log(solution("")) //             =>  ""
