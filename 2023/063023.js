//Color to Grayscale - 7kyu
/* Given a color in 6-digit hexidecimal notation #RRGGBB in upper case, convert it to grayscale #YYYYYY. The answer should be a string representing the color code in 6-digit hexidecimal notation in upper or lower case. */

function rgbToGrayscale(color){ 
  let hex = [];
  color.split("").map((char, i,arr) => {
    if (i%2!=0) {
      hex.push(parseInt((char+arr[i+1]),16))
    }
  });
  let [r,g,b] = hex;
  let y = Math.round(0.299*r+0.587*g+0.114*b).toString(16);
  return y.length>1 ? `#${y.repeat(3)}` : `#${('0'+y).repeat(3)}`;
}
