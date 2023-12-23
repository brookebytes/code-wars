//Calculate mean and concatenate string - 7kyu

function mean(lst){
  return [ lst.filter(char => "0123456789".includes(char)).map(char => Number(char)).reduce((acc, cur) => acc+cur, 0)/10,
          lst.filter(char => !"01234567890".includes(char)).join("")];
}
