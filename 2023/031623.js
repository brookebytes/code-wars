//Minimum Steps (Array Series #6) - 7kyu
/* Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the arary until their Sum becomes greater or equal to K.
 * Notes: List size is at least 3.
 * All numbers will be positive.
 * Numbers could occur more than once.
 * Threshold K will always be reachable.*/


function minimumSteps(numbers, value){
  numbers.sort((a,b) => a-b)
  let sum = numbers[0];
  let count = 0;
  for (i=1; sum<value; i++) {
    sum+= numbers[i];
    count++;
  }
  return count;
}
