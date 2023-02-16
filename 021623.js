//Which are in? - 6kyu
//Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

function inArray(array1,array2){
  let included = [];
  for (str1 of array1){
    for (str2 of array2){
      if (str2.includes(str1) && !included.includes(str1)) {
        included.push(str1);
      };
    }
  }
  return included.sort();
}
