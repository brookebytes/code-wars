//Money, Money, Money - 7kyu
/* The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested. Your task is to complete the method provided and return the number of years 'Y' as a whole in order to get the desired sum. */

function calculateYears(principal, interest, tax, desired) {
  let sum = principal;
  let years = 0;
  while (sum < desired) {
    sum = sum-((sum*interest)*tax)+(sum*interest);
    years++;
  }
  return years;
}
