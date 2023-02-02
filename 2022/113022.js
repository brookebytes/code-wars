//No Loops 2 - You only need one - 8 kyu
/*You will be given an array a and a value x. All you need to do is check whether the provided array contains the value, without using a loop.*/

function check(a,x){
  return a.some(value => value===x);
};
