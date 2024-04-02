//Fast cooking pancakes - 7kyu
// What is the minimum time you need to cook n pancakes, if you can put on the frying pan only m pancakes at a time and each pancake needs to fry one minute on each side? n and m are positive integers between 1 and 1000.

function cookPancakes(n, m) {
  return m>=n ? 2 : Math.ceil((n*2)/m);
}
