function returnEqualSidesIndex(numbers) {
  let sumFromStart;
  let sumFromEnd;
  for (i = 0; i < numbers.length / 2; i++) {
    sumFromStart += numbers[i];
    sumFromEnd += numbers[numbers.length - i - 1];
    if ((sumFromStart = sumFromEnd)) return i;
  }
  return -i;
}

console.log(returnEqualSidesIndex(1, 2, 3, 4, 3, 2, 1));
