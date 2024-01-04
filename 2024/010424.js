//Ordered Count of Characters - 7kyu

const orderedCount = function (text) {
  let counted = {};
  text.split("").map(char => counted[char] ? counted[char]+=1 : counted[char]=1);
  return Object.entries(counted).sort((a,b) => text.indexOf(a[0])-text.indexOf(b[0]));
}

