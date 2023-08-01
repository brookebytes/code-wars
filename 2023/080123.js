//Fizz / Buzz - 7kyu
/* Write a function that takes an integer and returns an array [A, B, C], where A is the number of multiples of 3 (but not 5) below the given integer, B is the number of multiples of 5 (but not 3) below the given integer and C is the number of multiples of 3 and 5 below the given integer. */

function solution(number){
  let result = [0,0,0];
  for (i=number-1; i>0; i--) {
    if (i%3==0 && i%5!=0) {
      result[0]+=1;
    } else if (i%5==0 && i%3!=0) {
      result[1]+=1;
    } else if (i%5==0 && i%3==0) {
      result[2]+=1;
    }
  }
  return result;
}
