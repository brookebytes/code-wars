//String incrementer - 5kyu
/*Your job is to write a function which increments a string, to create a new string.
 * If the string already ends with a number, the number should be incremented by 1.
 * If the string does not end with a number. the number 1 should be appended to the new string.
 * If the number has leading zeros the amount of digits should be considered. */
//***Note that this was intentionally solved without using RegEx

function incrementString (strng) {
  const numbers = '0123456789'
  let arr = strng.split("r");
  let result = String(Number(arr[1])+1)

  if (arr.length > 1) {
    return arr[0]+'r'+ result.padStart((arr[1].length),'0');
  }

  if (numbers.includes(strng.charAt(0))) {
    result = String(Number(arr[0])+1)
    return result.padStart((arr[0].length),'0');
  }
  return strng+'1';
}
