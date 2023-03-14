//Training JS #7: if..else and ternary operator - 8kyu
/*Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.*/

function saleHotdogs(n){
  if (n < 5) {
    return 100*n;
  } else if (n>=5 && n<10){
    return 95*n;
  } else {
    return 90*n;
  }
}
