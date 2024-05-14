//Squares sequence - 7kyu
/* Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.*/

function squares(x, n) {
  if (n <= 0) return [];
  let arr =[x];

  for(let i = 1; i < n; i++){
    arr.push(Math.pow(arr[i-1],2));

  }
return  arr;
}


