function yes(string) {
  let data = string.toLowerCase;

  for (let i = 0; i < data.length; i += 0) {
    let counter = 0;

    if (data[i] === "yes") {
      counter++;
    }
  }
  return counter;
}

console.log(yes("yae", "yes", "YES")); //2
