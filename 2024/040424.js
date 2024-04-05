//Which section did you scroll to? - 7kyu

// return an index of section or -1 if past last section
// scrollY is a positive integer and sizes is an array of positive integers
function getSectionIdFromScroll(scrollY,sizes){
  for (i=0; i<sizes.length; i++) {
    if (scrollY <= (sizes[i]-1)) {
      return i;
    } else {
      scrollY-=sizes[i];
    }
  }
  return -1;
}
