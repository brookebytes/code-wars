//From A to Z - 7kyu
/* Given a string indicating a range of letters, return a string which includes all the letters in that range, including the last letter. Note that if the range is given in capital letters, return the string in capitals also! A hyphen will separate the two letters in the string. */

using System;

public class Kata
 {
    public static string GimmeTheLetters(string sp)
    {
      string alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      int startIndex = alphabet.IndexOf(sp[0]);
      int endIndex = alphabet.IndexOf(sp[2]);
      return alphabet.Substring(startIndex,(endIndex-startIndex+1));
    }
 }
