//Sum even numbers - 7kyu
// Complete the function that takes a sequence of numbers as a single paramter. Your function must return the sum of the even values of this sequence.

function sumEvenNumbers(input) {
  return input.filter(num => num%2==0).reduce((acc,num) =>acc+num, 0);
}

