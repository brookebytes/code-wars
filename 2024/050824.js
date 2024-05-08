//Buying a car - 6kyu
/* *A man has a rather old car being worth $2000. He saw a secondhand car being worth $8000. He wants to keep his old car until he can buy the secondhand one.
 * He thinks he can save $1000 each month but the prices of his old car and of the new one decrease of 1.5 percent per month. Furthermore this percent of loss increases of 0.5 percent at the end of every two months. Our man finds it difficult to make all these calculations.
 * How many months will it take him to save up enough money to buy the car he wants, and how much money will he have left over?
 * Note:
 * Selling, buying and saving are normally done at end of month. Calculations are processed at the end of each considered month but if, by chance from the start, the value of the old car is bigger than the value of the new one or equal there is no saving to be made, no need to wait so he can at the beginning of the month buy the new car. We don't take care of a deposit of savings in a bank. 
 * /

function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
  let oldCarPrice = startPriceOld;
  let newCarPrice = startPriceNew;
  let balance = oldCarPrice - newCarPrice;
  let monthsCount = 0;
  let monthlySavings = 0;
  
  while (balance < 0) {
    monthsCount++;
    if (monthsCount % 2 == 0) percentLossByMonth += 0.5;
    
    oldCarPrice -= oldCarPrice * (percentLossByMonth / 100);
    newCarPrice -= newCarPrice * (percentLossByMonth / 100);
    monthlySavings += savingperMonth;
    
    balance = monthlySavings + oldCarPrice - newCarPrice;
  }
  
  return [monthsCount, Math.round(balance)];
}
