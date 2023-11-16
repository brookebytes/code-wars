//Number Manipulation I - 7kyu

function manipulate(num) {
  let numString = String(num);
  let middle = numString.length/2;
  return Number(numString.slice(0,Math.floor(middle)) + "0".repeat(Math.ceil(middle)));
}
