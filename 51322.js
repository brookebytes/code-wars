//What is between - 8kyu
//Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
function between(a, b) {
  let arr = [];
  for (i=a; i<=b; i++){
    arr.push(i);
  }
  return arr;
}
//test cases
between(1, 4)
between(-2, 2)
between(-10, 10)
between(5, 100)
between(15, 31)
between(12, 49)
between(96, 101)

//Find the vowels - 7kyu
//We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).
//So given a string "super", we should return a list of [2, 4].
function vowelIndices(word){
  let indexes = [];
  let pattern = /(a|e|i|o|u|y)/ig;
  findVowels = pattern.exec(word);
  while(findVowels != null){
    indexes.push(findVowels.index+1);
    findVowels = pattern.exec(word);
  }
  return indexes;
}
