//All unique - 7kyu

function hasUniqueChars(str) {
  return str.split("").every((e, i, arr) => arr.indexOf(e)==arr.lastIndexOf(e));
}
