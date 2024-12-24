function shortcut(string) {
  const vowels = ["a", "e", "i", "o", "u"];
  let result = "";
  for (let i = 0; i < string.length; i += 1) {
    if (vowels.includes(string[i])) {
      result += string[i];
    }
    return result;
  }
}
console.log(shortcut("stringy"));
