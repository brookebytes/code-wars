//Flick Switch - 8kyu

function flickSwitch(arr){
  let bool = true;
  for (i=0; i<arr.length; i++) {
    if (arr[i]=="flick") {
      bool = !bool;
    }
    arr[i]=bool;
  }
  return arr;
}

/*
  arr.map(e => {
    if (e=="flick") {
      bool = !bool;
    }
    return bool;
  });
*/
