//For Twins: 1. Types - 8kyu
/*Write a function that will accept two parameters: variable and type and check if type of variable is matching type. Return true if types match or false if not.*/

function typeValidation(variable, type) {
  return typeof variable === type;
}

//Get Planet Name By ID - 8kyu
//Debug the function --- The function is not returning the correct values. Can you figure out why?

function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury'
      break;
    case 2:
      name = 'Venus'
      break;
    case 3:
      name = 'Earth'
      break;
    case 4:
      name = 'Mars'
      break;
    case 5:
      name = 'Jupiter'
      break;
    case 6:
      name = 'Saturn'
      break;
    case 7:
      name = 'Uranus'
      break;
    case 8:
      name = 'Neptune'
      break;
  }

  return name;
}
