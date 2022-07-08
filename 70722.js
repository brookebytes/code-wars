//V A P O R C O D E - 7kyu
//Write a function tha converts all the letters in a sentence into uppercase and adds 2 spaces between each letter/special char. 
//Spaces should be ignored.

function vaporcode(string) {
  return string.split("").filter(x => x!==" ".toUpperCase()).map(x => x.toUpperCase()).join("  ");
}
