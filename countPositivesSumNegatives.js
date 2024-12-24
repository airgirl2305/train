function countPositivesSumNegatives(input) {
  let counter = 0;
  let sum = 0;

  if (typeof input !== "undefined" && input !== null && input.length > 0) {
    // Полная проверка пустого массива
    for (let i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        counter++;
      } else if (input[i] < 0) {
        sum = sum + input[i];
      } else input[i] = 0;
      {
        counter = counter;
        sum = sum;
      }
    }
    return [counter, sum];
  } else {
    return [];
  }
}
//console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]))// -> [8, -50];
//console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])) // -> [10, -65]
//console.log(countPositivesSumNegatives([-11, -12, -13, -14]))// -> [0, -50]
console.log(countPositivesSumNegatives([])); // -> []
//Testing for wrong test 1
//expected null to deeply equal []
