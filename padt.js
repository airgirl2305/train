function padIt(str, n) {
  let counter = 1; // 1 action anyway
  for (let i = 1; i <= n; i++) {
    // запусти цикл 3 + 1 раза

    while (counter < n) {
      counter = counter + 1;
      console.log(counter - 1);

      if (i % 2 !== 0) {
        str = "*" + str;
        console.log(str);
      } else if (i % 2 === 0) {
        str = str + "*"; //console.log(counter)
        console.log(str);
      }
    }
  }
  console.log(counter - 1); // 4 + 1 upperone
  return String(str);
}

//console.log(padIt("a",1))//,"*a");
//console.log(padIt("a",2))//,"*a*");
//console.log(padIt("a",3))//,"**a*");
//console.log(padIt("a",4))//,"**a**");
console.log(padIt("a", 5)); //,"***a**");
