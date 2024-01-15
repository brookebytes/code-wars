//esreveR - 7kyu

reverse = function(array) {
  const reversedArray = [];
  array.forEach(e => reversedArray.unshift(e));
  return reversedArray;
}
