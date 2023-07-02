//L1: Bartender, drinks! - 8kyu
// Complete the function that receives as input a string, and produces outputs according to the following table:

function getDrinkByProfession(param){
  const drinks = {"jabroni":"Patron Tequila", "school counselor": "Anything with Alcohol", "programmer": "Hipster Craft Beer",
                 "bike gang member": "Moonshine", "politician": "Your tax dollars","rapper": "Cristal"};
  return drinks[param.toLowerCase()] || 'Beer';

}
