//Divisible by previous digit? - 7kyu
/* Take a number and check each digit if it is divisible by the digit on its left checked and return an array of booleans.
 * The booleans should always start with false becase there is no digit before the first one. */


function divisibleByLast(n) {
  return n
    .toString()
    .split("")
    .map((e, i, arr)=> Number(e) % arr[i-1] == 0);
}
