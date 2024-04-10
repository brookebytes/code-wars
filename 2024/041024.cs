//Possibilities Array - 7kyu
/* A non-empty array a of length n is called an array of all possibilities if it contains all numbers between 0 and a.length - 1 (both inclusive).
 * Write a function that accepts an integer array and returns true if the array is an array of all possibilities, else false. */

using System;

public static class Kata
{
  public static bool IsAllPossibilities(int[] arr)
  {
    if (arr.Length < 1)
    {
      return false;
    }
    for (int i=0; i<arr.Length; i++)
    {
      if (Array.IndexOf(arr, i) == -1)
      {
        return false;
      }
    }
    return true;
  }
}
