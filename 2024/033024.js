//Mutate My Strings - 7kyu

function mutateMyStrings(stringOne, stringTwo){
  let result = stringOne + "\n";
  let arr1 = [...stringOne];
  let arr2 = [...stringTwo];
  for (i=0; i<arr2.length; i++) {
    if (arr1[i]!=arr2[i]) {
      arr1[i] = arr2[i];
      result += arr1.join("") + "\n";
    }
  }
  return result;
}
