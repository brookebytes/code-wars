//Fibonacci's Fizz Buzz - 7kyu

var fibsFizzBuzz = function(n) {
  let sequence = [1,];
  let n1 = 0;
  let n2 = 1;
  
  for (i=1; i<n; i++) {
    let sum = n1 + n2;
    if (sum % 3 == 0 && sum % 5 == 0) {
      sequence.push("FizzBuzz");
    } else if (sum % 5 == 0) {
      sequence.push("Buzz");
    } else if (sum % 3 == 0) {
      sequence.push("Fizz");
    } else {
      sequence.push(sum);
    }
    n1 = n2;
    n2 = sum;
  }
  
  return sequence;
}
