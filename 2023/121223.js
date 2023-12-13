//Slice the middle of a list backwards - 7kyu

function reverseMiddle(array) {
  let middle = Math.floor(array.length/2)-1;
  let numElements = array.length%2==0 ? 2 : 3;
  return array.splice(middle,numElements).reverse();
}
