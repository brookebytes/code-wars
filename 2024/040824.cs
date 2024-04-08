//Sum Arrays - 8kyu

public class Kata
{
  public static double SumArray(double[] array)
  {
    double sum = 0;
    foreach(double num in array)
    {
      sum += num;
    }
    return sum;
  }
}
