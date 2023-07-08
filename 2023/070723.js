//Lario and Muigi Pipe Problem - 8kyu
/* Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included). */

function pipeFix(numbers){
  const min = numbers[0];
  const max = numbers[numbers.length-1];
  let pipes = [];
  for (i=min; i<=max; i++) {
    pipes.push(i);
  }
  return pipes;

}
