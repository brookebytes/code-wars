// Bear the Freelancer - 7kyu


function bearDollars(arr) {
  const rates = {"close friend": 25, "friend": 50, "acquaintance": 100, "constructor": 125};
  return arr.reduce((acc, [x, y]) => rates[y.toLowerCase()] ? acc+(rates[y.toLowerCase()]*x) : acc+(125*x), 0);
}
