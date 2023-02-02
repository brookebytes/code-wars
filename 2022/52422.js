//Sum of Minimums! - 7kyu
/* Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, 
* your task is to find the sum of the minimum values in each row.*/
const sumOfMinimums = arr => arr.reduce((acc,x) => acc+=x.sort((a,b) => a-b)[0], 0);

//Returning Strings - 8kyu
/*Make a function that will return a greeting statement that uses an input; 
 * your program should return, "Hello, <name> how are you doing today?".*/
const greet = name => `Hello, ${name} how are you doing today?`;

//Calculate BMI - 8kyu
//Write function bmi that calculates body mass index (bmi = weight / height2).
function bmi(weight, height) {
  let bmi = weight/(height*height);
  if (bmi<=18.5) return 'Underweight';
  else if (bmi<=25.0) return 'Normal';
  else if (bmi<=30.0) return 'Overweight';
  else return 'Obese';
}

//Check same case
/*Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0*/
function sameCase(a, b){
  if (/[A-Za-z]/.test(a) && /[A-Za-z]/.test(b)){
    return /[a-z]/.test(a)&&/[a-z]/.test(b) || /[A-Z]/.test(a)&&/[A-Z]/.test(b) ? 1 : 0;
  }
  return -1
}
