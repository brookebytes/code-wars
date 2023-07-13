//Bouncing Balls - 6kyu
// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

function bouncingBall(h,  bounce,  window) {
  let count = 1;
  if (h<=0 || bounce <=0 || bounce >=1 || window>=h) {
    return -1;
  }
  while ((h*bounce)>window) {
    count+=2;
    h = h*bounce;
  }
  return count;
}
