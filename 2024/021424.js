//Reverse or rotate - 6kyu`

function revrot(str, sz) {
  let arr = str.split("");
  let result = [];
  if (sz <=0 || !str || sz > str.length) {
    return "";
  }
  for (i=0; i<arr.length; i+=sz) {
    let chunk = arr.slice(i,i+sz);
    if (chunk.length<sz) {
      return result.join("");
    } else if (chunk.reduce((acc, cur) => acc+(cur*cur*cur), 0)%2==0) {
      chunk = chunk.reverse().join("");
    } else {
      chunk = chunk.slice(1).concat(chunk[0]).join("");
    }
    result.push(chunk);
  }
  return result.join("");
}
