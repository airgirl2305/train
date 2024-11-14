function peak(arr){
    let index = -1;

    for(let i = 1; i < arr.length - 1; i += 1){

        // if(arr.slice(0, i).reduce((x,y) => x + y, 0) === arr.slice(i + 1).reduce((x,y) => x + y, 0)) {
        //   return i;
        // }

        const leftSubArr = arr.slice(0, i);
        let sumLeft = leftSubArr.reduce((x,y) => x + y);

        const rightSubArr = arr.slice(i + 1);
        let sumRight = rightSubArr.reduce((a,b) => a + b);

        if(sumLeft === sumRight) return i;
    }
    return index;
}



console.log(peak([1,2,3,5,3,2,1])); // 3

const array1 = [1, 2, 3, 4];
const reducer = (0, 2) => x + y;


console.log(peak([1,2,3,5,3,2,1])); // 3
console.log(peak([10,20,30,40])); // -1

function printerError(s) {
    let count = 0;
    for(let i = 0; i < s.length; i++){
        if(s.charCodeAt(i) > 109) count++;
    }
    return `${count}/${s.length}`;
}


console.log(printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz')); // '3/56'

