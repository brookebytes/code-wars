// Numbers in strings - 7kyu
// In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

function solve(s) {
  let max = 0;
  for (i=0; i<s.length; i++) {
    let num = "";
    while (!"abcdefghijklmnopqrstuvwxyz".includes(s[i]) && i <s.length) {
        num += s[i];
        i++;
    }
    if (num > max) {
      max = Number(num);
    }
  };
  return max;
};
