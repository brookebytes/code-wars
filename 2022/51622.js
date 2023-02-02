//Don't give me five! - 7kyu
/*In this kata you get the start number and the end number of a region and should return the count of 
all numbers except numbers with a 5 in it. The start and the end number are both inclusive!*/
function dontGiveMeFive(start, end) {
    let count = 0;
    for (i=start; i<=end; i++){
      if(!(/5/).test(i)){
        count++;
      }
    }
    return count;
  }

//Categorize New Member - 7kyu
//To be a senior, a member must be at least 55 years old and have a handicap greater than 7.
const openOrSenior = data => data.map((person) => person[0]>=55&&person[1]>7 ? 'Senior' : 'Open');

//Sum up the random string - 7kyu
//Given a random string consisting of numbers, letters, symbols, you need to sum up the numbers in the string.
function sumFromString(str){
    let sum = 0;
    str.split(/[^0-9]/g).filter((val) => parseInt(val)).forEach((num) => sum+=parseInt(num));
    return sum;
  }

//Sum of all arguments - 7kyu
//Write a function that finds the sum of all its arguments.
function sum() {
    let sum = 0;
    Array.from(arguments).forEach((n) => sum+=n);
    return sum;
  }

//String cleaning - 8kyu
/*Your program will take in a string and clean out all numeric characters, and return a string with spacing 
and special characters ~#$%^&!@*():;"'.,? all intact.*/
const stringClean = s => s.replace(/[0-9]/g, '');

//Short Long Short - 8kyu
/*Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the 
outside and the longer string on the inside.*/
function solution(a, b){
    return a.length>b.length ? b+a+b : a+b+a;
  }
