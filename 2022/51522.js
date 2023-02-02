//Find the nth Digit of a Number - 7kyu
//Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).
//If num is negative, ignore its sign and treat it as a positive value
//If nth is not positive, return -1
//Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0
var findDigit = function(num, nth){
  let digits = num.toString().split("").reverse();
  if (nth>0){
    if (nth<=digits.length){
      return parseInt(digits[nth-1]) ? parseInt(digits[nth-1]) : 0;
    }
    return 0;
  }
  return -1;
}

console.log("=====find the nth digit tests:=====");
console.log(findDigit(5673, 4)); //5
console.log(findDigit(129, 2)); //2
console.log(findDigit(-2825, 3)); //8
console.log(findDigit(-456, 4)); //0

//Even and Odd ! - 7kyu
//Given a number N, can you fabricate the two numbers NE and NO
//such that NE is formed by even digits of N and NO is formed by odd digits of N?
function evenAndOdd(num){
  let digits = num.toString().split("");
  let numEven = parseInt(digits.filter((x) => x%2==0).join(""));
  let numOdd = parseInt(digits.filter((x) => x%2!==0).join(""));
  return [numEven ? numEven : 0, numOdd ? numOdd : 0 ];
}

console.log("=====even and odd ! tests:=====");
console.log(evenAndOdd(126453)); //[264, 153]
console.log(evenAndOdd(3012)); //[2, 31]
console.log(evenAndOdd(4628)); //[4628, 0]

//Thinkful - Logic Drills: Traffic light = 8kyu
/*Complete the function that takes a string as an argument representing the current
state of the light and returns a string representing the state the light should change to.*/
function updateLight(current) {
  var lightColor = {
    'green': 'yellow',
    'yellow': 'red',
    'red': 'green',
    'error' : 'not a valid color'
  };
  return lightColor[current] || lightColor['error'];
}

console.log("=====traffic light tests:=====");
console.log(updateLight("green")); //yellow
console.log(updateLight("yellow")); //red
console.log(updateLight("red")); //green

//Substring fun - 7kyu
//Complete the function that takes an array of words.
//You must concatenate the nth letter from each word to construct a new word
//which should be returned as a string, where n is the position of the word in the list.
function nthChar(words){
  let str = "";
  words.forEach((word,index) => str+=word.charAt(index));
  return str;
}

console.log("=====substring fun tests:=====");
console.log(nthChar([])); // ''
console.log(nthChar(['yoda','best','has'])); //'yes'

//Multiples of 3 or 5 - 6kyu
/*Return the sum of all the multiples of 3 or 5 below the number passed in. 
Additionally, if the number is negative, return 0 (for languages that do have them).*/
function solution(number){
  let sum = 0;
  for (i=0; i<number; i++){
    if (i%3==0 || i%5==0){
      sum+=i;
    }
  }
  return sum;
}

console.log("=====multiples of 3 or 5 tests:=====");
console.log(solution(10)); //23
console.log(solution(20)); //78
console.log(solution(200)); //9168

//Your order, please - 6kyu
/*Your task is to sort a given string. Each word in the string will contain a single number. 
This number is the position the word should have in the result.*/
//my refactored solution:
const order = words => words ? 
      words.split(" ").sort((a,b) => /\d/.exec(a)[0]-/\d/.exec(b)[0]).join(" ") : "";

//my original solution
/*function order(words){
  let reg = /\d/;
  /*if (words!=""){
    return words.split(" ").sort((a,b) => reg.exec(a)[0]-reg.exec(b)[0]).join(" ");
  }
  return "";
}*/

console.log("=====yourd order, please tests:=====");
console.log(order("is2 Thi1s T4est 3a")); //"Thi1s is2 3a T4est"
console.log(order("4of Fo1r pe6ople g3ood th5e the2")); //"Fo1r the2 g3ood 4of th5e pe6ople"
console.log(order("")); //should return empty string

//Stop gninnipS My sdroW! - 6kyu
/*Write a function that takes in a string of one or more words, and returns the same string,
 but with all five or more letter words reversed*/
 function spinWords(string){
  return string.split(" ").map((word) => word.length>=5 ? word.split("").reverse().join("") : word).join(" ");
}
console.log("=====stop spinning my words! tests:=====");
console.log(spinWords("Welcome")); //emocleW
console.log(spinWords("Hey fellow warriors")); //"Hey wollef sroirraw"
console.log(spinWords("This is a test")); //, "This is a test"
console.log(spinWords("This is another test")); //"This is rehtona test"

//Strip Comments - 4kyu
/*Complete the solution so that it strips all text that follows any of a set of comment markers passed in. 
Any whitespace at the end of the line should also be stripped out.*/
function solution(input, markers) {
  let reg = new RegExp(`[${markers.join("")}]`,'g');
  let words = input.split("\n");
  return words.map((word) => word.search(reg)!=-1 ? word.substring(0,word.search(reg)-1) : word).join("\n");
};
console.log("=====strip comments tests:=====");
console.log(solution("apples, plums % and bananas\npears\noranges !applesauce",["%", "!"])); //apples, plums\npears\noranges
console.log("Q @b\nu\ne -e f g", ["@", "-"]); //"Q\nu\ne"
