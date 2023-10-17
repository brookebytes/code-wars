//Compare Strings by Sum of Chars - 7kyu

function compare(s1, s2) {
  let sums = [...arguments].map(arg => {

    if (arg && arg.length>0) {
      arg = arg.toUpperCase().split("");

      if (arg.every(char => "ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(char) )) {
        return arg.reduce((acc,cur) => acc + cur.charCodeAt(0),0);
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  });

  return new Set(sums).size==1;

}
