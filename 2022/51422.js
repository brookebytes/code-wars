//Odd or Even? Determine that! - 7kyu
//Given a number N, determine if the sum of N consecutive numbers is odd or even.
function oddOrEven(n) {
  if (n===0){
    return 'Even';
  }
  else if (n%2==0){
    if ((n/2)%2===0){
      return 'Even';
    }
  else {
    return 'Odd';
    }
  }
  else { 
    return 'Either';
  }
}

//Simple string characters - 7kyu
//In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters
function solve(s){
  let upperCaseCount = s.match(/[A-Z]/g)!=null ?  s.match(/[A-Z]/g).length : 0;
  let lowerCaseCount = s.match(/[a-z]/g)!=null ? s.match(/[a-z]/g).length : 0;
  let numbersCount= s.match(/[0-9]/g)!=null ? s.match(/[0-9]/g).length : 0;
  let charCount = s.match(/[`"{}\[\]\>\<\=\+\*.:;'_^%$#!?&()~@,-\/\\/]/g)!=null ? s.match(/[`"{}\[\]\>\<\=\+\*.:;'_^%$#!?&()~@,-\/\\/]/g) : 0;
  return [upperCaseCount,lowerCaseCount,numbersCount,charCount.length];
}

//Dropcaps - 7kyu
/*DropCaps means that the first letter of the starting word of the paragraph should be in caps and the remaining lowercase, just like you see in the newspaper.

But for a change, let"s do that for each and every word of the given String. Your task is to capitalize every word that has length greater than 2, leaving smaller words as they are.`*/
function dropCap(n) {
  let words = n.split(" ").map((x) => x.length > 2 ? x.charAt(0).toUpperCase()+x.substring(1,x.length).toLowerCase() : x);
  return words.join(" ");
}

//Insert dashes - 7kyu
/*Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.*/
function insertDash(num) {
  digits = num.toString().split("");
  let isOdd;
  let str = "";
  for (i=0; i<digits.length; i++){
    if (digits[i]%2!=0){
      if (isOdd){
        str+="-";
      }
      isOdd = true;
    }
    else {
      isOdd = false;
    }
    str+=digits[i];
  }
  return str;
}

//Remove All The Marked Elements of a List - 7kyu
//Define a method/function that removes from a given array of integers all the values contained in a second array.
Array.prototype.remove_ = function(integer_list, values_list){
  return integer_list.filter((n) => !values_list.includes(n));
}

//You're a square! - 7kyu
//Given an integral number, determine if it's a square number
var isSquare = n => (n>=0 && Number.isInteger(Math.sqrt(n))) ? true : false;

//Pull your words together, man! - 7kyu
/*Your function should:

Capitalise the first letter of the first word.
Add a period (.) to the end of the sentence.
Join the words into a complete string, with spaces.
Do no other manipulation on the words.*/
function sentencify(words) {
  words[0] = words[0].charAt(0).toUpperCase() + words[0].substring(1,words[0].length);
  let str = words.join(" ");
  return str+=".";
}

//Filter Long Words - 7kyu
//Write a function that takes a string and an an integer n as parameters and returns a list of all words that are longer than n.
const filterLongWords = (sentence, n) => sentence.split(" ").filter((word) => word.length>n);
