//By 3, or not by 3? That is the question... - 7kyu
/*If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.
Given a series of digits as a string, determine if the number represented by the string is divisible by three.*/
function divisibleByThree(str){
    let sum = str.split("").reduce((sum,curNum) => sum+=Number(curNum), 0);
    return sum%3===0;
  }

//Fix string case - 7ku
function solve(s){
    let countLower = s.match(/[a-z]/g) ? s.match(/[a-z]/g).length : 0;
    let countUpper = s.match(/[A-Z]/g) ? s.match(/[A-Z]/g).length : 0;
    if (countLower === countUpper) return s.toLowerCase();
    else return countLower > countUpper ? s.toLowerCase() : s.toUpperCase();
  }

//Sum The Strings - 8kyu
const sumStr = (a,b) => String(Number(a) + Number(b));

//Remove exclamation marks - 8kyu
const removeExclamationMarks = s => s.replace(/!/g, "");

//Remove First and Last Character Part Two - 8kyu
function array(arr){
    let nums = arr.split(",");
    nums = nums.slice(1,nums.length-1);
    return nums!="" ? nums.join(" ") : null;
  }

//Find numbers which are divisible by given number - 8kyu
const divisibleBy = (numbers, divisor) => numbers.filter((num) => num%divisor==0);

//Are arrow functions odd? - 8kyu
const odds = values => values.filter( n => n%2!==0);

//Is the string uppercase? - 8kyu
String.prototype.isUpperCase = function() {
    return this.toUpperCase() == this;
  }

//Multiple of index - 8kyu
const multipleOfIndex = array => array.filter((n,i) => n%i==0);

//Vowel remover - 8kyu
const shortcut = string => string.replace(/[aeiou]/g, "");

//Money Match: Double or Nothing - 7kyu
function doubleOrNothing(cash, wager, losses){
    let totalBet = wager;
    for (i=2; i<=losses; i++){
      totalBet += totalBet;
    }
    return cash-totalBet>=0 ? cash-totalBet : "I'll pay you back later";
  }

//Round up to the next multiple of 5 - 7kyu
const roundToNext5 = n => Math.round(Math.ceil(n/5)*5);

