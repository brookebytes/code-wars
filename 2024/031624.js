//Simple Fun #181: Rounding - 7kyu
/* Round the given number n to the nearest multiple of m. 
 * If n is exactly in the middle of 2 multiples of m, return n instead. */

function rounding(n, m) {
  return ((n/m)%0.5==0) ? n : Math.round(n/m)*m;
}
