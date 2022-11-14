//Is there a vowel in there? - 8kyu
/* Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a,e,i,o,u)
 * If they are, change the array value to a string of that vowel*/

function isVow(a){
  const vowels = [97,101, 105, 111, 117];
  return found = a.map(num => vowels.includes(num) ? String.fromCharCode(num) : num);
}




//How many lightsabers do you own? - 8kyu
//Zach owns 18, everyone else owns 0

const howManyLightsabersDoYouOwn = name => name === 'Zach' ? 18 : 0;
