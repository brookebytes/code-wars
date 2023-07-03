//Are they the "same"? - 6kyu
/* Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order. */

function comp(array1, array2){
  if (array1==null || array2==null) {
    return false;
  }
  array1.sort((a,b) => a-b);
  array2.sort((a,b) => a-b);
  return array1.every((num, i)=> num*num === array2[i])
}


//Simple Fun #74: Growing Plant - 7kyu
/* Each day a plant is growing by upSpeed meters. Each night that plant's height decreases by downSpeed meters due to the lack of sun heat. Initially, plant is 0 meters tall. We plant the seed at the beginning of a day. We want to know when the height of the plant will reach a certain level.*/

function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let count = 1;
  let currentHeight = upSpeed;
  while (currentHeight < desiredHeight) {
    currentHeight += upSpeed - downSpeed;
    count++
  }
  return count;
}
