//Santa's Naughty List - 7kyu
/* Go through a list of children, and return a list containing every child who appeared on Santa's list. Do not add any child more than once. Output should be sorted. Comparison should be case sensitive. */

function findChildren(santasList, children) {
  return  [...new Set(children)].filter((name) => santasList.includes(name)).sort();
}
