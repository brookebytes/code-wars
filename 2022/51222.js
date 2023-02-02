
//Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.
function isDivisible(n, x, y) {
    return (n%x==0 && n%y==0);
  }

//test cases

console.log(isDivisble(3,1,3)); //true
console.log(isDivisible(12,2,6)); //true
console.log(isDivisible(100,5,3)); //false
console.log(isDivisible(12,7,5)); //false


//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//The output should be two capital letters with a dot separating them.
function abbrevName(name){
    let words = name.split(" ");
    return `${words[0].charAt(0).toUpperCase()}.${words[1].charAt(0).toUpperCase()}`;
    }

//test cases
console.log(abbrevName("Sam Harris")); //S.H
console.log(abbrevName("patrick feeney")); //P.F

//Write a function which converts the input string to uppercase.
const makeUpperCase = str => str.toUpperCase();
//makeUpperCase("hello");//HELLO
