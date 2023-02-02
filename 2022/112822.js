//Power - 8kyu
/*The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).*/

function numberToPower(number, power){
  let result = number;
  if (power > 1) {
    for (i=2; i<=power; i++) {
      result *= number;
    };
    return result;
    }
  else return power === 0 ? 1 : number;
}
