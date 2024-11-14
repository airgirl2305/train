/*In this kata you must return a string value, where the first part is the sum of positive numbers and the second part is the number of negative numbers.
Knowing that the first '0' is negative, the second is positive, the third is negative, and so on...*/

function sortArray(a1, a2) {
  let a3 = [];
  a1.forEach(el => a3.push(el[0]));
  //for (let i = 0; i < a1.length; i++) {a3.push(a1[i][0])}
  a2.sort(() => a2[0].localeCompare(a3));
  return a3;
}

console.log(sortArray(['giraffe', 'orangutan', 'impala', 'elephant', 'rhino'], ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus'])) // ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']
console.log(sortArray(['jellyfish', 'koi', 'caribou', 'owl', 'dolphin'], ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo'])) // ['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer']
console.log(sortArray(['newt', 'lizard', 'snail', 'tapir', 'rabbit'], ['tortoise', 'narwhal', 'llama', 'raven', 'sloth'])) // ['narwhal', 'llama', 'sloth', 'tortoise', 'raven']

/*
describe("Tests", () => {
  it("test", () => {
    var a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino'];
    var a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus'];
    Test.assertSimilar(sortArray(a1, a2), ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']);
    
    var a1 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin'];
    var a2 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo'];
    Test.assertSimilar(sortArray(a1, a2), ['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer']);
    
    var a1 = ['newt', 'lizard', 'snail', 'tapir', 'rabbit'];
    var a2 = ['tortoise', 'narwhal', 'llama', 'raven', 'sloth'];
    Test.assertSimilar(sortArray(a1, a2), ['narwhal', 'llama', 'sloth', 'tortoise', 'raven']);
  });
});*/
