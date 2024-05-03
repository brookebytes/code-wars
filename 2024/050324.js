//Data Reverse - 6kyu
/* A stream of data is received and needs to be reversed.
 * Each segment is 8 bits long, meaning the order of these segments needs to be reversed. 
 * The total number of bits will always be 8. 
 * The data is given in an array. */

function dataReverse(data) {
  let reversed = [];
  for (i=0; i < data.length; i+=8) {
    reversed.unshift(data.slice(i, i+8));
  }
  return reversed.flat();
  /*
  for (i = data.length; i >= 0; i-=8) {
    reversed.push(data.slice(i-8, i));
  }
  return reversed.flat();
  */
}
