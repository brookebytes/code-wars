//Tidy Number (Special Numbers #9) - 7kyu
// A Tidy number is a number whose digits are in non-decreasing order.



function tidyNumber(n){
   return n
     .toString()
     .split("")
     .every((num, i, arr) => num <= arr[i+1] || i==arr.length-1);
}
