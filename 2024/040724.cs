//Histogram - H1
/* A 6-sided die is rolled a number of times and the results are plotted as a character-based histogram.You will be passed the dice value frequencies, and your task is to write the code to return a string representing a histogram, so that when it is printed it has the same format as the example. */

using System;
public class Dinglemouse
{
  public static string Histogram(int[] results)
  {
    string histogram = "";
    for (int i=results.Length-1; i>=0; i--)
    {
      if (results[i]==0)
        histogram += $"{i+1}|\n";
      else
        histogram += $"{i+1}|{new string('#',results[i])} {results[i]}\n";
    }
    return histogram;
  }
}
