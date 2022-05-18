//Are the numbers in order? - 7kyu
//Your task is to determine whether the numbers are in ascending order. 
function inAscOrder(arr) {
    let arrDupe = arr.slice().sort((a,b) => a-b);
    return arr.every((x,i) => x==arrDupe[i]);
  }

  //test cases
console.log(inAscOrder([1, 2, 4, 7, 19])); //true
console.log(inAscOrder([1, 2, 3, 4, 5])); //true
console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20])); //false

//Can we divide it? - 8kyu
//Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.const isDivideBy = (number, a, b) => number%a==0 && number%b==0;
const isDivideBy = (number, a, b) => number%a==0 && number%b==0;
//test cases
console.log(isDivideBy(-12, 2, -6)); //true
console.log(isDivideBy(-12, 2, -5)); //true
console.log(isDivideBy(45, 1, 6)); //false