// Even or Odd - Which is Greater? - 7kyu
/* Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given. */

function evenOrOdd(str) {
  let  evenSum = str.split("").filter(e => Number(e)%2==0).reduce((acc, cur) => acc+Number(cur), 0);
  let oddSum = str.split("").filter(e => Number(e)%2!=0).reduce((acc, cur) => acc+Number(cur), 0);
  return evenSum > oddSum ? "Even is greater than Odd" : oddSum == evenSum ? "Even and Odd are the same" : "Odd is greater than Even";
}
