//Is this my tail? - 8kyu
//correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body)

function correctTail(bod, tail) {
  sub = bod.substr(bod.length-(tail.length));
  if (sub == tail) {
    return true
  }
  else {
    return false 
  }
}
  

/*condensed solution*/
/*
function correctTail(bod, tail) {
  return bod.substr(bod.length-(tail.length)) == tail ? true : false;
}
*/
