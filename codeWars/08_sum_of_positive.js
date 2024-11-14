function positiveSum(arr) {
  let result = 0;
  arr.map(el => el > 0 ? result +=el : result)
  return result;
}

const positiveSum = arr => arr.reduce((acc, cur) => cur > 0 ? acc + cur : acc, 0)

const positiveSum = (arr) => arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0);

function positiveSum (arr) {
  return arr.filter(x => x>=0).reduce((a, c) => a + c, 0);
}

console.log(positiveSum([1, 2, 3, 4, 5]))  //, 15))

/*
const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(positiveSum([1,2,3,4,5]),15);
    assert.strictEqual(positiveSum([1,-2,3,4,5]),13);
    assert.strictEqual(positiveSum([]),0);
    assert.strictEqual(positiveSum([-1,-2,-3,-4,-5]),0);
    assert.strictEqual(positiveSum([-1,2,3,4,-5]),9);
  });
});*/
