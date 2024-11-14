function fiveLine(s){
  let str=s.trim()+`\n`;
  let result =[str];
  for (let i=1;i<5;i++) {
    str=s.trim()+str;
    result.push(str)
  }
  result[4].slice(-2)
  return result//.join('')
}
console.log(fiveLine("  a")); // "a\naa\naaa\naaaa\naaaaa"
//console.log('\'a\\naa\\naaa\\naaaa\\naaaaa\'');
//a\\naa\\naaa\\naaaa\\naaaaa\,
// aaaaa\\n\