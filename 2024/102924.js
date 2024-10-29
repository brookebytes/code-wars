// Simple string reversal II - 7kyu
/* In this Kata, you will be given a string and two indexes (a and b). Your task is to reverse the portion of that string between those two indices inclusive.
 * Input will be lowercase and uppercase letters only.
 * The first index a will always be smaller than the string length; the second index b can be greater than the string length. More examples in the test cases. Good luck! */

function solve(st,a,b){
  return st.slice(0,a).concat( [...st.slice(a,b+1)].reverse().join(""), st.slice(b+1) );
}
