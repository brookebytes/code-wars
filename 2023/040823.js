//Divide and Conquer - 7kyu
/* Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.
 * Return as a number.*/

function divCon(x){
  let integersSum = x.filter(elem => typeof elem === 'number').reduce((acc,x) => acc+x, 0);
  let stringsSum = x.filter(elem => typeof elem === 'string').map(str => Number(str)).reduce((acc, x) => acc+x,0);
  return integersSum-stringsSum;
}
