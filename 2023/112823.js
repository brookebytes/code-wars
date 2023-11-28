//Noonerize Me - 7kyu

function noonerize(numbers) {
  if (!numbers.every(num => typeof num === 'number')) {
    return "invalid array";
  }
  let [num1, num2] = [String(numbers[0]), String(numbers[1])];
  return Math.abs(Number(num2.slice(0,1)+num1.slice(1)) - Number(num1.slice(0,1)+num2.slice(1)));
}
