//Hamming Distance - 6kyu
// The Hamming Distance is a measure of similarity between two strings of equal length. Complete the function so that it returns the number of positions where the input strings do not match.
// You can assuume that the two inputs are ASCII strings of equal length.

function hamming(a,b) {
  let count = 0;
  for (i=0; i<=a.length; i++){
	  if (a.charAt(i)!=b.charAt(i)){
		  count++
	  }
  }
  return count;
}
