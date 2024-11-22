// Alternate capitalization - 7kyu
/* Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
 * The input will be a lowercase string with no spaces. */

function capitalize(s){
  let result = ["", ""];
  for (i = 0; i < s.length; i++) {
    if (i % 2 == 0) {
      result[0] += s[i].toUpperCase();
      result[1] += s[i].toLowerCase();
    }
    else {
      result[0] += s[i].toLowerCase();
      result[1] += s[i].toUpperCase();
    }
  }
  return result;
};


// return [ s.split("").map((e, i) => i % 2 == 0 ? e.toUpperCase() : e.toLowerCase()).join(""),
       //   s.split("").map((e, i) => i % 2 != 0 ? e.toUpperCase() : e.toLowerCase()).join("") ] ;
