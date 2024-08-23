// Number to digit tiers - 7kyu

function createArrayOfTiers(num) {
  let digits = num.toString().split("");
  let arr = [];
  for (i=0; i<digits.length; i++) {
    let str = "";
    for (j=0; j<=i; j++) {
      str += digits[j];
    }
    arr.push(str);
  }
  return arr;
}
