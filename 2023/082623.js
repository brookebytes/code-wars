//The old switcheroo - 7kyu
// Write a function that that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.

function vowel2index(str) {
  return str.split("").map((char, index) => "aeiouAEIOU".includes(char) ? index+1 : char).join("");
}

