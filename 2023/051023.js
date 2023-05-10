//Adding Arrays - 7kyu
// Create a function that takes an array of letters, and combines them into words in a sentence.

function arrAdder(arr) {
  let str = '';
  let length = Math.max(...arr.map((array) => array.length));
  for (i=0; i<length; i++) {
    for (arry of arr) {
      if (arry[i] != undefined) {
        str += arry[i];
    }
  }
    str+=" ";
}
  return str.trim();
}
