//Uglify Word - 7kyu
//

function uglifyWord(s) {
  let flag = true;
  return s
    .toLowerCase()
    .split("")
    .map(char => {
        if ("abcdefghijklmnopqrstuvwxyz".includes(char)) {
          flag ? char=char.toUpperCase() : char=char.toLowerCase();
          flag = !flag;
        } else {
          flag = true;
        }
        return char;
      })
    .join("")
}
