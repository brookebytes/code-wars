//Buying a car - 6kyu
/* */

function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
  let savings = startPriceOld;
  let oldCarPrice = startPriceOld;
  let newCarPrice = startPriceNew;
  let monthlySavings = 0;
  let monthsCount = 0;

  while (savings < newCarPrice) {
    monthsCount++;
    if (monthsCount%2==0) percentLossByMonth += 0.5;

    oldCarPrice = oldCarPrice * (1 - (percentLossByMonth / 100));
    monthlySavings += savingperMonth;
    savings = monthlySavings + oldCarPrice;
    newCarPrice = newCarPrice * (1-(percentLossByMonth / 100));
  }

  return [monthsCount, Math.round(savings-newCarPrice)];
}
