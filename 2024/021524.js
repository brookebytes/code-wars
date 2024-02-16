//Remove the minimum - 7kyu

function removeSmallest(numbers) {
  let arr = numbers;
  let minIndex = arr.indexOf(Math.min(...arr));
  return arr.slice(0,minIndex).concat(arr.slice(minIndex+1));
}
