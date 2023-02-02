//Incrementer - 7kyu
//Given an input of an array of digits, return the array with each digit incremented by its position in the array.
const incrementer = nums => nums.map((num, i) => parseInt((num+i+1).toString().slice(-1)));

//Perfect squares, percect fun - 7kyu
//Given an integer, if the length of it's digits is a perfect square, return a square block of sqroot(length) * sqroot(length). 
//If not, simply return "Not a perfect square!".
function squareIt(int) {
    let digits = int.toString().split("");
    let sqrt = Math.sqrt(digits.length);
    if (Number.isInteger(sqrt)){
      let result = `${int.toString().substr(0,sqrt)}`;
      if (sqrt > 1){
          for (i=sqrt; i<sqrt*sqrt; i+=sqrt){
            result += `\n${int.toString().substr(i,sqrt)}`     
          }    
        }
        return result;
      }
    return 'Not a perfect square!';
  }

//Mumbling - 7kyu
function accum(s) {
    let str = s.substring(0,1).toUpperCase();
    return mumble = s.split("").map((letter, index) => letter.substring(0,1).toUpperCase()+letter.repeat(index).toLowerCase()).join("-");
}

//Jaden Casing Strings - 7kyu
//For simplicity, you'll have to capitalize each word
String.prototype.toJadenCase = function () {
    return this.split(" ").map((word) => word.charAt(0).toUpperCase() + word.substring(1,word.length)).join(" ");
};

//Return the closest number multiple of 10
//Given a number return the closest number to it that is divisible by 10.
const closestMultiple10 = num => Math.round(Math.round(num/10)*10);

