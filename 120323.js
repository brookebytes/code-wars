//String array duplicates - 6kyu

 function dup(s) {
   return s.map(str => str.split("").filter((char, i, arr) => char!=arr[i+1]).join(""));
};
