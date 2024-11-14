function digitize(n) {
  return n.toString().split('').reverse().map(Number)
      // String(n).split('').map(Number).reverse()
      // Array.from(String(n), Number).reverse();
}

console.log(digitize(348597)) // => [7,9,5,8,4,3]
console.log(digitize(0)) // => [7,9,5,8,4,3]

/*
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(digitize(35231),[1,3,2,5,3]);
    assert.deepEqual(digitize(0),[0]);
  });
});*/
