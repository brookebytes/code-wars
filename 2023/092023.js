//Who is going to pay for the wall? - 8kyu

function whoIsPaying(name){
  return name.length > 2 ? [name, name.slice(0,2)] : [name];
}
