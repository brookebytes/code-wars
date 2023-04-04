//You Got Change - 7kyu
/*Create a function that will take any amount of money and break it down to the smallest number of bills as possible. Only integer amounts will be input, NO floats. This function should output a sequence, where each element in the array represents the amount of a certain bill type.*/

function giveChange(amount) {
  let arr = [0,0,0,0,0,0];
  while (amount-100>=0){
    arr[5]++;
    amount-=100;
  }
  while (amount-50>=0){
    arr[4]++;
    amount-=50
  }
  while (amount-20>=0){
    arr[3]++;
    amount-=20;
  }
  while(amount-10>=0){
    arr[2]++;
    amount-=10;
  }
  while(amount-5>=0){
    arr[1]++;
    amount-=5;
  }
  while(amount-1>=0){
    arr[0]++;
    amount-=1;
  }
  return arr;
}
