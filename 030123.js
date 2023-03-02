//No ifs no buts - 7kyu
// Write a function that accepts two numbers a and b and returns whether a is smaller than, bigger than, or equal to b, as a string.
// You cannot use if statements, and you cannot use the ternary operator ? : 

function noIfsNoButs(a, b) {
  switch (a>b) {
    case true:
      return `${a} is greater than ${b}`;
    case false:
      switch (a==b) {
        case true:
            return `${a} is equal to ${b}`;
        case false:
          return `${a} is smaller than ${b}`;
      }
  }
}
