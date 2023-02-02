//Fizz Buzz - 7kyu
/*Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.*/

function fizzbuzz(n) {
  let arr = [];
  for (i=1; i<=n; i++){
    if (i%3===0 && i%5===0){
      arr.push('FizzBuzz');
    }
    else if (i%5===0){
      arr.push('Buzz');
    }
    else if (i%3===0){
      arr.push('Fizz');
    }
    else {
      arr.push(i);
    }
  }
  return arr;
}



//You only need one - Beginner - 8kyu
//Check whether the provided array contains the value

const check = (a,x) => a.includes(x);
