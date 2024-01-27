//First-Class Function Factory - 7kyu

function factory(x){
  return arr => arr.map(num => num*x);
}
