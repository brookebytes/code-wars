//Multi-tap Keypad Text Entry on an Old Mobile Phone - 6kyu

function presses(phrase) {
  const inputs = ["1", "ABC2", "DEF3", "GHI4", "JKL5", "MNO6", "PQRS7", "TUV8", "WXYZ9", "*", " 0", "#"];
  let chars = phrase.toUpperCase().split("");
  return chars.reduce((acc, cur) => acc + inputs.find(str => str.includes(cur)).indexOf(cur)+1, 0)
}
