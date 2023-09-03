//Thinkful - List and Loop Drills: Lists of lists
//* Each sub-list contains two items, and each item in the sub-lists is an integer. Process each sub-list to subtract the second value from the first and then return the product of all these sub-lists. No input will be empty. */

function processData(data){
  return data.map(subArr => subArr[0]-subArr[1]).reduce((acc, num) => acc*num);
}
