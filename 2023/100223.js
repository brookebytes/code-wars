//Initalize my name - 7kyu
// Your task is to initalize the middle names (if there is any).

function initializeNames(name){
  let nameArr = name.split(" ");
  const numNames = nameArr.length;

  if ( numNames > 2 ) {
    return nameArr.map((name,index) => {
        if (index != 0 && index != numNames-1) {
          return `${name[0]}.`;
        }
        return name;
      }).join(" ");
  }
  return name;
}
