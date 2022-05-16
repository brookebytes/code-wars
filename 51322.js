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

//Odd or Even? Determine that! - 7kyu
//Given a number N, determine if the sum of N consecutive numbers is odd or even.
function oddOrEven(n) {
  if (n===0){
    return 'Even';
  }
  else if (n%2==0){
    if ((n/2)%2===0){
      return 'Even';
    }
  else {
    return 'Odd';
    }
  }
  else { 
    return 'Either';
  }
}
//test cases
oddOrEven(1) //either
oddOrEven(6) //odd
oddOrEven(8) //even

//Simple string characters - 7kyu
//your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters
function solve(s){
  let upperCaseCount = s.match(/[A-Z]/g)!=null ?  s.match(/[A-Z]/g).length : 0;
  let lowerCaseCount = s.match(/[a-z]/g)!=null ? s.match(/[a-z]/g).length : 0;
  let numbersCount= s.match(/[0-9]/g)!=null ? s.match(/[0-9]/g).length : 0;
  let charCount = s.match(/[`"{}\[\]\>\<\=\+\*.:;'_^%$#!?&()~@,-\/\\/]/g)!=null ? s.match(/[`"{}\[\]\>\<\=\+\*.:;'_^%$#!?&()~@,-\/\\/]/g) : 0;
  return [upperCaseCount,lowerCaseCount,numbersCount,charCount.length];
}

//test cases
solve("Codewars@codewars123.com");//[1,18,3,2]
solve("bgA5<1d-tOwUZTS8yQ");//[7,6,3,2]
solve("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H");//[9,9,6,9]
