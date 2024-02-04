//Set Reducer - 7kyu

function setReducer(input) {
  while(input.length>1) {
    result = [];
      for (i=0; i<input.length; i++) {
        let count = 1;
        while (input[i] == input[i+1]) {
          count++;
          i++;
        }
        result.push(count>1 ? count : 1);
      }
    input = result;
  }
  return result[0];
}
