//Odd or Even? - 7kyu
// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".

function oddOrEven(array) {
   return array.reduce((acc, num) => acc+num,0)%2===0 ? "even" : "odd";
}
