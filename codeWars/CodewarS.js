function digPow(n, p){

  result = -1;
  let k = n.split('') /*
  let N = 0;
    for (let i = 0; i < k.length; i += 1) {
      for (let j = p; p < k.length; j += 1) {
        N = N + k[i] ^ j;
          if (N === k * k[i]) {
          result = k[i];
          }
      }
    }
  return result
}
console.log(k.length)
console.log(digPow(89, 1)) // 1;
*/
//console.log(digPow(92, 1)) // -1;
//console.log(digPow(46288, 3)) // 51;

/**/
function arrayDiff(a, b) {
  let c = [];

  for (let i = 0; i < a.length; i += 1){
    for (let j = 0; j < b.length; j += 1){
      if (a[i] === b[j]){
      }
      c.push(a[i]);
    }
  }
    return c
  }

  console.log(arrayDiff([1, 2, 2], [2])) // [1]))
  console.log(arrayDiff([], [4,5])) // []))
  console.log(arrayDiff([3,4], [3])) // [4];
  console.log(arrayDiff([1,8,2], [])) // [1,8,2] у нулевого нет длины
  console.log(arrayDiff([1,2,3], [1,2])) // [3]

