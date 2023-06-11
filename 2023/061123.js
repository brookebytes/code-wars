//Lost number in number sequence - 7kyu
/* An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.*/

function findDeletedNumber(arr, mixArr) {
  return arr.filter(e => !mixArr.includes(e))[0] || 0;
}
