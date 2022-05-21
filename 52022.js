//Consecutive Items
/*You are given a list of unique integers arr, and two integers a and b. 
 * Your task is to find out whether or not a and b appear consecutively in arr, 
 * and return a boolean value. It is guaranteed that a and b are both present in arr.*/
function consecutive(arr, a, b) {
    let index = arr.findIndex((x) => x==a);
    return arr[index+1]==b || arr[index-1]==b;
  }

//Digits explosion
/**Given a string made of digits [0-9], return a string where each digit is repeated
 * a number of times equals to its value.*/
const explode = s => s.split("").map((n) => n.repeat((Number(n)))).join("");

//Sum of Multiples 
/*Find the sum of all multiples of n below m. n and m are natural numbers (positive integers)
 * m is excluded from the multiples */
function sumMul(n,m){
    let sum = 0;
    for (i=n; i<m; i++){
      if (i%n==0){
        sum+=i;
      }
    }
    return sum>0 ? sum : 'INVALID';
  }