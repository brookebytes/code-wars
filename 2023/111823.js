//Return a sorted list of objects - 7kyu

function sortList (sortBy, list) {
  return list.sort((a,b) => b[sortBy] - a[sortBy]);
}
