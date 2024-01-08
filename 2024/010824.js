//Return the Missing Element - 7kyu

function getMissingElement(superImportantArray){
  const sequence = [0,1,2,3,4,5,6,7,8,9];
  return sequence.filter(num => !superImportantArray.includes(num))[0];
}
