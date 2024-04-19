//Hex Hash Sum - 7kyu

function hexHash(code){
  return code
    .split("")
    .map(char => char
         .charCodeAt(0)
         .toString(16)
         .split("")
         .reduce((acc, cur) => parseInt(cur) ? acc+parseInt(cur) : acc, 0)
        )
    .reduce((acc, cur) => acc+cur, 0);
}
