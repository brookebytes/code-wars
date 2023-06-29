//Triple Trouble - 8kyu
/* Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter */

function tripleTrouble(one, two, three){
  const words = [...arguments];
  let result = '';
  for (i=0; i<words[0].length*3; i++) {
    words.forEach(letter => result+=letter.charAt(i));
  }
  return result;
 }
