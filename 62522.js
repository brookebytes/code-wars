//Sorted? yes? no? how? - 7kyu

function isSortedAndHow(array) {
  let ascending = [...array].sort((a,b) => a-b);
  let descending = [...array].sort((a,b) => b-a);
  
  if (array.every((x, i) => x==ascending[i])) {
    return 'yes, ascending';
  } else if (array.every((x,i) => x==descending[i])) {
    return 'yes, descending';
  } 
  return 'no';
}
