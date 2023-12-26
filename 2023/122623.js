//esrever esreveR!

function esrever( str ){
  let finalChar = str[str.length-1] || "";
  return str.slice(0,str.length-1).split("").reverse().join("") + finalChar;
}
