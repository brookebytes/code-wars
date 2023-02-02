//Difference of Volumes of Cuboids - 8kyu
/* Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.*/

function findDifference(a, b) {
  return Math.abs(a.reduce((acc, curVal) => acc*curVal)-b.reduce((acc,curVal)=> acc*curVal));}
