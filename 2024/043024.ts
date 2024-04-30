//Pyramid Array - 6kyu
// Write a function that when given a number >= 0, returns an Arary of ascending length subarrays. Note: the subarrays should be filled with 1s.

export function pyramid(n: number) : Array<Array<Number>> {
  let pyramid: number[][] = [];
  for (let i = 1; i <= n; i++) {
    let arr: number[] = [];
    for (let j = 1; j <= i; j++) {
      arr.push(1);
    }
    pyramid.push(arr);
  }
  return pyramid;
}
