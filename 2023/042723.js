//Convert string to camel case - 6kyu
/*****intentionally solved without regex*/
/* Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized. */

function toCamelCase(str){
  let upperCase = true;
  let result = '';
  if (str.charAt(0).toLowerCase() === str.charAt(0)) {
    upperCase = false;
  };
  if (str.includes("-")) {
    result = str = str.split("-").map(word => word.charAt(0).toUpperCase()+word.slice(1)).join("");
  }
  if (str.includes("_")) {
    result = str.split("_").map(word => word.charAt(0).toUpperCase()+word.slice(1)).join("")
  }
  return upperCase ? result : result.charAt(0).toLowerCase()+result.slice(1) ;
}
