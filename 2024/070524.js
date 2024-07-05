// Convert Hash To An Array - 7kyu

function convertHashToArray(hash){
  return Object.keys(hash).map(key => [key, hash[key]]);
}
