// Sort the odd - 6kyu
/* You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions. */

function sortArray(array) {
  let oddNumbers = array.filter(num => num % 2 != 0).sort((a, b) => a-b);
  array = array.map(num => num % 2 == 0 ? num : "");
  let j = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "") {
      array[i] = oddNumbers[j];
      j++;
    }
  }
  return array;
}

