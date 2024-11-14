function towerBuilder(nFloors) {
 let result = [];
 for (let i = 0; i < nFloors; i++) {
   result.push(' '.repeat((nFloors-i)/2)+'*'.repeat(i*2+1)+' '.repeat((nFloors-i)/2))
  }
 return result;
}

console.log(towerBuilder(3))

/*
[ ' * ', ' *** ', '*****' ]
[ '  *  ', ' *** ', '*****' ]
describe("Tests", () => {
  it("test", () => {
Test.assertDeepEquals(towerBuilder(1), ["*"]);
Test.assertDeepEquals(towerBuilder(2), [" * ","***"]);
Test.assertDeepEquals(towerBuilder(3), ["  *  "," *** ","*****"]);
  });
});
[
  "  *  ",
  " *** ",
  "*****"
]*/
