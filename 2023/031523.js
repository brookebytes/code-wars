//Form The Minimum - 7kyu
/*Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).
 * Note: Only positive integers will be passed to the function (>0), no negatives or zeros.*/

function minValue(values){
  const uniqueNums = [...new Set(values)];
  return Number(uniqueNums.sort((a,b) => a-b).join(""));
  
}
