//Even numbers in an array - 7kyu

function evenNumbers(array, number) {
  let evenNums = array.filter(num => num%2==0)
  return evenNums.slice(evenNums.length-number);
}
