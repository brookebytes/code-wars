//last digits of a number - 7kyu
// Your job is to implement a function which returns the last D digits of an integer N as a list.

function lastDigit(n, d) {
  return String(n).split("").map(n => Number(n)).splice(-d,d);
}


