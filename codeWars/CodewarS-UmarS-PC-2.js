/*
function digPow(n, p){

  result = -1;
  let k = n.split('')
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
console.log(digPow(89, 1)) // 1;*/

//console.log(digPow(92, 1)) // -1;
//console.log(digPow(46288, 3)) // 51;