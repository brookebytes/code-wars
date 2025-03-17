// Interlocking Binary Pairs - 7kyu
// Write a function that checks if two non-negative integers make an "interlocking binary pair".

function interlockable(a, b) {
  a = a.toString(2);
  b = b.toString(2);
  if (a.length != b.length) {
    a.length > b.length ? a = a.slice(a.length-b.length) : b = b.slice(b.length-a.length);
  }
  for (i=0; i<a.length; i++) {
    if (a[i] == "1" && b[i]==1) {
      return false;
    }
  }
  return true;
}
