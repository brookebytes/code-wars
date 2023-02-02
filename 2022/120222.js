//Changing letters 
//When provided with a String, capitalize all vowels (not including Y)

function swap (string) {
  const vowels = ['a','e','i','o','u'];
  return string.split("").map(char => vowels.includes(char) ? char.toUpperCase() : char).join("");
}
