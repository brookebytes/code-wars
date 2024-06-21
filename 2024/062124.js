// Simple Fun #6: Is Infinite Process? - 7kyu
/* Given integers a and b, determine whether the following pseudocode results in an infinite loop

 while (a !== b){
     a++
     b--
 }
Assume that the program is executed on a virtual machine which can store arbitrary long numbers and execute forever. */

function isInfiniteProcess(a, b) {
  return (b-a) % 2 != 0 || b-a < 0;
}
