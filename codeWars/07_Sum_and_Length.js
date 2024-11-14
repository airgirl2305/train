/*In this kata you must return a string value, where the first part is the sum of positive numbers and the second part is the number of negative numbers.
Knowing that the first '0' is negative, the second is positive, the third is negative, and so on...*/

function filter_list(l) {
  // Return a new array with the strings filtered out
  // return l.filter(el => !isNaN(el) && typeof(el) == 'number');
  return l.filter(el => typeof(el) == 'number');
}

console.log(filter_list([1,2,'a','b'])) // [1,2]
console.log(filter_list([1,'a','b',0,15])) // [1,0,15]
console.log(filter_list([1,2,'aasf','1','123',123])) // [1,2,123]

describe("Tests", () => {
  it("test", () => {
    Test.assertSimilar(sumLength([1,2,3,4,-1,-2,-3]), '10 3')
    Test.assertSimilar(sumLength([1,2,3,4,0,-1,-2,-3]), '10 4')
    Test.assertSimilar(sumLength([-1,2,3,4,0,1,0,-2,0,-3]), '10 5')
    Test.assertSimilar(sumLength([-1,-2,-3,-4,0,-1,0,-2,0,-3]), '0 9')
    Test.assertSimilar(sumLength([1,2,3,4,1,2,3]), '16 0')
    Test.assertSimilar(sumLength([0,0,0,0,0,0,0]), '0 4')
    Test.assertSimilar(sumLength([]), '0 0')
  });
});