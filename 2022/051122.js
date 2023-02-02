//Reverse List Order kata
//create a function that takes a list and returns a list with the reverse order

const reverseList = list => list.reverse();

//test cases
console.log(reverseList([1,2,3,4]));
console.log(reverseList([3,1,5,4]));
console.log([1]);

//Reversed sequence
//Build a function that returns an array of integers from n to 1 where n>0.
const reverseSeq = n => {
    let arr = [];
    for (i=n; i>0; i--){
      arr.push(i);  
    }
    return arr;
  };
  
//test 
console.log(reverseSeq(5));