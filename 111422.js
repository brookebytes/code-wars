//Do I get a bonus? - 8kyu
/* Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
 * If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
 * Return the total figure the individual will receive as a string prefixed with "£" */

function bonusTime(salary, bonus) {
  return bonus ? `\u00A3${salary*10}` : `\u00A3${salary}`;
}


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
