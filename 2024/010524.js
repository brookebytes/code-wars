//Magic Sum of 3s - 7kyu

function magicSum(numbers) {
  return numbers.reduce((acc, cur) => cur%2!=0 && String(cur).includes("3") ? acc+cur : acc, 0);
}
