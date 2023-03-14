//Simple Pig Latin - 5kyu
//Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str){
  return str.split(" ").map(word => word.match(/[^a-zA-Z]/g) ? word : word.slice(1)+word.charAt(0)+"ay").join(" ");
}
