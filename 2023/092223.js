//Dad is Commatose - 7kyu
// Write a function called dadFilter that takes a string as argument and returns a string with the extraneous commas removed. The returned string should not end with a comma or any trailing whitespace.

function dadFilter(str){
  return str
    .trim()
    .split("")
    .map((char, index, arr) =>
         {
          if (char==",") {
            if (arr[index+1] == "," || index==arr.length-1) {
              return "";
            }
          }
          return char;
        }).join("");
}




