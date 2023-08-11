//Filter the number - 7kyu
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

var filterString = function(value) {
  return Number(value.split("").filter(char => '0123456789'.includes(char)).join(""));
}
