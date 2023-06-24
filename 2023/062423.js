//Get the Middle Character - 7kyu
//

function getMiddle(s) {
  const middle = Math.abs(s.length/2);
  return s.length%2==0 ? s.substring(middle-1,middle+1) : s.substring(middle,middle+1);
}
