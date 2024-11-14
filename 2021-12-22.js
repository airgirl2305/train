function countSmileys(arr) {
    let counter = 0;
    for (let i = 0; i < arr.length; i+=1){
        if ((arr[i].includes(':')) || (arr[i].includes(';'))){
            if ((arr[i].includes('-')) || (arr[i].includes('~')) || (arr[i].length === 2)){
                if ((arr[i].includes(')')) || (arr[i].includes('D'))) {
                    counter = counter + 1;
                }
            }
        }
    }
    return counter;
}

function countSmileys(arr) {

    function validNose(nose){
        if (nose === '-' || nose === '~') return true;
        else return false;
    }

    function validMouse(mouse){
        if (mouse === ')' || mouse === 'D') return true;
        else return false;
    }

    function validEyes(eyes){
        if (eyes === ':' || eyes === ';') return true;
        else return false;
    }


    const res = arr.filter((smile) => {
        if(smile.length === 3){
            if(validEyes(smile[0]) && validNose(smile[1]) && validMouse(smile[2])) return true;
            else return false;
        } else if(smile.length === 2){
            if(validEyes(smile[0]) && validMouse(smile[1])) return true;
            else return false;
        }
        return false;
    })

    return res.length;
}

console.log(countSmileys([':)', ';(', ';}', ':-D'])); // should return 2
console.log(countSmileys([';D', ':-(', ':-)', ';~)'])); // should return 3;
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])); // should return 1;
console.log(countSmileys([';)' , ':>' , ';(' , ';)' , ';->' , ':o)' , ':->'])); // should return 2
console.log(countSmileys([';D' , ':~D' , ':)' , ':oD' , ';-( ', ':(' , ';)'])); // should return 4;
console.log(countSmileys([':)',':(',':D',':O',':;'])); // 2
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])); // 1
console.log(countSmileys([';-)' , ':-D' , ';oD' , ';)' , ';>' , ':)' , ':)'])) // Expected: 5, instead got: 6

const faces = new Set()
for (let eyes of [':',';'])
    for (let nose of ['-','~',''])
        for (let mouth of [')','D'])
            faces.add(eyes+nose+mouth)

countSmileys =(arr)=> arr.filter(x => faces.has(x)).length