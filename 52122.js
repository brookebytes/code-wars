//Absent vowel - 7kyu
//Your job is to figure out the index of which vowel is missing from a given string
function absentVowel(x){
    let vowels = ['a','e','i','o','u'];
    let missingIndex = 0;
    vowels.forEach((l,i) => {if (!x.includes(l)) missingIndex=i;});
    return missingIndex;
  }

  //Highest and Lowest - 7kyu
  /*In this little assignment you are given a string of space separated numbers, and 
  * have to return the highest and lowest number.*/
  function highAndLow(numbers){
    let sorted = numbers.split(" ").sort((a,b) => Number(b)-Number(a));
    return `${sorted[0]} ${sorted[sorted.length-1]}`
  }

  //List Filtering - 7kyu
  /*In this kata you will create a function that takes a list of non-negative integers 
  * and strings and returns a new list with the strings filtered out. */
  const filter_list = l => l.filter((elem) => Number.isInteger(elem));