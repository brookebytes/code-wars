//Sum without highest and lowest number
//Sum all the numbers of a given array, except the highest and the lowest element (by value, not by index!)

function sumArray(array) {
  return (array==null || array.length<3) ? 0 : array.sort((a,b) => a-b).slice(1,array.length-1).reduce((a,b) => a+b);
}

