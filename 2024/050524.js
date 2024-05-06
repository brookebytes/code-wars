//Double Every Other - 7kyu
// Write a function that doubles every second integer in a list, starting from the left.

function doubleEveryOther(a) {
  return a.map((num, i) => i%2!=0 ? num*2 : num);
}
