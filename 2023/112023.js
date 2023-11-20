//Numbers with this digit inside - 7kyu

function numbersWithDigitInside(x, d) {
  let digits = [];
  for (i=1; i<=x; i++) {
    if (String(i).includes(d)) {
      digits.push(i);
    }
  }
  return [digits.length, digits.reduce((acc,cur) => acc+cur, 0), digits[0] ? digits.reduce((acc,cur) => acc*cur, 1) : 0];
}


  /*
  let count = 0;
  let sum = 0;
  let product = 1;
  
  for (i=1; i<=x; i++) {
    if (String(i).includes(d)) {
      count++;
      sum += i;
      product *= i;
    }
  }
  if (count == 0) {
    product = 0;
  }
  return [count, sum, product];
  */
