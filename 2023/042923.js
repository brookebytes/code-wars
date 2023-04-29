//Running out of space - 7kyu
/* Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing. */

function spacey(array){
  let result = [];
  let str = '';
  for (word of array) {
    str += word;
    result.push(str);
  }
  return result;
}
