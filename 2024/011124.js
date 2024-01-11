//Numbers to Letters - 7kyu

function switcher(x){
  return x.map(num => "zyxwvutsrqponmlkjihgfedcba!? ".charAt(Number(num)-1)).join("");
}
