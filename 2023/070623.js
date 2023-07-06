//Binary Pyramid 101 - 7kyu
/* Given two numbers m and n, such that 0 ≤ m ≤ n :
 	* convert all numbers from m to n (inclusive) to binary
	* sum them as if they were in base 10
	* convert the result to binary
	* return as a string 
*/

function binaryPyramid(m,n){
  let sum = 0;
  for (i=m; i<=n; i++) {
    sum += parseInt(i.toString(2));
  }
  return sum.toString(2);
}
